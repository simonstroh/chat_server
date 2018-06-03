"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chat = function (_React$Component) {
  _inherits(Chat, _React$Component);

  function Chat(props) {
    _classCallCheck(this, Chat);

    var _this = _possibleConstructorReturn(this, (Chat.__proto__ || Object.getPrototypeOf(Chat)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Chat, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "form",
        { action: "", style: this.props.styles },
        React.createElement("textarea", { id: "m" }),
        React.createElement(
          "div",
          { className: "btns" },
          React.createElement(
            "button",
            { type: "submit" },
            React.createElement("img", { src: "chat.svg", width: "22px", height: "22px" })
          ),
          React.createElement(
            "button",
            null,
            React.createElement("img", { src: "video.svg", width: "22px", height: "22px" })
          )
        )
      );
    }
  }]);

  return Chat;
}(React.Component);

var ChatInfo = function (_React$Component2) {
  _inherits(ChatInfo, _React$Component2);

  function ChatInfo(props) {
    _classCallCheck(this, ChatInfo);

    return _possibleConstructorReturn(this, (ChatInfo.__proto__ || Object.getPrototypeOf(ChatInfo)).call(this, props));
  }

  _createClass(ChatInfo, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "window", style: this.props.styles },
        React.createElement(
          "p",
          null,
          "Please enter the name of the person you would like to speak to:"
        ),
        React.createElement("input", { id: "input1", type: "text" }),
        React.createElement(
          "p",
          null,
          "And your name:"
        ),
        React.createElement("input", { id: "input2", type: "text" }),
        React.createElement("input", { type: "submit", onClick: this.props.formSubmit })
      );
    }
  }]);

  return ChatInfo;
}(React.Component);

