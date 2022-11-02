/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "rdd": "rdd",
    "(click to unlock)": "（点击解锁）",
    "/s": "/秒",
    "are the": "是",
    "clone machine": "克隆机器",
    "Clone Machine": "克隆机器",
    "Close": "关闭",
    "Critical:": "暴击：",
    "energy": "能量",
    "Farming": "耕种",
    "Fertilizer": "肥料",
    "Gadgets": "小工具",
    "Garden Rush Galaxy": "花园拉什银河",
    "Garden Rush Galaxy Alpha Build ação gadgets": "Garden Rush Galaxy Alpha Build ação 小工具",
    "Grow your garden by": "通过以下方式种植您的花园",
    "Location:": "地点：",
    "Low energy levels": "低能级",
    "Mini Reactor": "迷你反应堆",
    "Mission Log": "任务日志",
    "Mission Panel Control": "任务面板控制",
    "Mission Status": "任务状态",
    "No workforce found. Proceed to use your": "没有找到劳动力。 继续使用您的",
    "Online": "在线",
    "organic": "有机",
    "Output": "输出",
    "Planet Unknown": "未知星球",
    "rdd": "rdd",
    "Rdds": "rdd",
    "Recipe": "配方",
    "Research Chamber:": "研究室：",
    "secret: buildHome": "秘密：建造房屋",
    "secret: chip1": "秘密：芯片1",
    "secret: cloning1000": "秘密：克隆1000",
    "secret: cowBuy": "秘密：奶牛购买",
    "secret: gardenerBegginer": "秘密：园艺新手",
    "secret: lake50": "秘密：湖泊50",
    "secret: mine1": "秘密：矿山1",
    "secret: provinceBuy": "秘密：区域购买",
    "secret: smallLab1": "小实验室1",
    "secret: test": "秘密：测试",
    "Summary:": "概括：",
    "to make new production units. Just clone a lot of them!": "制造新的生产单位。 只需克隆更多！",
    "to start mission progress": "开始任务进度",
    "Turbo Clone Machine": "涡轮克隆机",
    "Unlock Achievement": "解锁成就",
    "Warning:": "警告：",
    "workforce": "劳动力",
    "gold": "黄金",
    "Honey": "蜂蜜",
    "Purchase": "购买",
    "Purchase Error": "购买错误",
    "Sunflower": "向日葵",
    "Chibi Cow": "赤壁奶牛",
    "Chunk Farm": "大块农场",
    "Clone Machine": "克隆机",
    "Fertilizer": "肥料",
    "Fishing Lake": "钓鱼湖泊",
    "Golden Tree": "金树",
    "Honey": "蜂蜜",
    "Mini Reactor": "迷你反应堆",
    "Petalous Red": "花瓣红",
    "Sunflower": "向日葵",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "Vue.js": "Vue.js",
    "0.1.1-alpha": "0.1.1-alpha",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "research: ": "研究: ",
    "Tip #": "提示 #",
    "organic: ": "有机物: ",
    "energy: ": "能量: ",
    "electronic: ": "电子: ",
    "cosmic: ": "宇宙: ",
    "gold: ": "黄金: ",
    "metal: ": "金属: ",
    "magic: ": "魔法: ",
    "rdd: ": "rdd: ",
    "You dont have enough to buy ": "你没有足够的钱去购买 ",
    "You have been purchased ": "你购买了 ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^stock \| electronic : (.+) \>\>\>\> needs (.+) to unlock$/, '库存 \| 电子 : $1 \>\>\>\> 需要 $2 才能解锁'],
    [/^stock \| gold : (.+) \>\>\>\> needs (.+) to unlock$/, '库存 \| 黄金 : $1 \>\>\>\> 需要 $2 才能解锁'],
    [/^stock \| metal : (.+) \>\>\>\> needs (.+) to unlock$/, '库存 \| 金属 : $1 \>\>\>\> 需要 $2 才能解锁'],
    [/^stock \| rdd : (.+) \>\>\>\> needs (.+) to unlock$/, '库存 \| rdd : $1 \>\>\>\> 需要 $2 才能解锁'],
    [/^productions \| cow : (.+) \>\>\>\> needs (.+) to unlock$/, '产品 \| 奶牛 : $1 \>\>\>\> 需要 $2 才能解锁'],
    [/^productions \| house : (.+) \>\>\>\> needs (.+) to unlock$/, '产品 \| 房子 : $1 \>\>\>\> 需要 $2 才能解锁'],
    [/^productions \| lab : (.+) \>\>\>\> needs (.+) to unlock$/, '产品 \| 实验室 : $1 \>\>\>\> 需要 $2 才能解锁'],
    [/^productions \| lake : (.+) \>\>\>\> needs (.+) to unlock$/, '产品 \| 湖泊 : $1 \>\>\>\> 需要 $2 才能解锁'],
    [/^productions \| province : (.+) \>\>\>\> needs (.+) to unlock$/, '产品 \| 地区 : $1 \>\>\>\> 需要 $2 才能解锁'],
    [/^productions \| sunflower : (.+) \>\>\>\> needs (.+) to unlock$/, '产品 \| 向日葵 : $1 \>\>\>\> 需要 $2 才能解锁'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);