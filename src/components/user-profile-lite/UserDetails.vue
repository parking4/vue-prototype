<template>
  <d-card class="card-small mb-4 pt-3">

    <!-- Card Header -->
    <d-card-header class="border-bottom text-center">

      <!-- User Avatar -->
      <div class="mb-3 mx-auto">
        <img class="rounded-circle" :src="userDetails.avatar" :alt="userDetails.name" width="110">
      </div>

      <!-- User Name -->
      <h4 class="mb-0">{{ userDetails.name }}</h4>

      <!-- User Job Title -->
      <span class="text-muted d-block mb-2">{{ userDetails.jobTitle }}</span>

      <!-- User Follow -->
      <d-button pill outline size="sm" class="mb-2"> <i class="material-icons mr-1">person_add</i> Follow</d-button>

    </d-card-header>

    <d-list-group flush>

      <!-- User Meta -->
      <d-list-group-item>
        <strong class="text-muted d-block mb-2">{{ userDetails.metaTitle }}</strong>
        <span>{{ userDetails.metaValue }}</span>
      </d-list-group-item>
    </d-list-group>

  </d-card>
</template>

<script>
const defaultUserDetails = {
  name: 'Francis Hackenberger',
  avatar: require('@/assets/images/avatars/francis.jpg'),
  jobTitle: 'Software Engineer',
  performanceReportTitle: 'Workload',
  performanceReportValue: 74,
  metaTitle: 'Description',
  metaValue: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?',
};

export default {
  name: 'user-details',
  props: {
    /**
       * The user details.
       */
    userDetails: {
      type: Object,
      default() {
        return defaultUserDetails;
      },
    },
  },
};
</script>
