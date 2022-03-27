import React from 'react';

class RequestInfo extends React.Component {
    render() {
        return <form>
            <div>
                <input type="text" name="name" placeholder={'Nome'}/>
            </div>
            <div>
                <input type="email" name="email" placeholder={'Email'} />
            </div>
            <div>
                <input type="phone" name="phone" placeholder={'Telefono'} />
            </div>
        </form>
    }
}

export default RequestInfo
