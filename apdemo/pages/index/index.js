Page({
    data: {
        tabs: [
            {title: '第一层'},
            {title: '第二层'},
            {title: '第三层'},
            {title: '第四层'},
            {title: '第五层'},
            {title: '第六层'},
        ],
        activeTab: 0,
        tabList: [
            {
                loaded: false, loading: false, completed: false, goodsList: [{serial: 1, name: '康师傅红烧牛', num: 5},
                    {serial: 2, name: '康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛', num: 5},
                    {serial: 3, name: '康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛', num: 5},
                    {serial: 4, name: '康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛', num: 5},
                    {serial: 5, name: '康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛', num: 5},
                    {serial: 6, name: '康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛', num: 5},
                    {serial: 7, name: '康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛', num: 5},
                    {serial: 8, name: '康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛', num: 5},
                    {serial: 9, name: '康师傅红烧牛', num: 5},
                    {serial: 10, name: '康师傅红烧牛', num: 5}]
            },
            {loaded: false, loading: false, completed: false, goodsList: []},
            {loaded: false, loading: false, completed: false, goodsList: []},
            {loaded: false, loading: false, completed: false, goodsList: []},
            {loaded: false, loading: false, completed: false, goodsList: []},
            {loaded: false, loading: false, completed: false, goodsList: []},
        ],
        currentList: {
            loaded: false, loading: false, completed: false, goodsList: [{serial: 1, name: '康师傅红烧牛', num: 5},
                {serial: 2, name: '康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛', num: 5},
                {serial: 3, name: '康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛', num: 5},
                {serial: 4, name: '康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛', num: 5},
                {serial: 5, name: '康师傅红烧牛', num: 5},
                {serial: 6, name: '康师傅红烧牛', num: 5},
                {serial: 7, name: '康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛', num: 5},
                {serial: 8, name: '康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛', num: 5},
                {serial: 9, name: '康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛', num: 5},
                {serial: 10, name: '康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛康师傅红烧牛', num: 5}]
        },
        goodsNum: [],

    },

    onLoad() {
        this.setData({
            currentList: this.data.tabList[0]
        });
        let i = 0;
        let list = [];
        for (i; i < this.data.currentList.goodsList.length; i++) {
            list = list.concat(this.data.currentList.goodsList[i].num)
        }
        this.setData({
            goodsNum: list

        })
    },
    handleTabClick({index}) {
        this.setData({
            activeTab: index,
        });
    },
    handleTabChange({index}) {
        this.setData({
            activeTab: index,
        });
    },
    bindInputNumber(e) {
        let options = {};
        console.log("inputvalue=="+e.detail.value)
        options[`goodsNum[${this.data.activeTab}]`] = e.detail.value;
        this.setData(options);
        console.log("goodsnum=== "+this.data.goodsNum[0])
    },
})