// src/components/MyComponent.tsx
import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../redux/reducers'; // Import RootState

interface MyComponentProps {
    myData: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ myData }) => {
    return (
        <div>
            {/* Your component code here */}
        </div>
    );
};

const mapStateToProps = (state: RootState) => {
    return {
        myData: state.myReducer.myData, // Adjust based on your reducer structure
    };
};

export default connect(mapStateToProps)(MyComponent);
