import Vue from 'vue';
import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Profile from '@/components/Profile';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Profile.vue', () => {
  it('should render correct contents from $store.state', () => {
    const wrapper = shallowMount(Profile, {
      mocks: {
        $store: {
          state: {
            profile: {
              name: 'Ola Nordmann',
              ssn: 20099045152
            }
          }
        }
      }
    });

    expect(wrapper.find('.profile-name').text()).toEqual('Ola Nordmann');

    expect(wrapper.find('.profile-ssn').text()).toEqual('200990 45152');
  });
});
