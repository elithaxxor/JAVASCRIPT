import { useState, useEffect } from "react";

// sets up a global request, saves time from implimenting useEffect manyt times
// takes axious paramaters

// passing API url as args
function useQuery(request) {
  const [response, setResponse] = useState({});

  useEffect(() => {
    request.then((resp_data) => {
      setResponse(resp_data.data);
      console.log(resp_data.status, response);
    });
  }, []);
  return { response };
}
export default useQuery;
