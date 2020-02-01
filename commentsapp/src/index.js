import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>
                        Warning!
                    </h4>
                    Do you really want to Quit?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail avatar={faker.image.avatar()} comment="Nice Blog post" timeAgo="Today at 6:45AM" author="Mary" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail avatar={faker.image.avatar()} comment="Subject line is perfect " timeAgo="Today at 2:32PM" author="Sam" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail avatar={faker.image.avatar()} comment="Informative blog" timeAgo="Today at 6PM" author="Alex" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail avatar={faker.image.avatar()} comment="Awsome blog" timeAgo="Yesterday at 2:36PM" author="Jay" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail avatar={faker.image.avatar()} comment="Very helpful blog" timeAgo="Yesterday at 6:30PM" author={faker.name.firstName()} />
            </ApprovalCard>
        </div>
    );
}



ReactDOM.render(<App />, document.querySelector('#root'));