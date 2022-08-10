import { describe, it, expect } from 'vitest'
import { render } from 'solid-testing-library'
import Counter from './Counter'

describe('Counter', () => {
  it('should increment', () => {
    const { container, unmount } = render(() => <Counter />)

    expect(container.textContent).toBe('Clicks: 0')

    container.querySelector('button').click()

    expect(container.textContent).toBe('Clicks: 1')

    unmount()
  })
})
