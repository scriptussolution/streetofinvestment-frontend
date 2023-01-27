import useEventListener from './useEventListener'

function useClickOutside(ref, cd) {
  useEventListener(
    'click',
    (e) => {
      if (ref.current == null || ref.current.contains(e.target)) return
      cd(e)
    },
    typeof window !== 'undefined' ? window.document : '',
  )
}

export default useClickOutside
