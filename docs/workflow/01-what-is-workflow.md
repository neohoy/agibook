# 01 · Workflow 是什么

<div class="ab-def">

**Workflow**（工作流）是一条**你把步骤定死、它照着走**的流水线：第一步干什么、产出什么、交给第二步什么，全部由你事先规定。它不聪明，但它**每次都一样**。

</div>

## 一条流水线长什么样

<figure class="ab-fig">
<p class="ab-dtitle">一条流水线长什么样</p>
<div class="ab-pipe">
<div class="p-node"><span class="num">1</span><span class="tx">一坨会议记录</span></div>
<div class="p-act"><span class="op">整理成纪要</span><span class="hint">一步 = 一个已经调稳的提示词 / Skill</span></div>
<div class="p-node"><span class="num">2</span><span class="tx">结构化纪要</span></div>
<div class="p-act"><span class="op">抽出待办</span><span class="hint">产出：事项 / 责任人 / 截止</span></div>
<div class="p-node"><span class="num">3</span><span class="tx">待办清单</span></div>
<div class="p-act"><span class="op">按责任人分组，套模板</span><span class="hint">产出：每人一条消息</span></div>
<div class="p-node"><span class="num">4</span><span class="tx">几条待发的消息</span></div>
<div class="p-act human"><span class="op">你过一遍</span><span class="hint">人工卡点，几乎所有流水线都该有</span></div>
<div class="p-node last"><span class="num">5</span><span class="tx">发出去</span></div>
</div>
<figcaption>每一步：明确的输入、明确的产出、明确的验收标准</figcaption>
</figure>

四步 + 一个人工卡点。每一步：**有明确的输入、明确的产出、明确的验收标准**。

这就是全部了。Workflow 这个词听着很工程，实质就是**把你脑子里那套"先干这个再干那个"写下来，让每一步都可重复**。

## 它和你已经会的东西的关系

每一步的内部，用的还是前两篇的东西：

| 层次 | 用什么 |
| --- | --- |
| 一步之内怎么说清楚 | [提示词五要素](../prompt/) |
| 这一步反复要用 | [做成 Skill](../skill/) |
| **步与步之间** | **这一篇** |

**Workflow 不是新技术，是把已经跑通的几件事按顺序摆好。** 所以前提很硬：**每一步单独跑都得是稳的**。一步都还时好时坏，串起来只会把不稳定乘起来——三步各 80% 靠谱，串完只剩 51%。

::: tip 这一条值得停一下
串联会**放大**不稳定，不会抵消它。所以正确顺序永远是：先把每一步单独调稳（[提示词篇 08](../prompt/08-iterate)的测试集），再串。

反过来做——"先把流程搭起来，效果慢慢调"——是这一篇里最贵的一个错误。
:::

## 和 Agent 的分界线

这条线只有一句话：

> **谁来决定走几步。**

| | Workflow | Agent |
| --- | --- | --- |
| 步骤 | 你定死 | 它自己拆 |
| 每次运行 | 路径一样 | 路径可能不同 |
| 出错时 | 知道错在第几步 | 得从头翻它的过程 |
| 成本 | 可预估 | 可能失控 |
| 适合 | **你已经知道该怎么做**的事 | 你不知道该怎么做的事 |
| 调试 | 改那一步就行 | 改提示词，然后祈祷 |

::: warning 一个常见的误解
"Workflow 是低级的，Agent 是高级的" —— 不是。**它们解决的是不同的问题。**

一件你每周都干、步骤固定的活，用 Agent 跑，是把一件确定的事重新变成不确定的事。**这不是升级，是降级。**

判断标准很朴素：**你能不能把步骤写下来？能写下来，就写下来。**
:::

## 为什么"能写下来就写下来"

三个具体的好处，都不玄：

**一、错了知道错在哪。** 流水线跑歪了，你看第几步的产出开始不对，就定位到了。Agent 跑歪了，你得读它那一长串"我先……然后我发现……于是我……"。

**二、改一步不影响别的。** 派活消息的语气要改？只改第三步。前两步一个字不用动，也不用重测。

**三、便宜且可预估。** 四步就是四次调用，你能算出一次多少钱、多少时间。Agent 可能三步跑完，也可能兜十五圈——**账单和耐心都是它自己决定的**。

<div class="ab-do">

下次你想"用 AI 自动化某件事"的时候，先做一个动作：

**拿张纸，把这件事你自己是怎么做的，一步一步写下来。**

能写出来——那就是一条 Workflow，照着串就行。
写到某一步卡住了，发现"这得看情况"——**那一步才是可能需要 Agent 的地方**，而且通常也只有那一步。

大多数人做完这个动作会发现：**本来以为要一个 Agent，实际上要的是四个步骤加一个人工确认。**

