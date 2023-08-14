import { useCallback, useLayoutEffect, useReducer, useRef } from "react";

const defaultState = { status: "", data: null, error: null };

const useSafeDispatch = (dispatch) => {
  const mounted = useRef(false);
  useLayoutEffect(() => {
    mounted.current = true;
    return () => (mounted.current = false);
  }, []);

  return useCallback(
    (...args) => (mounted.current ? dispatch(...args) : void 0),
    [dispatch]
  );
};

const useAsync = (state) => {
  const ref = useRef({ ...defaultState, ...state });
  const [{ status, data, error }, setState] = useReducer(
    (state, action) => ({ ...state, ...action }),
    ref.current
  );

  const safeSetState = useSafeDispatch(setState);

  const run = useCallback(
    (promise) => {
      if (!promise || !promise.then) {
        throw new Error("must be a promise and returning data");
      }

      safeSetState({ status: "loading" });

      promise.then(
        (data) => safeSetState({ data: data, status: "success" }),
        (error) => safeSetState({ error: error, status: "error" })
      );
    },
    [safeSetState]
  );

  const reset = useCallback(() => safeSetState(ref.current), [safeSetState]);

  const setData = useCallback(
    (data) => safeSetState({ data: data }),
    [safeSetState]
  );

  return {
    isLoading: status === "loading",
    isSuccess: status === "success",
    isError: status === "error",
    data,
    error,
    run,
    reset,
    setData,
  };
};

export default useAsync;
