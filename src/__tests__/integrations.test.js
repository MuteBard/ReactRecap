import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios'
import Root from 'Root';
import App from 'components/App'


beforeEach(() => {
    //turn off all requests issued by axios
    moxios.install() 
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status : 200,
        response : [{name : 'Fetched #1'}, {name : 'Fetched #2'}]
    })
})

afterEach(() => {
    //makes sure to not reuse content in beforeEach
    moxios.uninstall()

})

it('can fetch a list of comments and display them', () => {
    //Attempt to render the *entire* app
    const wrapped = mount(
        <Root>
            <App/>
        </Root>
    );
    //find the 'fetchComments' button and click it
    wrapped.find('.fetch-comments').simulate('click');
    wrapped.update()
   moxios.wait(() => {
        //Expect to find a list of comments
        expect(wrapped.find('li').length).toEqual(2);
        //Jest will wait till we execute done()
        done()
        wrapped.unmount();
    }); 
})


