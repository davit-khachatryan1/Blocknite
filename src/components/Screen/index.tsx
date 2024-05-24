import styles from './style.module.scss'
import { useStateProvider } from '../../context/state';
import ParticleCanvas from '../Particles';
import { useState } from 'react';
const spaces = [
  [
    { x: 0, y: 550 },
    { x: 607, y: 550 },
    { x: 595, y: 575 },
    { x: 585, y: 580 },
    { x: 585, y: 580 },
    { x: 575, y: 556 },
    { x: 575, y: 595 },
    { x: 568, y: 620 },
    { x: 560, y: 605 },
    { x: 560, y: 645 },
    { x: 543, y: 630 },
    { x: 558, y: 670 },
    { x: 550, y: 705 },
    { x: 578, y: 755 },
    { x: 620, y: 773 },
    { x: 660, y: 777 },
    { x: 692, y: 775 },
    { x: 696, y: 757 },
    { x: 680, y: 715 },
    { x: 655, y: 695 },
    { x: 665, y: 680 },
    { x: 665, y: 680 },
    { x: 694, y: 699 },
    { x: 686, y: 724 },
    { x: 698, y: 762 },
    { x: 707, y: 763 },
    { x: 722, y: 701 },
    { x: 712, y: 666 },
    { x: 695, y: 653 },
    { x: 697, y: 635 },
    { x: 723, y: 622 },
    { x: 763, y: 617 },
    { x: 784, y: 628 },
    { x: 779, y: 612 },
    { x: 807, y: 603 },
    { x: 816, y: 592 },
    { x: 839, y: 602 },
    { x: 830, y: 578 },
    { x: 853, y: 569 },
    { x: 851, y: 560 },
    { x: 882, y: 536 },
    { x: 854, y: 546 },
    { x: 880, y: 495 },
    { x: 867, y: 487 },
    { x: 911, y: 467 },
    { x: 936, y: 441 },
    { x: 960, y: 419 },
    { x: 981, y: 433 },
    { x: 1002, y: 454 },
    { x: 1015, y: 456 },
    { x: 1029, y: 466 },
    { x: 1035, y: 467 },
    { x: 1064, y: 483 },
    { x: 1063, y: 488 },
    { x: 1034, y: 485 },
    { x: 1059, y: 498 },
    { x: 1020, y: 516 },
    { x: 1015, y: 519 },
    { x: 1052, y: 521 },
    { x: 1024, y: 537 },
    { x: 980, y: 564 },
    { x: 962, y: 568 },
    { x: 993, y: 575 },
    { x: 967, y: 589 },
    { x: 925, y: 598 },
    { x: 895, y: 598 },
    { x: 871, y: 590 },
    { x: 895, y: 613 },
    { x: 885, y: 621 },
    { x: 913, y: 623 },
    { x: 867, y: 657 },
    { x: 820, y: 709 },
    { x: 860, y: 688 },
    { x: 869, y: 693 },
    { x: 885, y: 680 },
    { x: 840, y: 731 },
    { x: 911, y: 679 },
    { x: 878, y: 720 },
    { x: 877, y: 728 },
    { x: 829, y: 779 },
    { x: 823, y: 793 },
    { x: 825, y: 817 },
    { x: 826, y: 824 },
    { x: 805, y: 847 },
    { x: 775, y: 829 },
    { x: 769, y: 829 },
    { x: 748, y: 811 },
    { x: 774, y: 860 },
    { x: 773, y: 877 },
    { x: 763, y: 887 },
    { x: 723, y: 893 },
    { x: 663, y: 902 },
    { x: 650, y: 904 },
    { x: 632, y: 905 },
    { x: 578, y: 888 },
    { x: 590, y: 874 },
    { x: 566, y: 879 },
    { x: 541, y: 873 },
    { x: 511, y: 856 },
    { x: 517, y: 878 },
    { x: 468, y: 861 },
    { x: 467, y: 842 },
    { x: 448, y: 854 },
    { x: 432, y: 845 },
    { x: 440, y: 819 },
    { x: 429, y: 829 },
    { x: 391, y: 838 },
    { x: 355, y: 834 },
    { x: 382, y: 815 },
    { x: 352, y: 824 },
    { x: 294, y: 813 },
    { x: 320, y: 803 },
    { x: 281, y: 802 },
    { x: 242, y: 827 },
    { x: 234, y: 829 },
    { x: 224, y: 820 },
    { x: 210, y: 836 },
    { x: 190, y: 837 },
    { x: 179, y: 825 },
    { x: 182, y: 838 },
    { x: 126, y: 837 },
    { x: 104, y: 829 },
    { x: 95, y: 816 },
    { x: 96, y: 803 },
    { x: 86, y: 811 },
    { x: 67, y: 831 },
    { x: 52, y: 829 },
    { x: 2, y: 802 },
    { x: 0, y: 800 },
  ],
  [
    { x: 987, y: 895 },
    { x: 1011, y: 849 },
    { x: 1067, y: 831 },
    { x: 1085, y: 823 },
    { x: 1087, y: 813 },
    { x: 1095, y: 819 },
    { x: 1099, y: 810 },
    { x: 1180, y: 811 },
    { x: 1154, y: 793 },
    { x: 1164, y: 779 },
    { x: 1175, y: 796 },
    { x: 1194, y: 827 },
    { x: 1196, y: 832 },
    { x: 1198, y: 821 },
    { x: 1225, y: 850 },
    { x: 1228, y: 859 },
    { x: 1231, y: 882 },
    { x: 1249, y: 861 },
    { x: 1249, y: 851 },
    { x: 1263, y: 834 },
    { x: 1267, y: 818 },
    { x: 1279, y: 783 },
    { x: 1305, y: 806 },
    { x: 1288, y: 750 },
    { x: 1332, y: 789 },
    { x: 1331, y: 760 },
    { x: 1358, y: 776 },
    { x: 1344, y: 755 },
    { x: 1368, y: 766 },
    { x: 1400, y: 824 },
    { x: 1378, y: 816 },
    { x: 1381, y: 826 },
    { x: 1402, y: 841 },
    { x: 1397, y: 853 },
    { x: 1408, y: 851 },
    { x: 1413, y: 880 },
    { x: 1406, y: 883 },
    { x: 1386, y: 869 },
    { x: 1393, y: 883 },
    { x: 1394, y: 892 },
    { x: 1383, y: 898 },
    { x: 1346, y: 901 },
    { x: 1329, y: 908 },
    { x: 1298, y: 905 },
    { x: 1270, y: 918 },
    { x: 1256, y: 910 },
    { x: 1219, y: 918 },
    { x: 1185, y: 912 },
    { x: 1160, y: 912 },
    { x: 1151, y: 907 },
    { x: 1136, y: 908 },
    { x: 1123, y: 898 },
    { x: 1095, y: 901 },
    { x: 1084, y: 895 },
    { x: 1058, y: 893 },
    { x: 1049, y: 892 },
    { x: 1024, y: 898 },
    { x: 1009, y: 903 },
  ],
  [
    { x: 1653, y: 463 },
    { x: 1654, y: 465 },
    { x: 1647, y: 483 },
    { x: 1633, y: 484 },
    { x: 1615, y: 503 },
    { x: 1614, y: 549 },
    { x: 1597, y: 583 },
    { x: 1609, y: 597 },
    { x: 1623, y: 596 },
    { x: 1642, y: 584 },
    { x: 1647, y: 561 },
    { x: 1654, y: 549 },
    { x: 1670, y: 563 },
    { x: 1663, y: 569 },
    { x: 1664, y: 580 },
    { x: 1641, y: 595 },
    { x: 1644, y: 621 },
    { x: 1652, y: 629 },
    { x: 1666, y: 632 },
    { x: 1679, y: 640 },
    { x: 1699, y: 641 },
    { x: 1712, y: 646 },
    { x: 1732, y: 638 },
    { x: 1750, y: 637 },
    { x: 1761, y: 626 },
    { x: 1775, y: 624 },
    { x: 1797, y: 589 },
    { x: 1795, y: 571 },
    { x: 1793, y: 567 },
    { x: 1807, y: 553 },
    { x: 1800, y: 529 },
    { x: 1805, y: 496 },
    { x: 1920, y: 636 },
    { x: 1920, y: 858 },
    { x: 1886, y: 860 },
    { x: 1855, y: 848 },
    { x: 1855, y: 862 },
    { x: 1838, y: 869 },
    { x: 1833, y: 878 },
    { x: 1800, y: 879 },
    { x: 1802, y: 864 },
    { x: 1728, y: 897 },
    { x: 1720, y: 893 },
    { x: 1706, y: 909 },
    { x: 1676, y: 910 },
    { x: 1688, y: 897 },
    { x: 1657, y: 864 },
    { x: 1617, y: 835 },
    { x: 1602, y: 802 },
    { x: 1605, y: 768 },
    { x: 1598, y: 731 },
    { x: 1608, y: 725 },
    { x: 1655, y: 775 },
    { x: 1634, y: 723 },
    { x: 1676, y: 749 },
    { x: 1667, y: 727 },
    { x: 1713, y: 751 },
    { x: 1661, y: 685 },
    { x: 1593, y: 615 },
    { x: 1533, y: 559 },
    { x: 1560, y: 556 },
    { x: 1555, y: 546 },
    { x: 1508, y: 509 },
    { x: 1528, y: 503 },
    { x: 1503, y: 502 },
    { x: 1456, y: 480 },
    { x: 1476, y: 463 },
  ]
];
export const Screen = ({ id, component, imageUrl, mobileImage }: any) => {
  const { windowWidth } = useStateProvider()
  const [spacesValue, setSpaces] = useState<any>([]);
  console.log(spacesValue);

  return <div style={{
    width: '100%',
    position: 'relative',
    display: 'flex',
    overflow: 'hidden',
    backgroundImage: `url(${windowWidth <= 576 ? mobileImage : imageUrl})`
  }}
    className={styles.container}
    id={id}
  >
    <div style={{
      width: '100%',
      height: '100%',
      position: 'absolute',
      left: 0,
      top: 0
    }}
      onClick={e =>
        setSpaces([...spacesValue, { x: e.clientX, y: e.clientY }])}
    >
      <ParticleCanvas
        spaces={
          spaces
        }
        minParticles={300}
        maxParticles={400}
        minSpeed={1}
        maxSpeed={3}
        pointColors={['#33FF5750']}
        pointMinSize={1}
        pointMaxSize={2}
        movementDirection='left-to-right'
        noVisible="top"
      />
    </div>

    <div style={{
      width: '100%',
      height: '100%',
      overflow: 'hidden'
    }}>
      {component}
    </div>
  </div>;
};