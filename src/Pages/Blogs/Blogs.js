import React from 'react';

const Blogs = () => {
    return (
        <div className='text-center'>
            <h2 className='text-primary'>1.Authorization Vs Authentication.</h2>
            <h5>
                <br /> Authorization determines what resources a user can access.
                <br />Authentication verifies who the user is.<br /> Authorization always takes place after authentication.<br />Authentication is the first step of a good identity and access management process.<br />
                Authorization isn’t visible to or changeable by the user.<br />Authentication is visible to and partially changeable by the user. </h5>

            <h2 className='text-primary'>2.
                a. Why are you using Firebase?  </h2>
            <h5>
                Firebase is Google’s mobile application development platform.<br /> It has a lot of different products that cover much of what’s needed to build a mobile app.<br /> It would take a lot of time to describe the complete set of situations where Firebase can be helpful.<br />
                <h2 className='text-primary'>b. What other options do you have to implement authenication?</h2>
                Authentication is used by a server when the server needs to know exactly who is accessing their information or site.<br />
                Authentication is used by a client when the client needs to know that the server is system it claims to be.
            </h5>
            <h2 className='text-primary'>3.What other services does firebase provide other than authentication?</h2>
            <h5>

                a.Cloud Firestore <br />

                b. Cloud Functions <br />

                c. Authentication<br />

                d. Hosting<br />

                e.Cloud Storage<br />

                f. Google Analytics<br />

                g. Predictions<br />

                h. Cloud Messaging<br />

                i.Dynamic Links<br />

                j.Remote Configure</h5>
        </div>
    );
};

export default Blogs;