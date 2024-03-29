export const LOGO_URL="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const PHOTO_URL="https://avatars.githubusercontent.com/u/149590325?v=4";

export const BG_URL="https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const API_OPTIONS ={
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
    }
  };

  export const IMG_CDN_URL ="https://image.tmdb.org/t/p/w780/";


  export const SUPPORTED_LANGUGAGES = [
    {identifier: "en",name: "English"},
    { identifier: "tamil", name: "Tamil" },
    { identifier: "kannada", name: "Kannada" },
    { identifier: "telugu", name: "Telugu" },
    { identifier: "hindi", name: "Hindi" },
  ];

  export const OPENAI_KEY=process.env.REACT_APP_OPEN_AI_KEY; 