import React from "react";
// 入力フォーム
class FormInput extends React.Component {
  send(e) {
    e.preventDefault();
    // TODO: エラーメッセージの表示
    if (!this.myInput.value.trim()) { return; }
    this.props.postMessage(this.myInput.value);
    this.myInput.value = "";
    return;
  }
  render() {
    return (
      <form>
        <input type="text" ref={(ref) => (this.myInput = ref)} defaultValue="" />
        <button onClick={(event) => this.send(event)}>Send</button>
      </form>
    );
  }
}

export default FormInput;
