import { supabase } from './supabase';

function getSessionId(): string {
  let id = sessionStorage.getItem('_sid');
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem('_sid', id);
  }
  return id;
}

export async function trackPageView() {
  await supabase.from('page_views').insert({
    session_id: getSessionId(),
    referrer: document.referrer || '',
    user_agent: navigator.userAgent || '',
  });
}

export async function trackClick(event_type: string, plan_id = '') {
  await supabase.from('click_events').insert({
    session_id: getSessionId(),
    event_type,
    plan_id,
  });
}
