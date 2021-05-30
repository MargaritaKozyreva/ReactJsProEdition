/**
 * @jest-environment jsdom
 */

import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Heading from '.';

describe('Heading', () => {
  let container: Element | null = null;

  beforeEach(() => {
    container = window.document.createElement('div');
    window.document.body.appendChild(container)
  });

  afterEach(() => {
    if (container !== null) {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    }
  });

  it('render', () => {
    act(() => {
      render(<Heading />, container)
    });
    expect(container?.innerHTML).toBeDefined()
  })

  it('render with children', () => {
    act(() => {
      render(<Heading>Hola!!</Heading>, container)
    });
    console.log(container?.textContent)
    expect(container?.textContent).toBe('Hola!!')
  })

  it('render with props type="h1"', () => {
    act(() => {
      render(<Heading type="h1">Hola!!</Heading>, container)
    });
    console.log(container?.querySelector("h1"))
    expect(container?.querySelector("h1")).not.toBeNull();
  })
});
