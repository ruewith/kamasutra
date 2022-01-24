import React, { PureComponent } from "react";
import { reduxForm, Field } from "redux-form";

import styles from "./Posts.module.sass";

import PostItem from "./PostItem";
import { Textarea } from "../common/form-controls";
import { maxLengthValidator, requiredFieldValidator } from "../../utils/validators";

const maxLength20 = maxLengthValidator(20);

class Posts extends PureComponent {
    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps != this.props || nextState != this.state;
    // }

    addNewPost = (values) => {
        this.props.addPost(values.postText);
        values.postText = "";
    };
    render() {
        const postElements = this.props.posts.map((post) => <PostItem state={post} />);

        return (
            <div className={styles.posts}>
                <h3>My posts</h3>
                <PostRxForm onSubmit={this.addNewPost} />
                <div className={styles.postBlock}>{postElements}</div>
            </div>
        );
    }
}

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.postForm}>
            <div>
                <Field
                    component={Textarea}
                    name={"postText"}
                    placeholder="Send post"
                    //validate={[requiredFieldValidator, maxLength20]}
                />
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    );
};

const PostRxForm = reduxForm({
    form: "post",
})(PostForm);

export default Posts;
