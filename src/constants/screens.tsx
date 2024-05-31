import { lazy } from "react";
import { calcVWD, calcVWP } from "../utils/hooks/functions";
import { Point } from "../utils/interface/particles";

const MainScreen = lazy(() => import("../components/MainScreen"));
const SecondScreen = lazy(() => import("../components/SecondScreen"));
const ThirdScreen = lazy(() => import("../components/ThirdScreen"));
const FourthScreen = lazy(() => import("../components/FourthScreen"));
const FifthScreen = lazy(() => import("../components/FifthScreen"));
const SixthScreen = lazy(() => import("../components/SixthScreen"));

export const screens = (w: number) => ([
  {
    id: 'home', color: 'blue', name: 'Home', component: <MainScreen />, imageUrl: '/bg-images/main-bg.webp', imageMobile: '/bg-images/home-mobile.webp',
    desktop: {
      spaces: [
        [
          { x: calcVWP(1127, w), y: calcVWP(30, w) },
          { x: calcVWP(1178, w), y: calcVWP(5, w) },
          { x: calcVWP(1238, w), y: calcVWP(41, w) },
          { x: calcVWP(1277, w), y: calcVWP(42, w) },
          { x: calcVWP(1279, w), y: calcVWP(45, w) },
          { x: calcVWP(1250, w), y: calcVWP(75, w) },
          { x: calcVWP(1222, w), y: calcVWP(85, w) },
          { x: calcVWP(1227, w), y: calcVWP(70, w) },
          { x: calcVWP(1204, w), y: calcVWP(87, w) },
          { x: calcVWP(1187, w), y: calcVWP(95, w) },
          { x: calcVWP(1177, w), y: calcVWP(93, w) },
          { x: calcVWP(1180, w), y: calcVWP(73, w) },
          { x: calcVWP(1151, w), y: calcVWP(88, w) },
          { x: calcVWP(1142, w), y: calcVWP(86, w) },
          { x: calcVWP(1152, w), y: calcVWP(33, w) },
          { x: calcVWP(1137, w), y: calcVWP(59, w) },
          { x: calcVWP(1128, w), y: calcVWP(59, w) }
        ],
        [
          { x: calcVWP(0, w), y: calcVWP(650, w) },
          { x: calcVWP(633, w), y: calcVWP(316, w) },
          { x: calcVWP(658, w), y: calcVWP(327, w) },
          { x: calcVWP(683, w), y: calcVWP(339, w) },
          { x: calcVWP(699, w), y: calcVWP(357, w) },
          { x: calcVWP(700, w), y: calcVWP(369, w) },
          { x: calcVWP(693, w), y: calcVWP(381, w) },
          { x: calcVWP(642, w), y: calcVWP(377, w) },
          { x: calcVWP(666, w), y: calcVWP(390, w) },
          { x: calcVWP(697, w), y: calcVWP(402, w) },
          { x: calcVWP(730, w), y: calcVWP(414, w) },
          { x: calcVWP(732, w), y: calcVWP(421, w) },
          { x: calcVWP(713, w), y: calcVWP(438, w) },
          { x: calcVWP(787, w), y: calcVWP(430, w) },
          { x: calcVWP(782, w), y: calcVWP(446, w) },
          { x: calcVWP(763, w), y: calcVWP(447, w) },
          { x: calcVWP(746, w), y: calcVWP(461, w) },
          { x: calcVWP(723, w), y: calcVWP(452, w) },
          { x: calcVWP(690, w), y: calcVWP(472, w) },
          { x: calcVWP(683, w), y: calcVWP(461, w) },
          { x: calcVWP(666, w), y: calcVWP(446, w) },
          { x: calcVWP(675, w), y: calcVWP(472, w) },
          { x: calcVWP(673, w), y: calcVWP(484, w) },
          { x: calcVWP(656, w), y: calcVWP(493, w) },
          { x: calcVWP(636, w), y: calcVWP(476, w) },
          { x: calcVWP(649, w), y: calcVWP(508, w) },
          { x: calcVWP(630, w), y: calcVWP(515, w) },
          { x: calcVWP(626, w), y: calcVWP(527, w) },
          { x: calcVWP(617, w), y: calcVWP(524, w) },
          { x: calcVWP(593, w), y: calcVWP(485, w) },
          { x: calcVWP(608, w), y: calcVWP(549, w) },
          { x: calcVWP(595, w), y: calcVWP(575, w) },
          { x: calcVWP(585, w), y: calcVWP(580, w) },
          { x: calcVWP(585, w), y: calcVWP(580, w) },
          { x: calcVWP(575, w), y: calcVWP(556, w) },
          { x: calcVWP(575, w), y: calcVWP(595, w) },
          { x: calcVWP(568, w), y: calcVWP(620, w) },
          { x: calcVWP(560, w), y: calcVWP(605, w) },
          { x: calcVWP(560, w), y: calcVWP(645, w) },
          { x: calcVWP(543, w), y: calcVWP(630, w) },
          { x: calcVWP(558, w), y: calcVWP(670, w) },
          { x: calcVWP(550, w), y: calcVWP(705, w) },
          { x: calcVWP(578, w), y: calcVWP(755, w) },
          { x: calcVWP(620, w), y: calcVWP(773, w) },
          { x: calcVWP(660, w), y: calcVWP(777, w) },
          { x: calcVWP(692, w), y: calcVWP(775, w) },
          { x: calcVWP(696, w), y: calcVWP(757, w) },
          { x: calcVWP(680, w), y: calcVWP(715, w) },
          { x: calcVWP(655, w), y: calcVWP(695, w) },
          { x: calcVWP(665, w), y: calcVWP(680, w) },
          { x: calcVWP(665, w), y: calcVWP(680, w) },
          { x: calcVWP(694, w), y: calcVWP(699, w) },
          { x: calcVWP(686, w), y: calcVWP(724, w) },
          { x: calcVWP(698, w), y: calcVWP(762, w) },
          { x: calcVWP(707, w), y: calcVWP(763, w) },
          { x: calcVWP(722, w), y: calcVWP(701, w) },
          { x: calcVWP(712, w), y: calcVWP(666, w) },
          { x: calcVWP(695, w), y: calcVWP(653, w) },
          { x: calcVWP(697, w), y: calcVWP(635, w) },
          { x: calcVWP(723, w), y: calcVWP(622, w) },
          { x: calcVWP(763, w), y: calcVWP(617, w) },
          { x: calcVWP(784, w), y: calcVWP(628, w) },
          { x: calcVWP(779, w), y: calcVWP(612, w) },
          { x: calcVWP(807, w), y: calcVWP(603, w) },
          { x: calcVWP(816, w), y: calcVWP(592, w) },
          { x: calcVWP(839, w), y: calcVWP(602, w) },
          { x: calcVWP(830, w), y: calcVWP(578, w) },
          { x: calcVWP(853, w), y: calcVWP(569, w) },
          { x: calcVWP(851, w), y: calcVWP(560, w) },
          { x: calcVWP(882, w), y: calcVWP(536, w) },
          { x: calcVWP(854, w), y: calcVWP(546, w) },
          { x: calcVWP(880, w), y: calcVWP(495, w) },
          { x: calcVWP(867, w), y: calcVWP(487, w) },
          { x: calcVWP(911, w), y: calcVWP(467, w) },
          { x: calcVWP(936, w), y: calcVWP(441, w) },
          { x: calcVWP(960, w), y: calcVWP(419, w) },
          { x: calcVWP(981, w), y: calcVWP(433, w) },
          { x: calcVWP(1002, w), y: calcVWP(454, w) },
          { x: calcVWP(1015, w), y: calcVWP(456, w) },
          { x: calcVWP(1029, w), y: calcVWP(466, w) },
          { x: calcVWP(1035, w), y: calcVWP(467, w) },
          { x: calcVWP(1064, w), y: calcVWP(483, w) },
          { x: calcVWP(1063, w), y: calcVWP(488, w) },
          { x: calcVWP(1034, w), y: calcVWP(485, w) },
          { x: calcVWP(1059, w), y: calcVWP(498, w) },
          { x: calcVWP(1020, w), y: calcVWP(516, w) },
          { x: calcVWP(1015, w), y: calcVWP(519, w) },
          { x: calcVWP(1052, w), y: calcVWP(521, w) },
          { x: calcVWP(1024, w), y: calcVWP(537, w) },
          { x: calcVWP(980, w), y: calcVWP(564, w) },
          { x: calcVWP(962, w), y: calcVWP(568, w) },
          { x: calcVWP(993, w), y: calcVWP(575, w) },
          { x: calcVWP(967, w), y: calcVWP(589, w) },
          { x: calcVWP(925, w), y: calcVWP(598, w) },
          { x: calcVWP(895, w), y: calcVWP(598, w) },
          { x: calcVWP(871, w), y: calcVWP(590, w) },
          { x: calcVWP(895, w), y: calcVWP(613, w) },
          { x: calcVWP(885, w), y: calcVWP(621, w) },
          { x: calcVWP(913, w), y: calcVWP(623, w) },
          { x: calcVWP(867, w), y: calcVWP(657, w) },
          { x: calcVWP(820, w), y: calcVWP(709, w) },
          { x: calcVWP(860, w), y: calcVWP(688, w) },
          { x: calcVWP(869, w), y: calcVWP(693, w) },
          { x: calcVWP(885, w), y: calcVWP(680, w) },
          { x: calcVWP(840, w), y: calcVWP(731, w) },
          { x: calcVWP(911, w), y: calcVWP(679, w) },
          { x: calcVWP(878, w), y: calcVWP(720, w) },
          { x: calcVWP(877, w), y: calcVWP(728, w) },
          { x: calcVWP(829, w), y: calcVWP(779, w) },
          { x: calcVWP(823, w), y: calcVWP(793, w) },
          { x: calcVWP(825, w), y: calcVWP(817, w) },
          { x: calcVWP(826, w), y: calcVWP(824, w) },
          { x: calcVWP(805, w), y: calcVWP(847, w) },
          { x: calcVWP(775, w), y: calcVWP(829, w) },
          { x: calcVWP(769, w), y: calcVWP(829, w) },
          { x: calcVWP(748, w), y: calcVWP(811, w) },
          { x: calcVWP(774, w), y: calcVWP(860, w) },
          { x: calcVWP(773, w), y: calcVWP(877, w) },
          { x: calcVWP(763, w), y: calcVWP(887, w) },
          { x: calcVWP(723, w), y: calcVWP(893, w) },
          { x: calcVWP(663, w), y: calcVWP(902, w) },
          { x: calcVWP(650, w), y: calcVWP(904, w) },
          { x: calcVWP(632, w), y: calcVWP(905, w) },
          { x: calcVWP(578, w), y: calcVWP(888, w) },
          { x: calcVWP(590, w), y: calcVWP(874, w) },
          { x: calcVWP(566, w), y: calcVWP(879, w) },
          { x: calcVWP(541, w), y: calcVWP(873, w) },
          { x: calcVWP(511, w), y: calcVWP(856, w) },
          { x: calcVWP(517, w), y: calcVWP(878, w) },
          { x: calcVWP(468, w), y: calcVWP(861, w) },
          { x: calcVWP(467, w), y: calcVWP(842, w) },
          { x: calcVWP(448, w), y: calcVWP(854, w) },
          { x: calcVWP(432, w), y: calcVWP(845, w) },
          { x: calcVWP(440, w), y: calcVWP(819, w) },
          { x: calcVWP(429, w), y: calcVWP(829, w) },
          { x: calcVWP(391, w), y: calcVWP(838, w) },
          { x: calcVWP(355, w), y: calcVWP(834, w) },
          { x: calcVWP(382, w), y: calcVWP(815, w) },
          { x: calcVWP(352, w), y: calcVWP(824, w) },
          { x: calcVWP(294, w), y: calcVWP(813, w) },
          { x: calcVWP(320, w), y: calcVWP(803, w) },
          { x: calcVWP(281, w), y: calcVWP(802, w) },
          { x: calcVWP(242, w), y: calcVWP(827, w) },
          { x: calcVWP(234, w), y: calcVWP(829, w) },
          { x: calcVWP(224, w), y: calcVWP(820, w) },
          { x: calcVWP(210, w), y: calcVWP(836, w) },
          { x: calcVWP(190, w), y: calcVWP(837, w) },
          { x: calcVWP(179, w), y: calcVWP(825, w) },
          { x: calcVWP(182, w), y: calcVWP(838, w) },
          { x: calcVWP(126, w), y: calcVWP(837, w) },
          { x: calcVWP(104, w), y: calcVWP(829, w) },
          { x: calcVWP(95, w), y: calcVWP(816, w) },
          { x: calcVWP(96, w), y: calcVWP(803, w) },
          { x: calcVWP(86, w), y: calcVWP(811, w) },
          { x: calcVWP(67, w), y: calcVWP(831, w) },
          { x: calcVWP(52, w), y: calcVWP(829, w) },
          { x: calcVWP(2, w), y: calcVWP(802, w) },
          { x: calcVWP(0, w), y: calcVWP(800, w) },
        ],
        [
          { x: calcVWP(987, w), y: calcVWP(895, w) },
          { x: calcVWP(1011, w), y: calcVWP(849, w) },
          { x: calcVWP(1067, w), y: calcVWP(831, w) },
          { x: calcVWP(1085, w), y: calcVWP(823, w) },
          { x: calcVWP(1087, w), y: calcVWP(813, w) },
          { x: calcVWP(1095, w), y: calcVWP(819, w) },
          { x: calcVWP(1099, w), y: calcVWP(810, w) },
          { x: calcVWP(1180, w), y: calcVWP(811, w) },
          { x: calcVWP(1154, w), y: calcVWP(793, w) },
          { x: calcVWP(1164, w), y: calcVWP(779, w) },
          { x: calcVWP(1175, w), y: calcVWP(796, w) },
          { x: calcVWP(1194, w), y: calcVWP(827, w) },
          { x: calcVWP(1196, w), y: calcVWP(832, w) },
          { x: calcVWP(1198, w), y: calcVWP(821, w) },
          { x: calcVWP(1225, w), y: calcVWP(850, w) },
          { x: calcVWP(1228, w), y: calcVWP(859, w) },
          { x: calcVWP(1231, w), y: calcVWP(882, w) },
          { x: calcVWP(1249, w), y: calcVWP(861, w) },
          { x: calcVWP(1249, w), y: calcVWP(851, w) },
          { x: calcVWP(1263, w), y: calcVWP(834, w) },
          { x: calcVWP(1267, w), y: calcVWP(818, w) },
          { x: calcVWP(1279, w), y: calcVWP(783, w) },
          { x: calcVWP(1305, w), y: calcVWP(806, w) },
          { x: calcVWP(1288, w), y: calcVWP(750, w) },
          { x: calcVWP(1332, w), y: calcVWP(789, w) },
          { x: calcVWP(1331, w), y: calcVWP(760, w) },
          { x: calcVWP(1358, w), y: calcVWP(776, w) },
          { x: calcVWP(1344, w), y: calcVWP(755, w) },
          { x: calcVWP(1368, w), y: calcVWP(766, w) },
          { x: calcVWP(1400, w), y: calcVWP(824, w) },
          { x: calcVWP(1378, w), y: calcVWP(816, w) },
          { x: calcVWP(1381, w), y: calcVWP(826, w) },
          { x: calcVWP(1402, w), y: calcVWP(841, w) },
          { x: calcVWP(1397, w), y: calcVWP(853, w) },
          { x: calcVWP(1408, w), y: calcVWP(851, w) },
          { x: calcVWP(1413, w), y: calcVWP(880, w) },
          { x: calcVWP(1406, w), y: calcVWP(883, w) },
          { x: calcVWP(1386, w), y: calcVWP(869, w) },
          { x: calcVWP(1393, w), y: calcVWP(883, w) },
          { x: calcVWP(1394, w), y: calcVWP(892, w) },
          { x: calcVWP(1383, w), y: calcVWP(898, w) },
          { x: calcVWP(1346, w), y: calcVWP(901, w) },
          { x: calcVWP(1329, w), y: calcVWP(908, w) },
          { x: calcVWP(1298, w), y: calcVWP(905, w) },
          { x: calcVWP(1270, w), y: calcVWP(918, w) },
          { x: calcVWP(1256, w), y: calcVWP(910, w) },
          { x: calcVWP(1219, w), y: calcVWP(918, w) },
          { x: calcVWP(1185, w), y: calcVWP(912, w) },
          { x: calcVWP(1160, w), y: calcVWP(912, w) },
          { x: calcVWP(1151, w), y: calcVWP(907, w) },
          { x: calcVWP(1136, w), y: calcVWP(908, w) },
          { x: calcVWP(1123, w), y: calcVWP(898, w) },
          { x: calcVWP(1095, w), y: calcVWP(901, w) },
          { x: calcVWP(1084, w), y: calcVWP(895, w) },
          { x: calcVWP(1058, w), y: calcVWP(893, w) },
          { x: calcVWP(1049, w), y: calcVWP(892, w) },
          { x: calcVWP(1024, w), y: calcVWP(898, w) },
          { x: calcVWP(1009, w), y: calcVWP(903, w) },
        ],
        [
          { x: calcVWP(1653, w), y: calcVWP(463, w) },
          { x: calcVWP(1654, w), y: calcVWP(465, w) },
          { x: calcVWP(1647, w), y: calcVWP(483, w) },
          { x: calcVWP(1633, w), y: calcVWP(484, w) },
          { x: calcVWP(1615, w), y: calcVWP(503, w) },
          { x: calcVWP(1614, w), y: calcVWP(549, w) },
          { x: calcVWP(1597, w), y: calcVWP(583, w) },
          { x: calcVWP(1609, w), y: calcVWP(597, w) },
          { x: calcVWP(1623, w), y: calcVWP(596, w) },
          { x: calcVWP(1642, w), y: calcVWP(584, w) },
          { x: calcVWP(1647, w), y: calcVWP(561, w) },
          { x: calcVWP(1654, w), y: calcVWP(549, w) },
          { x: calcVWP(1670, w), y: calcVWP(563, w) },
          { x: calcVWP(1663, w), y: calcVWP(569, w) },
          { x: calcVWP(1664, w), y: calcVWP(580, w) },
          { x: calcVWP(1641, w), y: calcVWP(595, w) },
          { x: calcVWP(1644, w), y: calcVWP(621, w) },
          { x: calcVWP(1652, w), y: calcVWP(629, w) },
          { x: calcVWP(1666, w), y: calcVWP(632, w) },
          { x: calcVWP(1679, w), y: calcVWP(640, w) },
          { x: calcVWP(1699, w), y: calcVWP(641, w) },
          { x: calcVWP(1712, w), y: calcVWP(646, w) },
          { x: calcVWP(1732, w), y: calcVWP(638, w) },
          { x: calcVWP(1750, w), y: calcVWP(637, w) },
          { x: calcVWP(1761, w), y: calcVWP(626, w) },
          { x: calcVWP(1775, w), y: calcVWP(624, w) },
          { x: calcVWP(1797, w), y: calcVWP(589, w) },
          { x: calcVWP(1795, w), y: calcVWP(571, w) },
          { x: calcVWP(1793, w), y: calcVWP(567, w) },
          { x: calcVWP(1807, w), y: calcVWP(553, w) },
          { x: calcVWP(1800, w), y: calcVWP(529, w) },
          { x: calcVWP(1805, w), y: calcVWP(496, w) },
          { x: calcVWP(1920, w), y: calcVWP(636, w) },
          { x: calcVWP(1920, w), y: calcVWP(858, w) },
          { x: calcVWP(1886, w), y: calcVWP(860, w) },
          { x: calcVWP(1855, w), y: calcVWP(848, w) },
          { x: calcVWP(1855, w), y: calcVWP(862, w) },
          { x: calcVWP(1838, w), y: calcVWP(869, w) },
          { x: calcVWP(1833, w), y: calcVWP(878, w) },
          { x: calcVWP(1800, w), y: calcVWP(879, w) },
          { x: calcVWP(1802, w), y: calcVWP(864, w) },
          { x: calcVWP(1728, w), y: calcVWP(897, w) },
          { x: calcVWP(1720, w), y: calcVWP(893, w) },
          { x: calcVWP(1706, w), y: calcVWP(909, w) },
          { x: calcVWP(1676, w), y: calcVWP(910, w) },
          { x: calcVWP(1688, w), y: calcVWP(897, w) },
          { x: calcVWP(1657, w), y: calcVWP(864, w) },
          { x: calcVWP(1617, w), y: calcVWP(835, w) },
          { x: calcVWP(1602, w), y: calcVWP(802, w) },
          { x: calcVWP(1605, w), y: calcVWP(768, w) },
          { x: calcVWP(1598, w), y: calcVWP(731, w) },
          { x: calcVWP(1608, w), y: calcVWP(725, w) },
          { x: calcVWP(1655, w), y: calcVWP(775, w) },
          { x: calcVWP(1634, w), y: calcVWP(723, w) },
          { x: calcVWP(1676, w), y: calcVWP(749, w) },
          { x: calcVWP(1667, w), y: calcVWP(727, w) },
          { x: calcVWP(1713, w), y: calcVWP(751, w) },
          { x: calcVWP(1661, w), y: calcVWP(685, w) },
          { x: calcVWP(1593, w), y: calcVWP(615, w) },
          { x: calcVWP(1533, w), y: calcVWP(559, w) },
          { x: calcVWP(1560, w), y: calcVWP(556, w) },
          { x: calcVWP(1555, w), y: calcVWP(546, w) },
          { x: calcVWP(1508, w), y: calcVWP(509, w) },
          { x: calcVWP(1528, w), y: calcVWP(503, w) },
          { x: calcVWP(1503, w), y: calcVWP(502, w) },
          { x: calcVWP(1456, w), y: calcVWP(480, w) },
          { x: calcVWP(1476, w), y: calcVWP(463, w) },
          { x: calcVWP(1486, w), y: calcVWP(446, w) },
          { x: calcVWP(1463, w), y: calcVWP(460, w) },
          { x: calcVWP(1438, w), y: calcVWP(462, w) },
          { x: calcVWP(1458, w), y: calcVWP(447, w) },
          { x: calcVWP(1481, w), y: calcVWP(413, w) },
          { x: calcVWP(1447, w), y: calcVWP(439, w) },
          { x: calcVWP(1403, w), y: calcVWP(446, w) },
          { x: calcVWP(1386, w), y: calcVWP(436, w) },
          { x: calcVWP(1384, w), y: calcVWP(419, w) },
          { x: calcVWP(1376, w), y: calcVWP(416, w) },
          { x: calcVWP(1368, w), y: calcVWP(398, w) },
          { x: calcVWP(1385, w), y: calcVWP(383, w) },
          { x: calcVWP(1391, w), y: calcVWP(396, w) },
          { x: calcVWP(1399, w), y: calcVWP(379, w) },
          { x: calcVWP(1400, w), y: calcVWP(333, w) },
          { x: calcVWP(1431, w), y: calcVWP(343, w) },
          { x: calcVWP(1452, w), y: calcVWP(343, w) },
          { x: calcVWP(1469, w), y: calcVWP(352, w) },
          { x: calcVWP(1488, w), y: calcVWP(352, w) },
          { x: calcVWP(1493, w), y: calcVWP(356, w) },
          { x: calcVWP(1500, w), y: calcVWP(359, w) },
          { x: calcVWP(1531, w), y: calcVWP(397, w) },
          { x: calcVWP(1540, w), y: calcVWP(402, w) },
          { x: calcVWP(1561, w), y: calcVWP(420, w) },
          { x: calcVWP(1566, w), y: calcVWP(412, w) },
          { x: calcVWP(1610, w), y: calcVWP(437, w) },
          { x: calcVWP(1575, w), y: calcVWP(443, w) },
          { x: calcVWP(1579, w), y: calcVWP(451, w) },
          { x: calcVWP(1607, w), y: calcVWP(462, w) },
          { x: calcVWP(1631, w), y: calcVWP(450, w) },
          { x: calcVWP(1639, w), y: calcVWP(450, w) },
        ]
      ] as Point[][],

      minParticles: 400,
      maxParticles: 500,
      minSpeed: calcVWP(5),
      maxSpeed: calcVWP(10),
      pointColors: ['#33FF5750'],
      pointMinSize: calcVWP(2, w),
      pointMaxSize: calcVWP(3, w),
      movementDirection: 'left-bottom-to-right-top',
      divade: calcVWD(2.5, w),
    },
    mobile: {
      spaces: [
        [
          {
            x: calcVWP(0),
            y: calcVWP(238)
          },
          {
            x: calcVWP(44),
            y: calcVWP(211)
          },
          {
            x: calcVWP(77),
            y: calcVWP(188)
          },
          {
            x: calcVWP(96),
            y: calcVWP(174)
          },
          {
            x: calcVWP(112),
            y: calcVWP(169)
          },
          {
            x: calcVWP(105),
            y: calcVWP(176)
          },
          {
            x: calcVWP(132),
            y: calcVWP(173)
          },
          {
            x: calcVWP(131),
            y: calcVWP(179)
          },
          {
            x: calcVWP(123),
            y: calcVWP(180)
          },
          {
            x: calcVWP(117),
            y: calcVWP(185)
          },
          {
            x: calcVWP(110),
            y: calcVWP(188)
          },
          {
            x: calcVWP(108),
            y: calcVWP(180)
          },
          {
            x: calcVWP(101),
            y: calcVWP(191)
          },
          {
            x: calcVWP(97),
            y: calcVWP(191)
          },
          {
            x: calcVWP(88),
            y: calcVWP(179)
          },
          {
            x: calcVWP(91),
            y: calcVWP(187)
          },
          {
            x: calcVWP(91),
            y: calcVWP(194)
          },
          {
            x: calcVWP(84),
            y: calcVWP(197)
          },
          {
            x: calcVWP(77),
            y: calcVWP(191)
          },
          {
            x: calcVWP(82),
            y: calcVWP(203)
          },
          {
            x: calcVWP(78),
            y: calcVWP(207)
          },
          {
            x: calcVWP(76),
            y: calcVWP(204)
          },
          {
            x: calcVWP(75),
            y: calcVWP(212)
          },
          {
            x: calcVWP(62),
            y: calcVWP(198)
          },
          {
            x: calcVWP(67),
            y: calcVWP(217)
          },
          {
            x: calcVWP(63),
            y: calcVWP(226)
          },
          {
            x: calcVWP(58),
            y: calcVWP(227)
          },
          {
            x: calcVWP(54),
            y: calcVWP(218)
          },
          {
            x: calcVWP(56),
            y: calcVWP(237)
          },
          {
            x: calcVWP(53),
            y: calcVWP(242)
          },
          {
            x: calcVWP(47),
            y: calcVWP(236)
          },
          {
            x: calcVWP(49),
            y: calcVWP(251)
          },
          {
            x: calcVWP(43),
            y: calcVWP(248)
          },
          {
            x: calcVWP(48),
            y: calcVWP(257)
          },
          {
            x: calcVWP(45),
            y: calcVWP(273)
          },
          {
            x: calcVWP(54),
            y: calcVWP(291)
          },
          {
            x: calcVWP(69),
            y: calcVWP(299)
          },
          {
            x: calcVWP(79),
            y: calcVWP(299)
          },
          {
            x: calcVWP(90),
            y: calcVWP(299)
          },
          {
            x: calcVWP(98),
            y: calcVWP(298)
          },
          {
            x: calcVWP(99),
            y: calcVWP(294)
          },
          {
            x: calcVWP(95),
            y: calcVWP(280)
          },
          {
            x: calcVWP(93),
            y: calcVWP(278)
          },
          {
            x: calcVWP(89),
            y: calcVWP(277)
          },
          {
            x: calcVWP(85),
            y: calcVWP(271)
          },
          {
            x: calcVWP(86),
            y: calcVWP(265)
          },
          {
            x: calcVWP(98),
            y: calcVWP(271)
          },
          {
            x: calcVWP(97),
            y: calcVWP(274)
          },
          {
            x: calcVWP(96),
            y: calcVWP(280)
          },
          {
            x: calcVWP(99),
            y: calcVWP(294)
          },
          {
            x: calcVWP(103),
            y: calcVWP(293)
          },
          {
            x: calcVWP(108),
            y: calcVWP(271)
          },
          {
            x: calcVWP(104),
            y: calcVWP(260)
          },
          {
            x: calcVWP(99),
            y: calcVWP(255)
          },
          {
            x: calcVWP(99),
            y: calcVWP(249)
          },
          {
            x: calcVWP(109),
            y: calcVWP(243)
          },
          {
            x: calcVWP(123),
            y: calcVWP(242)
          },
          {
            x: calcVWP(131),
            y: calcVWP(246)
          },
          {
            x: calcVWP(130),
            y: calcVWP(240)
          },
          {
            x: calcVWP(138),
            y: calcVWP(236)
          },
          {
            x: calcVWP(139),
            y: calcVWP(233)
          },
          {
            x: calcVWP(146),
            y: calcVWP(233)
          },
          {
            x: calcVWP(151),
            y: calcVWP(236)
          },
          {
            x: calcVWP(147),
            y: calcVWP(228)
          },
          {
            x: calcVWP(156),
            y: calcVWP(223)
          },
          {
            x: calcVWP(156),
            y: calcVWP(220)
          },
          {
            x: calcVWP(165),
            y: calcVWP(212)
          },
          {
            x: calcVWP(158),
            y: calcVWP(216)
          },
          {
            x: calcVWP(159),
            y: calcVWP(206)
          },
          {
            x: calcVWP(166),
            y: calcVWP(197)
          },
          {
            x: calcVWP(161),
            y: calcVWP(194)
          },
          {
            x: calcVWP(180),
            y: calcVWP(186)
          },
          {
            x: calcVWP(187),
            y: calcVWP(176)
          },
          {
            x: calcVWP(194),
            y: calcVWP(169)
          },
          {
            x: calcVWP(210),
            y: calcVWP(182)
          },
          {
            x: calcVWP(216),
            y: calcVWP(183)
          },
          {
            x: calcVWP(220),
            y: calcVWP(186)
          },
          {
            x: calcVWP(230),
            y: calcVWP(191)
          },
          {
            x: calcVWP(234),
            y: calcVWP(193)
          },
          {
            x: calcVWP(234),
            y: calcVWP(196)
          },
          {
            x: calcVWP(222),
            y: calcVWP(193)
          },
          {
            x: calcVWP(232),
            y: calcVWP(198)
          },
          {
            x: calcVWP(227),
            y: calcVWP(202)
          },
          {
            x: calcVWP(214),
            y: calcVWP(206)
          },
          {
            x: calcVWP(227),
            y: calcVWP(207)
          },
          {
            x: calcVWP(201),
            y: calcVWP(223)
          },
          {
            x: calcVWP(195),
            y: calcVWP(223)
          },
          {
            x: calcVWP(207),
            y: calcVWP(226)
          },
          {
            x: calcVWP(192),
            y: calcVWP(233)
          },
          {
            x: calcVWP(181),
            y: calcVWP(234)
          },
          {
            x: calcVWP(170),
            y: calcVWP(234)
          },
          {
            x: calcVWP(163),
            y: calcVWP(231)
          },
          {
            x: calcVWP(171),
            y: calcVWP(240)
          },
          {
            x: calcVWP(168),
            y: calcVWP(242)
          },
          {
            x: calcVWP(179),
            y: calcVWP(244)
          },
          {
            x: calcVWP(157),
            y: calcVWP(259)
          },
          {
            x: calcVWP(143),
            y: calcVWP(276)
          },
          {
            x: calcVWP(158),
            y: calcVWP(267)
          },
          {
            x: calcVWP(160),
            y: calcVWP(269)
          },
          {
            x: calcVWP(167),
            y: calcVWP(265)
          },
          {
            x: calcVWP(152),
            y: calcVWP(282)
          },
          {
            x: calcVWP(178),
            y: calcVWP(264)
          },
          {
            x: calcVWP(169),
            y: calcVWP(272)
          },
          {
            x: calcVWP(163),
            y: calcVWP(282)
          },
          {
            x: calcVWP(148),
            y: calcVWP(298)
          },
          {
            x: calcVWP(145),
            y: calcVWP(307)
          },
          {
            x: calcVWP(146),
            y: calcVWP(313)
          },
          {
            x: calcVWP(146),
            y: calcVWP(316)
          },
          {
            x: calcVWP(139),
            y: calcVWP(324)
          },
          {
            x: calcVWP(136),
            y: calcVWP(323)
          },
          {
            x: calcVWP(128),
            y: calcVWP(319)
          },
          {
            x: calcVWP(124),
            y: calcVWP(318)
          },
          {
            x: calcVWP(117),
            y: calcVWP(312)
          },
          {
            x: calcVWP(126),
            y: calcVWP(331)
          },
          {
            x: calcVWP(127),
            y: calcVWP(336)
          },
          {
            x: calcVWP(124),
            y: calcVWP(339)
          },
          {
            x: calcVWP(114),
            y: calcVWP(341)
          },
          {
            x: calcVWP(108),
            y: calcVWP(341)
          },
          {
            x: calcVWP(104),
            y: calcVWP(344)
          },
          {
            x: calcVWP(102),
            y: calcVWP(343)
          },
          {
            x: calcVWP(86),
            y: calcVWP(346)
          },
          {
            x: calcVWP(74),
            y: calcVWP(347)
          },
          {
            x: calcVWP(56),
            y: calcVWP(342)
          },
          {
            x: calcVWP(60),
            y: calcVWP(334)
          },
          {
            x: calcVWP(50),
            y: calcVWP(338)
          },
          {
            x: calcVWP(31),
            y: calcVWP(329)
          },
          {
            x: calcVWP(33),
            y: calcVWP(337)
          },
          {
            x: calcVWP(16),
            y: calcVWP(331)
          },
          {
            x: calcVWP(14),
            y: calcVWP(324)
          },
          {
            x: calcVWP(7),
            y: calcVWP(328)
          },
          {
            x: calcVWP(2),
            y: calcVWP(327)
          },
          {
            x: calcVWP(6),
            y: calcVWP(316)
          },
          {
            x: calcVWP(0),
            y: calcVWP(319)
          }
        ],
        [
          {
            x: calcVWP(218),
            y: calcVWP(327)
          },
          {
            x: calcVWP(224),
            y: calcVWP(326)
          },
          {
            x: calcVWP(241),
            y: calcVWP(316)
          },
          {
            x: calcVWP(242),
            y: calcVWP(313)
          },
          {
            x: calcVWP(245),
            y: calcVWP(316)
          },
          {
            x: calcVWP(246),
            y: calcVWP(313)
          },
          {
            x: calcVWP(274),
            y: calcVWP(312)
          },
          {
            x: calcVWP(266),
            y: calcVWP(306)
          },
          {
            x: calcVWP(270),
            y: calcVWP(301)
          },
          {
            x: calcVWP(273),
            y: calcVWP(307)
          },
          {
            x: calcVWP(276),
            y: calcVWP(310)
          },
          {
            x: calcVWP(281),
            y: calcVWP(320)
          },
          {
            x: calcVWP(282),
            y: calcVWP(317)
          },
          {
            x: calcVWP(289),
            y: calcVWP(324)
          },
          {
            x: calcVWP(294),
            y: calcVWP(331)
          },
          {
            x: calcVWP(294),
            y: calcVWP(338)
          },
          {
            x: calcVWP(301),
            y: calcVWP(331)
          },
          {
            x: calcVWP(301),
            y: calcVWP(328)
          },
          {
            x: calcVWP(304),
            y: calcVWP(323)
          },
          {
            x: calcVWP(304),
            y: calcVWP(320)
          },
          {
            x: calcVWP(306),
            y: calcVWP(322)
          },
          {
            x: calcVWP(307),
            y: calcVWP(315)
          },
          {
            x: calcVWP(309),
            y: calcVWP(314)
          },
          {
            x: calcVWP(311),
            y: calcVWP(303)
          },
          {
            x: calcVWP(317),
            y: calcVWP(308)
          },
          {
            x: calcVWP(317),
            y: calcVWP(301)
          },
          {
            x: calcVWP(315),
            y: calcVWP(292)
          },
          {
            x: calcVWP(317),
            y: calcVWP(292)
          },
          {
            x: calcVWP(317),
            y: calcVWP(347)
          },
          {
            x: calcVWP(311),
            y: calcVWP(350)
          },
          {
            x: calcVWP(308),
            y: calcVWP(352)
          },
          {
            x: calcVWP(302),
            y: calcVWP(348)
          },
          {
            x: calcVWP(299),
            y: calcVWP(351)
          },
          {
            x: calcVWP(289),
            y: calcVWP(353)
          },
          {
            x: calcVWP(282),
            y: calcVWP(352)
          },
          {
            x: calcVWP(275),
            y: calcVWP(349)
          },
          {
            x: calcVWP(268),
            y: calcVWP(349)
          },
          {
            x: calcVWP(263),
            y: calcVWP(347)
          },
          {
            x: calcVWP(258),
            y: calcVWP(348)
          },
          {
            x: calcVWP(255),
            y: calcVWP(344)
          },
          {
            x: calcVWP(244),
            y: calcVWP(346)
          },
          {
            x: calcVWP(241),
            y: calcVWP(343)
          },
          {
            x: calcVWP(236),
            y: calcVWP(342)
          },
          {
            x: calcVWP(231),
            y: calcVWP(344)
          },
          {
            x: calcVWP(228),
            y: calcVWP(341)
          },
          {
            x: calcVWP(222),
            y: calcVWP(342)
          },
          {
            x: calcVWP(218),
            y: calcVWP(346)
          },
          {
            x: calcVWP(209),
            y: calcVWP(345)
          },
          {
            x: calcVWP(207),
            y: calcVWP(344)
          },
          {
            x: calcVWP(204),
            y: calcVWP(343)
          }
        ]
      ] as Point[][],
      minParticles: 400,
      maxParticles: 500,
      minSpeed: calcVWP(2),
      maxSpeed: calcVWP(5),
      pointColors: ['#33FF5750'],
      pointMinSize: calcVWP(1, w),
      pointMaxSize: calcVWP(1.5, w),
      movementDirection: 'left-bottom-to-right-top',
      divade: calcVWD(5, w),
    }
  },
  {
    id: 'trailer', color: 'black', name: 'Trailer', component: <SecondScreen />, imageUrl: '/bg-images/second-bg.webp', imageMobile: '/bg-images/second-mobile-bg.webp',
    desktop: {
      spaces: [
        [
          { x: calcVWP(326, w), y: calcVWP(332, w) },
          { x: calcVWP(252, w), y: calcVWP(309, w) },
          { x: calcVWP(234, w), y: calcVWP(248, w) },
          { x: calcVWP(205, w), y: calcVWP(185, w) },
          { x: calcVWP(207, w), y: calcVWP(131, w) },
          { x: calcVWP(249, w), y: calcVWP(80, w) },
          { x: calcVWP(301, w), y: calcVWP(44, w) },
          { x: calcVWP(440, w), y: calcVWP(51, w) },
          { x: calcVWP(534, w), y: calcVWP(131, w) },
          { x: calcVWP(546, w), y: calcVWP(226, w) },
          { x: calcVWP(474, w), y: calcVWP(307, w) },
          { x: calcVWP(375, w), y: calcVWP(335, w) },
          { x: calcVWP(341, w), y: calcVWP(334, w) },
        ],
        [
          { x: calcVWP(453, w), y: calcVWP(549, w) },
          { x: calcVWP(418, w), y: calcVWP(529, w) },
          { x: calcVWP(404, w), y: calcVWP(484, w) },
          { x: calcVWP(408, w), y: calcVWP(442, w) },
          { x: calcVWP(428, w), y: calcVWP(368, w) },
          { x: calcVWP(459, w), y: calcVWP(314, w) },
          { x: calcVWP(526, w), y: calcVWP(283, w) },
          { x: calcVWP(566, w), y: calcVWP(312, w) },
          { x: calcVWP(581, w), y: calcVWP(376, w) },
          { x: calcVWP(593, w), y: calcVWP(436, w) },
          { x: calcVWP(569, w), y: calcVWP(504, w) },
          { x: calcVWP(505, w), y: calcVWP(553, w) },
        ],
        [
          { x: calcVWP(663, w), y: calcVWP(572, w) },
          { x: calcVWP(628, w), y: calcVWP(545, w) },
          { x: calcVWP(601, w), y: calcVWP(475, w) },
          { x: calcVWP(612, w), y: calcVWP(413, w) },
          { x: calcVWP(623, w), y: calcVWP(328, w) },
          { x: calcVWP(686, w), y: calcVWP(279, w) },
          { x: calcVWP(769, w), y: calcVWP(273, w) },
          { x: calcVWP(779, w), y: calcVWP(361, w) },
          { x: calcVWP(783, w), y: calcVWP(458, w) },
          { x: calcVWP(725, w), y: calcVWP(527, w) },
          { x: calcVWP(697, w), y: calcVWP(563, w) },
        ],
        [
          { x: calcVWP(1203, w), y: calcVWP(570, w) },
          { x: calcVWP(1153, w), y: calcVWP(547, w) },
          { x: calcVWP(1130, w), y: calcVWP(475, w) },
          { x: calcVWP(1125, w), y: calcVWP(368, w) },
          { x: calcVWP(1210, w), y: calcVWP(308, w) },
          { x: calcVWP(1310, w), y: calcVWP(315, w) },
          { x: calcVWP(1325, w), y: calcVWP(469, w) },
          { x: calcVWP(1272, w), y: calcVWP(536, w) },
          { x: calcVWP(1238, w), y: calcVWP(568, w) },
        ],
        [
          { x: calcVWP(1624, w), y: calcVWP(478, w) },
          { x: calcVWP(1583, w), y: calcVWP(417, w) },
          { x: calcVWP(1581, w), y: calcVWP(308, w) },
          { x: calcVWP(1617, w), y: calcVWP(256, w) },
          { x: calcVWP(1704, w), y: calcVWP(283, w) },
          { x: calcVWP(1741, w), y: calcVWP(368, w) },
          { x: calcVWP(1721, w), y: calcVWP(473, w) },
          { x: calcVWP(1687, w), y: calcVWP(483, w) },
        ]
      ] as Point[][],

      minParticles: 500,
      maxParticles: 600,
      minSpeed: calcVWP(5),
      maxSpeed: calcVWP(10),
      pointColors: ['#ff910080'],
      pointMinSize: calcVWP(2, w),
      pointMaxSize: calcVWP(3, w),
      movementDirection: 'bottom-to-top',
      noVisible: "top",
      divade: calcVWD(5)
    },
    mobile: {
      spaces: [
        [
          {
            x: calcVWP(28),
            y: calcVWP(296)
          },
          {
            x: calcVWP(1),
            y: calcVWP(279)
          },
          {
            x: calcVWP(1),
            y: calcVWP(219)
          },
          {
            x: calcVWP(32),
            y: calcVWP(205)
          },
          {
            x: calcVWP(66),
            y: calcVWP(222)
          },
          {
            x: calcVWP(56),
            y: calcVWP(271)
          },
          {
            x: calcVWP(41),
            y: calcVWP(293)
          },
          {
            x: calcVWP(31),
            y: calcVWP(295)
          }
        ],
        [
          {
            x: calcVWP(307),
            y: calcVWP(299)
          },
          {
            x: calcVWP(282),
            y: calcVWP(281)
          },
          {
            x: calcVWP(274),
            y: calcVWP(231)
          },
          {
            x: calcVWP(293),
            y: calcVWP(195)
          },
          {
            x: calcVWP(317),
            y: calcVWP(206)
          },
          {
            x: calcVWP(317),
            y: calcVWP(298)
          }
        ]
      ] as Point[][],

      minParticles: 500,
      maxParticles: 600,
      minSpeed: calcVWP(5),
      maxSpeed: calcVWP(10),
      pointColors: ['#ff910080'],
      pointMinSize: calcVWP(1, w),
      pointMaxSize: calcVWP(1.5, w),
      movementDirection: 'bottom-to-top',
      noVisible: "top",
      divade: calcVWD(5)
    }
  },
  {
    id: 'how-it-works', color: 'green', name: 'How it works', component: <ThirdScreen />, imageUrl: '/bg-images/third-bg.webp', imageMobile: '/bg-images/third-mobile-bg.webp',
    desktop: {
      spaces: [
        [
          { x: calcVWP(0, w), y: calcVWP(88, w) },
          { x: calcVWP(0, w), y: calcVWP(550, w) },
          { x: calcVWP(124, w), y: calcVWP(673, w) },
          { x: calcVWP(287, w), y: calcVWP(593, w) },
          { x: calcVWP(409, w), y: calcVWP(726, w) },
          { x: calcVWP(519, w), y: calcVWP(824, w) },
          { x: calcVWP(791, w), y: calcVWP(726, w) },
          { x: calcVWP(1085, w), y: calcVWP(762, w) },
          { x: calcVWP(1257, w), y: calcVWP(793, w) },
          { x: calcVWP(1399, w), y: calcVWP(718, w) },
          { x: calcVWP(1498, w), y: calcVWP(872, w) },
          { x: calcVWP(1636, w), y: calcVWP(760, w) },
          { x: calcVWP(1698, w), y: calcVWP(552, w) },
          { x: calcVWP(1830, w), y: calcVWP(368, w) },
          { x: calcVWP(1911, w), y: calcVWP(269, w) },
          { x: calcVWP(1912, w), y: calcVWP(92, w) },
        ]
      ] as Point[][],

      minParticles: 150,
      maxParticles: 250,
      minSpeed: calcVWP(5),
      maxSpeed: calcVWP(10),
      pointColors: ['#FF004570', '#00000070'],
      pointMinSize: calcVWP(2, w),
      pointMaxSize: calcVWP(3, w),
      movementDirection: 'right-bottom-to-left-top',
      divade: calcVWD(5)
    },
    mobile: {
      spaces: [
        [
          {
            x: calcVWP(1),
            y: calcVWP(46)
          },
          {
            x: calcVWP(227),
            y: calcVWP(50)
          },
          {
            x: calcVWP(316),
            y: calcVWP(112)
          },
          {
            x: calcVWP(314),
            y: calcVWP(244)
          },
          {
            x: calcVWP(315),
            y: calcVWP(500)
          },
          {
            x: calcVWP(222),
            y: calcVWP(444)
          },
          {
            x: calcVWP(142),
            y: calcVWP(408)
          },
          {
            x: calcVWP(99),
            y: calcVWP(276)
          },
          {
            x: calcVWP(26),
            y: calcVWP(299)
          },
          {
            x: calcVWP(2),
            y: calcVWP(247)
          }
        ]
      ] as Point[][],
      minParticles: 150,
      maxParticles: 250,
      minSpeed: calcVWP(5),
      maxSpeed: calcVWP(10),
      pointColors: ['#FF004570', '#00000070'],
      pointMinSize: calcVWP(1, w),
      pointMaxSize: calcVWP(1.5, w),
      movementDirection: 'right-bottom-to-left-top',
      divade: calcVWD(5)
    }
  },
  { id: 'tokenomics', color: 'yellow', name: 'Tokenomics', component: <FourthScreen />, imageUrl: '/bg-images/fourth-bg.webp', imageMobile: '/bg-images/fourth-mobile-bg.webp' },
  {
    id: 'roadmap', color: 'gray', name: 'Roadmap', component: <FifthScreen />, imageUrl: '/bg-images/fifth-bg.webp', imageMobile: '/bg-images/fifth-mobile-bg.webp',
    desktop: {
      spaces: [
        [
          { x: calcVWP(6, w), y: calcVWP(1, w) },
          { x: calcVWP(476, w), y: calcVWP(12, w) },
          { x: calcVWP(487, w), y: calcVWP(52, w) },
          { x: calcVWP(567, w), y: calcVWP(64, w) },
          { x: calcVWP(605, w), y: calcVWP(129, w) },
          { x: calcVWP(723, w), y: calcVWP(130, w) },
          { x: calcVWP(810, w), y: calcVWP(225, w) },
          { x: calcVWP(938, w), y: calcVWP(196, w) },
          { x: calcVWP(1037, w), y: calcVWP(178, w) },
          { x: calcVWP(1146, w), y: calcVWP(161, w) },
          { x: calcVWP(1228, w), y: calcVWP(234, w) },
          { x: calcVWP(1336, w), y: calcVWP(275, w) },
          { x: calcVWP(1391, w), y: calcVWP(236, w) },
          { x: calcVWP(1457, w), y: calcVWP(138, w) },
          { x: calcVWP(1510, w), y: calcVWP(113, w) },
          { x: calcVWP(1639, w), y: calcVWP(93, w) },
          { x: calcVWP(1682, w), y: calcVWP(162, w) },
          { x: calcVWP(1793, w), y: calcVWP(127, w) },
          { x: calcVWP(1862, w), y: calcVWP(113, w) },
          { x: calcVWP(1854, w), y: calcVWP(231, w) },
          { x: calcVWP(1876, w), y: calcVWP(311, w) },
          { x: calcVWP(1824, w), y: calcVWP(553, w) },
          { x: calcVWP(1679, w), y: calcVWP(779, w) },
          { x: calcVWP(1535, w), y: calcVWP(905, w) },
          { x: calcVWP(1236, w), y: calcVWP(1080, w) },
          { x: calcVWP(1000, w), y: calcVWP(1080, w) },
          { x: calcVWP(800, w), y: calcVWP(950, w) },
          { x: calcVWP(600, w), y: calcVWP(1000, w) },
          { x: calcVWP(400, w), y: calcVWP(1050, w) },
          { x: calcVWP(200, w), y: calcVWP(850, w) },
          { x: calcVWP(0, w), y: calcVWP(1080, w) },
        ]
      ] as Point[][],

      minParticles: 400,
      maxParticles: 500,
      minSpeed: calcVWP(5),
      maxSpeed: calcVWP(10),
      pointColors: ['#FF00FF60'],
      pointMinSize: calcVWP(2, w),
      pointMaxSize: calcVWP(3, w),
      movementDirection: 'right-top-to-left-bottom',
      noVisible: "left",
      divade: calcVWD(5)
    },
    mobile: {
      spaces: [
        [
          {
            x: calcVWP(0),
            y: calcVWP(50)
          },
          {
            x: calcVWP(64),
            y: calcVWP(9)
          },
          {
            x: calcVWP(156),
            y: calcVWP(34)
          },
          {
            x: calcVWP(219),
            y: calcVWP(6)
          },
          {
            x: calcVWP(288),
            y: calcVWP(57)
          },
          {
            x: calcVWP(320),
            y: calcVWP(114)
          },
          {
            x: calcVWP(320),
            y: calcVWP(204)
          },
          {
            x: calcVWP(320),
            y: calcVWP(264)
          },
          {
            x: calcVWP(320),
            y: calcVWP(330)
          },
          {
            x: calcVWP(320),
            y: calcVWP(568)
          },
          {
            x: calcVWP(200),
            y: calcVWP(500)
          },
          {
            x: calcVWP(150),
            y: calcVWP(540)
          },
          {
            x: calcVWP(100),
            y: calcVWP(520)
          },
          {
            x: calcVWP(50),
            y: calcVWP(568)
          },
          {
            x: calcVWP(0),
            y: calcVWP(540)
          }
        ]
      ] as Point[][],
      minParticles: 400,
      maxParticles: 500,
      minSpeed: calcVWP(5),
      maxSpeed: calcVWP(10),
      pointColors: ['#FF00FF60'],
      pointMinSize: calcVWP(1, w),
      pointMaxSize: calcVWP(1.5, w),
      movementDirection: 'right-top-to-left-bottom',
      noVisible: "left",
      divade: calcVWD(5)
    }
  },
  {
    id: 'faq', color: 'red', name: 'FAQ', component: <SixthScreen />, imageUrl: '/bg-images/sixth-bg.webp', imageMobile: '/bg-images/sixth-mobile-bg.webp',
    desktop: {
      spaces: [
        [
          { x: calcVWP(74, w), y: calcVWP(740, w) },
          { x: calcVWP(40, w), y: calcVWP(785, w) },
          { x: calcVWP(27, w), y: calcVWP(851, w) },
          { x: calcVWP(73, w), y: calcVWP(898, w) },
          { x: calcVWP(114, w), y: calcVWP(864, w) },
          { x: calcVWP(157, w), y: calcVWP(903, w) },
          { x: calcVWP(183, w), y: calcVWP(940, w) },
          { x: calcVWP(237, w), y: calcVWP(924, w) },
          { x: calcVWP(253, w), y: calcVWP(886, w) },
          { x: calcVWP(285, w), y: calcVWP(918, w) },
          { x: calcVWP(329, w), y: calcVWP(940, w) },
          { x: calcVWP(359, w), y: calcVWP(911, w) },
          { x: calcVWP(407, w), y: calcVWP(916, w) },
          { x: calcVWP(429, w), y: calcVWP(904, w) },
          { x: calcVWP(432, w), y: calcVWP(858, w) },
          { x: calcVWP(472, w), y: calcVWP(819, w) },
          { x: calcVWP(504, w), y: calcVWP(838, w) },
          { x: calcVWP(535, w), y: calcVWP(821, w) },
          { x: calcVWP(547, w), y: calcVWP(773, w) },
          { x: calcVWP(594, w), y: calcVWP(779, w) },
          { x: calcVWP(622, w), y: calcVWP(798, w) },
          { x: calcVWP(666, w), y: calcVWP(786, w) },
          { x: calcVWP(683, w), y: calcVWP(757, w) },
          { x: calcVWP(679, w), y: calcVWP(670, w) },
          { x: calcVWP(591, w), y: calcVWP(617, w) },
          { x: calcVWP(562, w), y: calcVWP(574, w) },
          { x: calcVWP(526, w), y: calcVWP(536, w) },
          { x: calcVWP(471, w), y: calcVWP(591, w) },
          { x: calcVWP(418, w), y: calcVWP(541, w) },
          { x: calcVWP(364, w), y: calcVWP(568, w) },
          { x: calcVWP(348, w), y: calcVWP(520, w) },
          { x: calcVWP(316, w), y: calcVWP(592, w) },
          { x: calcVWP(232, w), y: calcVWP(584, w) },
          { x: calcVWP(190, w), y: calcVWP(733, w) },
          { x: calcVWP(127, w), y: calcVWP(763, w) },
          { x: calcVWP(61, w), y: calcVWP(807, w) },
        ],
        [

          { x: calcVWP(1219, w), y: calcVWP(843, w) },
          { x: calcVWP(1254, w), y: calcVWP(910, w) },
          { x: calcVWP(1313, w), y: calcVWP(929, w) },
          { x: calcVWP(1350, w), y: calcVWP(928, w) },
          { x: calcVWP(1390, w), y: calcVWP(952, w) },
          { x: calcVWP(1414, w), y: calcVWP(988, w) },
          { x: calcVWP(1484, w), y: calcVWP(954, w) },
          { x: calcVWP(1548, w), y: calcVWP(980, w) },
          { x: calcVWP(1573, w), y: calcVWP(932, w) },
          { x: calcVWP(1599, w), y: calcVWP(852, w) },
          { x: calcVWP(1577, w), y: calcVWP(762, w) },
          { x: calcVWP(1485, w), y: calcVWP(714, w) },
          { x: calcVWP(1439, w), y: calcVWP(590, w) },
          { x: calcVWP(1431, w), y: calcVWP(596, w) },
          { x: calcVWP(1362, w), y: calcVWP(595, w) },
          { x: calcVWP(1304, w), y: calcVWP(554, w) },
          { x: calcVWP(1262, w), y: calcVWP(595, w) },
          { x: calcVWP(1238, w), y: calcVWP(787, w) },
          { x: calcVWP(1213, w), y: calcVWP(832, w) },
        ]
      ] as Point[][],

      minParticles: 300,
      maxParticles: 400,
      minSpeed: calcVWP(5),
      maxSpeed: calcVWP(10),
      pointColors: ['#00EEFF'],
      pointMinSize: calcVWP(1.5, w),
      pointMaxSize: calcVWP(2.5, w),
      movementDirection: 'bottom-to-top',
      noVisible: "bottom",
      divade: calcVWD(5)
    },
    mobile: {
      spaces: [
        [
          {
            x: calcVWP(320),
            y: calcVWP(464)
          },
          {
            x: calcVWP(282),
            y: calcVWP(443)
          },
          {
            x: calcVWP(283),
            y: calcVWP(405)
          },
          {
            x: calcVWP(320),
            y: calcVWP(389)
          },
          {
            x: calcVWP(320),
            y: calcVWP(386)
          }
        ],
        [
          {
            x: calcVWP(0),
            y: calcVWP(401)
          },
          {
            x: calcVWP(26),
            y: calcVWP(437)
          },
          {
            x: calcVWP(19),
            y: calcVWP(448)
          },
          {
            x: calcVWP(0),
            y: calcVWP(458)
          }
        ]
      ] as Point[][],
      minParticles: 300,
      maxParticles: 400,
      minSpeed: calcVWP(5),
      maxSpeed: calcVWP(10),
      pointColors: ['#00EEFF'],
      pointMinSize: calcVWP(0.5, w),
      pointMaxSize: calcVWP(1, w),
      movementDirection: 'bottom-to-top',
      noVisible: "bottom",
      divade: calcVWD(5)
    }
  },
])