</div>

## 三种常见的形状

不是所有流水线都是一条直线。你会遇到的主要是这三种：

<figure class="ab-fig">
<div class="ab-shapes">

<div class="ab-shape">
<svg viewBox="0 0 220 70" role="img" aria-label="串行：A 到 B 到 C">
<rect class="ab-svg-box" x="6" y="24" width="46" height="26" rx="7"/><text class="ab-svg-tx" x="29" y="38">A</text>
<path class="ab-svg-line" d="M54 37 H82" marker-end="url(#ah)"/>
<rect class="ab-svg-box" x="86" y="24" width="46" height="26" rx="7"/><text class="ab-svg-tx" x="109" y="38">B</text>
<path class="ab-svg-line" d="M134 37 H162" marker-end="url(#ah)"/>
<rect class="ab-svg-box" x="166" y="24" width="46" height="26" rx="7"/><text class="ab-svg-tx" x="189" y="38">C</text>
<defs><marker id="ah" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="currentColor" opacity=".55"/></marker></defs>
</svg>
<div class="nm">串行</div>
<div class="ds">上一步的产出是下一步的输入。<b>最常见</b>——纪要 → 待办 → 派活就是这种。</div>
</div>

<div class="ab-shape">
<svg viewBox="0 0 220 100" role="img" aria-label="扇出扇入：A 分成三路再汇总到 C">
<rect class="ab-svg-box" x="4" y="37" width="40" height="26" rx="7"/><text class="ab-svg-tx" x="24" y="51">A</text>
<path class="ab-svg-line" d="M46 50 H66 M66 50 V16 H86 M66 50 H86 M66 50 V84 H86" marker-end="url(#ah2)"/>
<rect class="ab-svg-box alt" x="88" y="4" width="44" height="24" rx="7"/><text class="ab-svg-tx" x="110" y="17">B1</text>
<rect class="ab-svg-box alt" x="88" y="38" width="44" height="24" rx="7"/><text class="ab-svg-tx" x="110" y="51">B2</text>
<rect class="ab-svg-box alt" x="88" y="72" width="44" height="24" rx="7"/><text class="ab-svg-tx" x="110" y="85">B3</text>
<path class="ab-svg-line" d="M134 16 H154 V50 M134 50 H154 M134 84 H154 V50 M154 50 H172" marker-end="url(#ah2)"/>
<rect class="ab-svg-box" x="174" y="37" width="42" height="26" rx="7"/><text class="ab-svg-tx" x="195" y="51">C</text>
<defs><marker id="ah2" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="currentColor" opacity=".55"/></marker></defs>
</svg>
<div class="nm">扇出 / 扇入</div>
<div class="ds">一份材料分头处理再汇总。<b>每支任务单一、质量更稳</b>，还能并行。</div>
</div>

<div class="ab-shape">
<svg viewBox="0 0 220 100" role="img" aria-label="分支：判断后走两条不同的路">
<rect class="ab-svg-box" x="4" y="37" width="40" height="26" rx="7"/><text class="ab-svg-tx" x="24" y="51">A</text>
<path class="ab-svg-line" d="M46 50 H62" marker-end="url(#ah3)"/>
<path class="ab-svg-box" d="M64 50 L86 34 L108 50 L86 66 z"/><text class="ab-svg-tx" x="86" y="51" style="font-size:9px">判断</text>
<path class="ab-svg-line" d="M108 50 H124 V18 H142 M108 50 H124 V82 H142" marker-end="url(#ah3)"/>
<rect class="ab-svg-box" x="144" y="6" width="40" height="24" rx="7"/><text class="ab-svg-tx" x="164" y="19">B</text>
<path class="ab-svg-line" d="M186 18 H200" marker-end="url(#ah3)"/>
<rect class="ab-svg-box" x="202" y="6" width="16" height="24" rx="6"/><text class="ab-svg-tx" x="210" y="19" style="font-size:9px">C</text>
<rect class="ab-svg-box alt" x="144" y="70" width="40" height="24" rx="7"/><text class="ab-svg-tx" x="164" y="83">D</text>
<defs><marker id="ah3" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="currentColor" opacity=".55"/></marker></defs>
</svg>
<div class="nm">分支</div>
<div class="ds">先判断是哪一类，再走不同的路。<b>判断要单独一步</b>，别和处理混在一起。</div>
</div>

</div>
</figure>

::: tip 判断那一步要单独做
别把"判断"和"处理"塞进同一步。让它先只回答"这是哪一类"（输出一个词），再由流程决定走哪条路。

**混在一起的话，它会一边判断一边处理，判断错了你都看不出来。**
:::

## 下一步

[02 · 什么时候该串起来](./02-when) —— 以及三种不该串的情况。
