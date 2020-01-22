import { signIn } from '../../api/UserApi';
import { fetchAllPanels } from '../../api/PanelApi';

export const signInUser = async (loaded) => {
  const userData = {
    email: 'robinzuschke@hotmail.de',
    password: 'secret',
    remember_me: '1',
  };
  const user = await signIn(userData);
  loaded(user);
};

export const loadPanels = async (loaded) => {
  const panels = await fetchAllPanels();
  loaded(panels);
};
