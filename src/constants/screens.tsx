import { FifthScreen } from "../components/FifthScreen";
import { FourthScreen } from "../components/FourthScreen";
import { MainScreen } from "../components/MainScreen";
import { Point } from "../components/Particles";
import { SecondScreen } from "../components/SecondScreen";
import { SixthScreen } from "../components/SixthScreen";
import { ThirdScreen } from "../components/ThirdScreen";
import { calcVWP } from "../utils/hooks/functions";

export const screens = [
  {
    id: 'home', color: 'blue', name: 'Home', component: <MainScreen />, imageUrl: '/bg-images/main-bg.webp', imageMobile: '/bg-images/home-mobile.webp',
    spaces: [
      [
        { x: calcVWP(0), y: calcVWP(550) },
        { x: calcVWP(607), y: calcVWP(550) },
        { x: calcVWP(595), y: calcVWP(575) },
        { x: calcVWP(585), y: calcVWP(580) },
        { x: calcVWP(585), y: calcVWP(580) },
        { x: calcVWP(575), y: calcVWP(556) },
        { x: calcVWP(575), y: calcVWP(595) },
        { x: calcVWP(568), y: calcVWP(620) },
        { x: calcVWP(560), y: calcVWP(605) },
        { x: calcVWP(560), y: calcVWP(645) },
        { x: calcVWP(543), y: calcVWP(630) },
        { x: calcVWP(558), y: calcVWP(670) },
        { x: calcVWP(550), y: calcVWP(705) },
        { x: calcVWP(578), y: calcVWP(755) },
        { x: calcVWP(620), y: calcVWP(773) },
        { x: calcVWP(660), y: calcVWP(777) },
        { x: calcVWP(692), y: calcVWP(775) },
        { x: calcVWP(696), y: calcVWP(757) },
        { x: calcVWP(680), y: calcVWP(715) },
        { x: calcVWP(655), y: calcVWP(695) },
        { x: calcVWP(665), y: calcVWP(680) },
        { x: calcVWP(665), y: calcVWP(680) },
        { x: calcVWP(694), y: calcVWP(699) },
        { x: calcVWP(686), y: calcVWP(724) },
        { x: calcVWP(698), y: calcVWP(762) },
        { x: calcVWP(707), y: calcVWP(763) },
        { x: calcVWP(722), y: calcVWP(701) },
        { x: calcVWP(712), y: calcVWP(666) },
        { x: calcVWP(695), y: calcVWP(653) },
        { x: calcVWP(697), y: calcVWP(635) },
        { x: calcVWP(723), y: calcVWP(622) },
        { x: calcVWP(763), y: calcVWP(617) },
        { x: calcVWP(784), y: calcVWP(628) },
        { x: calcVWP(779), y: calcVWP(612) },
        { x: calcVWP(807), y: calcVWP(603) },
        { x: calcVWP(816), y: calcVWP(592) },
        { x: calcVWP(839), y: calcVWP(602) },
        { x: calcVWP(830), y: calcVWP(578) },
        { x: calcVWP(853), y: calcVWP(569) },
        { x: calcVWP(851), y: calcVWP(560) },
        { x: calcVWP(882), y: calcVWP(536) },
        { x: calcVWP(854), y: calcVWP(546) },
        { x: calcVWP(880), y: calcVWP(495) },
        { x: calcVWP(867), y: calcVWP(487) },
        { x: calcVWP(911), y: calcVWP(467) },
        { x: calcVWP(936), y: calcVWP(441) },
        { x: calcVWP(960), y: calcVWP(419) },
        { x: calcVWP(981), y: calcVWP(433) },
        { x: calcVWP(1002), y: calcVWP(454) },
        { x: calcVWP(1015), y: calcVWP(456) },
        { x: calcVWP(1029), y: calcVWP(466) },
        { x: calcVWP(1035), y: calcVWP(467) },
        { x: calcVWP(1064), y: calcVWP(483) },
        { x: calcVWP(1063), y: calcVWP(488) },
        { x: calcVWP(1034), y: calcVWP(485) },
        { x: calcVWP(1059), y: calcVWP(498) },
        { x: calcVWP(1020), y: calcVWP(516) },
        { x: calcVWP(1015), y: calcVWP(519) },
        { x: calcVWP(1052), y: calcVWP(521) },
        { x: calcVWP(1024), y: calcVWP(537) },
        { x: calcVWP(980), y: calcVWP(564) },
        { x: calcVWP(962), y: calcVWP(568) },
        { x: calcVWP(993), y: calcVWP(575) },
        { x: calcVWP(967), y: calcVWP(589) },
        { x: calcVWP(925), y: calcVWP(598) },
        { x: calcVWP(895), y: calcVWP(598) },
        { x: calcVWP(871), y: calcVWP(590) },
        { x: calcVWP(895), y: calcVWP(613) },
        { x: calcVWP(885), y: calcVWP(621) },
        { x: calcVWP(913), y: calcVWP(623) },
        { x: calcVWP(867), y: calcVWP(657) },
        { x: calcVWP(820), y: calcVWP(709) },
        { x: calcVWP(860), y: calcVWP(688) },
        { x: calcVWP(869), y: calcVWP(693) },
        { x: calcVWP(885), y: calcVWP(680) },
        { x: calcVWP(840), y: calcVWP(731) },
        { x: calcVWP(911), y: calcVWP(679) },
        { x: calcVWP(878), y: calcVWP(720) },
        { x: calcVWP(877), y: calcVWP(728) },
        { x: calcVWP(829), y: calcVWP(779) },
        { x: calcVWP(823), y: calcVWP(793) },
        { x: calcVWP(825), y: calcVWP(817) },
        { x: calcVWP(826), y: calcVWP(824) },
        { x: calcVWP(805), y: calcVWP(847) },
        { x: calcVWP(775), y: calcVWP(829) },
        { x: calcVWP(769), y: calcVWP(829) },
        { x: calcVWP(748), y: calcVWP(811) },
        { x: calcVWP(774), y: calcVWP(860) },
        { x: calcVWP(773), y: calcVWP(877) },
        { x: calcVWP(763), y: calcVWP(887) },
        { x: calcVWP(723), y: calcVWP(893) },
        { x: calcVWP(663), y: calcVWP(902) },
        { x: calcVWP(650), y: calcVWP(904) },
        { x: calcVWP(632), y: calcVWP(905) },
        { x: calcVWP(578), y: calcVWP(888) },
        { x: calcVWP(590), y: calcVWP(874) },
        { x: calcVWP(566), y: calcVWP(879) },
        { x: calcVWP(541), y: calcVWP(873) },
        { x: calcVWP(511), y: calcVWP(856) },
        { x: calcVWP(517), y: calcVWP(878) },
        { x: calcVWP(468), y: calcVWP(861) },
        { x: calcVWP(467), y: calcVWP(842) },
        { x: calcVWP(448), y: calcVWP(854) },
        { x: calcVWP(432), y: calcVWP(845) },
        { x: calcVWP(440), y: calcVWP(819) },
        { x: calcVWP(429), y: calcVWP(829) },
        { x: calcVWP(391), y: calcVWP(838) },
        { x: calcVWP(355), y: calcVWP(834) },
        { x: calcVWP(382), y: calcVWP(815) },
        { x: calcVWP(352), y: calcVWP(824) },
        { x: calcVWP(294), y: calcVWP(813) },
        { x: calcVWP(320), y: calcVWP(803) },
        { x: calcVWP(281), y: calcVWP(802) },
        { x: calcVWP(242), y: calcVWP(827) },
        { x: calcVWP(234), y: calcVWP(829) },
        { x: calcVWP(224), y: calcVWP(820) },
        { x: calcVWP(210), y: calcVWP(836) },
        { x: calcVWP(190), y: calcVWP(837) },
        { x: calcVWP(179), y: calcVWP(825) },
        { x: calcVWP(182), y: calcVWP(838) },
        { x: calcVWP(126), y: calcVWP(837) },
        { x: calcVWP(104), y: calcVWP(829) },
        { x: calcVWP(95), y: calcVWP(816) },
        { x: calcVWP(96), y: calcVWP(803) },
        { x: calcVWP(86), y: calcVWP(811) },
        { x: calcVWP(67), y: calcVWP(831) },
        { x: calcVWP(52), y: calcVWP(829) },
        { x: calcVWP(2), y: calcVWP(802) },
        { x: calcVWP(0), y: calcVWP(800) },
      ],
      [
        { x: calcVWP(987), y: calcVWP(895) },
        { x: calcVWP(1011), y: calcVWP(849) },
        { x: calcVWP(1067), y: calcVWP(831) },
        { x: calcVWP(1085), y: calcVWP(823) },
        { x: calcVWP(1087), y: calcVWP(813) },
        { x: calcVWP(1095), y: calcVWP(819) },
        { x: calcVWP(1099), y: calcVWP(810) },
        { x: calcVWP(1180), y: calcVWP(811) },
        { x: calcVWP(1154), y: calcVWP(793) },
        { x: calcVWP(1164), y: calcVWP(779) },
        { x: calcVWP(1175), y: calcVWP(796) },
        { x: calcVWP(1194), y: calcVWP(827) },
        { x: calcVWP(1196), y: calcVWP(832) },
        { x: calcVWP(1198), y: calcVWP(821) },
        { x: calcVWP(1225), y: calcVWP(850) },
        { x: calcVWP(1228), y: calcVWP(859) },
        { x: calcVWP(1231), y: calcVWP(882) },
        { x: calcVWP(1249), y: calcVWP(861) },
        { x: calcVWP(1249), y: calcVWP(851) },
        { x: calcVWP(1263), y: calcVWP(834) },
        { x: calcVWP(1267), y: calcVWP(818) },
        { x: calcVWP(1279), y: calcVWP(783) },
        { x: calcVWP(1305), y: calcVWP(806) },
        { x: calcVWP(1288), y: calcVWP(750) },
        { x: calcVWP(1332), y: calcVWP(789) },
        { x: calcVWP(1331), y: calcVWP(760) },
        { x: calcVWP(1358), y: calcVWP(776) },
        { x: calcVWP(1344), y: calcVWP(755) },
        { x: calcVWP(1368), y: calcVWP(766) },
        { x: calcVWP(1400), y: calcVWP(824) },
        { x: calcVWP(1378), y: calcVWP(816) },
        { x: calcVWP(1381), y: calcVWP(826) },
        { x: calcVWP(1402), y: calcVWP(841) },
        { x: calcVWP(1397), y: calcVWP(853) },
        { x: calcVWP(1408), y: calcVWP(851) },
        { x: calcVWP(1413), y: calcVWP(880) },
        { x: calcVWP(1406), y: calcVWP(883) },
        { x: calcVWP(1386), y: calcVWP(869) },
        { x: calcVWP(1393), y: calcVWP(883) },
        { x: calcVWP(1394), y: calcVWP(892) },
        { x: calcVWP(1383), y: calcVWP(898) },
        { x: calcVWP(1346), y: calcVWP(901) },
        { x: calcVWP(1329), y: calcVWP(908) },
        { x: calcVWP(1298), y: calcVWP(905) },
        { x: calcVWP(1270), y: calcVWP(918) },
        { x: calcVWP(1256), y: calcVWP(910) },
        { x: calcVWP(1219), y: calcVWP(918) },
        { x: calcVWP(1185), y: calcVWP(912) },
        { x: calcVWP(1160), y: calcVWP(912) },
        { x: calcVWP(1151), y: calcVWP(907) },
        { x: calcVWP(1136), y: calcVWP(908) },
        { x: calcVWP(1123), y: calcVWP(898) },
        { x: calcVWP(1095), y: calcVWP(901) },
        { x: calcVWP(1084), y: calcVWP(895) },
        { x: calcVWP(1058), y: calcVWP(893) },
        { x: calcVWP(1049), y: calcVWP(892) },
        { x: calcVWP(1024), y: calcVWP(898) },
        { x: calcVWP(1009), y: calcVWP(903) },
      ],
      [
        { x: calcVWP(1653), y: calcVWP(463) },
        { x: calcVWP(1654), y: calcVWP(465) },
        { x: calcVWP(1647), y: calcVWP(483) },
        { x: calcVWP(1633), y: calcVWP(484) },
        { x: calcVWP(1615), y: calcVWP(503) },
        { x: calcVWP(1614), y: calcVWP(549) },
        { x: calcVWP(1597), y: calcVWP(583) },
        { x: calcVWP(1609), y: calcVWP(597) },
        { x: calcVWP(1623), y: calcVWP(596) },
        { x: calcVWP(1642), y: calcVWP(584) },
        { x: calcVWP(1647), y: calcVWP(561) },
        { x: calcVWP(1654), y: calcVWP(549) },
        { x: calcVWP(1670), y: calcVWP(563) },
        { x: calcVWP(1663), y: calcVWP(569) },
        { x: calcVWP(1664), y: calcVWP(580) },
        { x: calcVWP(1641), y: calcVWP(595) },
        { x: calcVWP(1644), y: calcVWP(621) },
        { x: calcVWP(1652), y: calcVWP(629) },
        { x: calcVWP(1666), y: calcVWP(632) },
        { x: calcVWP(1679), y: calcVWP(640) },
        { x: calcVWP(1699), y: calcVWP(641) },
        { x: calcVWP(1712), y: calcVWP(646) },
        { x: calcVWP(1732), y: calcVWP(638) },
        { x: calcVWP(1750), y: calcVWP(637) },
        { x: calcVWP(1761), y: calcVWP(626) },
        { x: calcVWP(1775), y: calcVWP(624) },
        { x: calcVWP(1797), y: calcVWP(589) },
        { x: calcVWP(1795), y: calcVWP(571) },
        { x: calcVWP(1793), y: calcVWP(567) },
        { x: calcVWP(1807), y: calcVWP(553) },
        { x: calcVWP(1800), y: calcVWP(529) },
        { x: calcVWP(1805), y: calcVWP(496) },
        { x: calcVWP(1920), y: calcVWP(636) },
        { x: calcVWP(1920), y: calcVWP(858) },
        { x: calcVWP(1886), y: calcVWP(860) },
        { x: calcVWP(1855), y: calcVWP(848) },
        { x: calcVWP(1855), y: calcVWP(862) },
        { x: calcVWP(1838), y: calcVWP(869) },
        { x: calcVWP(1833), y: calcVWP(878) },
        { x: calcVWP(1800), y: calcVWP(879) },
        { x: calcVWP(1802), y: calcVWP(864) },
        { x: calcVWP(1728), y: calcVWP(897) },
        { x: calcVWP(1720), y: calcVWP(893) },
        { x: calcVWP(1706), y: calcVWP(909) },
        { x: calcVWP(1676), y: calcVWP(910) },
        { x: calcVWP(1688), y: calcVWP(897) },
        { x: calcVWP(1657), y: calcVWP(864) },
        { x: calcVWP(1617), y: calcVWP(835) },
        { x: calcVWP(1602), y: calcVWP(802) },
        { x: calcVWP(1605), y: calcVWP(768) },
        { x: calcVWP(1598), y: calcVWP(731) },
        { x: calcVWP(1608), y: calcVWP(725) },
        { x: calcVWP(1655), y: calcVWP(775) },
        { x: calcVWP(1634), y: calcVWP(723) },
        { x: calcVWP(1676), y: calcVWP(749) },
        { x: calcVWP(1667), y: calcVWP(727) },
        { x: calcVWP(1713), y: calcVWP(751) },
        { x: calcVWP(1661), y: calcVWP(685) },
        { x: calcVWP(1593), y: calcVWP(615) },
        { x: calcVWP(1533), y: calcVWP(559) },
        { x: calcVWP(1560), y: calcVWP(556) },
        { x: calcVWP(1555), y: calcVWP(546) },
        { x: calcVWP(1508), y: calcVWP(509) },
        { x: calcVWP(1528), y: calcVWP(503) },
        { x: calcVWP(1503), y: calcVWP(502) },
        { x: calcVWP(1456), y: calcVWP(480) },
        { x: calcVWP(1476), y: calcVWP(463) },
      ]
    ] as Point[][],

    minParticles: 300,
    maxParticles: 400,
    minSpeed: 10,
    maxSpeed: 30,
    pointColors: ['#33FF5750'],
    pointMinSize: 2,
    pointMaxSize: 3,
    movementDirection: 'left-to-right',
    noVisible: "top",
    divade: 2.5
  },
  {
    id: 'trailer', color: 'black', name: 'Trailer', component: <SecondScreen />, imageUrl: '/bg-images/second-bg.webp', imageMobile: '/bg-images/second-mobile-bg.webp',
    spaces: [
      [
        { x: calcVWP(0), y: calcVWP(502) },
        { x: calcVWP(107), y: calcVWP(400) },
        { x: calcVWP(194), y: calcVWP(341) },
        { x: calcVWP(244), y: calcVWP(314) },
        { x: calcVWP(279), y: calcVWP(308) },
        { x: calcVWP(306), y: calcVWP(280) },
        { x: calcVWP(323), y: calcVWP(241) },
        { x: calcVWP(335), y: calcVWP(206) },
        { x: calcVWP(367), y: calcVWP(277) },
        { x: calcVWP(388), y: calcVWP(330) },
        { x: calcVWP(407), y: calcVWP(354) },
        { x: calcVWP(414), y: calcVWP(464) },
        { x: calcVWP(422), y: calcVWP(512) },
        { x: calcVWP(430), y: calcVWP(548) },
        { x: calcVWP(438), y: calcVWP(514) },
        { x: calcVWP(462), y: calcVWP(462) },
        { x: calcVWP(522), y: calcVWP(552) },
        { x: calcVWP(551), y: calcVWP(614) },
        { x: calcVWP(563), y: calcVWP(684) },
        { x: calcVWP(584), y: calcVWP(738) },
        { x: calcVWP(617), y: calcVWP(668) },
        { x: calcVWP(632), y: calcVWP(578) },
        { x: calcVWP(680), y: calcVWP(497) },
        { x: calcVWP(728), y: calcVWP(572) },
        { x: calcVWP(778), y: calcVWP(684) },
        { x: calcVWP(820), y: calcVWP(789) },
        { x: calcVWP(871), y: calcVWP(883) },
        { x: calcVWP(896), y: calcVWP(917) },
        { x: calcVWP(1011), y: calcVWP(835) },
        { x: calcVWP(1080), y: calcVWP(717) },
        { x: calcVWP(1142), y: calcVWP(617) },
        { x: calcVWP(1193), y: calcVWP(506) },
        { x: calcVWP(1216), y: calcVWP(487) },
        { x: calcVWP(1276), y: calcVWP(603) },
        { x: calcVWP(1347), y: calcVWP(744) },
        { x: calcVWP(1435), y: calcVWP(822) },
        { x: calcVWP(1477), y: calcVWP(785) },
        { x: calcVWP(1521), y: calcVWP(673) },
        { x: calcVWP(1551), y: calcVWP(547) },
        { x: calcVWP(1563), y: calcVWP(503) },
        { x: calcVWP(1610), y: calcVWP(421) },
        { x: calcVWP(1653), y: calcVWP(354) },
        { x: calcVWP(1760), y: calcVWP(492) },
        { x: calcVWP(1834), y: calcVWP(659) },
        { x: calcVWP(1882), y: calcVWP(823) },
        { x: calcVWP(1906), y: calcVWP(846) },
        { x: calcVWP(1907), y: calcVWP(920) },
        { x: calcVWP(0), y: calcVWP(918) },
      ]
    ] as Point[][],

    minParticles: 300,
    maxParticles: 400,
    minSpeed: 5,
    maxSpeed: 20,
    pointColors: ['#ff910080'],
    pointMinSize: 2,
    pointMaxSize: 3,
    movementDirection: 'top-to-bottom',
    noVisible: "top",
    divade: 5
  },
  {
    id: 'how-it-works', color: 'green', name: 'How it works', component: <ThirdScreen />, imageUrl: '/bg-images/third-bg.webp', imageMobile: '/bg-images/third-mobile-bg.webp',
    spaces: [
      [
        { x: calcVWP(0), y: calcVWP(88) },
        { x: calcVWP(0), y: calcVWP(550) },
        { x: calcVWP(124), y: calcVWP(673) },
        { x: calcVWP(287), y: calcVWP(593) },
        { x: calcVWP(409), y: calcVWP(726) },
        { x: calcVWP(519), y: calcVWP(824) },
        { x: calcVWP(791), y: calcVWP(726) },
        { x: calcVWP(1085), y: calcVWP(762) },
        { x: calcVWP(1257), y: calcVWP(793) },
        { x: calcVWP(1399), y: calcVWP(718) },
        { x: calcVWP(1498), y: calcVWP(872) },
        { x: calcVWP(1636), y: calcVWP(760) },
        { x: calcVWP(1698), y: calcVWP(552) },
        { x: calcVWP(1830), y: calcVWP(368) },
        { x: calcVWP(1911), y: calcVWP(269) },
        { x: calcVWP(1912), y: calcVWP(92) },
      ]
    ] as Point[][],

    minParticles: 100,
    maxParticles: 200,
    minSpeed: 5,
    maxSpeed: 20,
    pointColors: ['#FF004570', '#00000070'],
    pointMinSize: 2,
    pointMaxSize: 3,
    movementDirection: 'bottom-to-top',
    noVisible: "bottom",
    divade: 5
  },
  { id: 'tokenomics', color: 'yellow', name: 'Tokenomics', component: <FourthScreen />, imageUrl: '/bg-images/fourth-bg.webp', imageMobile: '/bg-images/fourth-mobile-bg.webp' },
  {
    id: 'roadmap', color: 'gray', name: 'Roadmap', component: <FifthScreen />, imageUrl: '/bg-images/fifth-bg.webp', imageMobile: '/bg-images/fifth-mobile-bg.webp',
    spaces: [
      [
        { x: calcVWP(0), y: calcVWP(138) },
        { x: calcVWP(30), y: calcVWP(27) },
        { x: calcVWP(51), y: calcVWP(108) },
        { x: calcVWP(98), y: calcVWP(71) },
        { x: calcVWP(135), y: calcVWP(58) },
        { x: calcVWP(164), y: calcVWP(35) },
        { x: calcVWP(253), y: calcVWP(41) },
        { x: calcVWP(310), y: calcVWP(38) },
        { x: calcVWP(346), y: calcVWP(69) },
        { x: calcVWP(323), y: calcVWP(95) },
        { x: calcVWP(406), y: calcVWP(86) },
        { x: calcVWP(413), y: calcVWP(126) },
        { x: calcVWP(446), y: calcVWP(151) },
        { x: calcVWP(467), y: calcVWP(97) },
        { x: calcVWP(506), y: calcVWP(80) },
        { x: calcVWP(549), y: calcVWP(112) },
        { x: calcVWP(578), y: calcVWP(120) },
        { x: calcVWP(612), y: calcVWP(169) },
        { x: calcVWP(589), y: calcVWP(208) },
        { x: calcVWP(679), y: calcVWP(190) },
        { x: calcVWP(713), y: calcVWP(202) },
        { x: calcVWP(718), y: calcVWP(241) },
        { x: calcVWP(729), y: calcVWP(294) },
        { x: calcVWP(798), y: calcVWP(279) },
        { x: calcVWP(845), y: calcVWP(275) },
        { x: calcVWP(905), y: calcVWP(259) },
        { x: calcVWP(972), y: calcVWP(245) },
        { x: calcVWP(1029), y: calcVWP(212) },
        { x: calcVWP(1068), y: calcVWP(190) },
        { x: calcVWP(1117), y: calcVWP(187) },
        { x: calcVWP(1164), y: calcVWP(228) },
        { x: calcVWP(1204), y: calcVWP(223) },
        { x: calcVWP(1255), y: calcVWP(236) },
        { x: calcVWP(1311), y: calcVWP(276) },
        { x: calcVWP(1354), y: calcVWP(318) },
        { x: calcVWP(1383), y: calcVWP(265) },
        { x: calcVWP(1401), y: calcVWP(204) },
        { x: calcVWP(1427), y: calcVWP(160) },
        { x: calcVWP(1498), y: calcVWP(109) },
        { x: calcVWP(1597), y: calcVWP(123) },
        { x: calcVWP(1684), y: calcVWP(149) },
        { x: calcVWP(1788), y: calcVWP(193) },
        { x: calcVWP(1882), y: calcVWP(202) },
        { x: calcVWP(1900), y: calcVWP(203) },
        { x: calcVWP(1895), y: calcVWP(473) },
        { x: calcVWP(1910), y: calcVWP(642) },
        { x: calcVWP(1907), y: calcVWP(1080) },
        { x: calcVWP(1411), y: calcVWP(1080) },
        { x: calcVWP(1225), y: calcVWP(1000) },
        { x: calcVWP(995), y: calcVWP(966) },
        { x: calcVWP(724), y: calcVWP(1000) },
        { x: calcVWP(452), y: calcVWP(980) },
        { x: calcVWP(156), y: calcVWP(1050) },
        { x: calcVWP(125), y: calcVWP(1020) },
        { x: calcVWP(33), y: calcVWP(1050) },
        { x: calcVWP(7), y: calcVWP(1080) },
      ]
    ] as Point[][],

    minParticles: 300,
    maxParticles: 400,
    minSpeed: 5,
    maxSpeed: 20,
    pointColors: ['#FF00FF60'],
    pointMinSize: 2,
    pointMaxSize: 3,
    movementDirection: 'top-to-bottom',
    noVisible: "top",
    divade: 5
  },
  {
    id: 'faq', color: 'red', name: 'FAQ', component: <SixthScreen />, imageUrl: '/bg-images/sixth-bg.webp', imageMobile: '/bg-images/sixth-mobile-bg.webp',
    spaces: [
      [
        { x: calcVWP(74), y: calcVWP(740) },
        { x: calcVWP(40), y: calcVWP(785) },
        { x: calcVWP(27), y: calcVWP(851) },
        { x: calcVWP(73), y: calcVWP(898) },
        { x: calcVWP(114), y: calcVWP(864) },
        { x: calcVWP(157), y: calcVWP(903) },
        { x: calcVWP(183), y: calcVWP(940) },
        { x: calcVWP(237), y: calcVWP(924) },
        { x: calcVWP(253), y: calcVWP(886) },
        { x: calcVWP(285), y: calcVWP(918) },
        { x: calcVWP(329), y: calcVWP(940) },
        { x: calcVWP(359), y: calcVWP(911) },
        { x: calcVWP(407), y: calcVWP(916) },
        { x: calcVWP(429), y: calcVWP(904) },
        { x: calcVWP(432), y: calcVWP(858) },
        { x: calcVWP(472), y: calcVWP(819) },
        { x: calcVWP(504), y: calcVWP(838) },
        { x: calcVWP(535), y: calcVWP(821) },
        { x: calcVWP(547), y: calcVWP(773) },
        { x: calcVWP(594), y: calcVWP(779) },
        { x: calcVWP(622), y: calcVWP(798) },
        { x: calcVWP(666), y: calcVWP(786) },
        { x: calcVWP(683), y: calcVWP(757) },
        { x: calcVWP(679), y: calcVWP(670) },
        { x: calcVWP(591), y: calcVWP(617) },
        { x: calcVWP(562), y: calcVWP(574) },
        { x: calcVWP(526), y: calcVWP(536) },
        { x: calcVWP(471), y: calcVWP(591) },
        { x: calcVWP(418), y: calcVWP(541) },
        { x: calcVWP(364), y: calcVWP(568) },
        { x: calcVWP(348), y: calcVWP(520) },
        { x: calcVWP(316), y: calcVWP(592) },
        { x: calcVWP(232), y: calcVWP(584) },
        { x: calcVWP(190), y: calcVWP(733) },
        { x: calcVWP(127), y: calcVWP(763) },
        { x: calcVWP(61), y: calcVWP(807) },
      ],
      [

        { x: calcVWP(1219), y: calcVWP(843) },
        { x: calcVWP(1254), y: calcVWP(910) },
        { x: calcVWP(1313), y: calcVWP(929) },
        { x: calcVWP(1350), y: calcVWP(928) },
        { x: calcVWP(1390), y: calcVWP(952) },
        { x: calcVWP(1414), y: calcVWP(988) },
        { x: calcVWP(1484), y: calcVWP(954) },
        { x: calcVWP(1548), y: calcVWP(980) },
        { x: calcVWP(1573), y: calcVWP(932) },
        { x: calcVWP(1599), y: calcVWP(852) },
        { x: calcVWP(1577), y: calcVWP(762) },
        { x: calcVWP(1485), y: calcVWP(714) },
        { x: calcVWP(1439), y: calcVWP(590) },
        { x: calcVWP(1431), y: calcVWP(596) },
        { x: calcVWP(1362), y: calcVWP(595) },
        { x: calcVWP(1304), y: calcVWP(554) },
        { x: calcVWP(1262), y: calcVWP(595) },
        { x: calcVWP(1238), y: calcVWP(787) },
        { x: calcVWP(1213), y: calcVWP(832) },
      ]
    ] as Point[][],

    minParticles: 300,
    maxParticles: 400,
    minSpeed: 5,
    maxSpeed: 20,
    pointColors: ['#00EEFF'],
    pointMinSize: 1.5,
    pointMaxSize: 2.5,
    movementDirection: 'bottom-to-top',
    noVisible: "bottom",
    divade: 5
  },
]
