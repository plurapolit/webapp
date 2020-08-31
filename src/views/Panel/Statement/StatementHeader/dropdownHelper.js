
import { createFunction, pipe } from "../../../../helper/FunctionalProgrammingHelper";
import { getAnchorFromName } from "../../../../helper/StringHelper";
import NotificationHelper from "../../../../helper/NotificationHelper";

const possibleWeblinks = (user) => [
  {
    text: "Twitter",
    path: user.twitter_handle,
    domain: "https://www.twitter.com/",
  },
  {
    text: "Facebook",
    link: user.facebook_handle,
  },
  {
    text: "LinkedIn",
    link: user.linkedin_handle,
  },
  {
    text: "Webseite",
    link: user.website_link,
  },
];

const createDropdownHelper = (expert, createTrackableFunc) => {
  const getShareLink = () => {
    const addHost = createFunction((string) => `${string}${window.location.host}`);
    const addPath = createFunction((baseUrl) => `${baseUrl}${window.location.pathname}`);
    const addAnchor = createFunction((url) => `${url}#${getAnchorFromName(expert.user.full_name)}`);
    const shareLink = pipe(
      addHost,
      addPath,
      addAnchor,
    )(" ");
    return shareLink;
  };

  const saveShareLinkInClipBoard = () => {
    navigator.clipboard.writeText(getShareLink(expert)).then(
      () => NotificationHelper.success("Der Link wurde in der Zwischenablage gespeichert."),
    );
  };

  const addShareLink = (dropdownItems = []) => {
    const shareLinkObj = {
      text: "Kopiere Link",
      onClick: createTrackableFunc(
        () => saveShareLinkInClipBoard(expert), "dropdown click on share link", undefined,
      ),
    };
    if (expert.user) return [...dropdownItems, shareLinkObj];
    return dropdownItems;
  };

  const getWeblinks = () => {
    const dropdownItems = [];
    possibleWeblinks(expert.user).forEach(((socialMedia) => {
      if (socialMedia.link) {
        dropdownItems.push(
          {
            text: socialMedia.text,
            onClick: createTrackableFunc(
              () => window.open(socialMedia.link), `dropdown click on ${socialMedia.text}`, undefined,
            ),
          },
        );
      } else if (socialMedia.path && socialMedia.domain) {
        dropdownItems.push(
          {
            text: socialMedia.text,
            onClick: createTrackableFunc(
              () => window.open(`${socialMedia.domain}${socialMedia.path}`), `dropdown click on ${socialMedia.text}`, undefined,
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
        onClick: createTrackableFunc(() => setShowTranscription((prevToggle) => !prevToggle)),
      };
      return [...items, transcript];
    }
    return items;
  };

  return {
    getWeblinks,
    addTranscription,
    addShareLink,
  };
};

export default createDropdownHelper;
