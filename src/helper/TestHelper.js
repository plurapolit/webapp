export const expert = {
  index: 1,
  statement: {
    id: 73,
    quote: "vibrant, chewy, cream, fresh wood, lime",
    created_at: "2020-02-11T14:41:41.146Z",
  },
  number_of_comments: 5,
  likes: {
    total_likes: 1,
    liked_by_current_user: false,
  },
  statement_audio_file: {
    file_link: "http://www.hochmuth.com/mp3/Vivaldi_Sonata_eminor_.mp3",
    duration_seconds: 83,
  },
  user: {
    full_name: "Darby Ritchie",
    role: "expert",
    biography: null,
    website_link: "https://www.sueddeutsche.de/",
    twitter_handle: "plurapolit",
    facebook_handle: null,
    linkedin_handle: null,
  },
  organisation: {
    name: "Cummings-Abshire",
    avatar_key: "5lhg2147ak6pt62jxg7dxixj5cjy",
  },
  user_avatar_key: "7zbzfy10wphh2l26oigmhpecin9f",
};

export const commentData = {
  comment: {
    id: 199,
    quote: "Das ist ein Kommentar!",
    created_at: "2020-02-20T15:26:46.882Z",
  },
  audio_file: {
    file_link: "http://www.hochmuth.com/mp3/Beethoven_12_Variation.mp3",
    duration_seconds: 67,
  },
  likes: {
    total_likes: 0,
    most_liked_comment: false,
    liked_by_current_user: false,
  },
  user: {
    full_name: "Soraya O'Connell",
    role: "default",
  },
  user_avatar: "dtr9pw2th4pf8i9xjxq0r703v9ie",
};

export default { helper: expert };
