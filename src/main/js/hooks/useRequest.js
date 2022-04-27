import { useDispatch, useSelector } from "react-redux";

const useRequest = () => {
    const dispatch = useDispatch();
    const pendingRequestsCount = useSelector(state => state.pendingRequestsCounter);
    const makeRequest = (action, method, body, onResponse, onSuccess, onFinally) => {
        dispatch({
            type: 'ADD_PENDING_REQUEST',
            payload: pendingRequestsCount,
        });
        let headers = {
            "Content-Type": "application/json"        
        };

        let config = {
            method: method
        };
        if(body){
            config = {...config, ...{body: JSON.stringify(body)}};
            config = {...config, ...{headers: headers}};
        }
        fetch(action, config)
            .then(res => onResponse ? onResponse?.(res) : res.json())
            .then(data => {
                onSuccess?.(data);
            })
            .finally((data) => {
                onFinally?.(data);
                dispatch({
                    type: 'REMOVE_PENDING_REQUEST',
                    payload: pendingRequestsCount + 1, //async correction
                });
            });
    };

    return [makeRequest];
};

export default useRequest;