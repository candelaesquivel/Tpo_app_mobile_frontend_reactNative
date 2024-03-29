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
    TOKEN : I18n.t('tokenScreen')
  },

  SCREEN_TEXTS : {
    RECOVER_PASS_LABEL : I18n.t('recoverPassword'),
    APP_NAME : I18n.t('appName'),
    CREATE_LABEL : I18n.t('create'),
    NOT_FAVORITES : I18n.t('emptyFavorites'),
    NOT_RESTAURANTS : I18n.t('emptyRestaurants'),
    NOT_DISHES : I18n.t('emptyDishes'),
    NAME_LABEL : I18n.t('name'),
    PRICE_LABEL : I18n.t('price'),
    VEGAN_LABEL : I18n.t('vegan'),
    CELIAC_LABEL : I18n.t('celiac'),
    MENU_LABEL : I18n.t('menu'),
    CHOOSE_LABEL : I18n.t('choose'),
    ADD_NEW_CATEGORY_LABEL : I18n.t('addNewCategory'),
    INGREDIENTS_LABEL : I18n.t('ingredients'),
    CREATE_ACCOUNT_LABEL : I18n.t('createAccount'),
    SAVE_LABEL : I18n.t('save'),
    EMAIL_INPUT_LABEL : I18n.t('emailInput'),
    PASS_INPUT_LABEL : I18n.t('passInput'),
    VALID_PASS_INPUT_LABEL : I18n.t('validPassInput'),
    DISCOUNT_LABEL : I18n.t('discount'),
    CATEGORY_LABEL : I18n.t('category'),
    RESTAURANT_CREATED_MSG : I18n.t(''),
    DISH_CREATED_MSG : I18n.t('dishCreated'),
    DISH_UPDATED_MSG : I18n.t('dishUpdated'),
    YES : I18n.t('yes'),
    NO : I18n.t('no'),
    PRICE_SYMBOL : I18n.t('priceSymbol'),
    USER_DATA_UPDATED : I18n.t('userDataUpdated'),
    ADDRESS_LABEL : I18n.t('address'),
    NEIGHBORHOOD_LABEL : I18n.t('neighborhood'),
    LOCATION_LABEL : I18n.t('location'),
    MAP_LABEL : I18n.t('map'),
    ZIP_CODE_LABEL : I18n.t('zipCode'),
    HOUR_LABEL : I18n.t('hour'),
    OPEN_LABEL : I18n.t('open'),
    MAP_LABEL : I18n.t('map'),
    OPEN_HOUR_LABEL : I18n.t('opening'),
    DELETE_RESTAURANT_LABEL : I18n.t('deleteRestaurant'),
    DELETE_RESTAURANT_CONFIRM_MSG : I18n.t('confirmRestaurantDelete'),
    COMMENT_LABEL : I18n.t('comments'),
    CLOSE_HOUR_LABEL : I18n.t('closing'),
    CLEAR_FILTERS_LABEL : I18n.t('clearFiltersLabel'),
    CLOSE_LABEL : I18n.t('close'),
    ACCOUNT_CREATED : I18n.t('accountCreated'),
    ACCOUNT_DELETED : I18n.t('accountDeleted'),
    LOGOUT_LABEL : I18n.t('logout'),
    LOGIN_LABEL : I18n.t('loginLabel'),
    DELETE_ACOOUNT_LABEL : I18n.t('deleteAccount'),
    DELETE_ACCOUNT_INTRO_MSG : I18n.t('messageDeleteAccount'),
    DELETE_LABEL : I18n.t('delete'),
    DANGER_LABEL : I18n.t('danger'),
    CANCEL_LABEL : I18n.t('cancel'),
    DELETE_DISH_LABEL : I18n.t('deleteDish'),
    DELETE_DISH_CONFIRM_MSG : I18n.t('confirmDishDelete'),
    EMAIL_SENT_MSG : I18n.t('messageEmailSent'),
    FORGOT_PASSWORD_LABEL:  I18n.t('forgotPassword'),
    SENT_LABEL : I18n.t('sent'),
    RATING_LABEL : I18n.t('calification'),
    ADD_PICTURE_LABEL : I18n.t('addPicture'),
    FOOD_TYPE_LABEL : I18n.t('foodType'),
    DISTANCE_UNIT_LABEL : I18n.t('distanceUnit'),
    FILTER_MSG_INTRO : I18n.t('filterMessageIntro'),
    USER_LABEL : I18n.t('user'),
    OWNER_LABEL : I18n.t('owner'),
    SENT_COMMENT_LABEL : I18n.t('sentCommentLabel'),
    SHARE_LABEL : I18n.t('shareSocial'),
    UNSTYLED_LABEL : I18n.t('unStyled'),
    COOLGRAY_LABEL : I18n.t('coolGray'),
    CLOSE : I18n.t('close'),
    TYPE_FOOD : I18n.t('typeFood'),
    SEARCH : I18n.t('search'),
    CLOSE_REST : I18n.t('closeRest'),



    PRICE_RANGE_LOW : I18n.t('$'),
    PRINCE_RANGE_MID : I18n.t('$$'),
    PRICE_RANGE_HIGH : I18n.t('$$$'),
    PRICE_RANGE_ULTRA_HIGH : I18n.t('$$$$'),

    MONDAY_LETTER : I18n.t('mondayLetter'),
    TUESDAY_LETTER : I18n.t('tuesdayLetter'),
    WEDNESDAY_LETTER : I18n.t('wednesdayLetter'),
    THURSDAY_LETTER : I18n.t('thursdayLetter'),
    FRIDAY_LETTER : I18n.t('fridayLetter'),
    SATURDAY_LETTER : I18n.t('saturdayLetter'),
    SUNDAY_LETTER : I18n.t('sundayLetter'),

    TOKEN_INPUT : I18n.t('TokenInput'),
    TOKEN_PASSWORD : I18n.t('TokenpassInput'),
    TOKEN_BUTTON : I18n.t('send'),
  },

  ERROR_MSGS : {
    ERROR_NAME_SHORT :I18n.t('nameShort'),
    ERROR_NAME_LONG :I18n.t('nameLong'),

    EMAIL_REQUIRED : I18n.t('emailRequired'),
    EMAIL_INVALID : I18n.t('emailInvalid'),
    PASSWORD_NOT_MATCH : I18n.t('passwordMatch'),
    PASSWORD_REQUIRED : I18n.t('passwordRequired'),
    PASSWORD_LENGTH : I18n.t('passwordLength'),

    DISH_NAME_REQUIRED : I18n.t('dishNameRequired'),
    DISH_PRICE_REQUIRED : I18n.t('dishPriceRequired'),
    DISH_INGREDIENTS_REQUIRED : I18n.t('dishIngredientsRequired'),
    DISH_CATEGORY_REQUIRED : I18n.t('dishCategoryRequired'),

    USER_NAME_REQUIRED :  I18n.t('userNameRequired'),


    REVIEW_TEXT_REQUIRED : I18n.t('reviewTextRequired'),
    REVIEW_TEXT_MIN_LENGTH : I18n.t('reviewTextLengthMin'),

    RESTO_NAME_REQUIRED: I18n.t('restaurantNameRequired'),
    RESTO_FOOD_TYPE_REQUIRED : I18n.t('restaurantFoodTypeRequired'),
    RESTO_PRICE_TYPE_REQUIRED : I18n.t('restaurantPriceTypeRequired'),

     // Messages backend
     INTERNET_ERROR : I18n.t('internetError'),
     SERVER_ERROR : I18n.t('serverError'),
     
     //Auth
     REGISTER_ACCOUNT :  I18n.t('registerAccount'),
     REGISTER_ACCOUNT_ERROR :  I18n.t('registerAccountError'),

     LOGIN_ACCOUNT :  I18n.t('loginMessage'),
     LOGIN_ACCOUNT_ERROR :  I18n.t('loginError'),
     LOGIN_ACCOUNT :  I18n.t('registerAccount'),

     LOGOUT_ACCOUNT :  I18n.t('logOutMessage'),
     LOGOUT_ACCOUNT_ERROR :  I18n.t('logOutError'),

     DELETE_ACCOUNT :  I18n.t('deleteAccountMsj'),
     DELETE_ACCOUNT_ERROR :  I18n.t('deleteAccountError'),
 
     //Recover password user
     RECOVER_PASSW_EMAIL :  I18n.t('recoverPasswordEmailSent'),
     RECOVER_PASSW_ERROR_EMAIL :  I18n.t('recoverPasswordEmailError'),

     RECOVER_PASSW_TOKEN :  I18n.t('recoverPasswordToken'),
     RECOVER_PASSW_ERROR_TOKEN :  I18n.t('recoverPasswordTokenError'),     
 
     // Image 
     IMAGE_MSG :  I18n.t('imageMessage'),
     IMAGE_MSG_ERROR :  I18n.t('imageMessageError'),

     //Modify data of owner and user
     MODIFY_DATA_MSG :  I18n.t('modifyData'),
     MODIFY_DATA_MSG_ERROR :  I18n.t('modifyDataError'),
 
     //Create restaurant
     RESTAURANT_CREATE :  I18n.t('restaurantCreate'),
     RESTAURANT_CREATE_ERROR :  I18n.t('restaurantCreateError'),
 
     //Modify data restaurant
     MODIFY_DATA_REST :  I18n.t('restaurantmodifyData'),
     MODIFY_DATA_REST_ERROR :  I18n.t('restaurantmodifyDataError'),
 
     //Delete restaurant
     DELETE_REST :  I18n.t('deleteRestaurant'),
     DELETE_REST_ERROR :  I18n.t('deleteRestaurantError'),
 
     //Review restaurant
     REVIEW_REST :  I18n.t('reviewRestaurant'),
     REVIEW_REST_ERROR :  I18n.t('reviewRestaurantError'),
 
    //Create dish
    DISH_CREATE :  I18n.t('dishCreate'),
    DISH_CREATE_ERROR :  I18n.t('dishCreateError'),
 
    //Modify data dish
    MODIFY_DATA_DISH :  I18n.t('dishmodifyData'),
    MODIFY_DATA_DISH_ERROR :  I18n.t('dishmodifyDataError'),

     //Category dish
     MODIFY_CATEGORY_DISH :  I18n.t('dishmodifyCategory'),
     MODIFY_CATEGORY_DISH_ERROR :  I18n.t('dishmodifyCategoryError'),

    //Delete dish
    DELETE_DISH :  I18n.t('deletedish'),
    DELETE_DISH_ERROR :  I18n.t('deletedishError'),
  
  },



  MIN_LENGTH_PASSWORD : 8,
  MIN_LENGTH_REVIEW_TEXT : 3,
  MIN_RATING_VALUE : 1,
  MAX_RATING_VALUE : 5,
}