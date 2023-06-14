import React from "react";
import { Button } from "@dhis2/ui-core";

const handleGoToDap = (event) => {
    //window.open("https://app.powerbi.com/groups/me/apps/91554460-0ab1-4b49-b73c-0a77c001f20c/reports/bf360835-6f1f-46f8-94f8-f8ce8fb2bd08/ReportSectionb3655680ac147dc3101d", "_parent");
    window.location.href = "https://app.powerbi.com/Redirect?action=OpenApp&appId=91554460-0ab1-4b49-b73c-0a77c001f20c&ctid=389f1ebb-d777-4ab5-8def-42a5441fb23d";
};

const handleGoToDQMISPortal = (event) => {
    window.location.href = "https://localhost:7231/";
};

const handleDatimImport = (event) => {
    //window.location.href = "https://localhost:7231/";
};

const LinkToDap = () => {
    return (
        <div>
            <div>
                <Button className="btn btn-primary" type="button" onClick={handleGoToDap}>
                    Go to DAP
                </Button>
                <br/>
            </div>
            {/*<div>*/}
            {/*    <br />*/}
            {/*    <Button className="btn btn-primary" type="button" onClick={handleGoToDQMISPortal}>*/}
            {/*        Go to DQMIS Portal*/}
            {/*    </Button>*/}
            {/*    <br />*/}

            {/*</div>*/}
            {/*<div>*/}
            {/*    <div>*/}
            {/*        <br/>*/}
            {/*        <Button className="btn btn-primary" type="button" onClick={handleDatimImport}>*/}
            {/*            Datim Import*/}
            {/*        </Button>*/}
            {/*        <br/>*/}
            {/*    </div>*/}

            {/*</div>*/}

        </div>
    );
};

export default LinkToDap;
