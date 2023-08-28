import React from 'react'

const Register = () => {
    return (
        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-10">
                <h2>Register</h2>
                <hr />
                {/* {{ #if errorMessage }}
                    <div class="alert alert-danger">
                        <strong>Error:</strong> {{ errorMessage }}
                    </div>
                    {{/if}}

                    {{ #if successMessage }}
                    <div class="alert alert-success">
                        <strong>Success:</strong> {{ successMessage }}
                    </div>
                    <a class="btn btn-success pull-right" href="/login">&nbsp;&nbsp;&nbsp;Proceed to Log in&nbsp;&nbsp;&nbsp;</a>
                    <br />
                    <br />
                    <br />
                    {{ else}} */}
                <p>This is an Upcomming Feature...</p>
                <form method="post" action="/register">
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
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <input class="form-control" id="password2" name="password2" type="password" placeholder="Confirm Password" required="" wfd-id="id2" />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <input class="form-control" id="email" name="email" type="email" placeholder="Email Address" required="" wfd-id="id3" />
                            </div>
                        </div>
                    </div>
                    <br />
                    <input type="submit" class="btn btn-success pull-right" value="Register" wfd-id="id4" />
                </form>
                {/* {{/if}} */}
            </div>
        </div>
    )
}

export default Register