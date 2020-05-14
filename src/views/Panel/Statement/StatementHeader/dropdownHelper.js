
import { ReactComponent as Twitter } from "../../../../assets/images/Twitter_Logo.svg";
import { ReactComponent as Facebook } from "../../../../assets/images/facebook-icon.svg";
import { ReactComponent as LinkedIn } from "../../../../assets/images/linkedin-icon.svg";
import { ReactComponent as Website } from "../../../../assets/images/website-icon.svg";
import { ReactComponent as Transcript } from "../../../../assets/images/transcript-image.svg";

const possibleWeblinks = (user) => [
  {
    text: "Twitter",
    icon: Twitter,
    link: user.twitter_handle,
  },
  {
    text: "Facebook",
    icon: Facebook,
    link: user.facebook_handle,
  },
  {
    text: "LinkedIn",
    icon: LinkedIn,
    link: user.linkedin_handle,
  },
  {
    text: "Webseite",
    icon: Website,
    link: user.website_link,
  },
];

const createDropdownHelper = (expert, createTrackableFunc) => {
  const getWeblinks = () => {
    const dropdownItems = [];
    possibleWeblinks(expert.user).forEach(((socialMedia) => {
      if (socialMedia.link) {
        dropdownItems.push(
          {
            text: socialMedia.text,
            icon: socialMedia.icon,
            onClick: createTrackableFunc(
              () => window.open(socialMedia.link), `dropdown click on ${socialMedia.text}`, undefined,
            ),
          },
        );
      }
    }));
    return dropdownItems;
  };

  const addTranscription = (items, showTranscription, setShowTranscription) => {
    if (expert.transcription) {
      const transcript = {
        text: showTranscription ? "Transkript schließen" : "Transkript",
        icon: Transcript,
        onClick: createTrackableFunc(() => setShowTranscription((prevToggle) => !prevToggle)),
      };
      return [...items, transcript];
    }
    return items;
  };

  return {
    getWeblinks,
    addTranscription,
  };
};

export default createDropdownHelper;
