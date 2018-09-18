import React from 'react'
import Helmet from 'react-helmet'

const Success = (props) => (
    <div>
        <Helmet>
            <title>Thank You!</title>
            <meta name="description" content="Success Page" />
        </Helmet>

        <div>
            <section>
                <div>
                    <header>
                        <h1>Success/Thank You Page</h1>
                    </header>
                    <p>Thank you for contacting us. We look forward to speaking with you.</p>
                </div>
            </section>
        </div>

    </div>
)

export default Success