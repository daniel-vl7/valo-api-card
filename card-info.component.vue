<template>
  <div class="cards-card">
    <div class="card-header">
      <h2 class="title">{{ data.displayName }}</h2>
    </div>
    <div class="card-content">
      <div class="image-container">
        <img :src="data.largeArt" alt="Card Image" />
      </div>
      <div class="info">
        <p><strong>UUID:</strong> {{ data.uuid }}</p>
        <p><strong>Is Hidden If Not Owned:</strong> {{ data.isHiddenIfNotOwned }}</p>
        <p><strong>Theme UUID:</strong> {{ data.themeUuid }}</p>
        <p><strong>Asset Path:</strong> {{ data.assetPath }}</p>
      </div>
      <div class="image-row">
        <div class="image-item">
          <p><strong>Display Icon:</strong></p>
          <img :src="data.displayIcon" alt="Icon Image" />
        </div>
        <div class="image-item">
          <p><strong>Wide Art:</strong></p>
          <img :src="data.wideArt" alt="Wide Image" />
        </div>
        <div class="image-item">
          <p><strong>Small Art:</strong></p>
          <img :src="data.smallArt" alt="Small Image" />
        </div>
      </div>
    </div>
    <div class="card-footer">
    </div>
  </div>
</template>

<script>
import API from "@/cards/service/card-api.service.js";

export default {
  data() {
    return {
      data: {},
    };
  },
  async created() {
    try {
      const cardInfo = await API.getCardInfo();
      this.data = cardInfo.data;
    } catch (error) {
      console.error('Error fetching card data:', error);
    }
  },
};
</script>

<style scoped>
.cards-card {
  margin: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  background-color: #9fc0de;
  font-family: 'Poppins', sans-serif;
}

.card-header {
  background-color: #003F7D;
  color: #fff;
  padding: 16px;
  text-align: center;
}

.title {
  text-transform: uppercase;
  margin: 0;
  font-size: 1.5rem;
}

.card-content {
  padding: 16px;
  text-align: center;
}

.image-container {
  max-width: 100%;
  margin: 0 auto;
}

.image-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  margin-bottom: 16px;
}

.info {
  text-align: center;
}

.info p {
  margin: 8px 0;
}

.image-row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.image-item {
  text-align: center;
  flex: 1;
  max-width: calc(33.33% - 16px);
  margin-right: 16px;
  margin-bottom: 16px;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .image-item {
    max-width: calc(50% - 16px);
  }
}

</style>
