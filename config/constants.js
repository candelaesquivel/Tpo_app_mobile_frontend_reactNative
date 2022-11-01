import I18n from "../assets/localization/I18n";

export default  {
  ROLES : {
    USER_ROLE : 'user',
    OWNER_ROLE : 'owner'
  },

  FOOD_TYPES : [
    { label: 'Mexicana', value: '1' },
    { label: 'Vegetariana', value: '2' },
    { label: 'Argentina', value: '3' },
    { label: 'Vegana', value: '4' },
    { label: 'China', value: '5' },
  ],

  PRICE_RANGES : [
    { label: '$', value: '1' },
    { label: '$$', value: '2' },
    { label: '$$$', value: '3' },
    { label: '$$$$', value: '4' },
  ],
  
  SCREEN_TITLES : {
    HOME : I18n.t('homeTitle'),
    PROFILE_USER : I18n.t('profileUserTitle'),
    RESTAURANT_MENU : I18n.t('menuRestaurantTitle'),
    FAVORITES_RESTAURANTS : I18n.t('favoritesTitle'),
    MY_RESTAURANTS : I18n.t('myRestaurantsTitle'),
    LOGIN : I18n.t('logInTitle'),
    CREATE_ACCOUNT : I18n.t('createAccountTitle'),
    DELETE_ACCOUNT: I18n.t('deleteAccountTitle'),
    RECOVER_PASS : I18n.t('recoverPassTitle'),
    EMAIL_SENT : I18n.t('emailSentTitle'),
    INFO_RESTAURANT : I18n.t('infoRestaurantTitle'),
    DISH_INFO : I18n.t('infoDishTitle'),
    ADD_DISH : I18n.t('addDishTitle'),
    RESTAURANT_PROFILE : I18n.t('restaurantProfileTitle'),
    SENT_COMMENT : I18n.t('sentCommentTitle'),
    CREATE_RESTAURANT : I18n.t('createRestaurantTitle'),
    FILTERS : I18n.t('filtersTitle'),
  },

  SCREEN_TEXTS : {
    NOT_FAVORITES : I18n.t('emptyFavorites'),
  }
}