var App = function (_React$Component3) {
  _inherits(App, _React$Component3);

  function App(props) {
    _classCallCheck(this, App);

    var _this3 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this3.state = {
      chatStyles: {
        display: 'none'
      },
      formStyles: {
        display: 'block'
      },
      user1: '',
      user2: ''
    };
    _this3.handleFormSubmit = _this3.handleFormSubmit.bind(_this3);
    return _this3;
  }

  _createClass(App, [{
    key: "handleFormSubmit",
    value: function handleFormSubmit(e) {
      e.preventDefault();
      var text1 = document.getElementById('input1').value;
      var text2 = document.getElementById('input2').value;
      this.setState({ user1: text2 });
      this.setState({ user2: text1 });
      this.setState({ formStyles: { display: 'none' } });
      this.setState({ chatStyles: { display: 'flex' } });
      var el = document.createElement('p');
      el.style.color = 'transparent';
      el.style.height = '0';
      el.innerHTML = text2 + ' > ' + text1;
      el.id = 'users';
      var el1 = document.createElement('h2');
      var el2 = document.createElement('h2');
      el1.innerHTML = text2.slice(0, 1);
      el2.innerHTML = text1.slice(0, 1);
      var avatars = document.createElement('div');
      avatars.className = 'avatars';
      avatars.appendChild(el1);
      avatars.appendChild(el2);
      document.getElementById('pop-up').appendChild(el);
      document.getElementById('pop-up').appendChild(avatars);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "pop-up" },
        React.createElement(
          "span",
          null,
          "Chat"
        ),
        React.createElement(
          "h5",
          null,
          "ask something or mention anything to your point of contact"
        ),
        React.createElement(ChatInfo, { styles: this.state.formStyles, formSubmit: this.handleFormSubmit }),
        React.createElement("ul", { id: "messages" }),
        React.createElement(Chat, { users: [this.state.user1, this.state.user2], styles: this.state.chatStyles })
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkNoYXQiLCJwcm9wcyIsInN0YXRlIiwic3R5bGVzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJDaGF0SW5mbyIsImZvcm1TdWJtaXQiLCJBcHAiLCJjaGF0U3R5bGVzIiwiZGlzcGxheSIsImZvcm1TdHlsZXMiLCJ1c2VyMSIsInVzZXIyIiwiaGFuZGxlRm9ybVN1Ym1pdCIsImJpbmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0ZXh0MSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsInRleHQyIiwic2V0U3RhdGUiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsImNvbG9yIiwiaGVpZ2h0IiwiaW5uZXJIVE1MIiwiaWQiLCJlbDEiLCJlbDIiLCJzbGljZSIsImF2YXRhcnMiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsIlJlYWN0RE9NIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEk7OztBQUNKLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBWSxFQUFaO0FBRmlCO0FBS2xCOzs7OzZCQUNRO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBTSxRQUFPLEVBQWIsRUFBZ0IsT0FBTyxLQUFLRCxLQUFMLENBQVdFLE1BQWxDO0FBQ0UsMENBQVUsSUFBRyxHQUFiLEdBREY7QUFFRTtBQUFBO0FBQUEsWUFBSyxXQUFVLE1BQWY7QUFDRTtBQUFBO0FBQUEsY0FBUSxNQUFLLFFBQWI7QUFBc0IseUNBQUssS0FBSSxVQUFULEVBQW9CLE9BQU0sTUFBMUIsRUFBaUMsUUFBTyxNQUF4QztBQUF0QixXQURGO0FBRUU7QUFBQTtBQUFBO0FBQVEseUNBQUssS0FBSSxXQUFULEVBQXFCLE9BQU0sTUFBM0IsRUFBa0MsUUFBTyxNQUF6QztBQUFSO0FBRkY7QUFGRixPQURGO0FBU0Q7Ozs7RUFqQmdCQyxNQUFNQyxT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QUFLRyxnQkFBMUQsR0FIRjtBQUlFLG9DQUFJLElBQUcsVUFBUCxHQUpGO0FBTUUsNEJBQUMsSUFBRCxJQUFNLE9BQU8sQ0FBQyxLQUFLWixLQUFMLENBQVdVLEtBQVosRUFBbUIsS0FBS1YsS0FBTCxDQUFXVyxLQUE5QixDQUFiLEVBQWtELFFBQVEsS0FBS1gsS0FBTCxDQUFXTyxVQUFyRTtBQU5GLE9BREY7QUFVRDs7OztFQWxEZUwsTUFBTUMsUzs7QUFxRHhCZ0MsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCbkIsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDaGF0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID17XG5cbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlc30+XG4gICAgICAgIDx0ZXh0YXJlYSBpZD1cIm1cIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bnNcIj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj48aW1nIHNyYz1cImNoYXQuc3ZnXCIgd2lkdGg9XCIyMnB4XCIgaGVpZ2h0PVwiMjJweFwiIC8+PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbj48aW1nIHNyYz1cInZpZGVvLnN2Z1wiIHdpZHRoPVwiMjJweFwiIGhlaWdodD1cIjIycHhcIiAvPjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgQ2hhdEluZm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGlkPVwid2luZG93XCIgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGVzfT5cbiAgICAgICAgPHA+UGxlYXNlIGVudGVyIHRoZSBuYW1lIG9mIHRoZSBwZXJzb24geW91IHdvdWxkIGxpa2UgdG8gc3BlYWsgdG86PC9wPlxuICAgICAgICA8aW5wdXQgaWQ9XCJpbnB1dDFcIiB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgIDxwPkFuZCB5b3VyIG5hbWU6PC9wPlxuICAgICAgICA8aW5wdXQgaWQ9XCJpbnB1dDJcIiB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgb25DbGljaz17dGhpcy5wcm9wcy5mb3JtU3VibWl0fS8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY2hhdFN0eWxlczoge1xuICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgIH0sXG4gICAgICBmb3JtU3R5bGVzOiB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICAgIH0sXG4gICAgICB1c2VyMTogJycsXG4gICAgICB1c2VyMjogJydcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVGb3JtU3VibWl0ID0gdGhpcy5oYW5kbGVGb3JtU3VibWl0LmJpbmQodGhpcylcbiAgfVxuICBoYW5kbGVGb3JtU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB2YXIgdGV4dDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQxJykudmFsdWVcbiAgICB2YXIgdGV4dDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQyJykudmFsdWVcbiAgICB0aGlzLnNldFN0YXRlKHt1c2VyMTogdGV4dDJ9KVxuICAgIHRoaXMuc2V0U3RhdGUoe3VzZXIyOiB0ZXh0MX0pXG4gICAgdGhpcy5zZXRTdGF0ZSh7Zm9ybVN0eWxlczoge2Rpc3BsYXk6ICdub25lJ319KVxuICAgIHRoaXMuc2V0U3RhdGUoe2NoYXRTdHlsZXM6IHtkaXNwbGF5OiAnZmxleCd9fSlcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBlbC5zdHlsZS5jb2xvciA9ICd0cmFuc3BhcmVudCdcbiAgICBlbC5zdHlsZS5oZWlnaHQgPSAnMCdcbiAgICBlbC5pbm5lckhUTUwgPSB0ZXh0MiArICcgPiAnICsgdGV4dDFcbiAgICBlbC5pZCA9ICd1c2VycydcbiAgICB2YXIgZWwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIHZhciBlbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgZWwxLmlubmVySFRNTCA9IHRleHQyLnNsaWNlKDAsIDEpXG4gICAgZWwyLmlubmVySFRNTCA9IHRleHQxLnNsaWNlKDAsIDEpXG4gICAgdmFyIGF2YXRhcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGF2YXRhcnMuY2xhc3NOYW1lID0gJ2F2YXRhcnMnXG4gICAgYXZhdGFycy5hcHBlbmRDaGlsZChlbDEpXG4gICAgYXZhdGFycy5hcHBlbmRDaGlsZChlbDIpXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cCcpLmFwcGVuZENoaWxkKGVsKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAnKS5hcHBlbmRDaGlsZChhdmF0YXJzKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGlkPVwicG9wLXVwXCI+XG4gICAgICAgIDxzcGFuPkNoYXQ8L3NwYW4+XG4gICAgICAgIDxoNT5hc2sgc29tZXRoaW5nIG9yIG1lbnRpb24gYW55dGhpbmcgdG8geW91ciBwb2ludCBvZiBjb250YWN0PC9oNT5cbiAgICAgICAgPENoYXRJbmZvIHN0eWxlcz17dGhpcy5zdGF0ZS5mb3JtU3R5bGVzfSBmb3JtU3VibWl0PXt0aGlzLmhhbmRsZUZvcm1TdWJtaXR9IC8+XG4gICAgICAgIDx1bCBpZD1cIm1lc3NhZ2VzXCI+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxDaGF0IHVzZXJzPXtbdGhpcy5zdGF0ZS51c2VyMSwgdGhpcy5zdGF0ZS51c2VyMl19c3R5bGVzPXt0aGlzLnN0YXRlLmNoYXRTdHlsZXN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSlcbiJdfQ==