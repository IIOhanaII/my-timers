import React from 'react';

export const ModalMessages = ({ inputSoundEffectName, errMess }) => {
    return (
        <React.Fragment>
            {/* Display in modal which sound effect has been picked */}
            {inputSoundEffectName && (
                <div className="text-primary mb-3">
                  {inputSoundEffectName}
                </div>
              )}

            {/* Display in modal an error message */}
            {errMess !== null && (
            <div className="text-danger mb-3">
                {errMess}
            </div>
            )}
        </React.Fragment>
    );        
}