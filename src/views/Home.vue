<template>
  <div>
    <section class="hero is-cover is-relative is-fullheight-with-navbar is-primary">
        <div class="hero-body">
            <div class="container">
                <h1 class="title is-1">Lorem Ipsum</h1>
                <h2 class="subtitle is-3">Dolor sit amet</h2>
            </div>
        </div>
    </section>
    <section class="section">
		<div class="container is-fluid">
			<div class="columns is-multiline">
				<div class="column is-one-third" v-for="(project, idx) in projects" :key="idx">
					<project-card v-bind="project"></project-card>
				</div>
			</div>
		</div>
	</section>
  </div>
</template>

<script>
    import ProjectsService from '@/services/ProjectsService'
    import ProjectCard from '@/components/ProjectCard'
    export default {
        name: "home",
        components: {
            ProjectCard
        },
        data() {
            return{
                airtableResponse: []
            }
        },
        mounted: function () {
            let self = this
            async function getProjects() {
                try{
                    const response = await ProjectsService.getProjects()
                    console.log(response)
                    self.airtableResponse = response.data.records

                } catch(err) {
                    console.log(err)
                }
            }
            getProjects()
        },
        computed: {
            projects(){
                let self = this
                let projectList = []
                for (var i = 0; i < self.airtableResponse.length; i++) {
                    if (self.airtableResponse[i].fields.Published){
                        let project = {
                            title: self.airtableResponse[i].fields.Title,
                            snippet: self.airtableResponse[i].fields.Body,
                            image: self.airtableResponse[i].fields.Image[0].url,
                            date: self.airtableResponse[i].fields["Last Release"],
                            tags: self.airtableResponse[i].fields.Tags.toString(),
                            link: self.airtableResponse[i].fields.Link
                        }
                        projectList.push(project)
                    }
                }
                return projectList
            }
        }
    };
</script>
