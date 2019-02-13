# MiniProgram
解决支付宝小程序扩展组件不能竖向滑动的问题
查看源码，复写源码的tab相关属性的css
/* 复写tab组件样式 */

.tab-container,
.tab-container .am-tabs-tab-bar-wrap {
  height: 100%;
}

.tab-container .am-tabs-tab-bar-wrap {
  display: flex;
  flex-direction: column;
}

.tab-container .am-tabs-content-wrap {
  flex: 1;
  box-sizing: border-box;
}

.tab-container .am-tabs-content-wrap .am-tabs-pane-wrap{
  height: 100%;
}
