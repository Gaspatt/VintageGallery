import { ref } from 'vue';
import { supabase } from './supabase';

const user = ref(null);

supabase.auth.onAuthStateChange(async (event, session) => {
  console.log('Auth state changed:', event, session);
  if (session?.user) {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('name, birthdate')
        .eq('id', session.user.id)
        .single();
      if (error) {
        console.error('Error fetching user profile:', error);
      } else {
        user.value = { ...session.user, ...data };
        console.log('User profile fetched:', user.value);
      }
    } catch (error) {
      console.error('Unexpected error fetching user profile:', error);
    }
  } else {
    user.value = null;
    console.log('User logged out');
  }
});

export function useAuth() {
  return { user };
}
