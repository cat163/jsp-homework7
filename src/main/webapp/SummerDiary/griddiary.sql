/*
 Navicat Premium Data Transfer

 Source Server         : Marine
 Source Server Type    : MySQL
 Source Server Version : 50524
 Source Host           : localhost:3306
 Source Schema         : griddiary

 Target Server Type    : MySQL
 Target Server Version : 50524
 File Encoding         : 65001

 Date: 23/11/2022 16:21:02
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tb_diary
-- ----------------------------
DROP TABLE IF EXISTS `tb_diary`;
CREATE TABLE `tb_diary`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '自动编号ID',
  `title` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '标题',
  `address` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '日记保存的地址',
  `writeTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '时间',
  `userid` int(10) UNSIGNED NOT NULL COMMENT '用户ID',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of tb_diary
-- ----------------------------

-- ----------------------------
-- Table structure for tb_user
-- ----------------------------
DROP TABLE IF EXISTS `tb_user`;
CREATE TABLE `tb_user`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '自动编号ID',
  `username` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名',
  `pwd` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '密码',
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'E-mail',
  `question` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '密码提示问题',
  `answer` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '提示问题答案',
  `city` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '所在地',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of tb_user
-- ----------------------------
INSERT INTO `tb_user` VALUES (1, 'abcd1234', '123456', NULL, NULL, NULL, NULL);
INSERT INTO `tb_user` VALUES (2, 'aaaabbbb', 'Abcd@1234', '403703176@qq.com', '我的工作单位', 'XX传媒有限公司', '九江');
INSERT INTO `tb_user` VALUES (3, 'abcd12341', 'Abcd@1234', '403703176@qq.com', '我的工作单位', 'XX传媒有限公司', '太原');
INSERT INTO `tb_user` VALUES (4, 'abcd12341123', 'Abcd@1234', 'zhangsan@163.com', '我的工作单位', 'XX传媒有限公司', '朔州');
INSERT INTO `tb_user` VALUES (5, 'abcd12341111', 'Abcd@1234', '403703176@qq.com', '我的工作单位', 'XX传媒有限公司', '成都');
INSERT INTO `tb_user` VALUES (6, 'abcd1234aaaa', 'Abcd@1234', '403703176@qq.com', '我的工作单位', 'XX传媒有限公司', '南昌');

SET FOREIGN_KEY_CHECKS = 1;
