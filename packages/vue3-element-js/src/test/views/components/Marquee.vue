<route>
{
  name: "name-override",
  meta: {
    requiresAuth: false
  }
}
</route>
<script setup>
import { templateRef } from "@vueuse/core";
// eslint-disable-next-line no-undef
const scroll = templateRef("scroll", null);
let listData = ref([
  {
    title: `S阿里巴巴集团控股有限公司（简称：阿里巴巴集团）是马云带领下的18位创始人于1999年在浙江省杭州市创立的公司。 [276] 
阿里巴巴集团经营多项业务，另外也从关联公司的业务和服务中取得经营商业生态系统上的支援。业务和关联公司的业务包括：淘宝网、天猫、聚划算、全球速卖通、阿里巴巴国际交易市场、1688、阿里妈妈、阿里云、蚂蚁集团 [408]  、菜鸟网络等。 [1] 
20多年来，阿里巴巴已由一家电子商务公司彻底蜕变为以技术驱动，包含数字商业、金融科技、智慧物流、云计算、人地关系文化娱乐等场景的平台，服务数以亿计的消费者和数千万的中小企业。 [277]  阿里巴巴致力于让天下没有难做的生意[287]，开拓数字经济时代的商业基础设施， [278]  助力消费市场繁荣，推动各行各业走向数字化、智能化。 [279-280] 
2014年9月19日，阿里巴巴集团在纽约证券交易所正式挂牌上市，股票代码“BABA” [281]  ， 2019年11月26日，阿里巴巴在香港交易所上市，成为首个同时在美股和港股上市的中国互联网公司。 [282] 
2019年10月23日， 2019《财富》未来50强榜单公布，阿里巴巴集团排名第11。 [7]  “一带一路”中国企业100强榜单排名第5位。 [8]  12月，阿里巴巴集团入选2019中国品牌强国盛典榜样100品牌。 [10]  2020年1月11日，阿里巴巴宣布其成为鼠年春晚独家电商合作伙伴，并提供电商补贴。 [11]  2021年9月3日，阿里巴巴助力共同富裕工作小组正式成立，作为常设机构，集团董事会主席兼首席执行官张勇任组长。 [272] crollingtext...456666666666666666666666666666666666666666666666666666666666666666666666666666661233333333333333333333333333333333333333333333333333333331111Scrollingtext...45666666666666666666666666666666666666666666666666666666666666666666666666666666123333333333333333333333333333333333333333333333333333333111`,
  },
  {
    title: "无缝滚动第二行无缝滚动第二行！！！！！！！！！！",
  },
  {
    title: "无缝滚动第三行无缝滚动第三行！！！！！！！！！！",
  },
  {
    title: "无缝滚动第四行无缝滚动第四行！！！！！！！！！！",
  },
  {
    title: "无缝滚动第五行无缝滚动第五行！！！！！！！！！！",
  },
  {
    title: "无缝滚动第六行无缝滚动第六行！！！！！！！！！！",
  },
  {
    title: "无缝滚动第七行无缝滚动第七行！！！！！！！！！！",
  },
  {
    title: "无缝滚动第八行无缝滚动第八行！！！！！！！！！！",
  },
  {
    title: "无缝滚动第九行无缝滚动第九行！！！！！！！！！！",
  },
]);
let classOption = reactive({
  direction: "top",
});
function changeDirection(val) {
  // @ts-ignore
  unref(scroll).reset();
  unref(classOption).direction = val;
}
</script>

<template>
  <el-space wrap>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>无缝滚动示例</span>
          <el-button class="button" type="text" @click="changeDirection('top')">
            <span
              :style="{ color: classOption.direction === 'top' ? 'red' : '' }"
            >
              向上滚动
            </span>
          </el-button>
          <el-button
            class="button"
            type="text"
            @click="changeDirection('bottom')"
          >
            <span
              :style="{
                color: classOption.direction === 'bottom' ? 'red' : '',
              }"
            >
              向下滚动
            </span>
          </el-button>
          <el-button
            class="button"
            type="text"
            @click="changeDirection('left')"
          >
            <span
              :style="{ color: classOption.direction === 'left' ? 'red' : '' }"
            >
              向左滚动
            </span>
          </el-button>
          <el-button
            class="button"
            type="text"
            @click="changeDirection('right')"
          >
            <span
              :style="{ color: classOption.direction === 'right' ? 'red' : '' }"
            >
              向右滚动
            </span>
          </el-button>
        </div>
      </template>
      <the-marquee
        ref="scroll"
        :data="listData"
        :class-option="classOption"
        class="warp"
      >
        <ul class="item">
          <li v-for="(item, index) in listData" :key="index">
            <span class="title" v-text="item.title" />
          </li>
        </ul>
      </the-marquee>
    </el-card>
  </el-space>
</template>

<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    margin-right: 20px;
  }
}
.warp {
  height: 270px;
  width: 360px;
  margin: 0 auto;
  overflow: hidden;
  ul {
    list-style: none;
    padding: 0;
    margin: 0 auto;
    li,
    a {
      height: 30px;
      line-height: 30px;
      display: flex;
      justify-content: space-between;
      font-size: 15px;
    }
  }
}
</style>
