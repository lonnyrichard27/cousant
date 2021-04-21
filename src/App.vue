<template>
  <div>
    <table id="customers">
      <tr>
        <th class="box">Project Name</th>
        <th>Developer</th>
        <th>Main Contractor</th>
        <th>Area</th>
        <th>State</th>
        <th class="width">Status <i class="fas fa-sort-down"></i></th>
        <th>Sector</th>
      </tr>

      <tr v-for="project in allProjects" :key="project.id">
        <td>{{ project.project_name }}</td>
        <td>{{ project.developer }}</td>
        <td>{{ project.main_contractor }}</td>
        <td>{{ project.lga }}</td>
        <td>{{ project.state }}</td>
        <td class="status">
          <span class="badge">{{ project.status }}</span>
        </td>
        <td>{{ project.sector }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  async mounted() {
   await this.$store.dispatch("fetchProjects", this.data);
  },
  computed: {
    allProjects() {
      return this.$store.state.projects;
    },
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Questrial&display=swap");
$badge-color : #A27C3D;
$background-color:#28394b;

#customers {
  font-family: "Questrial", sans-serif;
  font-size: 17px;
  font-weight: bold;
  border-collapse: collapse;
  width: 100%;

  .badge {
    background-color: #FEDFB0;
    color: $badge-color ;
    padding: 7px;
    border-radius: 3px;
  }
  .fas.fa-sort-down{
    margin-left: 2rem;
  }
    // box-shadow:-5px 0 5px -5px #e8e9eB;

  // 
  td:nth-child(1){
    box-shadow:8px 2px 7px 0px #f3f3f5;
    color: #626F79;
    font-weight: bold;
  }
  td.status {
    width: 14%;
  }
  .box{
    box-shadow:10px -1px 5px -3px #263747;
  }

  tr:nth-child(1) {
    background-color: $background-color;
  }
  th {
   padding:27px;
    text-align: left;
    color: white;
  }
  tr:nth-child(even) {
    background-color: #F6FAFD;
  }
  td {
    padding: 20px;
    color: #8C939A;
  }
}
</style>
