export default class Adapter {
  constructor(backendData) {
    this._offer = {
      id: (backendData.id).toString(),
      city: backendData.city.name,
      images: backendData.images,
      previewImage: backendData.preview_image,
      name: backendData.title,
      isMarked: backendData.is_premium,
      isBookmarked: backendData.is_favorite,
      rating: backendData.rating,
      type: backendData.type,
      bedrooms: backendData.bedrooms,
      adults: backendData.max_adults,
      price: backendData.price,
      insideItems: backendData.goods,
      host: {
        id: backendData.host.id,
        avatar: backendData.host.avatar_url,
        isPro: backendData.host.is_pro,
        userName: backendData.host.name,
      },
      description: [backendData.description],
      coords: [backendData.location.latitude, backendData.location.longitude],
      zoom: backendData.location.zoom,
    };
  }

  static convertOffer(backendData) {
    return new Adapter(backendData)._offer;
  }

  static convertOffers(backendData) {
    return backendData.map(Adapter.convertOffer);
  }

  static selectCities(backendData) {
    return backendData.reduce((cities, data) => {
      const isBackendDataCityInCities = cities.length ?
        cities.map((item) => item.name)
          .includes(data.city.name)
        : false;

      if (!isBackendDataCityInCities) {
        cities.push({
          name: data.city.name,
          location: [data.city.location.latitude, data.city.location.longitude],
          zoom: data.city.location.zoom,
        });
      }
      return cities;
    }, []);
  }
}
