export const expectPlayingAudio = () => {
  cy.get("audio").should((player) => {
    let audible = false;
    player.each((i, playerItem) => {
      if (playerItem.duration > 0 && !playerItem.paused && !playerItem.muted) {
        audible = true;
      }
    });
    expect(audible).to.eq(true);
  });
};

export const newUser = {
  firstName: "Max",
  lastName: "Mustermann",
  email: `max@test${Math.random() * 10000 + 1}.de`,
  password: "secret",
};

export const user = {
  firstName: "foo",
  lastName: "bar",
  email: "foo@bar.de",
  password: "123456",
};

export const pageUrl = "/2020-quasi-nulla-id-dolor";

export default null;
