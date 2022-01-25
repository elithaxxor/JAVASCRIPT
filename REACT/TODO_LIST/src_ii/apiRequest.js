const apiRequest = async (url ='', optionObj = null, errMsg = null)=> {
        try{
                const resp = await fetch(url, optionObj); // passes on the header from .api
                if(!resp) throw Error('Error in API Request, reload the app');
        }catch(err){
                errMsg=err.message;
                console.log(errMsg);
        }
        finally{
            return errMsg;

        }
}

export default apiRequest;


