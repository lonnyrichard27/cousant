<template>
  <div>
    <table id="customers">
  <tr>
    <th>Project Name</th>
    <th>Developer</th>
    <th>Main Contractor</th>
    <th>Area</th>
    <th>State</th>
    <th>Status</th>
    <th>Sector</th>
  </tr>
  <tr v-for="project in allProjects" :key="project.id">
    <td>{{ project.project_name }}</td>
    <td>{{ project.developer }}</td>
    <td>{{ project.main_contractor }}</td>
    <td>{{ project.lga }}</td>
    <td>{{ project.state }}</td>
    <td><span class="badge">{{ project.status }}</span></td>
    <td>{{ project.sector }}</td>
  </tr>
</table>
  </div>
</template>

<script>
export default {
  async mounted(){
    const response = await this.$store.dispatch('fetchProjects', this.data)
    console.log(response);
  },
  computed:{
    allProjects(){
      return this.$store.state.projects
    }
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');

#customers {
  font-family: 'Questrial', sans-serif;
  font-size: 19px;

font-weight: bold;
  border-collapse: collapse;
  width: 100%;
}
.badge{
  background-color: #DFB97E;
  color: #88621E;
  padding: 5px;
  border-radius: 5px
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #FFFEFF;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #28394B;
  color: white;
}
</style>
