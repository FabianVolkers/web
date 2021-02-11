import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CameraFeed from './CameraFeed';

let container: HTMLDivElement | null = null;

Enzyme.configure({ adapter: new Adapter() });

beforeEach(() => {
	// setup a DOM element as a render target
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(() => {
	// cleanup on exiting
	if (container !== null) {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	}
});

describe('unittest', () => {
    it('renders correctly', () => {
        // given
        const cameraOpts = {
            x: 0,
            y: 0,
            width: window.innerWidth,
            height: (window.innerWidth * 4) / 3,
            camera: 'rear',
            tapPhoto: true,
            previewDrag: false,
            toBack: true,
            alpha: 1,
        };
        const setCameraReady = jest.fn();

        // when
        const component = mount(
            <CameraFeed cameraOpts={cameraOpts} setCameraReady={setCameraReady}></CameraFeed>
        );

        // then
		expect(component.instance()).toMatchSnapshot();

    });
});
