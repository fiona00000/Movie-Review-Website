import React from 'react'

const Login = () => {
    return (
        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-10">

                <h2>Log In</h2>
                <hr />

                {/* {{ #if errorMessage }}
                    <div class="alert alert-danger">
                        <strong>Error:</strong> {{ errorMessage }}
                    </div>
                    {{/if}} */}
                <p>This is an Upcomming Feature...</p>
                <form method="post" action="/login">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <input class="form-control" id="userName" name="userName" type="text" placeholder="User Name" required="" value="" wfd-id="id0" />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <input class="form-control" id="password" name="password" type="password" placeholder="Password" required="" wfd-id="id1" />
                            </div>
                        </div>
                    </div>
                    <br />
                    <input type="submit" class="btn btn-success pull-right" value="Login" wfd-id="id2" />
                </form>
            </div>
        </div>
    )
}

export default Login