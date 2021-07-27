<template>
  <div>
    <publication paper_link="https://arxiv.org/abs/2008.08294">
      <div class="title">TNT: Target-driveN Trajectory Prediction</div>
      Hang Zhao*, Jiyang Gao*, Tian Lan, Chen Sun, Benjamin Sapp, Balakrishnan Varadarajan, Yue Shen, Yi Shen, Yuning
      Chai, Cordelia Schmid, Congcong Li, Dragomir Anguelov<br/>
      Conference on Robot Learning (<b>CoRL</b>)<br/>
      Boston (virtual), Nov. 2020<br/>
      "A new SOTA multi-trajectory prediction model."<br/>
    </publication>

    <publication paper_link="https://arxiv.org/abs/2008.08294">
      <div class="title">VectorNet: Encoding HD Maps and Agent Dynamics from Vectorized Representation</div>
      Jiyang Gao*, Chen Sun*, Hang Zhao, Yi Shen, Dragomir Anguelov, Congcong Li, Cordelia Schmid<br/>
      In Proc. Computer Vision and Pattern Recognition (<b>CVPR</b>)<br/>
      Seattle (virtual), June. 2020<br/>
      "A graphical representation of HD maps."<br/>
    </publication>
  </div>
</template>

<script>
import Publication from "@/views/guide/publication";

export default {
  name: "publications.vue",
  components: {Publication}
}
</script>
