import React, { useState } from "react";
import {
    Button,
    SingleSelect,
    SingleSelectOption,
} from "@dhis2/ui-core";

const BobReportGenerator = () => {
    const blueFlashyTextStyle = {
        fontSize: '36px',
        fontWeight: 'bold',
        color: '#0000FF',
        textShadow: '2px 2px 4px #000000',
    };


    const [showSelects, setShowSelects] = useState(false);
    const [selectedOption1, setSelectedOption1] = useState("");
    const [selectedOption2, setSelectedOption2] = useState("");

    const displayBobReportGenerationOptions = () => {
        setShowSelects(true);
    };

    const handleGenerateBobReport = () => {

    };

    return (
        <div>
            <h2 style={blueFlashyTextStyle}>BOB Report Generator</h2>
            {showSelects ? (
                <>
                    <div>
                        <label htmlFor="dropdown1">Implementing Partner:</label>
                        <SingleSelect
                            id="dropdown1"
                            selected={selectedOption1}
                            onChange={({ selected }) => setSelectedOption1(selected)}
                        >
                            <SingleSelectOption
                                label="Eastern Province Health Office"
                                value="Eastern Province Health Office"
                            />
                            <SingleSelectOption
                                label="Southern Province Health Office"
                                value="Southern Province Health Office"
                            />
                            <SingleSelectOption
                                label="Lusaka Province Health Office"
                                value="Lusaka Province Health Office"
                            />
                            <SingleSelectOption
                                label="Western Province Health Office"
                                value="Western Province Health Office"
                            />
                        </SingleSelect>
                        {selectedOption1 && (
                            <p>Selected Option: {selectedOption1}</p>
                        )}
                        <br/>
                    </div>
                    <div>
                        <br/>
                        <label htmlFor="dropdown2">Reporting Year:</label>
                        <SingleSelect
                            id="dropdown2"
                            selected={selectedOption2}
                            onChange={({ selected }) => setSelectedOption2(selected)}
                        >
                            <SingleSelectOption
                                label="2022-2023"
                                value="2022-2023"
                            />
                        </SingleSelect>
                        {selectedOption2 && (
                            <p>Selected Option: {selectedOption2}</p>
                        )}
                    </div>

                    <div>
                        <Button
                            className="btn btn-primary"
                            type="button"
                            onClick={handleGenerateBobReport}
                        >
                            Generate BOB Report
                        </Button>

                    </div>
                </>

            ) : (
                <div>
                <Button
                    className="btn btn-primary"
                    type="button"
                    onClick={displayBobReportGenerationOptions}
                >
                    Generate BOB Report
                </Button>
                </div>
            )}
        </div>
    );
};

export default BobReportGenerator;
