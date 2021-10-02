import React, {Component, lazy, Suspense} from 'react';
const TopVendors = lazy(import('../SupplierQuotation/components/TopVendors.component'))
export default class SupplierQuotationPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <TopVendors />
                </Suspense>
            </div>
        );
    }
}

