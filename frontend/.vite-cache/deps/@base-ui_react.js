import { n as __exportAll, r as __toESM } from "./rolldown-runtime-B-1-B7_t.js";
import { t as require_react } from "./react.js";
import { B as NOOP, E as getWindow, L as useIsoLayoutEffect, O as isElement, R as EMPTY_ARRAY$1, T as getParentNode, V as useRefWithInit, _ as useMergedRefs, a as useCompositeRootContext, c as makeEventPreventable, d as mergePropsN, f as resolveStyle, g as SafeReact, h as useStableCallback, i as CompositeRootContext, k as isHTMLElement, l as mergeClassNames, n as dispatchClickWithModifiers, o as error, p as warn, r as useFocusableWhenDisabled, s as useRenderElement, t as useButton, u as mergeProps, v as getComputedStyle$1, w as getOverflowAncestors, z as EMPTY_OBJECT } from "./useButton-BhOXFPRq.js";
import { $ as isIndexOutOfListBounds, $t as missing, An as isVirtualClick, At as createGenericEventDetails, Bn as Timeout, Bt as focusOut, C as useFloatingParentNodeId, Ct as ownerDocument, Dt as mergeCleanups, E as FloatingPortal, Et as useValueAsRef, F as ownerVisuallyHidden, Fn as gecko, Ft as closeWatcher, G as isOutsideEvent, Gt as inputChange, H as getPreviousTabbable, Hn as useOnMount, Ht as incrementPress, I as useId, In as webkit, It as decrementPress, J as findNonDisabledListIndex, Jt as inputPress, Kt as inputClear, Ln as android, Lt as disabled, M as DROPDOWN_COLLISION_AVOIDANCE, Mn as stopEvent, Mt as chipRemovePress, Nt as clearPress, On as isMouseLikePointerType, Ot as addEventListener, P as POPUP_COLLISION_AVOIDANCE, Pt as closePress, Qt as listNavigation, R as disableFocusInside, Rn as ios, Rt as drag, S as useFloatingNodeId, Sn as getTarget, St as visuallyHiddenInput, Tt as useAnimationFrame, U as getTabbableAfterElement, Ut as initial, V as getNextTabbable, Vn as useTimeout, Vt as imperativeAction, Wt as inputBlur, X as getMaxListIndex, Xt as keyboard, Y as getGridNavigatedIndex, Yt as itemPress, Z as getMinListIndex, Zt as linkPress, _ as fastComponentRef, a as pressableTriggerOpenStateMapping, an as swipe, b as FloatingNode, bn as activeElement, bt as FocusGuard, c as transitionStatusMapping, cn as triggerHover, d as useAnimationsFinished, dn as windowResize, en as none, et as isListIndexDisabled, fn as getFloatingFocusElement, g as fastComponent, h as useStore, i as popupTransitionStateMapping, jt as cancelOpen, k as BASE_UI_SWIPE_IGNORE_SELECTOR, kt as createChangeEventDetails, l as PopupTriggerMap, ln as triggerPress, m as Store, mn as isInteractiveElement, n as CommonPopupDataAttributes, nn as pointer, o as triggerOpenStateMapping$1, on as trackPress, p as ReactStore, qt as inputPaste, r as popupStateMapping, rn as scrub, s as TransitionStatusDataAttributes, t as inertValue, tn as outsidePress, u as useOpenChangeComplete, un as wheel, v as require_shim, vt as rectToClientRect, w as useFloatingTree, wt as AnimationFrame, x as FloatingTree, xn as contains, xt as visuallyHidden, yn as matchesFocusVisible, z as enableFocusInside, zt as escapeKey } from "./inertValue-Cs7g9-WH.js";
import { a as usePreviousValue, c as useAnchoredPopupScrollLock, d as useHoverReferenceInteraction, f as useHoverFloatingInteraction, g as getDelay, h as useHoverInteractionSharedState, i as getCssDimensions, m as clearSafePolygonPointerEventsMutation, n as usePopupViewport, o as ToolbarRootContext, p as applySafePolygonPointerEventsMutation, r as adaptiveOrigin, s as useToolbarRootContext, t as popupViewportStateMapping, u as safePolygon } from "./usePopupViewport-DOPNIq6y.js";
import { t as require_jsx_runtime } from "./react_jsx-runtime.js";
import { B as BasePopupHandle, C as popupStoreSelectors, D as applyPopupOpenChange, E as PopupHandleAttachment, G as getNodeChildren, H as useClick, I as useTriggerDataForwarding, L as useTriggerRegistration, M as useOpenStateTransitions, N as usePopupInteractionProps, P as usePopupRootStore, R as useTransitionStatus, S as createPopupFloatingRootContext, T as FOCUSABLE_POPUP_PROPS, U as FloatingFocusManager, V as useDismiss, _ as useValueChanged, a as COMPOSITE_KEYS, b as usePopupHandleStore, c as PAGE_DOWN, d as isNativeInput, f as scrollIntoViewIfNeeded, h as useOpenInteractionType, i as ARROW_UP, j as useImplicitActiveTrigger, l as PAGE_UP, m as InternalBackdrop, n as ARROW_LEFT, o as HOME, r as ARROW_RIGHT, s as MODIFIER_KEYS$1, t as ARROW_DOWN, u as SHIFT, v as useBaseUiId, w as getEmptyRootContext, x as createInitialPopupStoreState, y as NullStore } from "./composite-Drz-COIA.js";
import { t as require_react_dom } from "./react-dom.js";
import { c as useFloating, i as useAnchorPositioningWithHook, l as useFloatingRootContext, n as getDisabledMountTransitionStyles, o as DirectionContext, r as useAnchorPositioning, s as useDirection, t as usePositioner, u as platform } from "./usePositioner-TdmYiu8s.js";
import { A as isMouseWithinBounds, C as MenuCheckboxItem, D as useMenuRootContext, E as MenuRootContext, F as useListNavigation, I as useFocus, M as CompositeList, N as useControlled, O as ContextMenuRootContext, P as useTypeahead, S as MenuCheckboxItemIndicator, T as MenuArrow, _ as MenuPopup, a as findRootOwnerId, b as MenuGroupLabel, c as MenuSubmenuRoot, d as useMenubarContext, f as MenuRadioItemIndicator, g as MenuPortal, h as MenuPositioner, i as Separator, j as useCompositeListItem, k as useContextMenuRootContext, l as MenuRoot, m as MenuRadioGroup, n as MenuSubmenuTrigger, o as CompositeItem, p as MenuRadioItem, r as isElementDisabled, s as useCompositeItem, t as index_parts_exports$12, u as MenubarContext, v as MenuLinkItem, w as MenuBackdrop, x as MenuGroup, y as MenuItem } from "./menu-DkU2Is2-.js";
import { t as index_parts_exports$17 } from "./popover-BK79hspC.js";
import { a as DialogTrigger, c as DialogPopup, d as DialogClose, f as DialogBackdrop, i as DialogViewport, l as useDialogPortalContext, m as useDialogRootContext, n as DialogHandle, o as DialogTitle, p as useRenderDialogRoot, r as createDialogHandle, s as DialogPortal, t as index_parts_exports$1, u as DialogDescription } from "./alert-dialog-YOm3zDAT.js";
import { a as useSwipeDismiss, c as findScrollableTouchTarget, i as getElementTransform, l as isScrollableY, n as FloatingPortalLite, o as getElementAtPoint, r as getDisplacement, s as clamp, t as index_parts_exports$26 } from "./toast-DXImE5ft.js";
import { t as Button } from "./button-BBnXElJa.js";
//#region node_modules/@base-ui/react/floating-ui-react/components/FloatingDelayGroup.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var FloatingDelayGroupContext = /*#__PURE__*/ import_react.createContext({
	hasProvider: false,
	timeoutMs: 0,
	delayRef: { current: 0 },
	initialDelayRef: { current: 0 },
	timeout: new Timeout(),
	currentIdRef: { current: null },
	currentContextRef: { current: null }
});
FloatingDelayGroupContext.displayName = "FloatingDelayGroupContext";
function resetDelayRef(delayRef, initialDelayRef) {
	delayRef.current = initialDelayRef.current;
}
/**
* Experimental next version of `FloatingDelayGroup` to become the default
* in the future. This component is not yet stable.
* Provides context for a group of floating elements that should share a
* `delay`. Unlike `FloatingDelayGroup`, `useDelayGroup` with this
* component does not cause a re-render of unrelated consumers of the
* context when the delay changes.
* @see https://floating-ui.com/docs/FloatingDelayGroup
* @internal
*/
function FloatingDelayGroup(props) {
	const { children, delay, timeoutMs = 0 } = props;
	const delayRef = import_react.useRef(delay);
	const initialDelayRef = import_react.useRef(delay);
	const currentIdRef = import_react.useRef(null);
	const currentContextRef = import_react.useRef(null);
	const timeout = useTimeout();
	useIsoLayoutEffect(() => {
		initialDelayRef.current = delay;
		if (!currentIdRef.current) {
			delayRef.current = delay;
			return;
		}
		delayRef.current = {
			open: getDelay(delayRef.current, "open"),
			close: getDelay(delay, "close")
		};
	}, [
		delay,
		currentIdRef,
		delayRef,
		initialDelayRef
	]);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(FloatingDelayGroupContext.Provider, {
		value: import_react.useMemo(() => ({
			hasProvider: true,
			delayRef,
			initialDelayRef,
			currentIdRef,
			timeoutMs,
			currentContextRef,
			timeout
		}), [timeoutMs, timeout]),
		children
	});
}
/**
* Enables grouping when called inside a component that's a child of a
* `FloatingDelayGroup`.
* @see https://floating-ui.com/docs/FloatingDelayGroup
* @internal
*/
function useDelayGroup(context, options = { open: false }) {
	const { open } = options;
	const store = "rootStore" in context ? context.rootStore : context;
	const floatingId = store.useState("floatingId");
	const { currentIdRef, delayRef, timeoutMs, initialDelayRef, currentContextRef, hasProvider, timeout } = import_react.useContext(FloatingDelayGroupContext);
	const [isInstantPhase, setIsInstantPhase] = import_react.useState(false);
	const openRef = import_react.useRef(open);
	useIsoLayoutEffect(() => {
		openRef.current = open;
	}, [open]);
	useIsoLayoutEffect(() => {
		function unset() {
			currentContextRef.current?.setIsInstantPhase(false);
			currentIdRef.current = null;
			currentContextRef.current = null;
			delayRef.current = initialDelayRef.current;
			timeout.clear();
		}
		if (!currentIdRef.current) return;
		if (!open && currentIdRef.current === floatingId) {
			setIsInstantPhase(false);
			if (timeoutMs) {
				const closingId = floatingId;
				timeout.start(timeoutMs, () => {
					if (store.select("open") || currentIdRef.current && currentIdRef.current !== closingId) return;
					unset();
				});
				return () => {
					if (openRef.current || currentIdRef.current !== closingId) timeout.clear();
				};
			}
			unset();
		}
	}, [
		open,
		floatingId,
		currentIdRef,
		delayRef,
		timeoutMs,
		initialDelayRef,
		currentContextRef,
		timeout,
		store
	]);
	useIsoLayoutEffect(() => {
		if (!open) return;
		const prevContext = currentContextRef.current;
		const prevId = currentIdRef.current;
		timeout.clear();
		currentContextRef.current = {
			onOpenChange: store.setOpen,
			setIsInstantPhase
		};
		currentIdRef.current = floatingId;
		delayRef.current = {
			open: 0,
			close: getDelay(initialDelayRef.current, "close")
		};
		if (prevId !== null && prevId !== floatingId) {
			setIsInstantPhase(true);
			prevContext?.setIsInstantPhase(true);
			prevContext?.onOpenChange(false, createChangeEventDetails(none));
		} else {
			setIsInstantPhase(false);
			prevContext?.setIsInstantPhase(false);
		}
	}, [
		open,
		floatingId,
		store,
		currentIdRef,
		delayRef,
		initialDelayRef,
		currentContextRef,
		timeout
	]);
	useIsoLayoutEffect(() => {
		return () => {
			if (currentIdRef.current === floatingId) {
				currentContextRef.current = null;
				if (!openRef.current) return;
				currentIdRef.current = null;
				resetDelayRef(delayRef, initialDelayRef);
				timeout.clear();
			}
		};
	}, [
		currentContextRef,
		currentIdRef,
		delayRef,
		floatingId,
		initialDelayRef,
		timeout
	]);
	return import_react.useMemo(() => ({
		hasProvider,
		delayRef,
		isInstantPhase
	}), [
		hasProvider,
		delayRef,
		isInstantPhase
	]);
}
//#endregion
//#region node_modules/@base-ui/react/floating-ui-react/hooks/useClientPoint.mjs
function createVirtualElement(domElement, data) {
	let offsetX = null;
	let offsetY = null;
	let isAutoUpdateEvent = false;
	return {
		contextElement: domElement || void 0,
		getBoundingClientRect() {
			const domRect = domElement?.getBoundingClientRect() || {
				width: 0,
				height: 0,
				x: 0,
				y: 0
			};
			const isXAxis = data.axis === "x" || data.axis === "both";
			const isYAxis = data.axis === "y" || data.axis === "both";
			const canTrackCursorOnAutoUpdate = ["mouseenter", "mousemove"].includes(data.dataRef.current.openEvent?.type || "") && data.pointerType !== "touch";
			let width = domRect.width;
			let height = domRect.height;
			let x = domRect.x;
			let y = domRect.y;
			if (offsetX == null && data.x && isXAxis) offsetX = domRect.x - data.x;
			if (offsetY == null && data.y && isYAxis) offsetY = domRect.y - data.y;
			x -= offsetX || 0;
			y -= offsetY || 0;
			width = 0;
			height = 0;
			if (!isAutoUpdateEvent || canTrackCursorOnAutoUpdate) {
				width = data.axis === "y" ? domRect.width : 0;
				height = data.axis === "x" ? domRect.height : 0;
				x = isXAxis && data.x != null ? data.x : x;
				y = isYAxis && data.y != null ? data.y : y;
			} else if (isAutoUpdateEvent && !canTrackCursorOnAutoUpdate) {
				height = data.axis === "x" ? domRect.height : height;
				width = data.axis === "y" ? domRect.width : width;
			}
			isAutoUpdateEvent = true;
			return {
				width,
				height,
				x,
				y,
				top: y,
				right: x + width,
				bottom: y + height,
				left: x
			};
		}
	};
}
function isMouseBasedEvent(event) {
	return event != null && event.clientX != null;
}
/**
* Positions the floating element relative to a client point (in the viewport),
* such as the mouse position. By default, it follows the mouse cursor.
* @see https://floating-ui.com/docs/useClientPoint
*/
function useClientPoint(context, props = {}) {
	const { enabled = true, axis = "both" } = props;
	const store = "rootStore" in context ? context.rootStore : context;
	const open = store.useState("open");
	const floating = store.useState("floatingElement");
	const domReference = store.useState("domReferenceElement");
	const dataRef = store.context.dataRef;
	const initialRef = import_react.useRef(false);
	const cleanupListenerRef = import_react.useRef(null);
	const [pointerType, setPointerType] = import_react.useState();
	const [reactive, setReactive] = import_react.useState([]);
	const resetReference = useStableCallback((reference) => {
		store.set("positionReference", reference);
	});
	const setReference = useStableCallback((newX, newY, referenceElement) => {
		if (initialRef.current) return;
		if (dataRef.current.openEvent && !isMouseBasedEvent(dataRef.current.openEvent)) return;
		store.set("positionReference", createVirtualElement(referenceElement ?? domReference, {
			x: newX,
			y: newY,
			axis,
			dataRef,
			pointerType
		}));
	});
	const handleReferenceEnterOrMove = useStableCallback((event) => {
		if (!open) setReference(event.clientX, event.clientY, event.currentTarget);
		else if (!cleanupListenerRef.current) {
			setReference(event.clientX, event.clientY, event.currentTarget);
			setReactive([]);
		}
	});
	const openCheck = isMouseLikePointerType(pointerType) ? floating : open;
	import_react.useEffect(() => {
		if (!enabled) {
			resetReference(domReference);
			return;
		}
		if (!openCheck) return;
		function cleanupListener() {
			cleanupListenerRef.current?.();
			cleanupListenerRef.current = null;
		}
		const win = getWindow(floating);
		function handleMouseMove(event) {
			const target = getTarget(event);
			if (!contains(floating, target)) setReference(event.clientX, event.clientY);
			else cleanupListener();
		}
		if (!dataRef.current.openEvent || isMouseBasedEvent(dataRef.current.openEvent)) cleanupListenerRef.current = addEventListener(win, "mousemove", handleMouseMove);
		else resetReference(domReference);
		return cleanupListener;
	}, [
		openCheck,
		enabled,
		floating,
		dataRef,
		domReference,
		store,
		setReference,
		resetReference,
		reactive
	]);
	import_react.useEffect(() => () => {
		store.set("positionReference", null);
	}, [store]);
	import_react.useEffect(() => {
		if (enabled && !floating) initialRef.current = false;
	}, [enabled, floating]);
	import_react.useEffect(() => {
		if (!enabled && open) initialRef.current = true;
	}, [enabled, open]);
	const reference = import_react.useMemo(() => {
		function setPointerTypeRef(event) {
			setPointerType(event.pointerType);
		}
		return {
			onPointerDown: setPointerTypeRef,
			onPointerEnter: setPointerTypeRef,
			onMouseMove: handleReferenceEnterOrMove,
			onMouseEnter: handleReferenceEnterOrMove
		};
	}, [handleReferenceEnterOrMove]);
	return import_react.useMemo(() => enabled ? {
		reference,
		trigger: reference
	} : {}, [enabled, reference]);
}
//#endregion
//#region node_modules/@base-ui/react/utils/popups/inlineRect.mjs
function createRect(left, top, right, bottom) {
	return {
		left,
		top,
		right,
		bottom,
		x: left,
		y: top,
		width: right - left,
		height: bottom - top
	};
}
function copyRect(rect) {
	return {
		left: rect.left,
		top: rect.top,
		right: rect.right,
		bottom: rect.bottom,
		width: rect.width,
		height: rect.height
	};
}
function getLineRects(rects) {
	const lines = [];
	let previousRect;
	let left = Number.POSITIVE_INFINITY;
	let top = Number.POSITIVE_INFINITY;
	let right = Number.NEGATIVE_INFINITY;
	let bottom = Number.NEGATIVE_INFINITY;
	for (const rect of Array.from(rects).sort((a, b) => a.top - b.top)) {
		left = Math.min(left, rect.left);
		top = Math.min(top, rect.top);
		right = Math.max(right, rect.right);
		bottom = Math.max(bottom, rect.bottom);
		if (!previousRect || rect.top - previousRect.top > previousRect.height / 2) lines.push(copyRect(rect));
		else {
			const line = lines[lines.length - 1];
			line.left = Math.min(line.left, rect.left);
			line.right = Math.max(line.right, rect.right);
			line.bottom = Math.max(line.bottom, rect.bottom);
			line.width = line.right - line.left;
			line.height = line.bottom - line.top;
		}
		previousRect = rect;
	}
	return {
		lines,
		fallback: createRect(left, top, right, bottom)
	};
}
function findLineIndex(lines, x, y) {
	return lines.findIndex((lineRect) => x > lineRect.left - 2 && x < lineRect.right + 2 && y > lineRect.top - 2 && y < lineRect.bottom + 2);
}
function createClientRect(rect) {
	return createRect(rect.left, rect.top, rect.right, rect.bottom);
}
function getInlineRectCoords(element, clientX, clientY) {
	const { lines } = getLineRects(element.getClientRects());
	if (lines.length < 2) return;
	const lineIndex = findLineIndex(lines, clientX, clientY);
	return {
		x: clientX,
		y: clientY,
		lineIndex: lineIndex === -1 ? void 0 : lineIndex,
		element
	};
}
function getInlineReferenceRect(reference, placement, coords) {
	const { lines, fallback } = getLineRects(reference.getClientRects());
	if (lines.length < 2) return null;
	const x = coords?.x;
	const y = coords?.y;
	const side = placement[0];
	if (coords?.lineIndex != null && lines[coords.lineIndex]) return createClientRect(lines[coords.lineIndex]);
	if (x != null && y != null) {
		const lineIndex = findLineIndex(lines, x, y);
		if (lineIndex !== -1) return createClientRect(lines[lineIndex]);
	}
	if (lines.length === 2 && lines[0].left > lines[1].right && x != null && y != null) return fallback;
	if (side === "t" || side === "b") {
		const firstRect = lines[0];
		const lastRect = lines[lines.length - 1];
		const targetRect = side === "t" ? firstRect : lastRect;
		return createRect(targetRect.left, firstRect.top, targetRect.right, lastRect.bottom);
	}
	const isLeft = side === "l";
	let left = lines[0].left;
	let right = lines[0].right;
	let edge = isLeft ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
	let targetFirstRect = lines[0];
	let targetLastRect = lines[0];
	for (const rect of lines) {
		left = Math.min(left, rect.left);
		right = Math.max(right, rect.right);
		const nextEdge = isLeft ? rect.left : rect.right;
		if (isLeft && nextEdge < edge || !isLeft && nextEdge > edge) {
			edge = nextEdge;
			targetFirstRect = rect;
			targetLastRect = rect;
		} else if (nextEdge === edge) targetLastRect = rect;
	}
	return createRect(left, targetFirstRect.top, right, targetLastRect.bottom);
}
function getContextElement(reference) {
	if ("contextElement" in reference && reference.contextElement) return reference.contextElement;
	return isElement(reference) ? reference : void 0;
}
function getInlineRectTriggerProps(coordsRef, isOpen) {
	function updateCoords(event) {
		updateInlineRectCoords(coordsRef, event.currentTarget, event.clientX, event.clientY);
	}
	function updateCoordsIfClosed(event) {
		if (!isOpen) updateCoords(event);
	}
	return {
		onFocus() {
			coordsRef.current = void 0;
		},
		onMouseEnter: updateCoordsIfClosed,
		onMouseMove: updateCoordsIfClosed
	};
}
function updateInlineRectCoords(coordsRef, element, clientX, clientY) {
	const nextCoords = getInlineRectCoords(element, clientX, clientY);
	coordsRef.current = nextCoords;
	return nextCoords;
}
function createInlineMiddleware(coordsRef) {
	return {
		name: "inline",
		async fn(state) {
			const reference = state.elements.reference;
			if (typeof reference?.getClientRects !== "function") return {};
			const contextElement = getContextElement(reference);
			const coords = coordsRef.current;
			const currentCoords = coords?.element === reference || coords?.element === contextElement ? coords : void 0;
			const rect = getInlineReferenceRect(reference, state.placement, currentCoords);
			if (!rect || typeof state.platform.getElementRects !== "function") return {};
			const resetRects = await state.platform.getElementRects({
				reference: {
					contextElement,
					getBoundingClientRect() {
						return rect;
					}
				},
				floating: state.elements.floating,
				strategy: state.strategy
			});
			if (state.rects.reference.x === resetRects.reference.x && state.rects.reference.y === resetRects.reference.y && state.rects.reference.width === resetRects.reference.width && state.rects.reference.height === resetRects.reference.height) return {};
			return { reset: { rects: resetRects } };
		}
	};
}
//#endregion
//#region node_modules/@base-ui/utils/useForcedRerendering.mjs
/**
* Returns a function that forces a rerender.
*/
function useForcedRerendering() {
	const [, setState] = import_react.useState({});
	return import_react.useCallback(() => {
		setState({});
	}, []);
}
//#endregion
//#region node_modules/@base-ui/react/direction-provider/DirectionProvider.mjs
/**
* Enables RTL behavior for Base UI components.
*
* Documentation: [Base UI Direction Provider](https://base-ui.com/react/utils/direction-provider)
*/
var DirectionProvider = function DirectionProvider(props) {
	const { direction = "ltr" } = props;
	const contextValue = import_react.useMemo(() => ({ direction }), [direction]);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(DirectionContext.Provider, {
		value: contextValue,
		children: props.children
	});
};
DirectionProvider.displayName = "DirectionProvider";
//#endregion
//#region node_modules/@base-ui/react/accordion/root/AccordionRootContext.mjs
var AccordionRootContext = /*#__PURE__*/ import_react.createContext(void 0);
AccordionRootContext.displayName = "AccordionRootContext";
function useAccordionRootContext() {
	const context = import_react.useContext(AccordionRootContext);
	if (context === void 0) throw new Error("Base UI: AccordionRootContext is missing. Accordion parts must be placed within <Accordion.Root>.");
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/accordion/root/AccordionRoot.mjs
var rootStateAttributesMapping$1 = { value: () => null };
/**
* Groups all parts of the accordion.
* Renders a `<div>` element.
*
* Documentation: [Base UI Accordion](https://base-ui.com/react/components/accordion)
*/
var AccordionRoot = /*#__PURE__*/ import_react.forwardRef(function AccordionRoot(componentProps, forwardedRef) {
	const { render, className, disabled = false, hiddenUntilFound: hiddenUntilFoundProp, keepMounted: keepMountedProp, loopFocus, onValueChange, multiple = false, orientation = "vertical", value: valueProp, defaultValue: defaultValueProp, style, ...elementProps } = componentProps;
	import_react.useEffect(() => {
		if (hiddenUntilFoundProp && keepMountedProp === false) warn("The `keepMounted={false}` prop on `Accordion.Root` is ignored when `hiddenUntilFound` is enabled, since panels must remain mounted while closed.");
	}, [hiddenUntilFoundProp, keepMountedProp]);
	const defaultValue = import_react.useMemo(() => {
		if (valueProp === void 0) return defaultValueProp ?? [];
	}, [valueProp, defaultValueProp]);
	const accordionItemRefs = import_react.useRef([]);
	const [value, setValue] = useControlled({
		controlled: valueProp,
		default: defaultValue,
		name: "Accordion",
		state: "value"
	});
	const handleValueChange = useStableCallback((newValue, nextOpen, details) => {
		if (!multiple) {
			const nextValue = value[0] === newValue ? [] : [newValue];
			onValueChange?.(nextValue, details);
			if (details.isCanceled) return;
			setValue(nextValue);
		} else if (nextOpen) {
			const nextOpenValues = value.slice();
			nextOpenValues.push(newValue);
			onValueChange?.(nextOpenValues, details);
			if (details.isCanceled) return;
			setValue(nextOpenValues);
		} else {
			const nextOpenValues = value.filter((v) => v !== newValue);
			onValueChange?.(nextOpenValues, details);
			if (details.isCanceled) return;
			setValue(nextOpenValues);
		}
	});
	const state = import_react.useMemo(() => ({
		value,
		disabled,
		orientation
	}), [
		value,
		disabled,
		orientation
	]);
	const contextValue = import_react.useMemo(() => ({
		disabled,
		handleValueChange,
		hiddenUntilFound: hiddenUntilFoundProp ?? false,
		keepMounted: keepMountedProp ?? false,
		state,
		value
	}), [
		disabled,
		handleValueChange,
		hiddenUntilFoundProp,
		keepMountedProp,
		state,
		value
	]);
	const element = useRenderElement("div", componentProps, {
		state,
		ref: forwardedRef,
		props: elementProps,
		stateAttributesMapping: rootStateAttributesMapping$1
	});
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(AccordionRootContext.Provider, {
		value: contextValue,
		children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(CompositeList, {
			elementsRef: accordionItemRefs,
			children: element
		})
	});
});
AccordionRoot.displayName = "AccordionRoot";
//#endregion
//#region node_modules/@base-ui/react/collapsible/root/useCollapsibleRoot.mjs
function useCollapsibleRoot(parameters) {
	const { open: openParam, defaultOpen, onOpenChange, disabled } = parameters;
	const [open, setOpen] = useControlled({
		controlled: openParam,
		default: defaultOpen,
		name: "Collapsible",
		state: "open"
	});
	const { mounted, setMounted, transitionStatus } = useTransitionStatus(open, true, true);
	const defaultPanelId = useBaseUiId();
	const [registeredPanelId, setPanelIdState] = import_react.useState();
	const panelId = registeredPanelId === null ? void 0 : registeredPanelId ?? defaultPanelId;
	const handleTrigger = useStableCallback((event) => {
		const nextOpen = !open;
		const eventDetails = createChangeEventDetails(triggerPress, event.nativeEvent);
		onOpenChange(nextOpen, eventDetails);
		if (eventDetails.isCanceled) return;
		setOpen(nextOpen);
	});
	return import_react.useMemo(() => ({
		defaultPanelId,
		disabled,
		handleTrigger,
		mounted,
		open,
		panelId,
		setMounted,
		setOpen,
		setPanelIdState,
		transitionStatus
	}), [
		defaultPanelId,
		disabled,
		handleTrigger,
		mounted,
		open,
		panelId,
		setMounted,
		setOpen,
		setPanelIdState,
		transitionStatus
	]);
}
//#endregion
//#region node_modules/@base-ui/react/collapsible/root/CollapsibleRootContext.mjs
var CollapsibleRootContext = /*#__PURE__*/ import_react.createContext(void 0);
CollapsibleRootContext.displayName = "CollapsibleRootContext";
function useCollapsibleRootContext() {
	const context = import_react.useContext(CollapsibleRootContext);
	if (context === void 0) throw new Error("Base UI: CollapsibleRootContext is missing. Collapsible parts must be placed within <Collapsible.Root>.");
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/accordion/item/AccordionItemContext.mjs
var AccordionItemContext = /*#__PURE__*/ import_react.createContext(void 0);
AccordionItemContext.displayName = "AccordionItemContext";
function useAccordionItemContext() {
	const context = import_react.useContext(AccordionItemContext);
	if (context === void 0) throw new Error("Base UI: AccordionItemContext is missing. Accordion parts must be placed within <Accordion.Item>.");
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/collapsible/panel/CollapsiblePanelDataAttributes.mjs
var CollapsiblePanelDataAttributes = function(CollapsiblePanelDataAttributes) {
	/**
	* Present when the collapsible panel is open.
	*/
	CollapsiblePanelDataAttributes["open"] = "data-open";
	/**
	* Present when the collapsible panel is closed.
	*/
	CollapsiblePanelDataAttributes["closed"] = "data-closed";
	/**
	* Present when the panel begins animating in.
	*/
	CollapsiblePanelDataAttributes[CollapsiblePanelDataAttributes["startingStyle"] = TransitionStatusDataAttributes.startingStyle] = "startingStyle";
	/**
	* Present when the panel is animating out.
	*/
	CollapsiblePanelDataAttributes[CollapsiblePanelDataAttributes["endingStyle"] = TransitionStatusDataAttributes.endingStyle] = "endingStyle";
	return CollapsiblePanelDataAttributes;
}({});
//#endregion
//#region node_modules/@base-ui/react/collapsible/trigger/CollapsibleTriggerDataAttributes.mjs
var CollapsibleTriggerDataAttributes = /*#__PURE__*/ function(CollapsibleTriggerDataAttributes) {
	/**
	* Present when the collapsible panel is open.
	*/
	CollapsibleTriggerDataAttributes["panelOpen"] = "data-panel-open";
	return CollapsibleTriggerDataAttributes;
}({});
//#endregion
//#region node_modules/@base-ui/react/utils/collapsibleOpenStateMapping.mjs
var PANEL_OPEN_HOOK = { [CollapsiblePanelDataAttributes.open]: "" };
var PANEL_CLOSED_HOOK = { [CollapsiblePanelDataAttributes.closed]: "" };
var triggerOpenStateMapping = { open(value) {
	if (value) return { [CollapsibleTriggerDataAttributes.panelOpen]: "" };
	return null;
} };
var collapsibleOpenStateMapping = { open(value) {
	if (value) return PANEL_OPEN_HOOK;
	return PANEL_CLOSED_HOOK;
} };
//#endregion
//#region node_modules/@base-ui/react/accordion/item/AccordionItemDataAttributes.mjs
var AccordionItemDataAttributes = /*#__PURE__*/ function(AccordionItemDataAttributes) {
	/**
	* Indicates the index of the accordion item.
	* @type {number}
	*/
	AccordionItemDataAttributes["index"] = "data-index";
	/**
	* Present when the accordion item is disabled.
	*/
	AccordionItemDataAttributes["disabled"] = "data-disabled";
	/**
	* Present when the accordion item is open.
	*/
	AccordionItemDataAttributes["open"] = "data-open";
	return AccordionItemDataAttributes;
}({});
//#endregion
//#region node_modules/@base-ui/react/accordion/item/stateAttributesMapping.mjs
var accordionStateAttributesMapping = {
	...collapsibleOpenStateMapping,
	index: (value) => ({ [AccordionItemDataAttributes.index]: String(value) }),
	...transitionStatusMapping,
	value: () => null
};
//#endregion
//#region node_modules/@base-ui/react/accordion/item/AccordionItem.mjs
/**
* Groups an accordion header with the corresponding panel.
* Renders a `<div>` element.
*
* Documentation: [Base UI Accordion](https://base-ui.com/react/components/accordion)
*/
var AccordionItem = /*#__PURE__*/ import_react.forwardRef(function AccordionItem(componentProps, forwardedRef) {
	const { className, disabled: disabledProp = false, onOpenChange: onOpenChangeProp, render, value: valueProp, style, ...elementProps } = componentProps;
	const { ref: listItemRef, index } = useCompositeListItem();
	const mergedRef = useMergedRefs(forwardedRef, listItemRef);
	const { disabled: contextDisabled, handleValueChange, state: rootState, value: openValues } = useAccordionRootContext();
	const fallbackValue = useBaseUiId();
	const value = valueProp ?? fallbackValue;
	const disabled = disabledProp || contextDisabled;
	const isOpen = openValues.indexOf(value) !== -1;
	const onOpenChange = useStableCallback((nextOpen, eventDetails) => {
		onOpenChangeProp?.(nextOpen, eventDetails);
		if (eventDetails.isCanceled) return;
		handleValueChange(value, nextOpen, eventDetails);
	});
	const collapsible = useCollapsibleRoot({
		open: isOpen,
		onOpenChange,
		disabled
	});
	const collapsibleState = import_react.useMemo(() => ({
		open: collapsible.open,
		disabled: collapsible.disabled,
		transitionStatus: collapsible.transitionStatus
	}), [
		collapsible.open,
		collapsible.disabled,
		collapsible.transitionStatus
	]);
	const collapsibleContext = import_react.useMemo(() => ({
		...collapsible,
		onOpenChange,
		state: collapsibleState
	}), [
		collapsible,
		collapsibleState,
		onOpenChange
	]);
	const state = import_react.useMemo(() => ({
		...rootState,
		hidden: !isOpen && !collapsible.mounted,
		index,
		disabled,
		open: isOpen
	}), [
		collapsible.mounted,
		disabled,
		index,
		isOpen,
		rootState
	]);
	const defaultTriggerId = useBaseUiId();
	const [registeredTriggerId, setTriggerId] = import_react.useState();
	const triggerId = registeredTriggerId === null ? void 0 : registeredTriggerId ?? defaultTriggerId;
	const accordionItemContext = import_react.useMemo(() => ({
		defaultTriggerId,
		open: isOpen,
		state,
		setTriggerId,
		triggerId
	}), [
		defaultTriggerId,
		isOpen,
		state,
		setTriggerId,
		triggerId
	]);
	const element = useRenderElement("div", componentProps, {
		state,
		ref: mergedRef,
		props: elementProps,
		stateAttributesMapping: accordionStateAttributesMapping
	});
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(CollapsibleRootContext.Provider, {
		value: collapsibleContext,
		children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(AccordionItemContext.Provider, {
			value: accordionItemContext,
			children: element
		})
	});
});
AccordionItem.displayName = "AccordionItem";
//#endregion
//#region node_modules/@base-ui/react/accordion/header/AccordionHeader.mjs
/**
* A heading that labels the corresponding panel.
* Renders an `<h3>` element.
*
* Documentation: [Base UI Accordion](https://base-ui.com/react/components/accordion)
*/
var AccordionHeader = /*#__PURE__*/ import_react.forwardRef(function AccordionHeader(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const { state } = useAccordionItemContext();
	return useRenderElement("h3", componentProps, {
		state,
		ref: forwardedRef,
		props: elementProps,
		stateAttributesMapping: accordionStateAttributesMapping
	});
});
AccordionHeader.displayName = "AccordionHeader";
//#endregion
//#region node_modules/@base-ui/react/accordion/trigger/AccordionTrigger.mjs
/**
* A button that opens and closes the corresponding panel.
* Renders a `<button>` element.
*
* Documentation: [Base UI Accordion](https://base-ui.com/react/components/accordion)
*/
var AccordionTrigger = /*#__PURE__*/ import_react.forwardRef(function AccordionTrigger(componentProps, forwardedRef) {
	const { disabled: disabledProp, className, id: idProp, render, nativeButton = true, style, ...elementProps } = componentProps;
	const { panelId, open, handleTrigger, disabled: contextDisabled } = useCollapsibleRootContext();
	const { getButtonProps, buttonRef } = useButton({
		disabled: disabledProp || contextDisabled,
		focusableWhenDisabled: true,
		native: nativeButton
	});
	const { defaultTriggerId, state, setTriggerId } = useAccordionItemContext();
	const registeredId = idProp || void 0;
	const id = registeredId ?? defaultTriggerId;
	useIsoLayoutEffect(() => {
		setTriggerId((currentId) => registeredId ?? (currentId === null ? void 0 : currentId));
		return () => {
			setTriggerId((currentId) => currentId === registeredId ? null : currentId);
		};
	}, [registeredId, setTriggerId]);
	return useRenderElement("button", componentProps, {
		state,
		ref: [forwardedRef, buttonRef],
		props: [
			{
				"aria-controls": open ? panelId : void 0,
				"aria-expanded": open,
				id,
				onClick: handleTrigger
			},
			elementProps,
			getButtonProps
		],
		stateAttributesMapping: triggerOpenStateMapping
	});
});
AccordionTrigger.displayName = "AccordionTrigger";
//#endregion
//#region node_modules/@base-ui/react/collapsible/panel/useCollapsiblePanel.mjs
var EMPTY_DIMENSIONS = {
	height: void 0,
	width: void 0
};
function useCollapsiblePanel(parameters) {
	const { externalRef, hiddenUntilFound, id: idParam, keepMounted, mounted, onOpenChange, open, setMounted, setOpen, transitionStatus } = parameters;
	const panelRef = import_react.useRef(null);
	const animationTypeRef = import_react.useRef(null);
	const [dimensions, setDimensionsUnwrapped] = import_react.useState(EMPTY_DIMENSIONS);
	const lastMeasuredDimensionsRef = import_react.useRef(EMPTY_DIMENSIONS);
	const shouldSkipNextOpenRef = import_react.useRef(false);
	const shouldPreventMountAnimationRef = import_react.useRef(open);
	const shouldPreventActivityResumeAnimationRef = import_react.useRef(false);
	const [forcePanelIdle, setForcePanelIdle] = import_react.useState(false);
	const pendingTemporaryStyleRestoreRef = import_react.useRef(null);
	const mergedPanelRef = useMergedRefs(externalRef, panelRef);
	const latestOpenRef = useValueAsRef(open);
	const runOnceCloseAnimationsFinish = useAnimationsFinished(panelRef);
	const hidden = !open && !mounted;
	const panelTransitionStatus = forcePanelIdle ? "idle" : transitionStatus;
	const shouldPreventOpenAnimation = open && (shouldPreventMountAnimationRef.current || shouldPreventActivityResumeAnimationRef.current);
	const renderedDimensions = !open && mounted && animationTypeRef.current === "css-animation" && dimensions.height === void 0 && dimensions.width === void 0 ? lastMeasuredDimensionsRef.current : dimensions;
	const shouldPersistHiddenTransitionStyles = hiddenUntilFound && hidden && animationTypeRef.current !== "css-animation";
	const setDimensions = useStableCallback((nextDimensions, shouldCacheMeasurement = true) => {
		if (shouldCacheMeasurement) lastMeasuredDimensionsRef.current = nextDimensions;
		setDimensionsUnwrapped(nextDimensions);
	});
	const restorePendingTemporaryStyle = useStableCallback(() => {
		pendingTemporaryStyleRestoreRef.current?.();
		pendingTemporaryStyleRestoreRef.current = null;
	});
	const setPendingTemporaryStyleRestore = useStableCallback((restore) => {
		restorePendingTemporaryStyle();
		pendingTemporaryStyleRestoreRef.current = () => {
			pendingTemporaryStyleRestoreRef.current = null;
			restore();
		};
	});
	const markActivityResumeAnimationSuppressed = useStableCallback(() => {
		if (open && mounted && animationTypeRef.current === "css-animation") shouldPreventActivityResumeAnimationRef.current = true;
	});
	useIsoLayoutEffect(() => {
		if (!forcePanelIdle || transitionStatus === "starting") return;
		setForcePanelIdle(false);
	}, [forcePanelIdle, transitionStatus]);
	import_react.useEffect(() => {
		return () => {
			markActivityResumeAnimationSuppressed();
			restorePendingTemporaryStyle();
		};
	}, [markActivityResumeAnimationSuppressed, restorePendingTemporaryStyle]);
	useIsoLayoutEffect(() => {
		const panel = panelRef.current;
		if (!panel) return;
		if (!open && pendingTemporaryStyleRestoreRef.current) restorePendingTemporaryStyle();
		const animationType = getAnimationType(panel, shouldPreventOpenAnimation);
		animationTypeRef.current = animationType;
		if (open && transitionStatus === "idle" && shouldPreventMountAnimationRef.current && animationType === "css-animation") {
			lastMeasuredDimensionsRef.current = getDimensions(panel);
			return;
		}
		if (open && transitionStatus === "starting") {
			const skipNextOpen = shouldSkipNextOpenRef.current;
			shouldSkipNextOpenRef.current = false;
			if (animationType === "none") {
				setDimensions(getDimensions(panel));
				setForcePanelIdle(true);
				return;
			}
			if (animationType === "css-transition") {
				const restoreLayoutStyles = resetLayoutStyles(panel);
				setDimensions(getDimensions(panel));
				if (!skipNextOpen) return restoreLayoutStyles;
				const restoreTransitionDuration = setTemporaryStyle(panel, "transition-duration", "0s");
				setPendingTemporaryStyleRestore(restoreTransitionDuration);
				setForcePanelIdle(true);
				return restoreLayoutStyles;
			}
			setDimensions(getDimensions(panel));
			const restoreAnimationName = setTemporaryStyle(panel, "animation-name", "none");
			if (!skipNextOpen) {
				restoreAnimationName();
				return;
			}
			const restoreAnimationDuration = setTemporaryStyle(panel, "animation-duration", "0s");
			restoreAnimationName();
			setPendingTemporaryStyleRestore(restoreAnimationDuration);
			setForcePanelIdle(true);
			return;
		}
		if (!open && mounted && (transitionStatus === "idle" || transitionStatus === "starting")) {
			shouldPreventMountAnimationRef.current = false;
			shouldPreventActivityResumeAnimationRef.current = false;
			if (animationType === "none") {
				setDimensions(EMPTY_DIMENSIONS, false);
				setMounted(false);
				return;
			}
			setDimensions(getDimensions(panel));
			return;
		}
		if (transitionStatus !== "ending") return;
		if (animationType === "none") {
			setMounted(false);
			return;
		}
		const nextDimensions = getDimensions(panel);
		if (!(nextDimensions.height > 0 || nextDimensions.width > 0)) {
			setMounted(false);
			return;
		}
		setDimensions(nextDimensions);
		if (animationType === "css-animation") setTemporaryStyle(panel, "animation-name", "none")();
	}, [
		mounted,
		open,
		restorePendingTemporaryStyle,
		setDimensions,
		setMounted,
		setPendingTemporaryStyleRestore,
		shouldPreventOpenAnimation,
		transitionStatus
	]);
	useOpenChangeComplete({
		enabled: open && mounted && panelTransitionStatus === "idle",
		open: true,
		ref: panelRef,
		onComplete() {
			if (!open) return;
			setDimensions(EMPTY_DIMENSIONS, false);
		}
	});
	import_react.useEffect(() => {
		if (open || !mounted || panelTransitionStatus !== "ending") return;
		if (!panelRef.current) return;
		const abortController = new AbortController();
		let endingStyleFrame = -1;
		function handleComplete() {
			if (latestOpenRef.current) return;
			setMounted(false);
			setDimensions(EMPTY_DIMENSIONS, false);
		}
		endingStyleFrame = AnimationFrame.request(() => {
			runOnceCloseAnimationsFinish(handleComplete, abortController.signal);
		});
		return () => {
			AnimationFrame.cancel(endingStyleFrame);
			abortController.abort();
		};
	}, [
		latestOpenRef,
		mounted,
		open,
		panelTransitionStatus,
		runOnceCloseAnimationsFinish,
		setDimensions,
		setMounted
	]);
	useIsoLayoutEffect(() => {
		const panel = panelRef.current;
		if (!panel || !hiddenUntilFound || !hidden) return;
		panel.setAttribute("hidden", "until-found");
	}, [hidden, hiddenUntilFound]);
	import_react.useEffect(function registerBeforeMatchListener() {
		const panel = panelRef.current;
		if (!panel) return;
		function handleBeforeMatch(event) {
			const eventDetails = createChangeEventDetails(none, event);
			onOpenChange(true, eventDetails);
			if (eventDetails.isCanceled) return;
			shouldSkipNextOpenRef.current = true;
			setOpen(true);
		}
		return addEventListener(panel, "beforematch", handleBeforeMatch);
	}, [onOpenChange, setOpen]);
	const shouldRender = keepMounted || hiddenUntilFound || mounted || open;
	return {
		height: renderedDimensions.height,
		props: {
			...shouldPersistHiddenTransitionStyles ? { [CollapsiblePanelDataAttributes.startingStyle]: "" } : void 0,
			hidden,
			id: idParam
		},
		ref: mergedPanelRef,
		shouldPreventOpenAnimation,
		shouldRender,
		transitionStatus: panelTransitionStatus,
		width: renderedDimensions.width
	};
}
function getDimensions(element) {
	return {
		height: element.scrollHeight,
		width: element.scrollWidth
	};
}
function getAnimationType(element, hasSuppressedMountAnimation) {
	const panelStyles = getWindow(element).getComputedStyle(element);
	const hasAnimation = (panelStyles.animationName.split(",").map((name) => name.trim()).some((name) => name !== "" && name !== "none") || hasSuppressedMountAnimation) && hasNonZeroDuration(panelStyles.animationDuration);
	const hasTransition = hasNonZeroDuration(panelStyles.transitionDuration);
	if (hasAnimation && hasTransition) {
		warn("CSS transitions and CSS animations both detected on Collapsible or Accordion panel.", "Only one of either animation type should be used.");
		return "css-transition";
	}
	if (hasTransition) return "css-transition";
	if (hasAnimation) return "css-animation";
	return "none";
}
function hasNonZeroDuration(value) {
	return value.split(",").map((part) => part.trim()).some((part) => part !== "" && Number.parseFloat(part) > 0);
}
/**
* Temporarily overrides an inline style property and returns a cleanup that
* restores the previous inline value and priority.
* @param element - The element whose inline style should be updated.
* @param property - The CSS property name to override.
* @param value - The temporary value to assign.
* @returns A cleanup function that restores the original inline style state.
*/
function setTemporaryStyle(element, property, value) {
	const previousValue = element.style.getPropertyValue(property);
	const previousPriority = element.style.getPropertyPriority(property);
	element.style.setProperty(property, value);
	return () => {
		if (previousValue === "") {
			element.style.removeProperty(property);
			return;
		}
		element.style.setProperty(property, previousValue, previousPriority);
	};
}
/**
* Temporarily resets inline alignment styles that can distort scroll-based
* size measurements, then restores them on the next animation frame.
* @param element - The panel element being measured.
* @returns A cleanup function that cancels the scheduled restore and reapplies
* the original inline layout styles immediately.
*/
function resetLayoutStyles(element) {
	const originalLayoutStyles = {
		"justify-content": element.style.justifyContent,
		"align-items": element.style.alignItems,
		"align-content": element.style.alignContent,
		"justify-items": element.style.justifyItems
	};
	Object.keys(originalLayoutStyles).forEach((key) => {
		element.style.setProperty(key, "initial", "important");
	});
	function restoreLayoutStyles() {
		Object.entries(originalLayoutStyles).forEach(([key, value]) => {
			if (value === "") {
				element.style.removeProperty(key);
				return;
			}
			element.style.setProperty(key, value);
		});
	}
	const frame = AnimationFrame.request(restoreLayoutStyles);
	return () => {
		AnimationFrame.cancel(frame);
		restoreLayoutStyles();
	};
}
//#endregion
//#region node_modules/@base-ui/react/accordion/panel/AccordionPanelCssVars.mjs
var AccordionPanelCssVars = /*#__PURE__*/ function(AccordionPanelCssVars) {
	/**
	* The accordion panel's height.
	* @type {number}
	*/
	AccordionPanelCssVars["accordionPanelHeight"] = "--accordion-panel-height";
	/**
	* The accordion panel's width.
	* @type {number}
	*/
	AccordionPanelCssVars["accordionPanelWidth"] = "--accordion-panel-width";
	return AccordionPanelCssVars;
}({});
//#endregion
//#region node_modules/@base-ui/react/accordion/panel/AccordionPanel.mjs
/**
* A collapsible panel with the accordion item contents.
* Renders a `<div>` element.
*
* Documentation: [Base UI Accordion](https://base-ui.com/react/components/accordion)
*/
var AccordionPanel = /*#__PURE__*/ import_react.forwardRef(function AccordionPanel(componentProps, forwardedRef) {
	const { className, hiddenUntilFound: hiddenUntilFoundProp, keepMounted: keepMountedProp, id: idProp, render, style, ...elementProps } = componentProps;
	const { hiddenUntilFound: contextHiddenUntilFound, keepMounted: contextKeepMounted } = useAccordionRootContext();
	const { defaultPanelId, mounted, onOpenChange, open, setMounted, setOpen, setPanelIdState, transitionStatus } = useCollapsibleRootContext();
	const hiddenUntilFound = hiddenUntilFoundProp ?? contextHiddenUntilFound;
	const keepMounted = keepMountedProp ?? contextKeepMounted;
	const registeredId = idProp || void 0;
	const id = idProp ?? defaultPanelId;
	import_react.useEffect(() => {
		if (keepMountedProp === false && hiddenUntilFound) warn("The `keepMounted={false}` prop on an `Accordion.Panel` is ignored when `hiddenUntilFound` is enabled on the panel or root, since the panel must remain mounted while closed.");
	}, [hiddenUntilFound, keepMountedProp]);
	useIsoLayoutEffect(() => {
		setPanelIdState((currentId) => registeredId ?? (currentId === null ? void 0 : currentId));
		return () => {
			setPanelIdState((currentId) => currentId === registeredId ? null : currentId);
		};
	}, [registeredId, setPanelIdState]);
	const { height, props, ref, shouldPreventOpenAnimation, shouldRender, transitionStatus: panelTransitionStatus, width } = useCollapsiblePanel({
		externalRef: forwardedRef,
		hiddenUntilFound,
		id,
		keepMounted,
		mounted,
		onOpenChange,
		open,
		setMounted,
		setOpen,
		transitionStatus
	});
	const { state, triggerId } = useAccordionItemContext();
	const panelState = {
		...state,
		transitionStatus: panelTransitionStatus
	};
	const resolvedStyle = resolveStyle(style, panelState);
	const element = useRenderElement("div", {
		...componentProps,
		style: void 0
	}, {
		state: panelState,
		ref,
		props: [
			props,
			{
				"aria-labelledby": triggerId,
				role: "region",
				style: {
					[AccordionPanelCssVars.accordionPanelHeight]: height === void 0 ? "auto" : `${height}px`,
					[AccordionPanelCssVars.accordionPanelWidth]: width === void 0 ? "auto" : `${width}px`
				}
			},
			elementProps,
			resolvedStyle ? { style: resolvedStyle } : void 0,
			shouldPreventOpenAnimation ? { style: { animationName: "none" } } : void 0
		],
		stateAttributesMapping: accordionStateAttributesMapping
	});
	if (!shouldRender) return null;
	return element;
});
AccordionPanel.displayName = "AccordionPanel";
//#endregion
//#region node_modules/@base-ui/react/accordion/index.parts.mjs
var index_parts_exports = /* @__PURE__ */ __exportAll({
	Header: () => AccordionHeader,
	Item: () => AccordionItem,
	Panel: () => AccordionPanel,
	Root: () => AccordionRoot,
	Trigger: () => AccordionTrigger
});
//#endregion
//#region node_modules/@base-ui/utils/useOnFirstRender.mjs
function useOnFirstRender(fn) {
	const ref = import_react.useRef(true);
	if (ref.current) {
		ref.current = false;
		fn();
	}
}
//#endregion
//#region node_modules/@base-ui/react/floating-ui-react/hooks/gridNavigation.mjs
/**
* Positional arguments are deliberate: property names of an options object
* don't minify, and the signature is locked to the caller via `typeof` on the
* `grid` option of `useListNavigation`.
*
* The injected grid navigator only ever operates on a uniform 1x1 grid (sizes are
* always `1x1` and packing is never dense), so the cell-map machinery that supports
* multi-cell items collapses to an identity transform over the item list. Calling
* `getGridNavigatedIndex` directly keeps the cell-map helpers
* (`createGridCellMap`/`getGridCellIndexOfCorner`/`getGridCellIndices`) out of
* grid-combobox bundles.
*/
function gridNavigation(event, prevIndex, listRef, orientation, loopFocus, rtl, disabledIndices, minIndex, maxIndex, cols = 2) {
	const nextIndex = getGridNavigatedIndex(listRef.current, {
		event,
		orientation,
		loopFocus,
		rtl,
		cols,
		disabledIndices,
		minIndex,
		maxIndex,
		prevIndex: prevIndex > maxIndex ? minIndex : prevIndex,
		stopEvent: true
	});
	return isIndexOutOfListBounds(listRef.current, nextIndex) ? void 0 : nextIndex;
}
//#endregion
//#region node_modules/@base-ui/react/combobox/root/ComboboxRootContext.mjs
var ComboboxRootContext = /*#__PURE__*/ import_react.createContext(void 0);
ComboboxRootContext.displayName = "ComboboxRootContext";
var ComboboxFloatingContext = /*#__PURE__*/ import_react.createContext(void 0);
ComboboxFloatingContext.displayName = "ComboboxFloatingContext";
var ComboboxDerivedItemsContext = /*#__PURE__*/ import_react.createContext(void 0);
ComboboxDerivedItemsContext.displayName = "ComboboxDerivedItemsContext";
var ComboboxHasItemsContext = /*#__PURE__*/ import_react.createContext(false);
ComboboxHasItemsContext.displayName = "ComboboxHasItemsContext";
var ComboboxInputValueContext = /*#__PURE__*/ import_react.createContext("");
ComboboxInputValueContext.displayName = "ComboboxInputValueContext";
function useComboboxRootContext() {
	const context = import_react.useContext(ComboboxRootContext);
	if (!context) throw new Error("Base UI: ComboboxRootContext is missing. Combobox parts must be placed within <Combobox.Root>.");
	return context;
}
function useComboboxFloatingContext() {
	const context = import_react.useContext(ComboboxFloatingContext);
	if (!context) throw new Error("Base UI: ComboboxFloatingContext is missing. Combobox parts must be placed within <Combobox.Root>.");
	return context;
}
function useComboboxDerivedItemsContext() {
	const context = import_react.useContext(ComboboxDerivedItemsContext);
	if (!context) throw new Error("Base UI: ComboboxItemsContext is missing. Combobox parts must be placed within <Combobox.Root>.");
	return context;
}
function useComboboxInputValueContext() {
	return import_react.useContext(ComboboxInputValueContext);
}
function useComboboxHasItemsContext() {
	return import_react.useContext(ComboboxHasItemsContext);
}
//#endregion
//#region node_modules/@base-ui/react/internals/itemEquality.mjs
var defaultItemEquality = (itemValue, selectedValue) => Object.is(itemValue, selectedValue);
function compareItemEquality(itemValue, selectedValue, comparer) {
	if (itemValue == null || selectedValue == null) return Object.is(itemValue, selectedValue);
	return comparer(itemValue, selectedValue);
}
function selectedValueIncludes(selectedValues, itemValue, comparer) {
	if (!selectedValues || selectedValues.length === 0) return false;
	return selectedValues.some((selectedValue) => {
		if (selectedValue === void 0) return false;
		return compareItemEquality(itemValue, selectedValue, comparer);
	});
}
function findItemIndex(itemValues, selectedValue, comparer) {
	if (!itemValues || itemValues.length === 0) return -1;
	return itemValues.findIndex((itemValue) => {
		if (itemValue === void 0) return false;
		return compareItemEquality(itemValue, selectedValue, comparer);
	});
}
function findSelectionIndex(itemValues, selectedValue, comparer, multiple) {
	const index = findItemIndex(itemValues, multiple && Array.isArray(selectedValue) ? selectedValue[selectedValue.length - 1] : selectedValue, comparer);
	return index === -1 ? null : index;
}
function removeItem(selectedValues, itemValue, comparer) {
	return selectedValues.filter((selectedValue) => !compareItemEquality(itemValue, selectedValue, comparer));
}
//#endregion
//#region node_modules/@base-ui/react/internals/serializeValue.mjs
function serializeValue(value) {
	if (value == null) return "";
	if (typeof value === "string") return value;
	try {
		return JSON.stringify(value);
	} catch {
		return String(value);
	}
}
//#endregion
//#region node_modules/@base-ui/react/internals/resolveValueLabel.mjs
function isGroupedItems(items) {
	return items != null && items.length > 0 && typeof items[0] === "object" && items[0] != null && "items" in items[0];
}
/**
* Checks if the items array contains an item with a null value that has a non-null label.
*/
function hasNullItemLabel(items) {
	if (!Array.isArray(items)) return items != null && "null" in items;
	const arrayItems = items;
	if (isGroupedItems(arrayItems)) {
		for (const group of arrayItems) for (const item of group.items) if (item && item.value == null && item.label != null) return true;
		return false;
	}
	for (const item of arrayItems) if (item && item.value == null && item.label != null) return true;
	return false;
}
function stringifyAsLabel(item, itemToStringLabel) {
	if (itemToStringLabel && item != null) return itemToStringLabel(item) ?? "";
	if (item && typeof item === "object") {
		if ("label" in item && item.label != null) return String(item.label);
		if ("value" in item) return String(item.value);
	}
	return serializeValue(item);
}
function stringifyAsValue(item, itemToStringValue) {
	if (itemToStringValue && item != null) return itemToStringValue(item) ?? "";
	if (item && typeof item === "object" && "value" in item && "label" in item) return serializeValue(item.value);
	return serializeValue(item);
}
function resolveSelectedLabel(value, items, itemToStringLabel) {
	function fallback() {
		return stringifyAsLabel(value, itemToStringLabel);
	}
	if (itemToStringLabel && value != null) return itemToStringLabel(value);
	if (value && typeof value === "object" && "label" in value && value.label != null) return value.label;
	if (items && !Array.isArray(items)) return items[value] ?? fallback();
	if (Array.isArray(items)) {
		const arrayItems = items;
		const flatItems = isGroupedItems(arrayItems) ? arrayItems.flatMap((group) => group.items) : arrayItems;
		if (value == null || typeof value !== "object") {
			const match = flatItems.find((item) => item.value === value);
			if (match && match.label != null) return match.label;
			return fallback();
		}
		if ("value" in value) {
			const match = flatItems.find((item) => item && item.value === value.value);
			if (match && match.label != null) return match.label;
		}
	}
	return fallback();
}
function resolveMultipleLabels(values, items, itemToStringLabel) {
	return values.reduce((acc, value, index) => {
		if (index > 0) acc.push(", ");
		acc.push(/*#__PURE__*/ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: resolveSelectedLabel(value, items, itemToStringLabel) }, index));
		return acc;
	}, []);
}
//#endregion
//#region node_modules/@base-ui/react/combobox/store.mjs
var selectors$3 = {
	id: (state) => state.id,
	labelId: (state) => state.labelId,
	items: (state) => state.items,
	selectedValue: (state) => state.selectedValue,
	hasSelectionChips: (state) => {
		const selectedValue = state.selectedValue;
		return Array.isArray(selectedValue) && selectedValue.length > 0;
	},
	hasSelectedValue: (state) => {
		const { selectedValue, selectionMode } = state;
		if (selectedValue == null) return false;
		if (selectionMode === "multiple" && Array.isArray(selectedValue)) return selectedValue.length > 0;
		return true;
	},
	hasNullItemLabel: (state, enabled) => {
		return enabled ? hasNullItemLabel(state.items) : false;
	},
	open: (state) => state.open,
	mounted: (state) => state.mounted,
	forceMounted: (state) => state.forceMounted,
	inline: (state) => state.inline,
	activeIndex: (state) => state.activeIndex,
	selectedIndex: (state) => state.selectedIndex,
	isActive: (state, index) => state.activeIndex === index,
	isSelected: (state, itemValue) => {
		const comparer = state.isItemEqualToValue;
		const selectedValue = state.selectedValue;
		if (Array.isArray(selectedValue)) return selectedValue.some((selectedItem) => compareItemEquality(itemValue, selectedItem, comparer));
		return compareItemEquality(itemValue, selectedValue, comparer);
	},
	transitionStatus: (state) => state.transitionStatus,
	popupProps: (state) => state.popupProps,
	listProps: (state) => state.listProps,
	inputProps: (state) => state.inputProps,
	triggerProps: (state) => state.triggerProps,
	itemProps: (state) => state.itemProps,
	positionerElement: (state) => state.positionerElement,
	listElement: (state) => state.listElement,
	popupId: (state) => state.popupId,
	triggerElement: (state) => state.triggerElement,
	inputElement: (state) => state.inputElement,
	inputGroupElement: (state) => state.inputGroupElement,
	popupSide: (state) => state.popupSide,
	openMethod: (state) => state.openMethod,
	inputInsidePopup: (state) => state.inputInsidePopup,
	inputOwnsFormValue: (state) => state.inputOwnsFormValue,
	selectionMode: (state) => state.selectionMode,
	name: (state) => state.name,
	form: (state) => state.form,
	disabled: (state) => state.disabled,
	readOnly: (state) => state.readOnly,
	required: (state) => state.required,
	grid: (state) => state.grid,
	virtualized: (state) => state.virtualized,
	itemToStringLabel: (state) => state.itemToStringLabel,
	isItemEqualToValue: (state) => state.isItemEqualToValue,
	modal: (state) => state.modal,
	autoHighlight: (state) => state.autoHighlight
};
//#endregion
//#region node_modules/@base-ui/react/internals/field-constants/constants.mjs
var DEFAULT_VALIDITY_STATE = {
	badInput: false,
	customError: false,
	patternMismatch: false,
	rangeOverflow: false,
	rangeUnderflow: false,
	stepMismatch: false,
	tooLong: false,
	tooShort: false,
	typeMismatch: false,
	valid: null,
	valueMissing: false
};
var DEFAULT_FIELD_STATE_ATTRIBUTES = {
	valid: null,
	touched: false,
	dirty: false,
	filled: false,
	focused: false
};
var DEFAULT_FIELD_ROOT_STATE = {
	disabled: false,
	...DEFAULT_FIELD_STATE_ATTRIBUTES
};
var fieldValidityMapping = { valid(value) {
	if (value === null) return null;
	if (value) return { "data-valid": "" };
	return { "data-invalid": "" };
} };
//#endregion
//#region node_modules/@base-ui/react/internals/field-root-context/FieldRootContext.mjs
var DEFAULT_FIELD_ROOT_CONTEXT = {
	invalid: void 0,
	name: void 0,
	validityData: {
		state: DEFAULT_VALIDITY_STATE,
		errors: [],
		error: "",
		value: "",
		initialValue: null
	},
	setValidityData: NOOP,
	disabled: void 0,
	setTouched: NOOP,
	setDirty: NOOP,
	setFilled: NOOP,
	setFocused: NOOP,
	validationMode: "onSubmit",
	shouldValidateOnChange: () => false,
	state: DEFAULT_FIELD_ROOT_STATE,
	registerFieldControl: NOOP,
	validation: {
		getValidationProps: (_disabled, props = EMPTY_OBJECT) => props,
		inputRef: { current: null },
		registeredInputs: /* @__PURE__ */ new Map(),
		registerInput: NOOP,
		getInputControl: () => null,
		commit: async () => {},
		change: NOOP
	}
};
var FieldRootContext = /*#__PURE__*/ import_react.createContext(DEFAULT_FIELD_ROOT_CONTEXT);
FieldRootContext.displayName = "FieldRootContext";
function useFieldRootContext(optional = true) {
	const context = import_react.useContext(FieldRootContext);
	if (context.setValidityData === NOOP && !optional) throw new Error("Base UI: FieldRootContext is missing. Field parts must be placed within <Field.Root>.");
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/internals/field-register-control/useRegisterFieldControl.mjs
function useRegisterFieldControl(controlRef, id, value, getFormValueOverride, enabled = true, name) {
	const { registerFieldControl } = useFieldRootContext();
	const sourceRef = useRefWithInit(() => Symbol());
	useIsoLayoutEffect(() => {
		const source = sourceRef.current;
		if (!enabled) {
			registerFieldControl(source, void 0);
			return;
		}
		registerFieldControl(source, {
			controlRef,
			getValue: getFormValueOverride,
			id,
			name,
			value
		});
	}, [
		controlRef,
		enabled,
		getFormValueOverride,
		id,
		name,
		registerFieldControl,
		sourceRef,
		value
	]);
	useIsoLayoutEffect(() => {
		const source = sourceRef.current;
		return () => {
			registerFieldControl(source, void 0);
		};
	}, [registerFieldControl, sourceRef]);
}
//#endregion
//#region node_modules/@base-ui/react/internals/form-context/FormContext.mjs
var FormContext = /*#__PURE__*/ import_react.createContext({
	elementRef: { current: null },
	formRef: { current: { fields: /* @__PURE__ */ new Map() } },
	errors: {},
	clearErrors: NOOP,
	validationMode: "onSubmit",
	submitAttemptedRef: { current: false }
});
FormContext.displayName = "FormContext";
function useFormContext() {
	return import_react.useContext(FormContext);
}
//#endregion
//#region node_modules/@base-ui/react/internals/labelable-provider/LabelableContext.mjs
/**
* A context for providing [labelable elements](https://html.spec.whatwg.org/multipage/forms.html#category-label)\
* with an accessible name (label) and description.
*/
var LabelableContext = /*#__PURE__*/ import_react.createContext({
	controlId: void 0,
	registerControlId: NOOP,
	labelId: void 0,
	setLabelId: NOOP,
	messageIds: [],
	setMessageIds: NOOP,
	getDescriptionProps: (externalProps) => externalProps
});
LabelableContext.displayName = "LabelableContext";
function useLabelableContext() {
	return import_react.useContext(LabelableContext);
}
//#endregion
//#region node_modules/@base-ui/react/internals/labelable-provider/useLabelableId.mjs
function useLabelableId(params = {}) {
	const { id, implicit = false, controlRef } = params;
	const { controlId, registerControlId } = useLabelableContext();
	const defaultId = useBaseUiId(id);
	const controlIdForEffect = implicit ? controlId : void 0;
	const controlSourceRef = useRefWithInit(() => Symbol());
	const hasRegisteredRef = import_react.useRef(false);
	const hadExplicitIdRef = import_react.useRef(id != null);
	const unregisterControlId = useStableCallback(() => {
		if (!hasRegisteredRef.current || registerControlId === NOOP) return;
		hasRegisteredRef.current = false;
		registerControlId(controlSourceRef.current, void 0);
	});
	useIsoLayoutEffect(() => {
		if (registerControlId === NOOP) return;
		let nextId;
		if (implicit) {
			const elem = controlRef?.current;
			if (isElement(elem) && elem.closest("label") != null) nextId = id ?? null;
			else nextId = controlIdForEffect ?? defaultId;
		} else if (id != null) {
			hadExplicitIdRef.current = true;
			nextId = id;
		} else if (hadExplicitIdRef.current) nextId = defaultId;
		else {
			unregisterControlId();
			return;
		}
		if (nextId === void 0) {
			unregisterControlId();
			return;
		}
		hasRegisteredRef.current = true;
		registerControlId(controlSourceRef.current, nextId);
	}, [
		id,
		controlRef,
		controlIdForEffect,
		registerControlId,
		implicit,
		defaultId,
		controlSourceRef,
		unregisterControlId
	]);
	import_react.useEffect(() => {
		return unregisterControlId;
	}, [unregisterControlId]);
	return controlId ?? defaultId;
}
//#endregion
//#region node_modules/@base-ui/react/combobox/root/utils/index.mjs
/**
* Derives the default id assigned to `Combobox.Popup` when the input is rendered inside it.
* Shared by the popup (which applies it) and the trigger (which references it via `aria-controls`)
* so the convention only lives in one place.
*/
function getComboboxPopupId(rootId) {
	return rootId == null ? void 0 : `${rootId}-popup`;
}
/**
* Enhanced filter using Intl.Collator for more robust string matching.
* Uses the provided `itemToStringLabel` function if available, otherwise falls back to:
* • When `item` is an object with a `value` property, that property is used.
* • When `item` is a primitive (e.g. `string`), it is used directly.
*/
function createCollatorItemFilter(collatorFilter, itemToStringLabel) {
	return (item, query) => {
		if (item == null) return false;
		return collatorFilter.contains(item, query, itemToStringLabel);
	};
}
/**
* Enhanced filter for single selection mode using Intl.Collator that shows all items
* when query is empty or matches the current selection, making it easier to browse options.
*/
function createSingleSelectionCollatorFilter(collatorFilter, itemToStringLabel, selectedValue) {
	return (item, query) => {
		if (item == null) return false;
		if (!query) return true;
		const selectedString = selectedValue != null ? stringifyAsLabel(selectedValue, itemToStringLabel) : "";
		if (selectedString && collatorFilter.contains(selectedString, query) && selectedString.length === query.length) return true;
		return collatorFilter.contains(item, query, itemToStringLabel);
	};
}
//#endregion
//#region node_modules/@base-ui/react/utils/stringifyLocale.mjs
function stringifyLocale(locale) {
	if (Array.isArray(locale)) return locale.map((value) => stringifyLocale(value)).join(",");
	if (locale == null) return "";
	return String(locale);
}
//#endregion
//#region node_modules/@base-ui/react/internals/filter.mjs
var filterCache = /* @__PURE__ */ new Map();
function getFilter(options = {}) {
	const mergedOptions = {
		usage: "search",
		sensitivity: "base",
		ignorePunctuation: true,
		...options
	};
	const cacheKey = `${stringifyLocale(options.locale)}|${JSON.stringify(mergedOptions)}`;
	const cachedFilter = filterCache.get(cacheKey);
	if (cachedFilter) return cachedFilter;
	const collator = new Intl.Collator(options.locale, mergedOptions);
	const filter = {
		contains(item, query, itemToString) {
			if (!query) return true;
			const itemString = stringifyAsLabel(item, itemToString);
			for (let i = 0; i <= itemString.length - query.length; i += 1) if (collator.compare(itemString.slice(i, i + query.length), query) === 0) return true;
			return false;
		},
		startsWith(item, query, itemToString) {
			if (!query) return true;
			const itemString = stringifyAsLabel(item, itemToString);
			return collator.compare(itemString.slice(0, query.length), query) === 0;
		},
		endsWith(item, query, itemToString) {
			if (!query) return true;
			const itemString = stringifyAsLabel(item, itemToString);
			const queryLength = query.length;
			return itemString.length >= queryLength && collator.compare(itemString.slice(itemString.length - queryLength), query) === 0;
		}
	};
	filterCache.set(cacheKey, filter);
	return filter;
}
//#endregion
//#region node_modules/@base-ui/react/combobox/root/utils/useFilter.mjs
/**
* Matches items against a query using `Intl.Collator` for robust string matching.
*/
var useCoreFilter = getFilter;
/**
* Matches items against a query using `Intl.Collator` for robust string matching.
*/
function useComboboxFilter(options = {}) {
	const { multiple = false, value, ...collatorOptions } = options;
	const coreFilter = getFilter(collatorOptions);
	const contains = import_react.useCallback((item, query, itemToString) => {
		if (multiple) return createCollatorItemFilter(coreFilter, itemToString)(item, query);
		return createSingleSelectionCollatorFilter(coreFilter, itemToString, value)(item, query);
	}, [
		coreFilter,
		value,
		multiple
	]);
	return import_react.useMemo(() => ({
		...coreFilter,
		contains
	}), [contains, coreFilter]);
}
//#endregion
//#region node_modules/@base-ui/react/internals/areArraysEqual.mjs
function areArraysEqual(array1, array2, itemComparer = (a, b) => a === b) {
	return array1.length === array2.length && array1.every((value, index) => itemComparer(value, array2[index]));
}
//#endregion
//#region node_modules/@base-ui/react/combobox/root/utils/constants.mjs
var NO_ACTIVE_VALUE = Symbol("none");
var INITIAL_LAST_HIGHLIGHT = {
	value: NO_ACTIVE_VALUE,
	index: -1
};
//#endregion
//#region node_modules/@base-ui/react/combobox/root/AriaCombobox.mjs
/**
* @internal
*/
function AriaCombobox(props) {
	const { id: idProp, onOpenChangeComplete: onOpenChangeCompleteProp, defaultSelectedValue = null, selectedValue: selectedValueProp, onSelectedValueChange, defaultInputValue: defaultInputValueProp, inputValue: inputValueProp, open: openProp, defaultOpen = false, selectionMode, onItemHighlighted: onItemHighlightedProp, name: nameProp, form, disabled: disabledProp = false, readOnly = false, required = false, inputRef: inputRefProp, grid = false, items, filteredItems: filteredItemsProp, filter: filterProp, openOnInputClick = true, autoHighlight = false, keepHighlight = false, highlightItemOnHover = true, loopFocus = true, itemToStringLabel, itemToStringValue, isItemEqualToValue = defaultItemEquality, virtualized = false, inline: inlineProp = false, fillInputOnItemPress = true, modal = false, limit = -1, autoComplete = "list", formAutoComplete, locale, submitOnItemClick = false } = props;
	const { clearErrors } = useFormContext();
	const { setDirty, validityData, setFilled, name: fieldName, disabled: fieldDisabled, setTouched, setFocused, validationMode, validation } = useFieldRootContext();
	const direction = useDirection();
	const id = useLabelableId({ id: idProp });
	const collatorFilter = useCoreFilter({ locale });
	const [queryChangedAfterOpen, setQueryChangedAfterOpen] = import_react.useState(false);
	const [closeQuery, setCloseQuery] = import_react.useState(null);
	const listRef = import_react.useRef([]);
	const labelsRef = import_react.useRef([]);
	const popupRef = import_react.useRef(null);
	const inputRef = import_react.useRef(null);
	const startDismissRef = import_react.useRef(null);
	const endDismissRef = import_react.useRef(null);
	const emptyRef = import_react.useRef(null);
	const keyboardActiveRef = import_react.useRef(true);
	const hadInputClearRef = import_react.useRef(false);
	const chipsContainerRef = import_react.useRef(null);
	const clearRef = import_react.useRef(null);
	const selectionEventRef = import_react.useRef(null);
	const lastHighlightRef = import_react.useRef(INITIAL_LAST_HIGHLIGHT);
	const pendingQueryHighlightRef = import_react.useRef(null);
	/**
	* Contains the currently visible list of item values post-filtering.
	*/
	const valuesRef = import_react.useRef([]);
	/**
	* The item element that received the last `pointerdown`, used to detect whether a
	* `mouseup` on an item belongs to a drag-select gesture that started elsewhere.
	*/
	const pointerDownItemRef = import_react.useRef(null);
	const disabled = fieldDisabled || disabledProp;
	const name = fieldName ?? nameProp;
	const multiple = selectionMode === "multiple";
	const single = selectionMode === "single";
	const hasInputValue = inputValueProp !== void 0 || defaultInputValueProp !== void 0;
	const hasItems = items !== void 0;
	const hasFilteredItemsProp = filteredItemsProp !== void 0;
	let autoHighlightMode;
	if (autoHighlight === "always") autoHighlightMode = "always";
	else autoHighlightMode = autoHighlight ? "input-change" : false;
	const [selectedValue, setSelectedValueUnwrapped] = useControlled({
		controlled: selectedValueProp,
		default: multiple ? defaultSelectedValue ?? EMPTY_ARRAY$1 : defaultSelectedValue,
		name: "Combobox",
		state: "selectedValue"
	});
	const filter = import_react.useMemo(() => {
		if (filterProp === null) return () => true;
		if (filterProp !== void 0) return filterProp;
		return createCollatorItemFilter(collatorFilter, itemToStringLabel);
	}, [
		filterProp,
		collatorFilter,
		itemToStringLabel
	]);
	const initialDefaultInputValue = useRefWithInit(() => {
		if (hasInputValue) return defaultInputValueProp ?? "";
		if (single) return stringifyAsLabel(selectedValue, itemToStringLabel);
		return "";
	}).current;
	const [inputValue, setInputValueUnwrapped] = useControlled({
		controlled: inputValueProp,
		default: initialDefaultInputValue,
		name: "Combobox",
		state: "inputValue"
	});
	const [open, setOpenUnwrapped] = useControlled({
		controlled: openProp,
		default: defaultOpen,
		name: "Combobox",
		state: "open"
	});
	const isGrouped = isGroupedItems(items);
	const query = closeQuery ?? String(inputValue).trim();
	const selectedLabelString = single ? stringifyAsLabel(selectedValue, itemToStringLabel) : "";
	const shouldBypassFiltering = single && !queryChangedAfterOpen && query !== "" && selectedLabelString.length === query.length && collatorFilter.contains(selectedLabelString, query);
	const filterQuery = shouldBypassFiltering ? "" : query;
	const shouldIgnoreExternalFiltering = hasItems && hasFilteredItemsProp && shouldBypassFiltering;
	const flatItems = import_react.useMemo(() => {
		if (!items) return EMPTY_ARRAY$1;
		if (isGrouped) return items.flatMap((group) => group.items);
		return items;
	}, [items, isGrouped]);
	const filteredItems = import_react.useMemo(() => {
		if (filteredItemsProp && !shouldIgnoreExternalFiltering) return filteredItemsProp;
		if (!items) return EMPTY_ARRAY$1;
		if (isGrouped) {
			const groupedItems = items;
			const resultingGroups = [];
			let currentCount = 0;
			for (const group of groupedItems) {
				if (limit > -1 && currentCount >= limit) break;
				const remainingLimit = limit > -1 ? limit - currentCount : Infinity;
				const itemsToTake = filterQuery === "" ? group.items.slice(0, remainingLimit) : [];
				if (filterQuery !== "") for (const item of group.items) {
					if (itemsToTake.length >= remainingLimit) break;
					if (filter(item, filterQuery, itemToStringLabel)) itemsToTake.push(item);
				}
				if (itemsToTake.length > 0) {
					const newGroup = {
						...group,
						items: itemsToTake
					};
					resultingGroups.push(newGroup);
					currentCount += itemsToTake.length;
				}
			}
			return resultingGroups;
		}
		if (filterQuery === "") return limit > -1 ? flatItems.slice(0, limit) : flatItems;
		const limitedItems = [];
		for (const item of flatItems) {
			if (limit > -1 && limitedItems.length >= limit) break;
			if (filter(item, filterQuery, itemToStringLabel)) limitedItems.push(item);
		}
		return limitedItems;
	}, [
		filteredItemsProp,
		shouldIgnoreExternalFiltering,
		items,
		isGrouped,
		filterQuery,
		limit,
		filter,
		itemToStringLabel,
		flatItems
	]);
	const flatFilteredItems = import_react.useMemo(() => {
		if (isGrouped) return filteredItems.flatMap((g) => g.items);
		return filteredItems;
	}, [filteredItems, isGrouped]);
	const store = useRefWithInit(() => {
		let initialSelectedIndex = null;
		if (inlineProp && open && hasItems && selectionMode !== "none") initialSelectedIndex = findSelectionIndex(flatFilteredItems, selectedValue, isItemEqualToValue, multiple);
		return new Store({
			id,
			labelId: void 0,
			selectedValue,
			open,
			items,
			selectionMode,
			listRef,
			labelsRef,
			popupRef,
			emptyRef,
			inputRef,
			startDismissRef,
			endDismissRef,
			keyboardActiveRef,
			chipsContainerRef,
			clearRef,
			valuesRef,
			pointerDownItemRef,
			selectionEventRef,
			name,
			form,
			disabled,
			readOnly,
			required,
			grid,
			virtualized,
			openOnInputClick,
			itemToStringLabel,
			isItemEqualToValue,
			modal,
			autoHighlight: autoHighlightMode,
			submitOnItemClick,
			hasInputValue,
			mounted: false,
			forceMounted: false,
			transitionStatus: "idle",
			inline: inlineProp,
			activeIndex: null,
			selectedIndex: initialSelectedIndex,
			popupProps: {},
			listProps: {},
			inputProps: {},
			triggerProps: {},
			itemProps: EMPTY_OBJECT,
			positionerElement: null,
			listElement: null,
			popupId: void 0,
			triggerElement: null,
			inputElement: null,
			inputGroupElement: null,
			popupSide: null,
			openMethod: null,
			inputInsidePopup: true,
			inputOwnsFormValue: selectionMode === "none",
			onOpenChangeComplete: NOOP,
			setOpen: NOOP,
			setInputValue: NOOP,
			setSelectedValue: NOOP,
			setIndices: NOOP,
			handleSelection: NOOP,
			forceMount: NOOP,
			requestSubmit: NOOP
		});
	}).current;
	const fieldRawValue = selectionMode === "none" ? inputValue : selectedValue;
	const fieldStringValue = import_react.useMemo(() => {
		if (selectionMode === "none") return fieldRawValue;
		if (Array.isArray(selectedValue)) return selectedValue.map((value) => stringifyAsValue(value, itemToStringValue));
		return stringifyAsValue(selectedValue, itemToStringValue);
	}, [
		fieldRawValue,
		itemToStringValue,
		selectionMode,
		selectedValue
	]);
	const onItemHighlighted = useStableCallback(onItemHighlightedProp);
	const onOpenChangeComplete = useStableCallback(onOpenChangeCompleteProp);
	const activeIndex = useStore(store, selectors$3.activeIndex);
	const selectedIndex = useStore(store, selectors$3.selectedIndex);
	const positionerElement = useStore(store, selectors$3.positionerElement);
	const listElement = useStore(store, selectors$3.listElement);
	const triggerElement = useStore(store, selectors$3.triggerElement);
	const inputElement = useStore(store, selectors$3.inputElement);
	const inputGroupElement = useStore(store, selectors$3.inputGroupElement);
	const inline = useStore(store, selectors$3.inline);
	const inputInsidePopup = useStore(store, selectors$3.inputInsidePopup);
	const inputOwnsFormValue = useStore(store, selectors$3.inputOwnsFormValue);
	const triggerRef = useValueAsRef(triggerElement);
	const { mounted, setMounted, transitionStatus } = useTransitionStatus(open);
	const { openMethod, triggerProps } = useOpenInteractionType(open);
	const getStringifiedValueForForm = useStableCallback(() => fieldStringValue);
	useRegisterFieldControl(inputInsidePopup ? triggerRef : inputRef, id, fieldRawValue, getStringifiedValueForForm, !disabled, nameProp);
	const forceMount = useStableCallback(() => {
		if (items) labelsRef.current = flatFilteredItems.map((item) => stringifyAsLabel(item, itemToStringLabel));
		else store.set("forceMounted", true);
	});
	/**
	* Emits `onItemHighlighted` for the item at `index`, or clears the highlight when `index` is `-1`
	* (a no-op if nothing was highlighted). Keeps `lastHighlightRef` in sync with what was emitted.
	*/
	const emitHighlight = useStableCallback((value, index, type) => {
		if (index === -1) {
			if (lastHighlightRef.current === INITIAL_LAST_HIGHLIGHT) return;
			lastHighlightRef.current = INITIAL_LAST_HIGHLIGHT;
		} else lastHighlightRef.current = {
			value,
			index
		};
		onItemHighlighted(value, createGenericEventDetails(type, void 0, { index }));
	});
	const setIndices = useStableCallback((options) => {
		store.update(options);
		const activeIndexOption = options.activeIndex;
		if (activeIndexOption === void 0) return;
		const type = options.type || "none";
		if (activeIndexOption === null) emitHighlight(void 0, -1, type);
		else emitHighlight(valuesRef.current[activeIndexOption], activeIndexOption, type);
	});
	const setInputValue = useStableCallback((next, eventDetails) => {
		hadInputClearRef.current = eventDetails.reason === inputClear;
		props.onInputValueChange?.(next, eventDetails);
		if (eventDetails.isCanceled) return;
		if (eventDetails.reason === "input-change") {
			if (open && closeQuery !== null) setCloseQuery(null);
			const event = eventDetails.event;
			const inputType = event.inputType;
			if (event.type === "compositionend" || inputType != null && inputType !== "" && inputType !== "insertReplacementText") {
				const hasQuery = next.trim() !== "";
				if (hasQuery) setQueryChangedAfterOpen(true);
				pendingQueryHighlightRef.current = { hasQuery };
				const list = store.state.listElement;
				if (!store.state.virtualized && list) {
					const popup = popupRef.current;
					for (const ancestor of getOverflowAncestors(list.firstElementChild ?? list)) {
						if (!isHTMLElement(ancestor) || (popup ? !contains(popup, ancestor) : ancestor.getAttribute("role") === "dialog")) break;
						if (isScrollableY(ancestor)) {
							ancestor.scrollTop = 0;
							break;
						}
					}
				}
				if (hasQuery && autoHighlightMode && store.state.activeIndex == null && (open || inline)) store.set("activeIndex", 0);
			}
		} else if (eventDetails.reason === "input-clear" && next === "" && store.state.inputInsidePopup) pendingQueryHighlightRef.current = {
			hasQuery: false,
			selection: true
		};
		setInputValueUnwrapped(next);
	});
	const setOpen = useStableCallback((nextOpen, eventDetails) => {
		if (open === nextOpen) return;
		if (eventDetails.reason === "escape-key" && hasItems && flatFilteredItems.length === 0 && !emptyRef.current) eventDetails.allowPropagation();
		props.onOpenChange?.(nextOpen, eventDetails);
		if (eventDetails.isCanceled) return;
		if (nextOpen && inputInsidePopup && !inline && closeQuery !== null) {
			setQueryChangedAfterOpen(false);
			setCloseQuery(null);
			if (inputValue !== "" && eventDetails.reason !== "input-change") setInputValue("", createChangeEventDetails(inputClear, eventDetails.event));
		}
		if (!nextOpen && queryChangedAfterOpen) {
			if (single) {
				if (!inline) setCloseQuery(query);
				if (query === "") setQueryChangedAfterOpen(false);
			} else if (multiple) {
				if (!inline) setCloseQuery(query);
				if (inputInsidePopup) setIndices({ activeIndex: null });
				if (!inputInsidePopup || inline) setInputValue("", createChangeEventDetails(inputClear, eventDetails.event));
			}
		}
		setOpenUnwrapped(nextOpen);
		if (!nextOpen && inputInsidePopup && (eventDetails.reason === "focus-out" || eventDetails.reason === "outside-press")) {
			setTouched(true);
			setFocused(false);
			if (validationMode === "onBlur") {
				const valueToValidate = selectionMode === "none" ? inputValue : selectedValue;
				validation.commit(valueToValidate);
			}
		}
	});
	const setSelectedValue = useStableCallback((nextValue, eventDetails) => {
		onSelectedValueChange?.(nextValue, eventDetails);
		if (eventDetails.isCanceled) return;
		setSelectedValueUnwrapped(nextValue);
		if (selectionMode === "none" && popupRef.current && fillInputOnItemPress || single && !store.state.inputInsidePopup) setInputValue(stringifyAsLabel(nextValue, itemToStringLabel), createChangeEventDetails(eventDetails.reason, eventDetails.event));
	});
	const handleSelection = useStableCallback((event, itemValue) => {
		const targetEl = getTarget(event);
		const overrideEvent = selectionEventRef.current ?? event;
		selectionEventRef.current = null;
		const eventDetails = createChangeEventDetails(itemPress, overrideEvent);
		const href = targetEl?.closest("a")?.getAttribute("href");
		if (href) {
			if (href.startsWith("#")) setOpen(false, eventDetails);
			return;
		}
		if (multiple) {
			const currentSelectedValue = Array.isArray(selectedValue) ? selectedValue : [];
			const nextValue = selectedValueIncludes(currentSelectedValue, itemValue, isItemEqualToValue) ? removeItem(currentSelectedValue, itemValue, isItemEqualToValue) : [...currentSelectedValue, itemValue];
			setSelectedValue(nextValue, eventDetails);
			if (eventDetails.isCanceled) return;
			if (!(inputRef.current ? inputRef.current.value.trim() !== "" : false)) return;
			if (store.state.inputInsidePopup) setInputValue("", createChangeEventDetails(inputClear, eventDetails.event));
			else setOpen(false, eventDetails);
		} else {
			setSelectedValue(itemValue, eventDetails);
			if (eventDetails.isCanceled) return;
			setOpen(false, eventDetails);
		}
	});
	const requestSubmit = useStableCallback(() => {
		const formElement = validation.inputRef.current?.form ?? store.state.inputElement?.form;
		if (formElement && typeof formElement.requestSubmit === "function") formElement.requestSubmit();
	});
	const handleUnmount = useStableCallback(() => {
		setMounted(false);
		onOpenChangeComplete?.(false);
		setQueryChangedAfterOpen(false);
		setCloseQuery(null);
		if (selectionMode === "none") setIndices({
			activeIndex: null,
			selectedIndex: null
		});
		else setIndices({ activeIndex: null });
		if (multiple && inputRef.current && inputRef.current.value !== "" && !hadInputClearRef.current) setInputValue("", createChangeEventDetails(inputClear));
		if (single) if (store.state.inputInsidePopup) {
			if (inputRef.current && inputRef.current.value !== "") setInputValue("", createChangeEventDetails(inputClear));
		} else {
			const stringVal = stringifyAsLabel(selectedValue, itemToStringLabel);
			if (inputRef.current && inputRef.current.value !== stringVal) setInputValue(stringVal, createChangeEventDetails(stringVal === "" ? inputClear : none));
		}
	});
	const resolvedPopupRef = import_react.useMemo(() => {
		if (inline && positionerElement) return { current: positionerElement.closest("[role=\"dialog\"]") };
		return popupRef;
	}, [inline, positionerElement]);
	useOpenChangeComplete({
		enabled: !props.actionsRef,
		open,
		ref: resolvedPopupRef,
		onComplete() {
			if (!open) handleUnmount();
		}
	});
	import_react.useImperativeHandle(props.actionsRef, () => ({ unmount: handleUnmount }), [handleUnmount]);
	useIsoLayoutEffect(function syncClosedState() {
		if (open) return;
		pointerDownItemRef.current = null;
		if (selectionMode === "none") return;
		const registry = hasItems ? flatItems : valuesRef.current;
		setIndices({ selectedIndex: findSelectionIndex(registry, selectedValue, isItemEqualToValue, multiple) });
	}, [
		open,
		selectedValue,
		selectionMode,
		multiple,
		hasItems,
		flatItems,
		isItemEqualToValue,
		setIndices
	]);
	useIsoLayoutEffect(() => {
		if (items) {
			valuesRef.current = flatFilteredItems;
			listRef.current.length = flatFilteredItems.length;
		}
	}, [items, flatFilteredItems]);
	useIsoLayoutEffect(() => {
		const pendingHighlight = pendingQueryHighlightRef.current;
		if (pendingHighlight) {
			const listIsNavigable = open || inline || store.state.positionerElement?.hidden === false;
			if (pendingHighlight.hasQuery) {
				if (autoHighlightMode && listIsNavigable) store.set("activeIndex", 0);
				pendingQueryHighlightRef.current = null;
			} else if (String(inputValue).trim() === "") {
				pendingQueryHighlightRef.current = null;
				if (listIsNavigable) {
					const clearedBySelection = pendingHighlight.selection;
					if (autoHighlightMode === "always" && !clearedBySelection && store.state.selectionMode === "none") store.set("activeIndex", 0);
					queueMicrotask(() => {
						if (!store.state.open && !store.state.inline || inputRef.current && inputRef.current.value.trim() !== "") return;
						const currentSelectedValue = store.state.selectedValue;
						const isMultiple = store.state.selectionMode === "multiple";
						const lastSelectedValue = isMultiple && Array.isArray(currentSelectedValue) ? currentSelectedValue[currentSelectedValue.length - 1] : currentSelectedValue;
						const hasSelection = store.state.selectionMode !== "none" && lastSelectedValue != null;
						if (hasSelection || clearedBySelection) {
							const registry = hasItems || hasFilteredItemsProp ? flatFilteredItems : valuesRef.current;
							store.set("activeIndex", hasSelection ? findSelectionIndex(registry, currentSelectedValue, store.state.isItemEqualToValue, isMultiple) : null);
						} else if (autoHighlightMode === "always") store.set("activeIndex", 0);
					});
				}
			}
		}
		if (!open && !inline) return;
		const candidateItems = hasItems || hasFilteredItemsProp ? flatFilteredItems : valuesRef.current;
		const storeActiveIndex = store.state.activeIndex;
		if (storeActiveIndex == null) {
			if (autoHighlightMode === "always" && candidateItems.length > 0) {
				store.set("activeIndex", 0);
				return;
			}
			emitHighlight(void 0, -1, none);
			return;
		}
		if (storeActiveIndex >= candidateItems.length) {
			emitHighlight(void 0, -1, none);
			store.set("activeIndex", null);
			return;
		}
		const itemValue = candidateItems[storeActiveIndex];
		const previouslyHighlightedItemValue = lastHighlightRef.current.value;
		const isSameItem = previouslyHighlightedItemValue !== NO_ACTIVE_VALUE && compareItemEquality(itemValue, previouslyHighlightedItemValue, store.state.isItemEqualToValue);
		if (lastHighlightRef.current.index !== storeActiveIndex || !isSameItem) emitHighlight(itemValue, storeActiveIndex, none);
	}, [
		activeIndex,
		autoHighlightMode,
		emitHighlight,
		hasFilteredItemsProp,
		hasItems,
		flatFilteredItems,
		inline,
		open,
		store,
		inputValue
	]);
	useIsoLayoutEffect(() => {
		if (selectionMode === "none") {
			setFilled(String(inputValue) !== "");
			return;
		}
		setFilled(multiple ? Array.isArray(selectedValue) && selectedValue.length > 0 : selectedValue != null);
	}, [
		setFilled,
		selectionMode,
		inputValue,
		selectedValue,
		multiple
	]);
	import_react.useEffect(() => {
		if (hasItems && autoHighlightMode && flatFilteredItems.length === 0) setIndices({ activeIndex: null });
	}, [
		hasItems,
		autoHighlightMode,
		flatFilteredItems.length,
		setIndices
	]);
	function isSelectedValueDirty(value) {
		const initialValue = validityData.initialValue;
		if (Array.isArray(value) && Array.isArray(initialValue)) return !areArraysEqual(value, initialValue, (itemValue, initialItemValue) => compareItemEquality(itemValue, initialItemValue, isItemEqualToValue));
		return value !== initialValue;
	}
	useValueChanged(query, () => {
		if (!open || query === "" || query === String(initialDefaultInputValue)) return;
		setQueryChangedAfterOpen(true);
	});
	function syncInputToSelectedLabel() {
		const nextInputValue = stringifyAsLabel(selectedValue, itemToStringLabel);
		if (inputValue !== nextInputValue) setInputValue(nextInputValue, createChangeEventDetails(none));
	}
	useValueChanged(selectedValue, () => {
		if (selectionMode === "none") return;
		clearErrors(name);
		setDirty(isSelectedValueDirty(selectedValue));
		validation.change(selectedValue);
		if (single && !hasInputValue && !inputInsidePopup) syncInputToSelectedLabel();
	});
	useValueChanged(inputValue, () => {
		if (selectionMode !== "none") return;
		clearErrors(name);
		setDirty(inputValue !== validityData.initialValue);
		validation.change(inputValue);
	});
	useValueChanged(items, () => {
		if (!single || hasInputValue || inputInsidePopup || queryChangedAfterOpen) return;
		syncInputToSelectedLabel();
	});
	const floatingRootContext = useFloatingRootContext({
		open: inline ? true : open,
		onOpenChange: setOpen,
		elements: {
			reference: inputInsidePopup ? triggerElement : inputElement,
			floating: positionerElement
		}
	});
	const ariaHasPopup = grid ? "grid" : "listbox";
	const expanded = open || inline;
	const ariaExpanded = expanded ? "true" : "false";
	const role = import_react.useMemo(() => {
		const isPlainInput = inputElement?.tagName === "INPUT";
		const shouldTreatAsInput = inputElement == null || isPlainInput;
		const shouldApplyAria = shouldTreatAsInput || expanded;
		const reference = shouldTreatAsInput ? {
			autoComplete: "off",
			spellCheck: "false",
			autoCorrect: "off",
			autoCapitalize: "none"
		} : {};
		if (shouldApplyAria) {
			reference.role = "combobox";
			reference["aria-expanded"] = ariaExpanded;
			reference["aria-haspopup"] = ariaHasPopup;
			reference["aria-controls"] = expanded ? listElement?.id : void 0;
			reference["aria-autocomplete"] = autoComplete;
		}
		return {
			reference,
			floating: { role: "presentation" }
		};
	}, [
		inputElement,
		expanded,
		ariaExpanded,
		ariaHasPopup,
		listElement?.id,
		autoComplete
	]);
	const click = useClick(floatingRootContext, {
		enabled: !readOnly && !disabled && openOnInputClick,
		event: "mousedown-only",
		toggle: false,
		touchOpenDelay: inputInsidePopup ? 0 : 100,
		reason: inputPress
	});
	const dismiss = useDismiss(floatingRootContext, {
		enabled: !readOnly && !disabled && !inline,
		outsidePressEvent: {
			mouse: "sloppy",
			touch: "intentional"
		},
		bubbles: inline ? true : void 0,
		outsidePress(event) {
			const target = getTarget(event);
			return !contains(triggerElement, target) && !contains(clearRef.current, target) && !contains(chipsContainerRef.current, target) && !contains(inputGroupElement, target);
		}
	});
	const listNavigation = useListNavigation(floatingRootContext, {
		enabled: !readOnly && !disabled,
		id,
		listRef,
		activeIndex,
		selectedIndex,
		virtual: true,
		loopFocus,
		allowEscape: loopFocus && !autoHighlightMode,
		focusItemOnOpen: queryChangedAfterOpen || selectionMode === "none" && !autoHighlightMode ? false : "auto",
		focusItemOnHover: highlightItemOnHover,
		resetOnPointerLeave: !keepHighlight,
		orientation: grid ? "horizontal" : void 0,
		rtl: direction === "rtl",
		disabledIndices: EMPTY_ARRAY$1,
		grid: grid ? gridNavigation : void 0,
		onNavigate(nextActiveIndex, event) {
			if (!event && !open || transitionStatus === "ending") return;
			if (!event) setIndices({ activeIndex: nextActiveIndex });
			else setIndices({
				activeIndex: nextActiveIndex,
				type: keyboardActiveRef.current ? keyboard : pointer
			});
		}
	});
	const inputProps = import_react.useMemo(() => mergeProps(listNavigation.reference, { onKeyDown(event) {
		if (grid && store.state.activeIndex == null && (event.key === "ArrowLeft" || event.key === "ArrowRight")) event.preventBaseUIHandler();
	} }, dismiss.reference, click.reference, role.reference), [
		listNavigation.reference,
		dismiss.reference,
		click.reference,
		role.reference,
		grid,
		store
	]);
	const popupProps = import_react.useMemo(() => mergeProps(FOCUSABLE_POPUP_PROPS, dismiss.floating), [dismiss.floating]);
	const listProps = import_react.useMemo(() => mergeProps(listNavigation.floating, role.floating), [listNavigation.floating, role.floating]);
	const itemProps = import_react.useMemo(() => {
		const listNavigationItemProps = listNavigation.item;
		if (!listNavigationItemProps) return EMPTY_OBJECT;
		return {
			...listNavigationItemProps,
			onFocus: void 0
		};
	}, [listNavigation.item]);
	useOnFirstRender(() => {
		store.update({
			inline: inlineProp,
			popupProps,
			listProps,
			inputProps,
			triggerProps,
			itemProps,
			setOpen,
			setInputValue,
			setSelectedValue,
			setIndices,
			handleSelection,
			forceMount,
			requestSubmit,
			onOpenChangeComplete
		});
	});
	useIsoLayoutEffect(() => {
		store.update({
			id,
			selectedValue,
			open,
			mounted,
			transitionStatus,
			items,
			inline: inlineProp,
			popupProps,
			listProps,
			inputProps,
			triggerProps,
			openMethod,
			itemProps,
			selectionMode,
			name,
			form,
			disabled,
			readOnly,
			required,
			grid,
			virtualized,
			openOnInputClick,
			itemToStringLabel,
			modal,
			autoHighlight: autoHighlightMode,
			isItemEqualToValue,
			submitOnItemClick,
			hasInputValue,
			inputOwnsFormValue: selectionMode === "none" && (inlineProp || !store.state.inputInsidePopup)
		});
	}, [
		store,
		id,
		selectedValue,
		open,
		mounted,
		transitionStatus,
		items,
		popupProps,
		listProps,
		inputProps,
		itemProps,
		openMethod,
		triggerProps,
		selectionMode,
		name,
		disabled,
		readOnly,
		required,
		grid,
		virtualized,
		openOnInputClick,
		itemToStringLabel,
		modal,
		isItemEqualToValue,
		submitOnItemClick,
		hasInputValue,
		inlineProp,
		autoHighlightMode,
		form
	]);
	const hiddenInputRef = useMergedRefs(inputRefProp, validation.inputRef);
	const itemsContextValue = import_react.useMemo(() => ({
		query,
		hasItems,
		filteredItems,
		flatFilteredItems
	}), [
		query,
		hasItems,
		filteredItems,
		flatFilteredItems
	]);
	const serializedValue = import_react.useMemo(() => {
		if (Array.isArray(fieldRawValue)) return "";
		return stringifyAsValue(fieldRawValue, itemToStringValue);
	}, [fieldRawValue, itemToStringValue]);
	const hasMultipleSelection = multiple && Array.isArray(selectedValue) && selectedValue.length > 0;
	const hiddenInputName = multiple || selectionMode === "none" && inputOwnsFormValue ? void 0 : name;
	const hiddenInputs = import_react.useMemo(() => {
		if (!multiple || !Array.isArray(selectedValue) || !name) return null;
		return selectedValue.map((value) => {
			const currentSerializedValue = stringifyAsValue(value, itemToStringValue);
			return /*#__PURE__*/ (0, import_jsx_runtime.jsx)("input", {
				type: "hidden",
				form,
				name,
				value: currentSerializedValue,
				disabled
			}, currentSerializedValue);
		});
	}, [
		multiple,
		selectedValue,
		form,
		name,
		itemToStringValue,
		disabled
	]);
	const children = /*#__PURE__*/ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [
		props.children,
		/*#__PURE__*/ (0, import_jsx_runtime.jsx)("input", {
			...validation.getValidationProps(disabled, {
				onFocus() {
					if (inputInsidePopup) {
						triggerElement?.focus();
						return;
					}
					(inputRef.current || triggerElement)?.focus();
				},
				onChange(event) {
					if (event.nativeEvent.defaultPrevented || disabled || readOnly) return;
					const nextValue = event.currentTarget.value;
					const nextValueLower = nextValue.toLowerCase();
					const details = createChangeEventDetails(none, event.nativeEvent);
					const findSerializedMatchIndex = () => valuesRef.current.findIndex((candidate) => stringifyAsValue(candidate, itemToStringValue).toLowerCase() === nextValueLower || stringifyAsLabel(candidate, itemToStringLabel).toLowerCase() === nextValueLower);
					function handleChange() {
						if (multiple) return;
						if (selectionMode === "none") {
							setInputValue(nextValue, details);
							return;
						}
						let matchingIndex = findSerializedMatchIndex();
						if (matchingIndex === -1) matchingIndex = valuesRef.current.findIndex((_, index) => {
							const renderedLabel = labelsRef.current[index];
							return renderedLabel != null && renderedLabel.toLowerCase() === nextValueLower;
						});
						const matchingValue = matchingIndex === -1 ? void 0 : valuesRef.current[matchingIndex];
						if (matchingValue != null) setSelectedValue?.(matchingValue, details);
					}
					if (single) {
						forceMount();
						if (items && findSerializedMatchIndex() === -1) store.set("forceMounted", true);
					}
					queueMicrotask(handleChange);
				}
			}),
			id: id && hiddenInputName == null ? `${id}-hidden-input` : void 0,
			form,
			name: hiddenInputName,
			autoComplete: formAutoComplete,
			disabled,
			required: required && !hasMultipleSelection,
			readOnly,
			value: serializedValue,
			ref: hiddenInputRef,
			style: hiddenInputName ? visuallyHiddenInput : visuallyHidden,
			tabIndex: -1,
			"aria-hidden": true,
			suppressHydrationWarning: true
		}),
		hiddenInputs
	] });
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ComboboxRootContext.Provider, {
		value: store,
		children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ComboboxFloatingContext.Provider, {
			value: floatingRootContext,
			children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ComboboxHasItemsContext.Provider, {
				value: hasItems,
				children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ComboboxDerivedItemsContext.Provider, {
					value: itemsContextValue,
					children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ComboboxInputValueContext.Provider, {
						value: inputValue,
						children
					})
				})
			})
		})
	});
}
//#endregion
//#region node_modules/@base-ui/react/autocomplete/root/AutocompleteRoot.mjs
/**
* Groups all parts of the autocomplete.
* Doesn't render its own HTML element.
*
* Documentation: [Base UI Autocomplete](https://base-ui.com/react/components/autocomplete)
*/
function AutocompleteRoot(props) {
	const { openOnInputClick = false, value, defaultValue, onValueChange, mode = "list", itemToStringValue, ...other } = props;
	const enableInline = mode === "inline" || mode === "both";
	const staticItems = mode === "inline" || mode === "none";
	const isControlled = value !== void 0;
	const [internalValue, setInternalValue] = import_react.useState(defaultValue ?? "");
	const [inlineInputValue, setInlineInputValue] = import_react.useState("");
	import_react.useEffect(() => {
		if (isControlled) setInlineInputValue("");
	}, [value, isControlled]);
	let resolvedInputValue;
	if (enableInline && inlineInputValue !== "") resolvedInputValue = inlineInputValue;
	else if (isControlled) resolvedInputValue = value ?? "";
	else resolvedInputValue = internalValue;
	const collator = useCoreFilter({ locale: other.locale });
	const baseFilter = import_react.useMemo(() => {
		if (other.filter !== void 0) return other.filter;
		return collator.contains;
	}, [other.filter, collator]);
	const resolvedQuery = String(isControlled ? value : internalValue).trim();
	const resolvedFilter = import_react.useMemo(() => {
		if (mode !== "both") return staticItems ? null : baseFilter;
		if (baseFilter === null) return null;
		return (item, _query, toString) => {
			return baseFilter(item, resolvedQuery, toString);
		};
	}, [
		baseFilter,
		mode,
		resolvedQuery,
		staticItems
	]);
	function handleValueChange(nextValue, eventDetails) {
		setInlineInputValue("");
		if (!isControlled) setInternalValue(nextValue);
		onValueChange?.(nextValue, eventDetails);
	}
	function handleItemHighlighted(highlightedValue, eventDetails) {
		props.onItemHighlighted?.(highlightedValue, eventDetails);
		if (eventDetails.reason === "pointer") return;
		setInlineInputValue(enableInline && highlightedValue != null ? stringifyAsLabel(highlightedValue, itemToStringValue) : "");
	}
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(AriaCombobox, {
		...other,
		itemToStringLabel: itemToStringValue,
		openOnInputClick,
		selectionMode: "none",
		fillInputOnItemPress: true,
		filter: resolvedFilter,
		autoComplete: mode,
		inputValue: resolvedInputValue,
		defaultInputValue: defaultValue,
		onInputValueChange: handleValueChange,
		onItemHighlighted: handleItemHighlighted
	});
}
//#endregion
//#region node_modules/@base-ui/react/autocomplete/value/AutocompleteValue.mjs
/**
* The current value of the autocomplete.
* Doesn't render its own HTML element.
*
* Documentation: [Base UI Autocomplete](https://base-ui.com/react/components/autocomplete)
*/
function AutocompleteValue(props) {
	const { children } = props;
	const inputValue = useComboboxInputValueContext();
	let returnValue = null;
	if (typeof children === "function") returnValue = children(String(inputValue));
	else if (children != null) returnValue = children;
	else returnValue = inputValue;
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: returnValue });
}
//#endregion
//#region node_modules/@base-ui/react/combobox/utils/stateAttributesMapping.mjs
var triggerStateAttributesMapping = {
	...pressableTriggerOpenStateMapping,
	...fieldValidityMapping,
	popupSide: (side) => side ? { "data-popup-side": side } : null,
	listEmpty: (empty) => empty ? { "data-list-empty": "" } : null
};
//#endregion
//#region node_modules/@base-ui/react/utils/resolveAriaLabelledBy.mjs
function getDefaultLabelId(id) {
	return id == null ? void 0 : `${id}-label`;
}
function resolveAriaLabelledBy(fieldLabelId, localLabelId) {
	return fieldLabelId ?? localLabelId;
}
//#endregion
//#region node_modules/@base-ui/react/combobox/utils/parts.mjs
/**
* The popup side is only meaningful while the positioner is mounted, as the store retains the
* last resolved side after the popup unmounts.
*/
function usePopupSide(store) {
	const mounted = useStore(store, selectors$3.mounted);
	const popupSide = useStore(store, selectors$3.popupSide);
	const positionerElement = useStore(store, selectors$3.positionerElement);
	return mounted && positionerElement ? popupSide : null;
}
/**
* Whether the filtered list has no items to show.
*/
function useListEmpty() {
	return useComboboxDerivedItemsContext().filteredItems.length === 0;
}
/**
* The arrow keys that move the chip highlight backwards and forwards, in that order.
*/
function getChipNavigationKeys(direction) {
	return direction === "rtl" ? ["ArrowRight", "ArrowLeft"] : ["ArrowLeft", "ArrowRight"];
}
/**
* Where the highlight lands once the chip at `index` is removed, or `undefined` for no highlight.
*/
function getIndexAfterChipRemoval(index, chipCount) {
	const nextIndex = index >= chipCount - 1 ? chipCount - 2 : index;
	return nextIndex >= 0 ? nextIndex : void 0;
}
/**
* Commits the highlighted item by clicking it, tagging the originating event so the item's
* handler can attribute the selection to it.
*/
function clickHighlightedItem(store, activeIndex, nativeEvent) {
	const listItem = store.state.listRef.current[activeIndex];
	if (listItem) {
		store.state.selectionEventRef.current = nativeEvent;
		listItem.click();
		store.state.selectionEventRef.current = null;
	}
}
//#endregion
//#region node_modules/@base-ui/react/combobox/trigger/ComboboxTrigger.mjs
/**
* A button that opens the popup.
* Renders a `<button>` element.
*
* Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
*/
var ComboboxTrigger = /*#__PURE__*/ import_react.forwardRef(function ComboboxTrigger(componentProps, forwardedRef) {
	const { render, className, nativeButton = true, disabled: disabledProp = false, id: idProp, style, ...elementProps } = componentProps;
	const { state: fieldState, disabled: fieldDisabled, setTouched, setFocused, validationMode, validation } = useFieldRootContext();
	const { labelId: fieldLabelId } = useLabelableContext();
	const store = useComboboxRootContext();
	const selectionMode = useStore(store, selectors$3.selectionMode);
	const comboboxDisabled = useStore(store, selectors$3.disabled);
	const readOnly = useStore(store, selectors$3.readOnly);
	const required = useStore(store, selectors$3.required);
	const positionerElement = useStore(store, selectors$3.positionerElement);
	const listElement = useStore(store, selectors$3.listElement);
	const storedPopupId = useStore(store, selectors$3.popupId);
	const triggerProps = useStore(store, selectors$3.triggerProps);
	const inputInsidePopup = useStore(store, selectors$3.inputInsidePopup);
	const rootId = useStore(store, selectors$3.id);
	const comboboxLabelId = useStore(store, selectors$3.labelId);
	const open = useStore(store, selectors$3.open);
	const selectedValue = useStore(store, selectors$3.selectedValue);
	const activeIndex = useStore(store, selectors$3.activeIndex);
	const selectedIndex = useStore(store, selectors$3.selectedIndex);
	const hasSelectedValue = useStore(store, selectors$3.hasSelectedValue);
	const floatingRootContext = useComboboxFloatingContext();
	const inputValue = useComboboxInputValueContext();
	const focusTimeout = useTimeout();
	const disabled = fieldDisabled || comboboxDisabled || disabledProp;
	const listEmpty = useListEmpty();
	const popupSide = usePopupSide(store);
	useLabelableId({ id: inputInsidePopup ? idProp : void 0 });
	const id = inputInsidePopup ? idProp ?? rootId : idProp;
	const ariaLabelledBy = resolveAriaLabelledBy(fieldLabelId, comboboxLabelId);
	let ariaControls;
	if (open && inputInsidePopup) ariaControls = storedPopupId ?? getComboboxPopupId(rootId);
	else if (open) ariaControls = listElement?.id;
	const currentPointerTypeRef = import_react.useRef("");
	function trackPointerType(event) {
		currentPointerTypeRef.current = event.pointerType;
	}
	const { reference: triggerTypeaheadProps } = useTypeahead(floatingRootContext, {
		enabled: !open && !readOnly && !comboboxDisabled && selectionMode === "single",
		listRef: store.state.labelsRef,
		activeIndex,
		selectedIndex,
		onMatch(index) {
			const nextSelectedValue = store.state.valuesRef.current[index];
			if (nextSelectedValue !== void 0) store.state.setSelectedValue(nextSelectedValue, createChangeEventDetails(none));
		}
	});
	const { reference: triggerClickProps } = useClick(floatingRootContext, {
		enabled: !readOnly && !comboboxDisabled,
		event: "mousedown"
	});
	const { buttonRef, getButtonProps } = useButton({
		native: nativeButton,
		disabled
	});
	const state = {
		...fieldState,
		open,
		disabled,
		popupSide,
		listEmpty,
		placeholder: selectionMode === "none" ? false : !hasSelectedValue
	};
	return useRenderElement("button", componentProps, {
		ref: [
			forwardedRef,
			buttonRef,
			useStableCallback((element) => {
				store.set("triggerElement", element);
			})
		],
		state,
		props: [
			triggerProps,
			triggerClickProps,
			triggerTypeaheadProps,
			{
				id,
				tabIndex: inputInsidePopup ? 0 : -1,
				role: inputInsidePopup ? "combobox" : void 0,
				"aria-expanded": open,
				"aria-haspopup": inputInsidePopup ? "dialog" : "listbox",
				"aria-controls": ariaControls,
				"aria-required": inputInsidePopup ? required || void 0 : void 0,
				"aria-labelledby": ariaLabelledBy,
				onPointerDown: trackPointerType,
				onPointerEnter: trackPointerType,
				onFocus() {
					setFocused(true);
					if (disabled || readOnly) return;
					focusTimeout.start(0, store.state.forceMount);
				},
				onBlur(event) {
					if (contains(positionerElement, event.relatedTarget)) return;
					setTouched(true);
					setFocused(false);
					if (validationMode === "onBlur") {
						const valueToValidate = selectionMode === "none" ? inputValue : selectedValue;
						validation.commit(valueToValidate);
					}
				},
				onMouseDown(event) {
					if (disabled || readOnly) return;
					if (!inputInsidePopup) floatingRootContext.set("domReferenceElement", event.currentTarget);
					store.state.forceMount();
					if (currentPointerTypeRef.current !== "touch") {
						store.state.inputRef.current?.focus();
						if (!inputInsidePopup) event.preventDefault();
					}
					if (open) return;
					const doc = ownerDocument(event.currentTarget);
					function handleMouseUp(mouseEvent) {
						const currentTriggerElement = store.state.triggerElement;
						if (!currentTriggerElement) return;
						const mouseUpTarget = getTarget(mouseEvent);
						const positioner = store.state.positionerElement;
						const list = store.state.listElement;
						if (contains(currentTriggerElement, mouseUpTarget) || contains(positioner, mouseUpTarget) || contains(list, mouseUpTarget)) return;
						if (isMouseWithinBounds(mouseEvent, currentTriggerElement)) return;
						store.state.setOpen(false, createChangeEventDetails(cancelOpen, mouseEvent));
					}
					if (inputInsidePopup) doc.addEventListener("mouseup", handleMouseUp, { once: true });
				},
				onKeyDown(event) {
					if (readOnly) return;
					if (event.key === "ArrowDown" || event.key === "ArrowUp") {
						stopEvent(event);
						store.state.setOpen(true, createChangeEventDetails(listNavigation, event.nativeEvent));
						store.state.inputRef.current?.focus();
					}
				}
			},
			validation.getValidationProps(disabled, elementProps),
			getButtonProps
		],
		stateAttributesMapping: triggerStateAttributesMapping
	});
});
ComboboxTrigger.displayName = "ComboboxTrigger";
//#endregion
//#region node_modules/@base-ui/react/autocomplete/trigger/AutocompleteTrigger.mjs
/**
* A button that opens the popup.
* Renders a `<button>` element.
*
* Documentation: [Base UI Autocomplete](https://base-ui.com/react/components/autocomplete)
*/
var AutocompleteTrigger = ComboboxTrigger;
//#endregion
//#region node_modules/@base-ui/react/combobox/chips/ComboboxChipsContext.mjs
var ComboboxChipsContext = /*#__PURE__*/ import_react.createContext(void 0);
ComboboxChipsContext.displayName = "ComboboxChipsContext";
function useComboboxChipsContext() {
	return import_react.useContext(ComboboxChipsContext);
}
//#endregion
//#region node_modules/@base-ui/react/combobox/positioner/ComboboxPositionerContext.mjs
var ComboboxPositionerContext = /*#__PURE__*/ import_react.createContext(void 0);
ComboboxPositionerContext.displayName = "ComboboxPositionerContext";
function useComboboxPositionerContext(optional) {
	const context = import_react.useContext(ComboboxPositionerContext);
	if (context === void 0 && !optional) throw new Error("Base UI: <Combobox.Popup> and <Combobox.Arrow> must be used within the <Combobox.Positioner> component");
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/combobox/utils/ComboboxInternalDismissButton.mjs
/**
* @internal
*/
var ComboboxInternalDismissButton = /*#__PURE__*/ import_react.forwardRef(function ComboboxInternalDismissButton(_, forwardedRef) {
	const store = useComboboxRootContext();
	const { buttonRef, getButtonProps } = useButton({ native: false });
	const mergedRef = useMergedRefs(forwardedRef, buttonRef);
	function handleDismiss(event) {
		store.state.setOpen(false, createChangeEventDetails(closePress, event.nativeEvent, event.currentTarget));
	}
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)("span", {
		ref: mergedRef,
		...getButtonProps({ onClick: handleDismiss }),
		"aria-label": "Dismiss",
		tabIndex: void 0,
		style: visuallyHiddenInput
	});
});
ComboboxInternalDismissButton.displayName = "ComboboxInternalDismissButton";
//#endregion
//#region node_modules/@base-ui/react/combobox/input/ComboboxInput.mjs
/**
* A text input to search for items in the list.
* Renders an `<input>` element.
*
* Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
*/
var ComboboxInput = /*#__PURE__*/ import_react.forwardRef(function ComboboxInput(componentProps, forwardedRef) {
	const { render, className, disabled: disabledProp = false, id: idProp, style, ...elementProps } = componentProps;
	const { state: fieldState, disabled: fieldDisabled, setTouched, setFocused, validationMode, validation } = useFieldRootContext();
	const { labelId: fieldLabelId } = useLabelableContext();
	const comboboxChipsContext = useComboboxChipsContext();
	const positioning = useComboboxPositionerContext(true);
	const hasPositionerParent = Boolean(positioning);
	const store = useComboboxRootContext();
	const inputValue = useComboboxInputValueContext();
	const direction = useDirection();
	const required = useStore(store, selectors$3.required);
	const comboboxDisabled = useStore(store, selectors$3.disabled);
	const readOnly = useStore(store, selectors$3.readOnly);
	const name = useStore(store, selectors$3.name);
	const form = useStore(store, selectors$3.form);
	const selectionMode = useStore(store, selectors$3.selectionMode);
	const autoHighlightMode = useStore(store, selectors$3.autoHighlight);
	const inputProps = useStore(store, selectors$3.inputProps);
	const triggerProps = useStore(store, selectors$3.triggerProps);
	const open = useStore(store, selectors$3.open);
	const mounted = useStore(store, selectors$3.mounted);
	const selectedValue = useStore(store, selectors$3.selectedValue);
	const rootId = useStore(store, selectors$3.id);
	const inline = useStore(store, selectors$3.inline);
	const modal = useStore(store, selectors$3.modal);
	const autoHighlightEnabled = Boolean(autoHighlightMode);
	const popupSide = usePopupSide(store);
	const disabled = fieldDisabled || comboboxDisabled || disabledProp;
	const listEmpty = useListEmpty();
	const isInsidePopup = hasPositionerParent || inline;
	const focusManagerModal = !isInsidePopup || modal;
	const id = useBaseUiId(idProp ?? (!isInsidePopup ? rootId : void 0));
	const fieldStateForInput = hasPositionerParent ? DEFAULT_FIELD_STATE_ATTRIBUTES : fieldState;
	const [composingValue, setComposingValue] = import_react.useState(null);
	const isComposingRef = import_react.useRef(false);
	const lastActiveIndexRef = import_react.useRef(null);
	const shouldRestoreActiveIndexRef = import_react.useRef(false);
	const inputOwnsFormValue = selectionMode === "none" && !hasPositionerParent;
	const setInputElement = useStableCallback((element) => {
		const nextIsInsidePopup = hasPositionerParent || store.state.inline;
		if (nextIsInsidePopup && !store.state.hasInputValue) store.state.setInputValue("", createChangeEventDetails(none));
		store.update({
			inputElement: element,
			inputInsidePopup: nextIsInsidePopup,
			inputOwnsFormValue
		});
	});
	const validationProps = hasPositionerParent ? elementProps : validation.getValidationProps(disabled, elementProps);
	function clearHighlight() {
		store.state.setIndices({
			activeIndex: null,
			selectedIndex: null,
			type: store.state.keyboardActiveRef.current ? keyboard : pointer
		});
	}
	function markPointerActive() {
		store.state.keyboardActiveRef.current = false;
	}
	const state = {
		...fieldStateForInput,
		open,
		disabled,
		readOnly,
		popupSide,
		listEmpty
	};
	function handleKeyDown(event) {
		if (!comboboxChipsContext) return;
		let nextIndex;
		const { highlightedChipIndex } = comboboxChipsContext;
		const renderedChipsCount = comboboxChipsContext.chipsRef.current.length;
		const [previousChipKey, nextChipKey] = getChipNavigationKeys(direction);
		if (highlightedChipIndex !== void 0) {
			if (event.key === previousChipKey) {
				event.preventDefault();
				if (highlightedChipIndex > 0) nextIndex = highlightedChipIndex - 1;
				else nextIndex = void 0;
			} else if (event.key === nextChipKey) {
				event.preventDefault();
				if (highlightedChipIndex < renderedChipsCount - 1) nextIndex = highlightedChipIndex + 1;
				else nextIndex = void 0;
			} else if (event.key === "Backspace" || event.key === "Delete") {
				event.preventDefault();
				nextIndex = getIndexAfterChipRemoval(highlightedChipIndex, selectedValue.length);
				clearHighlight();
			}
			return nextIndex;
		}
		if (event.key === previousChipKey && (event.currentTarget.selectionStart ?? 0) === 0 && selectedValue.length > 0) {
			event.preventDefault();
			nextIndex = renderedChipsCount > 0 ? renderedChipsCount - 1 : void 0;
		}
		return nextIndex;
	}
	const element = useRenderElement("input", componentProps, {
		state,
		ref: [
			forwardedRef,
			store.state.inputRef,
			setInputElement
		],
		props: [
			inputProps,
			triggerProps,
			{
				value: composingValue ?? inputValue,
				"aria-readonly": readOnly || void 0,
				"aria-required": required || void 0,
				"aria-labelledby": fieldLabelId,
				disabled,
				readOnly,
				required: selectionMode === "none" ? required : void 0,
				form,
				...inputOwnsFormValue && name && { name },
				id,
				onFocus() {
					setFocused(true);
					if (!inline || !shouldRestoreActiveIndexRef.current) return;
					shouldRestoreActiveIndexRef.current = false;
					const nextActiveIndex = lastActiveIndexRef.current;
					if (nextActiveIndex == null || !Object.hasOwn(store.state.valuesRef.current, nextActiveIndex)) return;
					store.state.setIndices({ activeIndex: nextActiveIndex });
				},
				onBlur() {
					setTouched(true);
					setFocused(false);
					const activeIndex = store.state.activeIndex;
					if (inline && activeIndex !== null && autoHighlightMode !== "always") {
						lastActiveIndexRef.current = activeIndex;
						shouldRestoreActiveIndexRef.current = true;
						store.state.setIndices({ activeIndex: null });
					}
					if (validationMode === "onBlur") {
						const valueToValidate = selectionMode === "none" ? inputValue : selectedValue;
						validation.commit(valueToValidate);
					}
				},
				onCompositionStart(event) {
					if (android) return;
					isComposingRef.current = true;
					setComposingValue(event.currentTarget.value);
				},
				onCompositionEnd(event) {
					isComposingRef.current = false;
					const next = event.currentTarget.value;
					setComposingValue(null);
					store.state.setInputValue(next, createChangeEventDetails(inputChange, event.nativeEvent));
				},
				onChange(event) {
					const nativeEvent = event.nativeEvent;
					const inputType = nativeEvent.inputType;
					const autofillLikeInput = !inputType || inputType === "insertReplacementText";
					const shouldOpenOnInput = isComposingRef.current || !autofillLikeInput;
					function maybeOpenOnInput(trimmed) {
						if (readOnly || disabled || !trimmed || !shouldOpenOnInput) return;
						store.state.setOpen(true, createChangeEventDetails(inputChange, nativeEvent));
						if (!autoHighlightEnabled) clearHighlight();
					}
					if (isComposingRef.current) {
						const nextVal = event.currentTarget.value;
						setComposingValue(nextVal);
						if (nextVal === "" && !store.state.openOnInputClick && !store.state.inputInsidePopup) store.state.setOpen(false, createChangeEventDetails(inputClear, nativeEvent));
						const trimmed = nextVal.trim();
						const shouldMaintainHighlight = autoHighlightEnabled && trimmed !== "";
						maybeOpenOnInput(trimmed);
						if (open && store.state.activeIndex !== null && !shouldMaintainHighlight) clearHighlight();
						return;
					}
					const inputChangeDetails = createChangeEventDetails(inputChange, nativeEvent);
					store.state.setInputValue(event.currentTarget.value, inputChangeDetails);
					if (inputChangeDetails.isCanceled) return;
					const empty = event.currentTarget.value === "";
					const clearDetails = createChangeEventDetails(inputClear, nativeEvent);
					if (empty && !store.state.inputInsidePopup) {
						if (selectionMode === "single") store.state.setSelectedValue(null, clearDetails);
						if (!store.state.openOnInputClick) store.state.setOpen(false, clearDetails);
					}
					maybeOpenOnInput(event.currentTarget.value.trim());
					if (open && store.state.activeIndex !== null && !autoHighlightEnabled) clearHighlight();
				},
				onKeyDown(event) {
					if (disabled || readOnly) return;
					if (event.ctrlKey || event.shiftKey || event.altKey || event.metaKey) return;
					store.state.keyboardActiveRef.current = true;
					const input = event.currentTarget;
					const scrollAmount = input.scrollWidth - input.clientWidth;
					const isRTL = direction === "rtl";
					if (event.key === "Home") {
						stopEvent(event);
						const cursor = gecko && isRTL ? input.value.length : 0;
						input.setSelectionRange(cursor, cursor);
						input.scrollLeft = 0;
						return;
					}
					if (event.key === "End") {
						stopEvent(event);
						const cursor = gecko && isRTL ? 0 : input.value.length;
						input.setSelectionRange(cursor, cursor);
						input.scrollLeft = isRTL ? -scrollAmount : scrollAmount;
						return;
					}
					if (!mounted && event.key === "Escape") {
						const isClear = selectionMode === "multiple" && Array.isArray(selectedValue) ? selectedValue.length === 0 : selectedValue === null;
						const details = createChangeEventDetails(escapeKey, event.nativeEvent);
						const value = selectionMode === "multiple" ? [] : null;
						store.state.setInputValue("", details);
						store.state.setSelectedValue(value, details);
						if (!isClear && !store.state.inline && !details.isPropagationAllowed) event.stopPropagation();
						return;
					}
					if (comboboxChipsContext && event.key === "Backspace" && input.value === "" && comboboxChipsContext.highlightedChipIndex === void 0 && Array.isArray(selectedValue) && selectedValue.length > 0) {
						const renderedChipsCount = comboboxChipsContext.chipsRef.current.length;
						const removalIndex = renderedChipsCount > 0 ? renderedChipsCount - 1 : selectedValue.length - 1;
						const newValue = selectedValue.filter((_, index) => index !== removalIndex);
						clearHighlight();
						store.state.setSelectedValue(newValue, createChangeEventDetails(none, event.nativeEvent));
						return;
					}
					const hadHighlightedChip = comboboxChipsContext?.highlightedChipIndex !== void 0;
					const nextIndex = handleKeyDown(event);
					comboboxChipsContext?.setHighlightedChipIndex(nextIndex);
					if (nextIndex !== void 0) comboboxChipsContext?.chipsRef.current[nextIndex]?.focus();
					else if (hadHighlightedChip) store.state.inputRef.current?.focus();
					if (event.which === 229) return;
					if (event.key === "Enter" && open) {
						const activeIndex = store.state.activeIndex;
						const nativeEvent = event.nativeEvent;
						if (activeIndex === null) {
							if (inline) return;
							store.state.setOpen(false, createChangeEventDetails(none, nativeEvent));
							return;
						}
						stopEvent(event);
						clickHighlightedItem(store, activeIndex, nativeEvent);
					}
				},
				onPointerMove: markPointerActive,
				onPointerDown: markPointerActive
			},
			validationProps
		],
		stateAttributesMapping: triggerStateAttributesMapping
	});
	const renderedInput = hasPositionerParent ? /*#__PURE__*/ (0, import_jsx_runtime.jsx)(FieldRootContext.Provider, {
		value: DEFAULT_FIELD_ROOT_CONTEXT,
		children: element
	}) : element;
	return /*#__PURE__*/ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [open && focusManagerModal && /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ComboboxInternalDismissButton, { ref: store.state.startDismissRef }), renderedInput] });
});
ComboboxInput.displayName = "ComboboxInput";
//#endregion
//#region node_modules/@base-ui/react/combobox/utils/handleInputPress.mjs
function handleInputPress(event, store, disabled, readOnly, shouldIgnoreTarget) {
	if (event.baseUIHandlerPrevented || readOnly) return;
	const target = getTarget(event.nativeEvent);
	const targetElement = isElement(target) ? target : null;
	if (targetElement !== event.currentTarget && (shouldIgnoreTarget?.(targetElement) || isInteractiveElement(targetElement))) return;
	event.preventDefault();
	if (disabled) return;
	store.state.inputRef.current?.focus();
	if (store.state.openOnInputClick) store.state.setOpen(true, createChangeEventDetails(inputPress, event.nativeEvent));
}
//#endregion
//#region node_modules/@base-ui/react/combobox/input-group/ComboboxInputGroup.mjs
/**
* A wrapper for the input and its associated controls.
* Renders a `<div>` element.
*
* Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
*/
var ComboboxInputGroup = /*#__PURE__*/ import_react.forwardRef(function ComboboxInputGroup(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const { state: fieldState } = useFieldRootContext();
	const store = useComboboxRootContext();
	const open = useStore(store, selectors$3.open);
	const comboboxDisabled = useStore(store, selectors$3.disabled);
	const readOnly = useStore(store, selectors$3.readOnly);
	const hasSelectedValue = useStore(store, selectors$3.hasSelectedValue);
	const selectionMode = useStore(store, selectors$3.selectionMode);
	const popupSide = usePopupSide(store);
	const disabled = comboboxDisabled;
	const listEmpty = useListEmpty();
	const placeholder = selectionMode === "none" ? false : !hasSelectedValue;
	const state = {
		...fieldState,
		open,
		disabled,
		readOnly,
		popupSide,
		listEmpty,
		placeholder
	};
	return useRenderElement("div", componentProps, {
		ref: [forwardedRef, useStableCallback((element) => {
			store.set("inputGroupElement", element);
		})],
		props: [{
			role: "group",
			onMouseDown(event) {
				handleInputPress(event, store, disabled, readOnly, (target) => {
					return contains(store.state.chipsContainerRef.current, target);
				});
			}
		}, elementProps],
		state,
		stateAttributesMapping: triggerStateAttributesMapping
	});
});
ComboboxInputGroup.displayName = "ComboboxInputGroup";
//#endregion
//#region node_modules/@base-ui/react/autocomplete/input-group/AutocompleteInputGroup.mjs
/**
* A wrapper for the input and its associated controls.
* Renders a `<div>` element.
*
* Documentation: [Base UI Autocomplete](https://base-ui.com/react/components/autocomplete)
*/
var AutocompleteInputGroup = ComboboxInputGroup;
//#endregion
//#region node_modules/@base-ui/react/combobox/icon/ComboboxIcon.mjs
/**
* An icon that indicates that the trigger button opens the popup.
* Renders a `<span>` element.
*
* Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
*/
var ComboboxIcon = /*#__PURE__*/ import_react.forwardRef(function ComboboxIcon(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	return useRenderElement("span", componentProps, {
		ref: forwardedRef,
		props: [{
			"aria-hidden": true,
			children: "▼"
		}, elementProps]
	});
});
ComboboxIcon.displayName = "ComboboxIcon";
//#endregion
//#region node_modules/@base-ui/react/combobox/clear/ComboboxClear.mjs
var stateAttributesMapping$19 = {
	...transitionStatusMapping,
	...triggerOpenStateMapping$1
};
/**
* Clears the value when clicked.
* Renders a `<button>` element.
*
* Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
*/
var ComboboxClear = /*#__PURE__*/ import_react.forwardRef(function ComboboxClear(componentProps, forwardedRef) {
	const { render, className, disabled: disabledProp = false, nativeButton = true, keepMounted = false, style, ...elementProps } = componentProps;
	const { disabled: fieldDisabled } = useFieldRootContext();
	const store = useComboboxRootContext();
	const selectionMode = useStore(store, selectors$3.selectionMode);
	const comboboxDisabled = useStore(store, selectors$3.disabled);
	const readOnly = useStore(store, selectors$3.readOnly);
	const open = useStore(store, selectors$3.open);
	const selectedValue = useStore(store, selectors$3.selectedValue);
	const hasSelectionChips = useStore(store, selectors$3.hasSelectionChips);
	const inputValue = useComboboxInputValueContext();
	let visible = false;
	if (selectionMode === "none") visible = inputValue !== "";
	else if (selectionMode === "single") visible = selectedValue != null;
	else visible = hasSelectionChips;
	const disabled = fieldDisabled || comboboxDisabled || disabledProp;
	const { buttonRef, getButtonProps } = useButton({
		native: nativeButton,
		disabled
	});
	const { mounted, transitionStatus, setMounted } = useTransitionStatus(visible);
	const state = {
		disabled,
		visible,
		open,
		transitionStatus
	};
	useOpenChangeComplete({
		open: visible,
		ref: store.state.clearRef,
		onComplete() {
			if (!visible) setMounted(false);
		}
	});
	const element = useRenderElement("button", componentProps, {
		state,
		ref: [
			forwardedRef,
			buttonRef,
			store.state.clearRef
		],
		props: [
			{
				tabIndex: -1,
				children: "x",
				onMouseDown(event) {
					event.preventDefault();
				},
				onClick(event) {
					if (disabled || readOnly) return;
					const type = store.state.keyboardActiveRef.current ? keyboard : pointer;
					store.state.setInputValue("", createChangeEventDetails(clearPress, event.nativeEvent));
					if (selectionMode !== "none") {
						store.state.setSelectedValue(Array.isArray(selectedValue) ? [] : null, createChangeEventDetails(clearPress, event.nativeEvent));
						store.state.setIndices({
							activeIndex: null,
							selectedIndex: null,
							type
						});
					} else store.state.setIndices({
						activeIndex: null,
						type
					});
					store.state.inputRef.current?.focus();
				}
			},
			elementProps,
			getButtonProps
		],
		stateAttributesMapping: stateAttributesMapping$19
	});
	if (!(keepMounted || mounted)) return null;
	return element;
});
ComboboxClear.displayName = "ComboboxClear";
//#endregion
//#region node_modules/@base-ui/react/combobox/collection/GroupCollectionContext.mjs
var GroupCollectionContext = /*#__PURE__*/ import_react.createContext(null);
GroupCollectionContext.displayName = "GroupCollectionContext";
function useGroupCollectionContext() {
	return import_react.useContext(GroupCollectionContext);
}
function GroupCollectionProvider(props) {
	const { children, items } = props;
	const contextValue = import_react.useMemo(() => ({ items }), [items]);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(GroupCollectionContext.Provider, {
		value: contextValue,
		children
	});
}
//#endregion
//#region node_modules/@base-ui/react/combobox/collection/ComboboxCollection.mjs
/**
* Renders filtered list items.
* Doesn't render its own HTML element.
*
* If rendering a flat list, pass a function child to the `List` component instead, which implicitly wraps it.
*
* Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
*/
function ComboboxCollection(props) {
	const { children } = props;
	const { filteredItems } = useComboboxDerivedItemsContext();
	const groupContext = useGroupCollectionContext();
	const itemsToRender = groupContext ? groupContext.items : filteredItems;
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: itemsToRender.map(children) });
}
//#endregion
//#region node_modules/@base-ui/react/combobox/list/ComboboxList.mjs
/**
* A list container for the items.
* Renders a `<div>` element.
*
* Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
*/
var ComboboxList = /*#__PURE__*/ import_react.forwardRef(function ComboboxList(componentProps, forwardedRef) {
	var _ComboboxCollection;
	const { render, className, style, children, ...elementProps } = componentProps;
	const store = useComboboxRootContext();
	const floatingRootContext = useComboboxFloatingContext();
	const hasPositionerContext = Boolean(useComboboxPositionerContext(true));
	const { filteredItems, hasItems } = useComboboxDerivedItemsContext();
	const selectionMode = useStore(store, selectors$3.selectionMode);
	const grid = useStore(store, selectors$3.grid);
	const listProps = useStore(store, selectors$3.listProps);
	const virtualized = useStore(store, selectors$3.virtualized);
	const forceMounted = useStore(store, selectors$3.forceMounted);
	const multiple = selectionMode === "multiple";
	const empty = filteredItems.length === 0;
	const setPositionerElement = useStableCallback((element) => {
		store.set("positionerElement", element);
	});
	const setListElement = useStableCallback((element) => {
		store.set("listElement", element);
	});
	const resolvedChildren = import_react.useMemo(() => {
		if (typeof children === "function") return _ComboboxCollection || (_ComboboxCollection = /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ComboboxCollection, { children }));
		return children;
	}, [children]);
	const state = { empty };
	const floatingId = floatingRootContext.useState("floatingId");
	const element = useRenderElement("div", componentProps, {
		state,
		ref: [
			forwardedRef,
			setListElement,
			hasPositionerContext ? null : setPositionerElement
		],
		props: [
			listProps,
			{
				children: resolvedChildren,
				tabIndex: -1,
				id: floatingId,
				role: grid ? "grid" : "listbox",
				"aria-multiselectable": multiple ? "true" : void 0,
				onKeyDown(event) {
					if (store.state.disabled || store.state.readOnly) return;
					if (event.key === "Enter") {
						const activeIndex = store.state.activeIndex;
						if (activeIndex == null) return;
						stopEvent(event);
						clickHighlightedItem(store, activeIndex, event.nativeEvent);
					}
				},
				onKeyDownCapture() {
					store.state.keyboardActiveRef.current = true;
				},
				onPointerMoveCapture() {
					store.state.keyboardActiveRef.current = false;
				}
			},
			elementProps
		]
	});
	if (virtualized) return element;
	const labelsRef = hasItems && !forceMounted ? void 0 : store.state.labelsRef;
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(CompositeList, {
		elementsRef: store.state.listRef,
		labelsRef,
		children: element
	});
});
ComboboxList.displayName = "ComboboxList";
//#endregion
//#region node_modules/@base-ui/react/combobox/utils/useInitialLiveRegionTextMutation.mjs
var LIVE_REGION_MARKER = "⁠";
function findLastTextNode(root) {
	const walker = root.ownerDocument.createTreeWalker(root, NodeFilter.SHOW_TEXT);
	let lastTextNode = null;
	while (walker.nextNode()) {
		const textNode = walker.currentNode;
		if (textNode.nodeValue !== "") lastTextNode = textNode;
	}
	return lastTextNode;
}
function useInitialLiveRegionTextMutation() {
	const timeout = useTimeout();
	const rootRef = import_react.useRef(null);
	import_react.useEffect(() => {
		if (ios) return;
		const root = rootRef.current;
		if (root == null) return;
		const textNode = findLastTextNode(root);
		if (textNode == null) return;
		const originalValue = textNode.data;
		const markedValue = `${originalValue}${LIVE_REGION_MARKER}`;
		textNode.nodeValue = markedValue;
		timeout.start(200, () => {
			if (textNode.nodeValue === markedValue) textNode.nodeValue = originalValue;
		});
		return () => {
			timeout.clear();
			if (textNode.nodeValue === markedValue) textNode.nodeValue = originalValue;
		};
	}, [rootRef, timeout]);
	return rootRef;
}
//#endregion
//#region node_modules/@base-ui/react/combobox/status/ComboboxStatus.mjs
/**
* Displays a status message whose content changes are announced politely to screen readers.
* Useful for conveying the status of an asynchronously loaded list.
* This component's root element must remain mounted in the DOM to announce
* changes consistently across screen readers. Avoid hiding or removing the
* component itself with `display: none`, `hidden`, `aria-hidden`, or conditional
* rendering. Prefer updating or conditionally rendering its children instead.
* Renders a `<div>` element.
*
* Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
*/
var ComboboxStatus = /*#__PURE__*/ import_react.forwardRef(function ComboboxStatus(componentProps, forwardedRef) {
	const { render, className, style, children: childrenProp, ...elementProps } = componentProps;
	return useRenderElement("div", componentProps, {
		ref: [forwardedRef, useInitialLiveRegionTextMutation()],
		props: [{
			children: childrenProp,
			role: "status",
			"aria-live": "polite",
			"aria-atomic": true
		}, elementProps]
	});
});
ComboboxStatus.displayName = "ComboboxStatus";
//#endregion
//#region node_modules/@base-ui/react/combobox/portal/ComboboxPortalContext.mjs
var ComboboxPortalContext = /*#__PURE__*/ import_react.createContext(void 0);
ComboboxPortalContext.displayName = "ComboboxPortalContext";
function useComboboxPortalContext() {
	const context = import_react.useContext(ComboboxPortalContext);
	if (context === void 0) throw new Error("Base UI: <Combobox.Portal> is missing.");
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/combobox/portal/ComboboxPortal.mjs
/**
* A portal element that moves the popup to a different part of the DOM.
* By default, the portal element is appended to `<body>`.
* Renders a `<div>` element.
*
* Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
*/
var ComboboxPortal = /*#__PURE__*/ import_react.forwardRef(function ComboboxPortal(props, forwardedRef) {
	const { keepMounted = false, ...portalProps } = props;
	const store = useComboboxRootContext();
	const mounted = useStore(store, selectors$3.mounted);
	const forceMounted = useStore(store, selectors$3.forceMounted);
	if (!(mounted || keepMounted || forceMounted)) return null;
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ComboboxPortalContext.Provider, {
		value: keepMounted,
		children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(FloatingPortal, {
			ref: forwardedRef,
			...portalProps
		})
	});
});
ComboboxPortal.displayName = "ComboboxPortal";
//#endregion
//#region node_modules/@base-ui/react/combobox/backdrop/ComboboxBackdrop.mjs
var stateAttributesMapping$18 = {
	...popupStateMapping,
	...transitionStatusMapping
};
/**
* An overlay displayed beneath the popup.
* Renders a `<div>` element.
*
* Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
*/
var ComboboxBackdrop = /*#__PURE__*/ import_react.forwardRef(function ComboboxBackdrop(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const store = useComboboxRootContext();
	const open = useStore(store, selectors$3.open);
	const mounted = useStore(store, selectors$3.mounted);
	return useRenderElement("div", componentProps, {
		state: {
			open,
			transitionStatus: useStore(store, selectors$3.transitionStatus)
		},
		ref: forwardedRef,
		stateAttributesMapping: stateAttributesMapping$18,
		props: [{
			role: "presentation",
			hidden: !mounted,
			style: {
				userSelect: "none",
				WebkitUserSelect: "none"
			}
		}, elementProps]
	});
});
ComboboxBackdrop.displayName = "ComboboxBackdrop";
//#endregion
//#region node_modules/@base-ui/react/combobox/positioner/ComboboxPositioner.mjs
/**
* Positions the popup against the trigger.
* Renders a `<div>` element.
*
* Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
*/
var ComboboxPositioner = /*#__PURE__*/ import_react.forwardRef(function ComboboxPositioner(componentProps, forwardedRef) {
	const { render, className, anchor, positionMethod, side, align, sideOffset, alignOffset, collisionBoundary = "clipping-ancestors", collisionPadding, arrowPadding, sticky, disableAnchorTracking = false, collisionAvoidance = DROPDOWN_COLLISION_AVOIDANCE, style: styleProp, ...elementProps } = componentProps;
	const store = useComboboxRootContext();
	const floatingRootContext = useComboboxFloatingContext();
	const keepMounted = useComboboxPortalContext();
	const modal = useStore(store, selectors$3.modal);
	const open = useStore(store, selectors$3.open);
	const mounted = useStore(store, selectors$3.mounted);
	const openMethod = useStore(store, selectors$3.openMethod);
	const positionerElement = useStore(store, selectors$3.positionerElement);
	const triggerElement = useStore(store, selectors$3.triggerElement);
	const inputElement = useStore(store, selectors$3.inputElement);
	const inputGroupElement = useStore(store, selectors$3.inputGroupElement);
	const inputInsidePopup = useStore(store, selectors$3.inputInsidePopup);
	const transitionStatus = useStore(store, selectors$3.transitionStatus);
	const empty = useListEmpty();
	const positioning = useAnchorPositioning({
		anchor: anchor ?? (inputInsidePopup ? triggerElement : inputGroupElement ?? inputElement),
		floatingRootContext,
		positionMethod,
		mounted,
		side,
		sideOffset,
		align,
		alignOffset,
		arrowPadding,
		collisionBoundary,
		collisionPadding,
		sticky,
		disableAnchorTracking,
		keepMounted,
		collisionAvoidance,
		lazyFlip: true
	});
	useAnchoredPopupScrollLock(open && modal, openMethod === "touch", positionerElement, triggerElement);
	const state = {
		open,
		side: positioning.side,
		align: positioning.align,
		anchorHidden: positioning.anchorHidden,
		empty
	};
	useIsoLayoutEffect(() => {
		store.set("popupSide", positioning.side);
	}, [store, positioning.side]);
	const setPositionerElement = useStableCallback((element) => {
		store.set("positionerElement", element);
	});
	const element = usePositioner(componentProps, state, {
		styles: positioning.positionerStyles,
		transitionStatus,
		props: elementProps,
		refs: [forwardedRef, setPositionerElement],
		hidden: !mounted,
		inert: !open
	});
	return /*#__PURE__*/ (0, import_jsx_runtime.jsxs)(ComboboxPositionerContext.Provider, {
		value: positioning,
		children: [mounted && modal && /*#__PURE__*/ (0, import_jsx_runtime.jsx)(InternalBackdrop, {
			inert: inertValue(!open),
			cutout: inputGroupElement ?? inputElement ?? triggerElement
		}), element]
	});
});
ComboboxPositioner.displayName = "ComboboxPositioner";
//#endregion
//#region node_modules/@base-ui/react/combobox/popup/ComboboxPopup.mjs
var stateAttributesMapping$17 = {
	...popupStateMapping,
	...transitionStatusMapping
};
/**
* A container for the list.
* Renders a `<div>` element.
*
* Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
*/
var ComboboxPopup = /*#__PURE__*/ import_react.forwardRef(function ComboboxPopup(componentProps, forwardedRef) {
	const { render, className, style, initialFocus, finalFocus, ...elementProps } = componentProps;
	const store = useComboboxRootContext();
	const positioning = useComboboxPositionerContext();
	const floatingRootContext = useComboboxFloatingContext();
	const mounted = useStore(store, selectors$3.mounted);
	const open = useStore(store, selectors$3.open);
	const openMethod = useStore(store, selectors$3.openMethod);
	const popupProps = useStore(store, selectors$3.popupProps);
	const transitionStatus = useStore(store, selectors$3.transitionStatus);
	const inputInsidePopup = useStore(store, selectors$3.inputInsidePopup);
	const inputElement = useStore(store, selectors$3.inputElement);
	const modal = useStore(store, selectors$3.modal);
	const rootId = useStore(store, selectors$3.id);
	const empty = useListEmpty();
	const popupId = elementProps.id ?? (inputInsidePopup ? getComboboxPopupId(rootId) : void 0);
	useIsoLayoutEffect(() => {
		store.set("popupId", store.state.popupRef.current?.id || popupId);
		return () => {
			store.set("popupId", void 0);
		};
	}, [store, popupId]);
	useOpenChangeComplete({
		open,
		ref: store.state.popupRef,
		onComplete() {
			if (open) store.state.onOpenChangeComplete(true);
		}
	});
	const element = useRenderElement("div", componentProps, {
		state: {
			open,
			side: positioning.side,
			align: positioning.align,
			anchorHidden: positioning.anchorHidden,
			transitionStatus,
			empty
		},
		ref: [forwardedRef, store.state.popupRef],
		props: [
			popupProps,
			{
				id: popupId,
				role: inputInsidePopup ? "dialog" : "presentation",
				onFocus(event) {
					const target = getTarget(event.nativeEvent);
					if (openMethod !== "touch" && (contains(store.state.listElement, target) || target === event.currentTarget)) store.state.inputRef.current?.focus();
				}
			},
			getDisabledMountTransitionStyles(transitionStatus),
			elementProps
		],
		stateAttributesMapping: stateAttributesMapping$17
	});
	const resolvedInitialFocus = initialFocus === void 0 ? inputInsidePopup ? (interactionType) => interactionType === "touch" ? store.state.popupRef.current : inputElement : false : initialFocus;
	let resolvedFinalFocus;
	if (finalFocus != null) resolvedFinalFocus = finalFocus;
	else resolvedFinalFocus = inputInsidePopup ? void 0 : false;
	const focusManagerModal = !inputInsidePopup || modal;
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(FloatingFocusManager, {
		context: floatingRootContext,
		disabled: !mounted,
		modal: focusManagerModal,
		openInteractionType: openMethod,
		initialFocus: resolvedInitialFocus,
		returnFocus: resolvedFinalFocus,
		getInsideElements: () => [store.state.startDismissRef.current, store.state.endDismissRef.current],
		children: /*#__PURE__*/ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [element, focusManagerModal && /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ComboboxInternalDismissButton, { ref: store.state.endDismissRef })] })
	});
});
ComboboxPopup.displayName = "ComboboxPopup";
//#endregion
//#region node_modules/@base-ui/react/combobox/arrow/ComboboxArrow.mjs
/**
* Displays an element positioned against the anchor.
* Renders a `<div>` element.
*
* Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
*/
var ComboboxArrow = /*#__PURE__*/ import_react.forwardRef(function ComboboxArrow(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const store = useComboboxRootContext();
	const { arrowRef, side, align, arrowUncentered, arrowStyles } = useComboboxPositionerContext();
	const state = {
		open: useStore(store, selectors$3.open),
		side,
		align,
		uncentered: arrowUncentered
	};
	return useRenderElement("div", componentProps, {
		ref: [arrowRef, forwardedRef],
		stateAttributesMapping: popupStateMapping,
		state,
		props: {
			style: arrowStyles,
			"aria-hidden": true,
			...elementProps
		}
	});
});
ComboboxArrow.displayName = "ComboboxArrow";
//#endregion
//#region node_modules/@base-ui/react/combobox/group/ComboboxGroupContext.mjs
var ComboboxGroupContext = /*#__PURE__*/ import_react.createContext(void 0);
ComboboxGroupContext.displayName = "ComboboxGroupContext";
function useComboboxGroupContext() {
	const context = import_react.useContext(ComboboxGroupContext);
	if (context === void 0) throw new Error("Base UI: ComboboxGroupContext is missing. ComboboxGroup parts must be placed within <Combobox.Group>.");
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/combobox/group/ComboboxGroup.mjs
/**
* Groups related items with the corresponding label.
* Renders a `<div>` element.
*
* Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
*/
var ComboboxGroup = /*#__PURE__*/ import_react.forwardRef(function ComboboxGroup(componentProps, forwardedRef) {
	const { render, className, style, items, ...elementProps } = componentProps;
	const [labelId, setLabelId] = import_react.useState();
	const contextValue = import_react.useMemo(() => ({
		labelId,
		setLabelId,
		items
	}), [
		labelId,
		setLabelId,
		items
	]);
	const element = useRenderElement("div", componentProps, {
		ref: forwardedRef,
		props: [{
			role: "group",
			"aria-labelledby": labelId
		}, elementProps]
	});
	const wrappedElement = /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ComboboxGroupContext.Provider, {
		value: contextValue,
		children: element
	});
	if (items) return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(GroupCollectionProvider, {
		items,
		children: wrappedElement
	});
	return wrappedElement;
});
ComboboxGroup.displayName = "ComboboxGroup";
//#endregion
//#region node_modules/@base-ui/react/combobox/group-label/ComboboxGroupLabel.mjs
/**
* An accessible label that is automatically associated with its parent group.
* Renders a `<div>` element.
*
* Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
*/
var ComboboxGroupLabel = /*#__PURE__*/ import_react.forwardRef(function ComboboxGroupLabel(componentProps, forwardedRef) {
	const { render, className, style, id: idProp, ...elementProps } = componentProps;
	const { setLabelId } = useComboboxGroupContext();
	const id = useBaseUiId(idProp);
	useIsoLayoutEffect(() => {
		setLabelId(id);
		return () => {
			setLabelId((currentId) => currentId === id ? void 0 : currentId);
		};
	}, [id, setLabelId]);
	return useRenderElement("div", componentProps, {
		ref: forwardedRef,
		props: [{ id }, elementProps]
	});
});
ComboboxGroupLabel.displayName = "ComboboxGroupLabel";
//#endregion
//#region node_modules/@base-ui/react/combobox/item/ComboboxItemContext.mjs
var ComboboxItemContext = /*#__PURE__*/ import_react.createContext(void 0);
ComboboxItemContext.displayName = "ComboboxItemContext";
function useComboboxItemContext() {
	const context = import_react.useContext(ComboboxItemContext);
	if (!context) throw new Error("Base UI: ComboboxItemContext is missing. ComboboxItem parts must be placed within <Combobox.Item>.");
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/combobox/row/ComboboxRowContext.mjs
var ComboboxRowContext = /*#__PURE__*/ import_react.createContext(false);
ComboboxRowContext.displayName = "ComboboxRowContext";
function useComboboxRowContext() {
	return import_react.useContext(ComboboxRowContext);
}
//#endregion
//#region node_modules/@base-ui/react/combobox/item/ComboboxItem.mjs
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
function ComboboxItemInner(props) {
	const { componentProps, forwardedRef, virtualized, indexFromFilter } = props;
	const { render, className, style, value: itemValue = null, index: indexProp, disabled: disabledProp = false, nativeButton = false, ...elementProps } = componentProps;
	const textRef = import_react.useRef(null);
	const listItem = useCompositeListItem({
		guess: true,
		index: indexProp,
		textRef
	});
	const store = useComboboxRootContext();
	const isRow = useComboboxRowContext();
	const hasItems = useComboboxHasItemsContext();
	const selectionMode = useStore(store, selectors$3.selectionMode);
	const rootDisabled = useStore(store, selectors$3.disabled);
	const readOnly = useStore(store, selectors$3.readOnly);
	const isItemEqualToValue = useStore(store, selectors$3.isItemEqualToValue);
	const disabled = rootDisabled || disabledProp;
	const selectable = selectionMode !== "none";
	const index = indexProp ?? indexFromFilter ?? listItem.index;
	const hasRegistered = index !== -1;
	const rootId = useStore(store, selectors$3.id);
	const highlighted = useStore(store, selectors$3.isActive, index);
	const matchesSelectedValue = useStore(store, selectors$3.isSelected, itemValue);
	const itemProps = useStore(store, selectors$3.itemProps);
	const itemRef = import_react.useRef(null);
	const id = rootId != null && hasRegistered ? `${rootId}-${index}` : void 0;
	const selected = matchesSelectedValue && selectable;
	useIsoLayoutEffect(() => {
		if (!(hasRegistered && (virtualized || indexProp != null))) return;
		const list = store.state.listRef.current;
		list[index] = itemRef.current;
		return () => {
			delete list[index];
		};
	}, [
		hasRegistered,
		virtualized,
		index,
		indexProp,
		store
	]);
	useIsoLayoutEffect(() => {
		if (!hasRegistered || hasItems) return;
		const visibleMap = store.state.valuesRef.current;
		visibleMap[index] = itemValue;
		return () => {
			delete visibleMap[index];
		};
	}, [
		hasRegistered,
		hasItems,
		index,
		itemValue,
		store
	]);
	useIsoLayoutEffect(() => {
		if (!hasRegistered || hasItems) return;
		const selectedValue = store.state.selectedValue;
		const lastSelectedValue = Array.isArray(selectedValue) ? selectedValue[selectedValue.length - 1] : selectedValue;
		if (compareItemEquality(itemValue, lastSelectedValue, isItemEqualToValue)) store.set("selectedIndex", index);
	}, [
		hasRegistered,
		hasItems,
		store,
		index,
		itemValue,
		isItemEqualToValue
	]);
	const { getButtonProps, buttonRef } = useButton({
		disabled,
		focusableWhenDisabled: true,
		native: nativeButton,
		composite: true
	});
	const state = {
		disabled,
		selected,
		highlighted
	};
	function commitSelection(nativeEvent) {
		function selectItem() {
			store.state.handleSelection(nativeEvent, itemValue);
		}
		if (store.state.submitOnItemClick) {
			import_react_dom.flushSync(selectItem);
			store.state.requestSubmit();
		} else selectItem();
	}
	const defaultProps = {
		id,
		role: isRow ? "gridcell" : "option",
		"aria-selected": selectable ? selected : void 0,
		tabIndex: void 0,
		onPointerDownCapture(event) {
			if (event.isPrimary) store.state.pointerDownItemRef.current = event.currentTarget;
			event.preventDefault();
		},
		onMouseDown(event) {
			event.preventDefault();
		},
		onClick(event) {
			if (disabled || readOnly) return;
			commitSelection(event.nativeEvent);
		},
		onMouseUp(event) {
			const pointerStartedOnItem = store.state.pointerDownItemRef.current === event.currentTarget;
			store.state.pointerDownItemRef.current = null;
			if (disabled || readOnly || event.button !== 0 || pointerStartedOnItem || !highlighted) return;
			commitSelection(event.nativeEvent);
		}
	};
	const element = useRenderElement("div", componentProps, {
		ref: [
			buttonRef,
			forwardedRef,
			listItem.ref,
			itemRef
		],
		state,
		props: [
			itemProps,
			defaultProps,
			elementProps,
			getButtonProps
		]
	});
	const contextValue = import_react.useMemo(() => ({
		selected,
		textRef
	}), [selected, textRef]);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ComboboxItemContext.Provider, {
		value: contextValue,
		children: element
	});
}
/**
* Resolves the index from the filtered items for the virtualized fallback (no `index` prop).
* Isolated here so that this per-keystroke subscription to the derived-items context is only
* paid by virtualized items. Those re-render on every input change anyway — the parent
* virtualizer re-windows the list as the filtered set changes — so the extra subscription costs
* them nothing, while it keeps every non-virtualized item off that context.
*/
function ComboboxItemVirtualizedIndex(props) {
	const { componentProps, forwardedRef } = props;
	const isItemEqualToValue = useStore(useComboboxRootContext(), selectors$3.isItemEqualToValue);
	const { flatFilteredItems } = useComboboxDerivedItemsContext();
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ComboboxItemInner, {
		componentProps,
		forwardedRef,
		virtualized: true,
		indexFromFilter: findItemIndex(flatFilteredItems, componentProps.value ?? null, isItemEqualToValue)
	});
}
/**
* An individual item in the list.
* Renders a `<div>` element.
*
* Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
*/
var ComboboxItem = /*#__PURE__*/ import_react.memo(/*#__PURE__*/ import_react.forwardRef(function ComboboxItem(componentProps, forwardedRef) {
	const virtualized = useStore(useComboboxRootContext(), selectors$3.virtualized);
	if (virtualized && componentProps.index == null) return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ComboboxItemVirtualizedIndex, {
		componentProps,
		forwardedRef
	});
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ComboboxItemInner, {
		componentProps,
		forwardedRef,
		virtualized,
		indexFromFilter: void 0
	});
}));
ComboboxItem.displayName = "ComboboxItem";
//#endregion
//#region node_modules/@base-ui/react/autocomplete/item/AutocompleteItem.mjs
/**
* An individual item in the list.
* Renders a `<div>` element.
*
* Documentation: [Base UI Autocomplete](https://base-ui.com/react/components/autocomplete)
*/
var AutocompleteItem = ComboboxItem;
//#endregion
//#region node_modules/@base-ui/react/combobox/row/ComboboxRow.mjs
/**
* Displays a single row of items in a grid list.
* Enable `grid` on the root component to turn the listbox into a grid.
* Renders a `<div>` element.
*
* Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
*/
var ComboboxRow = /*#__PURE__*/ import_react.forwardRef(function ComboboxRow(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const element = useRenderElement("div", componentProps, {
		ref: forwardedRef,
		props: [{ role: "row" }, elementProps]
	});
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ComboboxRowContext.Provider, {
		value: true,
		children: element
	});
});
ComboboxRow.displayName = "ComboboxRow";
//#endregion
//#region node_modules/@base-ui/react/combobox/empty/ComboboxEmpty.mjs
/**
* Renders its children only when the list is empty.
* Requires the `items` prop on the root component.
* Announces changes politely to screen readers.
* This component's root element must remain mounted in the DOM to announce
* changes consistently across screen readers. Avoid hiding or removing the
* component itself with `display: none`, `hidden`, `aria-hidden`, or conditional
* rendering. Prefer updating or conditionally rendering its children instead.
* Renders a `<div>` element.
*
* Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
*/
var ComboboxEmpty = /*#__PURE__*/ import_react.forwardRef(function ComboboxEmpty(componentProps, forwardedRef) {
	const { render, className, style, children: childrenProp, ...elementProps } = componentProps;
	const { filteredItems } = useComboboxDerivedItemsContext();
	const store = useComboboxRootContext();
	const emptyRef = useInitialLiveRegionTextMutation();
	const children = filteredItems.length === 0 ? childrenProp : null;
	return useRenderElement("div", componentProps, {
		ref: [
			forwardedRef,
			store.state.emptyRef,
			emptyRef
		],
		props: [{
			children,
			role: "status",
			"aria-live": "polite",
			"aria-atomic": true
		}, elementProps]
	});
});
ComboboxEmpty.displayName = "ComboboxEmpty";
//#endregion
//#region node_modules/@base-ui/react/utils/listbox-separator/ListboxSeparator.mjs
/**
* A visual separator between items.
* Renders a `<div>` element.
*
* @internal
*/
var ListboxSeparator = /*#__PURE__*/ import_react.forwardRef(function ListboxSeparator(componentProps, forwardedRef) {
	const { className, render, orientation = "horizontal", style, ...elementProps } = componentProps;
	return useRenderElement("div", componentProps, {
		state: { orientation },
		ref: forwardedRef,
		props: [{ role: "presentation" }, elementProps]
	});
});
ListboxSeparator.displayName = "ListboxSeparator";
//#endregion
//#region node_modules/@base-ui/react/autocomplete/separator/AutocompleteSeparator.mjs
/**
* A visual separator between items or groups.
* Renders a `<div>` element.
*
* Documentation: [Base UI Autocomplete](https://base-ui.com/react/components/autocomplete)
*/
var AutocompleteSeparator = ListboxSeparator;
//#endregion
//#region node_modules/@base-ui/react/combobox/root/utils/useFilteredItems.mjs
/**
* Returns the internally filtered items.
*/
function useFilteredItems() {
	return useComboboxDerivedItemsContext().filteredItems;
}
//#endregion
//#region node_modules/@base-ui/react/autocomplete/index.parts.mjs
var index_parts_exports$2 = /* @__PURE__ */ __exportAll({
	Arrow: () => ComboboxArrow,
	Backdrop: () => ComboboxBackdrop,
	Clear: () => ComboboxClear,
	Collection: () => ComboboxCollection,
	Empty: () => ComboboxEmpty,
	Group: () => ComboboxGroup,
	GroupLabel: () => ComboboxGroupLabel,
	Icon: () => ComboboxIcon,
	Input: () => ComboboxInput,
	InputGroup: () => AutocompleteInputGroup,
	Item: () => AutocompleteItem,
	List: () => ComboboxList,
	Popup: () => ComboboxPopup,
	Portal: () => ComboboxPortal,
	Positioner: () => ComboboxPositioner,
	Root: () => AutocompleteRoot,
	Row: () => ComboboxRow,
	Separator: () => AutocompleteSeparator,
	Status: () => ComboboxStatus,
	Trigger: () => AutocompleteTrigger,
	Value: () => AutocompleteValue,
	useFilter: () => useCoreFilter,
	useFilteredItems: () => useFilteredItems
});
//#endregion
//#region node_modules/@base-ui/react/avatar/root/AvatarRootContext.mjs
var AvatarRootContext = /*#__PURE__*/ import_react.createContext(void 0);
AvatarRootContext.displayName = "AvatarRootContext";
function useAvatarRootContext() {
	const context = import_react.useContext(AvatarRootContext);
	if (context === void 0) throw new Error("Base UI: AvatarRootContext is missing. Avatar parts must be placed within <Avatar.Root>.");
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/avatar/root/stateAttributesMapping.mjs
var avatarStateAttributesMapping = { imageLoadingStatus: () => null };
//#endregion
//#region node_modules/@base-ui/react/avatar/root/AvatarRoot.mjs
/**
* Displays a user's profile picture, initials, or fallback icon.
* Renders a `<span>` element.
*
* Documentation: [Base UI Avatar](https://base-ui.com/react/components/avatar)
*/
var AvatarRoot = /*#__PURE__*/ import_react.forwardRef(function AvatarRoot(componentProps, forwardedRef) {
	const { className, render, style, ...elementProps } = componentProps;
	const [imageLoadingStatus, setImageLoadingStatus] = import_react.useState("idle");
	const state = { imageLoadingStatus };
	const contextValue = import_react.useMemo(() => ({
		imageLoadingStatus,
		setImageLoadingStatus
	}), [imageLoadingStatus, setImageLoadingStatus]);
	const element = useRenderElement("span", componentProps, {
		state,
		ref: forwardedRef,
		props: elementProps,
		stateAttributesMapping: avatarStateAttributesMapping
	});
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(AvatarRootContext.Provider, {
		value: contextValue,
		children: element
	});
});
AvatarRoot.displayName = "AvatarRoot";
//#endregion
//#region node_modules/@base-ui/react/avatar/image/useImageLoadingStatus.mjs
function useImageLoadingStatus(src, { referrerPolicy, crossOrigin, sizes, srcSet }) {
	const [loadingStatus, setLoadingStatus] = import_react.useState("idle");
	useIsoLayoutEffect(() => {
		if (!src && !srcSet) {
			setLoadingStatus("error");
			return NOOP;
		}
		let isMounted = true;
		const image = new window.Image();
		const updateStatus = (status) => () => {
			if (!isMounted) return;
			setLoadingStatus(status);
		};
		setLoadingStatus("loading");
		image.onload = updateStatus("loaded");
		image.onerror = updateStatus("error");
		if (referrerPolicy) image.referrerPolicy = referrerPolicy;
		image.crossOrigin = crossOrigin ?? null;
		if (sizes) image.sizes = sizes;
		if (srcSet) image.srcset = srcSet;
		if (src) image.src = src;
		if (image.complete) setLoadingStatus(image.naturalWidth > 0 ? "loaded" : "error");
		return () => {
			isMounted = false;
		};
	}, [
		src,
		srcSet,
		sizes,
		crossOrigin,
		referrerPolicy
	]);
	return loadingStatus;
}
//#endregion
//#region node_modules/@base-ui/react/avatar/image/AvatarImage.mjs
var stateAttributesMapping$16 = {
	...avatarStateAttributesMapping,
	...transitionStatusMapping
};
/**
* The image to be displayed in the avatar.
* Renders an `<img>` element.
*
* Documentation: [Base UI Avatar](https://base-ui.com/react/components/avatar)
*/
var AvatarImage = /*#__PURE__*/ import_react.forwardRef(function AvatarImage(componentProps, forwardedRef) {
	const { className, render, onLoadingStatusChange: onLoadingStatusChangeProp, style, ...elementProps } = componentProps;
	const { setImageLoadingStatus } = useAvatarRootContext();
	const imageLoadingStatus = useImageLoadingStatus(elementProps.src, elementProps);
	const isVisible = imageLoadingStatus === "loaded";
	const { mounted, transitionStatus, setMounted } = useTransitionStatus(isVisible);
	const imageRef = import_react.useRef(null);
	const handleLoadingStatusChange = useStableCallback((status) => {
		onLoadingStatusChangeProp?.(status);
		setImageLoadingStatus(status);
	});
	useIsoLayoutEffect(() => {
		if (imageLoadingStatus !== "idle") handleLoadingStatusChange(imageLoadingStatus);
	}, [imageLoadingStatus, handleLoadingStatusChange]);
	useIsoLayoutEffect(() => {
		return () => setImageLoadingStatus("idle");
	}, [setImageLoadingStatus]);
	useOpenChangeComplete({
		open: isVisible,
		ref: imageRef,
		onComplete() {
			if (!isVisible) setMounted(false);
		}
	});
	const element = useRenderElement("img", componentProps, {
		state: {
			imageLoadingStatus,
			transitionStatus
		},
		ref: [forwardedRef, imageRef],
		props: elementProps,
		stateAttributesMapping: stateAttributesMapping$16,
		enabled: mounted
	});
	if (!mounted) return null;
	return element;
});
AvatarImage.displayName = "AvatarImage";
//#endregion
//#region node_modules/@base-ui/react/avatar/fallback/AvatarFallback.mjs
/**
* Rendered when the image fails to load or when no image is provided.
* Renders a `<span>` element.
*
* Documentation: [Base UI Avatar](https://base-ui.com/react/components/avatar)
*/
var AvatarFallback = /*#__PURE__*/ import_react.forwardRef(function AvatarFallback(componentProps, forwardedRef) {
	const { className, render, delay = 0, style, ...elementProps } = componentProps;
	const { imageLoadingStatus } = useAvatarRootContext();
	const [delayPassed, setDelayPassed] = import_react.useState(delay === 0);
	const timeout = useTimeout();
	import_react.useEffect(() => {
		if (delay > 0) timeout.start(delay, () => setDelayPassed(true));
		else setDelayPassed(true);
		return timeout.clear;
	}, [timeout, delay]);
	return useRenderElement("span", componentProps, {
		state: { imageLoadingStatus },
		ref: forwardedRef,
		props: elementProps,
		stateAttributesMapping: avatarStateAttributesMapping,
		enabled: imageLoadingStatus !== "loaded" && (delay === 0 || delayPassed)
	});
});
AvatarFallback.displayName = "AvatarFallback";
//#endregion
//#region node_modules/@base-ui/react/avatar/index.parts.mjs
var index_parts_exports$3 = /* @__PURE__ */ __exportAll({
	Fallback: () => AvatarFallback,
	Image: () => AvatarImage,
	Root: () => AvatarRoot
});
//#endregion
//#region node_modules/@base-ui/utils/getDefaultFormSubmitter.mjs
/**
* Returns the default button a browser uses for implicit form submission.
*
* This is useful for custom form controls that need to mirror native Enter key behavior.
* Clicking the returned submitter preserves browser semantics such as the submitter's click
* event, `SubmitEvent.submitter`, and submitter-specific attributes.
*
* The function follows the controls exposed by `form.elements`, which includes controls associated
* through the `form` attribute. Disabled submitters can be returned because the default button is
* determined before disabled state is considered; clicking a disabled submitter is a no-op.
*/
function getDefaultFormSubmitter(form) {
	if (!form) return null;
	for (const candidate of form.elements) {
		const tagName = candidate.tagName;
		if (tagName === "BUTTON" || tagName === "INPUT") {
			const button = candidate;
			if (button.type === "submit") return button;
		}
	}
	return null;
}
//#endregion
//#region node_modules/@base-ui/react/checkbox/utils/getCheckboxStateAttributesMapping.mjs
function getCheckboxStateAttributesMapping(state) {
	return {
		checked(value) {
			if (state.indeterminate) return {};
			if (value) return { "data-checked": "" };
			return { "data-unchecked": "" };
		},
		...fieldValidityMapping
	};
}
//#endregion
//#region node_modules/@base-ui/react/field/item/FieldItemContext.mjs
var FieldItemContext = /*#__PURE__*/ import_react.createContext({ disabled: false });
FieldItemContext.displayName = "FieldItemContext";
function useFieldItemContext() {
	return import_react.useContext(FieldItemContext);
}
//#endregion
//#region node_modules/@base-ui/react/internals/labelable-provider/useAriaLabelledBy.mjs
function useAriaLabelledBy(explicitAriaLabelledBy, labelId, labelSourceRef, enableFallback = true, labelSourceId) {
	const [fallbackAriaLabelledBy, setFallbackAriaLabelledBy] = import_react.useState();
	const generatedLabelId = useBaseUiId(labelSourceId ? `${labelSourceId}-label` : void 0);
	const ariaLabelledBy = explicitAriaLabelledBy ?? labelId ?? fallbackAriaLabelledBy;
	useIsoLayoutEffect(() => {
		const nextAriaLabelledBy = explicitAriaLabelledBy || labelId || !enableFallback ? void 0 : getAriaLabelledBy(labelSourceRef.current, generatedLabelId);
		if (fallbackAriaLabelledBy !== nextAriaLabelledBy) setFallbackAriaLabelledBy(nextAriaLabelledBy);
	});
	return ariaLabelledBy;
}
function getAriaLabelledBy(labelSource, generatedLabelId) {
	const label = findAssociatedLabel(labelSource);
	if (!label) return;
	if (!label.id && generatedLabelId) label.id = generatedLabelId;
	return label.id || void 0;
}
function findAssociatedLabel(labelSource) {
	if (!labelSource) return;
	const parent = labelSource.parentElement;
	if (parent && parent.tagName === "LABEL") return parent;
	const controlId = labelSource.id;
	if (controlId) {
		const nextSibling = labelSource.nextElementSibling;
		if (nextSibling && nextSibling.htmlFor === controlId) return nextSibling;
	}
	const labels = labelSource.labels;
	return labels && labels[0];
}
//#endregion
//#region node_modules/@base-ui/react/checkbox-group/CheckboxGroupContext.mjs
var CheckboxGroupContext = /*#__PURE__*/ import_react.createContext(void 0);
CheckboxGroupContext.displayName = "CheckboxGroupContext";
function useCheckboxGroupContext() {
	return import_react.useContext(CheckboxGroupContext);
}
//#endregion
//#region node_modules/@base-ui/react/checkbox/root/CheckboxRootContext.mjs
var CheckboxRootContext = /*#__PURE__*/ import_react.createContext(void 0);
CheckboxRootContext.displayName = "CheckboxRootContext";
function useCheckboxRootContext() {
	const context = import_react.useContext(CheckboxRootContext);
	if (context === void 0) throw new Error("Base UI: CheckboxRootContext is missing. Checkbox parts must be placed within <Checkbox.Root>.");
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/checkbox/root/CheckboxRoot.mjs
var PARENT_CHECKBOX = "data-parent";
/**
* Represents the checkbox itself.
* Renders a `<span>` element and a hidden `<input>` beside.
*
* Documentation: [Base UI Checkbox](https://base-ui.com/react/components/checkbox)
*/
var CheckboxRoot = /*#__PURE__*/ import_react.forwardRef(function CheckboxRoot(componentProps, forwardedRef) {
	const { checked: checkedProp, className, defaultChecked = false, "aria-labelledby": ariaLabelledByProp, disabled: disabledProp = false, form, id: idProp, indeterminate = false, inputRef: inputRefProp, name: nameProp, onCheckedChange, parent = false, readOnly = false, render, required = false, uncheckedValue, value: valueProp, nativeButton = false, style, ...elementProps } = componentProps;
	const { clearErrors } = useFormContext();
	const { disabled: rootDisabled, name: fieldName, setDirty, setFilled, setFocused, setTouched, state: fieldState, validationMode, validityData, validation: localValidation } = useFieldRootContext();
	const fieldItemContext = useFieldItemContext();
	const { labelId, controlId, registerControlId, getDescriptionProps } = useLabelableContext();
	const groupContext = useCheckboxGroupContext();
	const parentContext = groupContext?.allValues === void 0 ? void 0 : groupContext.parent;
	const isGroupedWithParent = parentContext !== void 0;
	const disabled = rootDisabled || fieldItemContext.disabled || groupContext?.disabled || disabledProp;
	const name = fieldName ?? nameProp;
	const value = valueProp ?? name;
	const id = useBaseUiId();
	const generatedInputId = useBaseUiId();
	let inputId = idProp || controlId;
	if (isGroupedWithParent) if (parent) inputId = generatedInputId;
	else if (value !== void 0) inputId = `${parentContext.id}-${value}`;
	else inputId ||= generatedInputId;
	let groupProps = {};
	if (isGroupedWithParent) {
		if (parent) groupProps = parentContext.getParentProps();
		else if (value !== void 0) groupProps = parentContext.getChildProps(value);
	}
	const { checked: groupChecked = checkedProp, indeterminate: groupIndeterminate = indeterminate, onCheckedChange: groupOnChange, ...otherGroupProps } = groupProps;
	const groupValue = groupContext?.value;
	const controlRef = import_react.useRef(null);
	const controlSourceRef = useRefWithInit(() => Symbol());
	const hasRegisteredRef = import_react.useRef(false);
	const { getButtonProps, buttonRef } = useButton({
		disabled,
		native: nativeButton
	});
	const validation = groupContext?.validation ?? localValidation;
	const [checked, setCheckedState] = useControlled({
		controlled: value !== void 0 && groupValue !== void 0 && !parent ? groupValue.includes(value) : groupChecked,
		default: defaultChecked,
		name: "Checkbox",
		state: "checked"
	});
	const computedChecked = isGroupedWithParent ? Boolean(groupChecked) : checked;
	const computedIndeterminate = isGroupedWithParent ? groupIndeterminate || indeterminate : indeterminate;
	useIsoLayoutEffect(() => {
		if (registerControlId === NOOP) return;
		hasRegisteredRef.current = true;
		registerControlId(controlSourceRef.current, inputId);
	}, [
		inputId,
		registerControlId,
		controlSourceRef
	]);
	import_react.useEffect(() => {
		const controlSource = controlSourceRef.current;
		return () => {
			if (!hasRegisteredRef.current || registerControlId === NOOP) return;
			hasRegisteredRef.current = false;
			registerControlId(controlSource, void 0);
		};
	}, [registerControlId, controlSourceRef]);
	useRegisterFieldControl(controlRef, id, checked, void 0, !groupContext && !disabled, nameProp);
	const inputRef = import_react.useRef(null);
	const registerFieldInput = validation.registerInput;
	const registeredInputValue = groupContext ? value : void 0;
	const registerInput = import_react.useCallback((element) => registerFieldInput(element, {
		controlRef,
		value: registeredInputValue
	}), [registerFieldInput, registeredInputValue]);
	const mergedInputRef = useMergedRefs(inputRefProp, inputRef, parent ? void 0 : registerInput);
	const ariaLabelledBy = useAriaLabelledBy(ariaLabelledByProp, labelId, inputRef, !nativeButton, inputId ?? void 0);
	useIsoLayoutEffect(() => {
		if (inputRef.current) {
			inputRef.current.indeterminate = computedIndeterminate;
			if (checked) setFilled(true);
		}
	}, [
		checked,
		computedIndeterminate,
		setFilled
	]);
	useValueChanged(checked, () => {
		if (groupContext) return;
		clearErrors(name);
		setFilled(checked);
		setDirty(checked !== validityData.initialValue);
		validation.change(checked);
	});
	const inputProps = mergeProps({
		checked,
		disabled,
		form,
		name: parent ? void 0 : name,
		id: nativeButton ? void 0 : inputId ?? void 0,
		required,
		ref: mergedInputRef,
		style: name ? visuallyHiddenInput : visuallyHidden,
		tabIndex: -1,
		type: "checkbox",
		"aria-hidden": true,
		onChange(event) {
			if (event.nativeEvent.defaultPrevented) return;
			if (readOnly) {
				event.preventDefault();
				return;
			}
			const nextChecked = event.currentTarget.checked;
			const details = createChangeEventDetails(none, event.nativeEvent);
			onCheckedChange?.(nextChecked, details);
			if (details.isCanceled) return;
			groupOnChange?.(nextChecked, details);
			if (details.isCanceled) return;
			setCheckedState(nextChecked);
			if (value !== void 0 && groupContext !== void 0 && !parent && !isGroupedWithParent) {
				const nextGroupValue = nextChecked ? [...groupContext.value, value] : groupContext.value.filter((item) => item !== value);
				groupContext.setValue(nextGroupValue, details);
			}
		},
		onClick(event) {
			event.stopPropagation();
		},
		onFocus() {
			controlRef.current?.focus();
		}
	}, valueProp !== void 0 ? { value: (groupContext ? checked && valueProp : valueProp) || "" } : EMPTY_OBJECT, getDescriptionProps, (props) => validation.getValidationProps(disabled, props));
	import_react.useEffect(() => {
		if (!parentContext || value === void 0) return;
		const disabledStates = parentContext.disabledStatesRef.current;
		disabledStates.set(value, disabled);
		return () => {
			disabledStates.delete(value);
		};
	}, [
		parentContext,
		disabled,
		value
	]);
	const state = import_react.useMemo(() => ({
		...fieldState,
		checked: computedChecked,
		disabled,
		readOnly,
		required,
		indeterminate: computedIndeterminate
	}), [
		fieldState,
		computedChecked,
		disabled,
		readOnly,
		required,
		computedIndeterminate
	]);
	const stateAttributesMapping = getCheckboxStateAttributesMapping(state);
	const element = useRenderElement("span", componentProps, {
		state,
		ref: [
			buttonRef,
			controlRef,
			forwardedRef
		],
		props: [
			{
				id: nativeButton ? inputId ?? void 0 : id,
				role: "checkbox",
				"aria-checked": computedIndeterminate ? "mixed" : computedChecked,
				"aria-readonly": readOnly || void 0,
				"aria-required": required || void 0,
				"aria-labelledby": ariaLabelledBy,
				[PARENT_CHECKBOX]: parent ? "" : void 0,
				onFocus() {
					if (!disabled) setFocused(true);
				},
				onBlur() {
					const inputEl = inputRef.current;
					if (!inputEl) return;
					setTouched(true);
					setFocused(false);
					if (validationMode === "onBlur") validation.commit(groupContext ? groupValue : inputEl.checked);
				},
				onKeyDown(event) {
					if (event.key !== "Enter") return;
					event.preventBaseUIHandler();
					if (event.defaultPrevented) return;
					const formToSubmit = inputRef.current?.form ?? null;
					const currentTarget = event.currentTarget;
					const nativeEvent = event.nativeEvent;
					const originalPreventDefault = event.preventDefault;
					const originalNativePreventDefault = nativeEvent.preventDefault;
					let preventDefaultCalledAfterPropagation = false;
					event.preventDefault = () => {
						preventDefaultCalledAfterPropagation = true;
						originalPreventDefault.call(event);
					};
					nativeEvent.preventDefault = () => {
						preventDefaultCalledAfterPropagation = true;
						originalNativePreventDefault.call(nativeEvent);
					};
					originalNativePreventDefault.call(nativeEvent);
					getWindow(currentTarget).queueMicrotask(() => {
						event.preventDefault = originalPreventDefault;
						nativeEvent.preventDefault = originalNativePreventDefault;
						if (!preventDefaultCalledAfterPropagation) getDefaultFormSubmitter(formToSubmit)?.click();
					});
				},
				onClick(event) {
					if (readOnly || disabled) return;
					event.preventDefault();
					const input = inputRef.current;
					if (!input) return;
					dispatchClickWithModifiers(input, event);
				}
			},
			elementProps,
			otherGroupProps,
			getButtonProps,
			getDescriptionProps,
			(props) => validation.getValidationProps(disabled, props)
		],
		stateAttributesMapping
	});
	return /*#__PURE__*/ (0, import_jsx_runtime.jsxs)(CheckboxRootContext.Provider, {
		value: state,
		children: [
			element,
			!checked && !groupContext && name && !parent && uncheckedValue !== void 0 && /*#__PURE__*/ (0, import_jsx_runtime.jsx)("input", {
				type: "hidden",
				form,
				name,
				value: uncheckedValue,
				disabled
			}),
			/*#__PURE__*/ (0, import_jsx_runtime.jsx)("input", {
				...inputProps,
				suppressHydrationWarning: true
			})
		]
	});
});
CheckboxRoot.displayName = "CheckboxRoot";
//#endregion
//#region node_modules/@base-ui/react/checkbox/indicator/CheckboxIndicator.mjs
/**
* Indicates whether the checkbox is ticked.
* Renders a `<span>` element.
*
* Documentation: [Base UI Checkbox](https://base-ui.com/react/components/checkbox)
*/
var CheckboxIndicator = /*#__PURE__*/ import_react.forwardRef(function CheckboxIndicator(componentProps, forwardedRef) {
	const { render, className, style, keepMounted = false, ...elementProps } = componentProps;
	const rootState = useCheckboxRootContext();
	const rendered = rootState.checked || rootState.indeterminate;
	const { mounted, transitionStatus, setMounted } = useTransitionStatus(rendered);
	const indicatorRef = import_react.useRef(null);
	const state = {
		...rootState,
		transitionStatus
	};
	useOpenChangeComplete({
		open: rendered,
		ref: indicatorRef,
		onComplete() {
			if (!rendered) setMounted(false);
		}
	});
	const stateAttributesMapping = {
		...getCheckboxStateAttributesMapping(rootState),
		...transitionStatusMapping
	};
	const shouldRender = keepMounted || mounted;
	const element = useRenderElement("span", componentProps, {
		ref: [forwardedRef, indicatorRef],
		state,
		stateAttributesMapping,
		props: elementProps
	});
	if (!shouldRender) return null;
	return element;
});
CheckboxIndicator.displayName = "CheckboxIndicator";
//#endregion
//#region node_modules/@base-ui/react/checkbox/index.parts.mjs
var index_parts_exports$4 = /* @__PURE__ */ __exportAll({
	Indicator: () => CheckboxIndicator,
	Root: () => CheckboxRoot
});
//#endregion
//#region node_modules/@base-ui/react/field/utils/getCombinedFieldValidityData.mjs
/**
* Combines the field's client-side, stateful validity data with the external invalid state to
* determine the field's true validity.
*/
function getCombinedFieldValidityData(validityData, invalid) {
	return {
		...validityData,
		state: {
			...validityData.state,
			valid: !invalid && validityData.state.valid
		}
	};
}
//#endregion
//#region node_modules/@base-ui/react/field/root/useFieldValidation.mjs
var validityKeys = Object.keys(DEFAULT_VALIDITY_STATE);
/**
* Whether an input participates in the surrounding Base UI Form. Inputs that are effectively
* disabled, or whose `form` attribute explicitly associates them with another form, are excluded.
* DOM position only matters when it associates the input with a different form. Otherwise, field
* registration is context-driven, so portaled inputs (for example inside a dialog) still belong to
* the form for both validation and values projected into `onFormSubmit`.
*/
function isEligibleInput(input, formElement) {
	if (input.matches(":disabled")) return false;
	if (!formElement || input.form === formElement) return true;
	return input.form === null && !input.hasAttribute("form");
}
/**
* Picks the input whose native validity should represent a field that owns several inputs (such as a
* checkbox or radio group). Prefers the first eligible currently-invalid input, where "first" follows
* registration order (mount order), and otherwise returns the first eligible input.
*/
function findRepresentativeInput(inputs, formElement) {
	let fallback = null;
	for (const input of inputs.keys()) {
		if (!isEligibleInput(input, formElement)) continue;
		if (!input.validity.valid) return input;
		fallback ??= input;
	}
	return fallback;
}
function clearCustomValidity(element, inputs) {
	for (const input of inputs.keys()) input.setCustomValidity("");
	element?.setCustomValidity("");
}
function useFieldValidation(params) {
	const { elementRef, formRef } = useFormContext();
	const { setValidityData, validate, validityData, validationDebounceTime, invalid, markedDirtyRef, state, shouldValidateOnChange, registeredFieldIdRef } = params;
	const { controlId, getDescriptionProps } = useLabelableContext();
	const timeout = useTimeout();
	const inputRef = import_react.useRef(null);
	const registeredInputs = useRefWithInit(() => /* @__PURE__ */ new Map()).current;
	const validationCommitIdRef = import_react.useRef(0);
	const registerInput = import_react.useCallback((element, registration) => {
		registeredInputs.set(element, registration);
		return () => {
			registeredInputs.delete(element);
		};
	}, [registeredInputs]);
	const getInputControl = useStableCallback(() => {
		const element = findRepresentativeInput(registeredInputs, elementRef.current);
		return element && registeredInputs.get(element)?.controlRef.current || null;
	});
	const commit = useStableCallback(async (value, revalidate = false) => {
		validationCommitIdRef.current += 1;
		const validationCommitId = validationCommitIdRef.current;
		function updateRegisteredFieldValidity(nextValidityData, externalInvalid = invalid) {
			const fieldId = registeredFieldIdRef.current ?? controlId;
			if (fieldId == null) return;
			const currentFieldData = formRef.current.fields.get(fieldId);
			if (!currentFieldData) return;
			const validityDataWithFormErrors = getCombinedFieldValidityData(nextValidityData, externalInvalid);
			formRef.current.fields.set(fieldId, {
				...currentFieldData,
				validityData: validityDataWithFormErrors
			});
		}
		function publishAllValid(input, externalInvalid) {
			const nextValidityData = {
				value,
				state: {
					...DEFAULT_VALIDITY_STATE,
					valid: true
				},
				error: "",
				errors: [],
				initialValue: validityData.initialValue
			};
			clearCustomValidity(input, registeredInputs);
			updateRegisteredFieldValidity(nextValidityData, externalInvalid);
			setValidityData(nextValidityData);
		}
		const element = registeredInputs.size > 0 ? findRepresentativeInput(registeredInputs, elementRef.current) : inputRef.current;
		if (revalidate) {
			if (state.valid !== false || !element) return;
			const currentNativeValidity = element.validity;
			if (!currentNativeValidity.valueMissing) {
				publishAllValid(element, false);
				return;
			}
			for (const key of validityKeys) if (key !== "valid" && key !== "valueMissing" && key !== "customError" && currentNativeValidity[key]) return;
		}
		function getState(el) {
			const computedState = validityKeys.reduce((acc, key) => {
				acc[key] = el.validity[key];
				return acc;
			}, {});
			let hasOnlyValueMissingError = false;
			for (const key of validityKeys) {
				if (key === "valid") continue;
				if (key === "valueMissing" && computedState[key]) hasOnlyValueMissingError = true;
				else if (computedState[key]) return computedState;
			}
			if (hasOnlyValueMissingError && !markedDirtyRef.current) {
				computedState.valid = true;
				computedState.valueMissing = false;
			}
			return computedState;
		}
		timeout.clear();
		let result = null;
		let validationErrors = [];
		const nextState = element ? getState(element) : {
			...DEFAULT_VALIDITY_STATE,
			valid: true
		};
		let defaultValidationMessage;
		const isValidatingOnChange = shouldValidateOnChange();
		if (element && element.validationMessage && !isValidatingOnChange) {
			defaultValidationMessage = element.validationMessage;
			validationErrors = [element.validationMessage];
		} else {
			const formValues = Array.from(formRef.current.fields.values()).reduce((acc, field) => {
				if (field.name) acc[field.name] = field.getValue();
				return acc;
			}, {});
			const resultOrPromise = validate(value, formValues);
			if (typeof resultOrPromise === "object" && resultOrPromise !== null && "then" in resultOrPromise) {
				result = await resultOrPromise;
				if (validationCommitId !== validationCommitIdRef.current) return;
			} else result = resultOrPromise;
			if (result !== null) {
				nextState.valid = false;
				nextState.customError = true;
				if (Array.isArray(result)) {
					validationErrors = result;
					element?.setCustomValidity(result.join("\n"));
				} else if (result) {
					validationErrors = [result];
					element?.setCustomValidity(result);
				}
			} else if (isValidatingOnChange) {
				clearCustomValidity(element, registeredInputs);
				nextState.customError = false;
				if (element && element.validationMessage) {
					defaultValidationMessage = element.validationMessage;
					validationErrors = [element.validationMessage];
				} else if ((!element || element.validity.valid) && !nextState.valid) nextState.valid = true;
			}
		}
		const nextValidityData = {
			value,
			state: nextState,
			error: defaultValidationMessage ?? (Array.isArray(result) ? result[0] : result ?? ""),
			errors: validationErrors,
			initialValue: validityData.initialValue
		};
		updateRegisteredFieldValidity(nextValidityData);
		setValidityData(nextValidityData);
	});
	const change = useStableCallback((value) => {
		timeout.clear();
		const validateOnChange = shouldValidateOnChange();
		if (validateOnChange && value !== "" && validationDebounceTime) {
			validationCommitIdRef.current += 1;
			timeout.start(validationDebounceTime, () => {
				commit(value);
			});
		} else commit(value, !validateOnChange);
	});
	const getValidationProps = import_react.useCallback((disabled, externalProps = {}) => mergeProps(getDescriptionProps(externalProps), state.valid === false && !state.disabled && !disabled ? { "aria-invalid": true } : EMPTY_OBJECT), [
		getDescriptionProps,
		state.disabled,
		state.valid
	]);
	return import_react.useMemo(() => ({
		getValidationProps,
		inputRef,
		registeredInputs,
		registerInput,
		getInputControl,
		commit,
		change
	}), [
		getValidationProps,
		registeredInputs,
		registerInput,
		getInputControl,
		commit,
		change
	]);
}
//#endregion
//#region node_modules/@base-ui/react/checkbox-group/useCheckboxGroupParent.mjs
function useCheckboxGroupParent(params) {
	const { allValues = EMPTY_ARRAY$1, value, onValueChange: onValueChangeProp } = params;
	const uncontrolledStateRef = import_react.useRef(value);
	const disabledStatesRef = import_react.useRef(/* @__PURE__ */ new Map());
	const [status, setStatus] = import_react.useState("mixed");
	const id = useBaseUiId();
	const checked = value.length === allValues.length;
	const indeterminate = value.length !== allValues.length && value.length > 0;
	const onValueChange = useStableCallback(onValueChangeProp);
	const getParentProps = import_react.useCallback(() => ({
		id,
		indeterminate,
		checked,
		"aria-controls": allValues.map((v) => `${id}-${v}`).join(" "),
		onCheckedChange(_, eventDetails) {
			const uncontrolledState = uncontrolledStateRef.current;
			const none = allValues.filter((v) => disabledStatesRef.current.get(v) && uncontrolledState.includes(v));
			const all = allValues.filter((v) => !disabledStatesRef.current.get(v) || uncontrolledState.includes(v));
			if (uncontrolledState.length === all.length || uncontrolledState.length === 0) {
				if (value.length === all.length) onValueChange(none, eventDetails);
				else onValueChange(all, eventDetails);
				return;
			}
			let nextStatus = "mixed";
			let nextValue = uncontrolledState;
			if (status === "mixed") {
				nextStatus = "on";
				nextValue = all;
			} else if (status === "on") {
				nextStatus = "off";
				nextValue = none;
			}
			onValueChange(nextValue, eventDetails);
			if (!eventDetails.isCanceled) setStatus(nextStatus);
		}
	}), [
		allValues,
		checked,
		id,
		indeterminate,
		onValueChange,
		status,
		value.length
	]);
	const getChildProps = import_react.useCallback((childValue) => ({
		checked: value.includes(childValue),
		onCheckedChange(nextChecked, eventDetails) {
			const newValue = value.slice();
			if (nextChecked) newValue.push(childValue);
			else newValue.splice(newValue.indexOf(childValue), 1);
			onValueChange(newValue, eventDetails);
			if (!eventDetails.isCanceled) {
				uncontrolledStateRef.current = newValue;
				setStatus("mixed");
			}
		}
	}), [onValueChange, value]);
	return import_react.useMemo(() => ({
		id,
		getParentProps,
		getChildProps,
		disabledStatesRef
	}), [
		id,
		getParentProps,
		getChildProps
	]);
}
//#endregion
//#region node_modules/@base-ui/react/checkbox-group/CheckboxGroup.mjs
/**
* Provides a shared state to a series of checkboxes.
*
* Documentation: [Base UI Checkbox Group](https://base-ui.com/react/components/checkbox-group)
*/
var CheckboxGroup = /*#__PURE__*/ import_react.forwardRef(function CheckboxGroup(componentProps, forwardedRef) {
	const { allValues, className, defaultValue: defaultValueProp, disabled: disabledProp = false, id: idProp, onValueChange, render, value: externalValue, style, ...elementProps } = componentProps;
	const { disabled: fieldDisabled, name: fieldName, state: fieldState, validation, setFilled, setDirty, validityData } = useFieldRootContext();
	const { labelId, getDescriptionProps } = useLabelableContext();
	const { clearErrors, elementRef } = useFormContext();
	const disabled = fieldDisabled || disabledProp;
	const [value = EMPTY_ARRAY$1, setValueUnwrapped] = useControlled({
		controlled: externalValue,
		default: defaultValueProp ?? EMPTY_ARRAY$1,
		name: "CheckboxGroup",
		state: "value"
	});
	const setValue = useStableCallback((v, eventDetails) => {
		onValueChange?.(v, eventDetails);
		if (eventDetails.isCanceled) return;
		setValueUnwrapped(v);
	});
	const parent = useCheckboxGroupParent({
		allValues,
		value,
		onValueChange: setValue
	});
	const id = useBaseUiId(idProp);
	const getInputControl = validation.getInputControl;
	useRegisterFieldControl(import_react.useMemo(() => ({ get current() {
		return getInputControl();
	} }), [getInputControl]), id, value, useStableCallback(() => {
		const formElement = elementRef.current;
		if (!formElement) return value;
		const successfulValues = /* @__PURE__ */ new Set();
		for (const [input, registration] of validation.registeredInputs) if (registration.value !== void 0 && input.checked && isEligibleInput(input, formElement)) successfulValues.add(registration.value);
		return value.filter((inputValue) => successfulValues.has(inputValue));
	}), !!fieldName && !disabled, fieldName);
	useValueChanged(value, () => {
		if (fieldName) clearErrors(fieldName);
		const initialValue = Array.isArray(validityData.initialValue) ? validityData.initialValue : EMPTY_ARRAY$1;
		setFilled(value.length > 0);
		setDirty(!areArraysEqual(value, initialValue));
		validation.change(value);
	});
	const state = {
		...fieldState,
		disabled
	};
	const contextValue = import_react.useMemo(() => ({
		allValues,
		value,
		setValue,
		parent,
		disabled,
		validation
	}), [
		allValues,
		value,
		setValue,
		parent,
		disabled,
		validation
	]);
	const element = useRenderElement("div", componentProps, {
		state,
		ref: forwardedRef,
		props: [
			{
				id: idProp,
				role: "group",
				"aria-labelledby": labelId
			},
			elementProps,
			getDescriptionProps
		],
		stateAttributesMapping: fieldValidityMapping
	});
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(CheckboxGroupContext.Provider, {
		value: contextValue,
		children: element
	});
});
CheckboxGroup.displayName = "CheckboxGroup";
//#endregion
//#region node_modules/@base-ui/react/collapsible/root/stateAttributesMapping.mjs
var collapsibleStateAttributesMapping = {
	...collapsibleOpenStateMapping,
	...transitionStatusMapping
};
//#endregion
//#region node_modules/@base-ui/react/collapsible/root/CollapsibleRoot.mjs
/**
* Groups all parts of the collapsible.
* Renders a `<div>` element.
*
* Documentation: [Base UI Collapsible](https://base-ui.com/react/components/collapsible)
*/
var CollapsibleRoot = /*#__PURE__*/ import_react.forwardRef(function CollapsibleRoot(componentProps, forwardedRef) {
	const { render, className, defaultOpen = false, disabled = false, onOpenChange: onOpenChangeProp, open, style, ...elementProps } = componentProps;
	const onOpenChange = useStableCallback(onOpenChangeProp);
	const collapsible = useCollapsibleRoot({
		open,
		defaultOpen,
		onOpenChange,
		disabled
	});
	const state = import_react.useMemo(() => ({
		open: collapsible.open,
		disabled: collapsible.disabled,
		transitionStatus: collapsible.transitionStatus
	}), [
		collapsible.open,
		collapsible.disabled,
		collapsible.transitionStatus
	]);
	const contextValue = import_react.useMemo(() => ({
		...collapsible,
		onOpenChange,
		state
	}), [
		collapsible,
		onOpenChange,
		state
	]);
	const element = useRenderElement("div", componentProps, {
		state,
		ref: forwardedRef,
		props: elementProps,
		stateAttributesMapping: collapsibleStateAttributesMapping
	});
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(CollapsibleRootContext.Provider, {
		value: contextValue,
		children: element
	});
});
CollapsibleRoot.displayName = "CollapsibleRoot";
//#endregion
//#region node_modules/@base-ui/react/collapsible/trigger/CollapsibleTrigger.mjs
var stateAttributesMapping$15 = {
	...triggerOpenStateMapping,
	...transitionStatusMapping
};
/**
* A button that opens and closes the collapsible panel.
* Renders a `<button>` element.
*
* Documentation: [Base UI Collapsible](https://base-ui.com/react/components/collapsible)
*/
var CollapsibleTrigger = /*#__PURE__*/ import_react.forwardRef(function CollapsibleTrigger(componentProps, forwardedRef) {
	const { panelId, open, handleTrigger, state, disabled: contextDisabled } = useCollapsibleRootContext();
	const { className, disabled = contextDisabled, render, nativeButton = true, style, ...elementProps } = componentProps;
	const { getButtonProps, buttonRef } = useButton({
		disabled,
		focusableWhenDisabled: true,
		native: nativeButton
	});
	return useRenderElement("button", componentProps, {
		state,
		ref: [forwardedRef, buttonRef],
		props: [
			{
				"aria-controls": open ? panelId : void 0,
				"aria-expanded": open,
				onClick: handleTrigger
			},
			elementProps,
			getButtonProps
		],
		stateAttributesMapping: stateAttributesMapping$15
	});
});
CollapsibleTrigger.displayName = "CollapsibleTrigger";
//#endregion
//#region node_modules/@base-ui/react/collapsible/panel/CollapsiblePanelCssVars.mjs
var CollapsiblePanelCssVars = /*#__PURE__*/ function(CollapsiblePanelCssVars) {
	/**
	* The collapsible panel's height.
	* @type {number}
	*/
	CollapsiblePanelCssVars["collapsiblePanelHeight"] = "--collapsible-panel-height";
	/**
	* The collapsible panel's width.
	* @type {number}
	*/
	CollapsiblePanelCssVars["collapsiblePanelWidth"] = "--collapsible-panel-width";
	return CollapsiblePanelCssVars;
}({});
//#endregion
//#region node_modules/@base-ui/react/collapsible/panel/CollapsiblePanel.mjs
/**
* A panel with the collapsible contents.
* Renders a `<div>` element.
*
* Documentation: [Base UI Collapsible](https://base-ui.com/react/components/collapsible)
*/
var CollapsiblePanel = /*#__PURE__*/ import_react.forwardRef(function CollapsiblePanel(componentProps, forwardedRef) {
	const { className, hiddenUntilFound: hiddenUntilFoundProp, keepMounted: keepMountedProp, render, id: idProp, style, ...elementProps } = componentProps;
	import_react.useEffect(() => {
		if (hiddenUntilFoundProp && keepMountedProp === false) warn("The `keepMounted={false}` prop on `Collapsible.Panel` is ignored when `hiddenUntilFound` is enabled, since the panel must remain mounted while closed.");
	}, [hiddenUntilFoundProp, keepMountedProp]);
	const { defaultPanelId, mounted, onOpenChange, open, setMounted, setPanelIdState, setOpen, state, transitionStatus } = useCollapsibleRootContext();
	const hiddenUntilFound = hiddenUntilFoundProp ?? false;
	const keepMounted = keepMountedProp ?? false;
	const registeredId = idProp || void 0;
	const id = registeredId ?? defaultPanelId;
	useIsoLayoutEffect(() => {
		setPanelIdState((currentId) => registeredId ?? (currentId === null ? void 0 : currentId));
		return () => {
			setPanelIdState((currentId) => currentId === registeredId ? null : currentId);
		};
	}, [registeredId, setPanelIdState]);
	const { height, props, ref, shouldPreventOpenAnimation, shouldRender, transitionStatus: panelTransitionStatus, width } = useCollapsiblePanel({
		externalRef: forwardedRef,
		hiddenUntilFound,
		id,
		keepMounted,
		mounted,
		onOpenChange,
		open,
		setMounted,
		setOpen,
		transitionStatus
	});
	const panelState = {
		...state,
		transitionStatus: panelTransitionStatus
	};
	const resolvedStyle = resolveStyle(style, panelState);
	const element = useRenderElement("div", {
		...componentProps,
		style: void 0
	}, {
		state: panelState,
		ref,
		props: [
			props,
			{ style: {
				[CollapsiblePanelCssVars.collapsiblePanelHeight]: height === void 0 ? "auto" : `${height}px`,
				[CollapsiblePanelCssVars.collapsiblePanelWidth]: width === void 0 ? "auto" : `${width}px`
			} },
			elementProps,
			resolvedStyle ? { style: resolvedStyle } : void 0,
			shouldPreventOpenAnimation ? { style: { animationName: "none" } } : void 0
		],
		stateAttributesMapping: collapsibleStateAttributesMapping
	});
	if (!shouldRender) return null;
	return element;
});
CollapsiblePanel.displayName = "CollapsiblePanel";
//#endregion
//#region node_modules/@base-ui/react/collapsible/index.parts.mjs
var index_parts_exports$5 = /* @__PURE__ */ __exportAll({
	Panel: () => CollapsiblePanel,
	Root: () => CollapsibleRoot,
	Trigger: () => CollapsibleTrigger
});
//#endregion
//#region node_modules/@base-ui/react/combobox/root/ComboboxRoot.mjs
/**
* Groups all parts of the combobox.
* Doesn't render its own HTML element.
*
* Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
*/
function ComboboxRoot(props) {
	const { multiple = false, defaultValue, value, onValueChange, autoComplete, ...other } = props;
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(AriaCombobox, {
		...other,
		selectionMode: multiple ? "multiple" : "single",
		selectedValue: value,
		defaultSelectedValue: defaultValue,
		onSelectedValueChange: onValueChange,
		formAutoComplete: autoComplete
	});
}
//#endregion
//#region node_modules/@base-ui/react/utils/useRegisteredLabelId.mjs
function useRegisteredLabelId(idProp, setLabelId) {
	const id = useBaseUiId(idProp);
	useIsoLayoutEffect(() => {
		setLabelId(id);
		return () => {
			setLabelId((currentId) => currentId === id ? void 0 : currentId);
		};
	}, [id, setLabelId]);
	return id;
}
//#endregion
//#region node_modules/@base-ui/react/internals/labelable-provider/useLabel.mjs
function useLabel(params = {}) {
	const { id: idProp, fallbackControlId, native = false, setLabelId: setLabelIdProp, focusControl: focusControlProp } = params;
	const { controlId: contextControlId, setLabelId: setContextLabelId } = useLabelableContext();
	const id = useRegisteredLabelId(idProp, useStableCallback((nextLabelId) => {
		setContextLabelId(nextLabelId);
		setLabelIdProp?.(nextLabelId);
	}));
	const resolvedControlId = contextControlId ?? fallbackControlId;
	function focusControl(event) {
		if (focusControlProp) {
			focusControlProp(event, resolvedControlId);
			return;
		}
		if (!resolvedControlId) return;
		const controlElement = ownerDocument(event.currentTarget).getElementById(resolvedControlId);
		if (isHTMLElement(controlElement)) focusElementWithVisible(controlElement);
	}
	function handleInteraction(event) {
		if (getTarget(event.nativeEvent)?.closest("button,input,select,textarea")) return;
		if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
		if (native) return;
		focusControl(event);
	}
	return native ? {
		id,
		htmlFor: resolvedControlId ?? void 0,
		onMouseDown: handleInteraction
	} : {
		id,
		onClick: handleInteraction,
		onPointerDown(event) {
			event.preventDefault();
		}
	};
}
function focusElementWithVisible(element) {
	element.focus({ focusVisible: true });
}
//#endregion
//#region node_modules/@base-ui/react/combobox/label/ComboboxLabel.mjs
/**
* An accessible label that is automatically associated with the combobox trigger.
* Renders a `<div>` element.
*
* Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
*/
var ComboboxLabel = /*#__PURE__*/ import_react.forwardRef(function ComboboxLabel(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const elementPropsWithoutId = elementProps;
	delete elementPropsWithoutId.id;
	const fieldRootContext = useFieldRootContext();
	const store = useComboboxRootContext();
	const inputInsidePopup = useStore(store, selectors$3.inputInsidePopup);
	const triggerElement = useStore(store, selectors$3.triggerElement);
	const inputElement = useStore(store, selectors$3.inputElement);
	const rootId = useStore(store, selectors$3.id);
	const defaultLabelId = getDefaultLabelId(rootId);
	const localControlId = triggerElement?.id ?? (inputInsidePopup ? rootId : void 0);
	import_react.useEffect(() => {
		if (!inputElement || inputInsidePopup) return;
		error(`<Combobox.Label> labels <Combobox.Trigger> only. When <Combobox.Input> is the form control, use a native <label> or <Field.Label> instead.${SafeReact.captureOwnerStack?.() || ""}`);
	}, [inputElement, inputInsidePopup]);
	const labelProps = useLabel({
		id: defaultLabelId,
		fallbackControlId: localControlId,
		setLabelId(nextLabelId) {
			const resolvedLabelId = typeof nextLabelId === "function" ? nextLabelId(store.state.labelId) : nextLabelId;
			store.set("labelId", resolvedLabelId);
		}
	});
	return useRenderElement("div", componentProps, {
		ref: forwardedRef,
		state: fieldRootContext.state,
		props: [labelProps, elementProps],
		stateAttributesMapping: fieldValidityMapping
	});
});
ComboboxLabel.displayName = "ComboboxLabel";
//#endregion
//#region node_modules/@base-ui/react/combobox/value/ComboboxValue.mjs
/**
* The current value of the combobox.
* Doesn't render its own HTML element.
*
* Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
*/
function ComboboxValue(props) {
	const { children: childrenProp, placeholder } = props;
	const store = useComboboxRootContext();
	const itemToStringLabel = useStore(store, selectors$3.itemToStringLabel);
	const selectedValue = useStore(store, selectors$3.selectedValue);
	const items = useStore(store, selectors$3.items);
	const multiple = useStore(store, selectors$3.selectionMode) === "multiple";
	const hasSelectedValue = useStore(store, selectors$3.hasSelectedValue);
	const shouldCheckNullItemLabel = !hasSelectedValue && placeholder != null && childrenProp == null;
	const hasNullLabel = useStore(store, selectors$3.hasNullItemLabel, shouldCheckNullItemLabel);
	let children = null;
	if (typeof childrenProp === "function") children = childrenProp(selectedValue);
	else if (childrenProp != null) children = childrenProp;
	else if (!hasSelectedValue && placeholder != null && !hasNullLabel) children = placeholder;
	else if (multiple && Array.isArray(selectedValue)) children = resolveMultipleLabels(selectedValue, items, itemToStringLabel);
	else children = resolveSelectedLabel(selectedValue, items, itemToStringLabel);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children });
}
//#endregion
//#region node_modules/@base-ui/react/combobox/item-indicator/ComboboxItemIndicator.mjs
/**
* Indicates whether the item is selected.
* Renders a `<span>` element.
*
* Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
*/
var ComboboxItemIndicator = /*#__PURE__*/ import_react.forwardRef(function ComboboxItemIndicator(componentProps, forwardedRef) {
	const { selected } = useComboboxItemContext();
	if (!(componentProps.keepMounted || selected)) return null;
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(Inner$1, {
		...componentProps,
		ref: forwardedRef
	});
});
ComboboxItemIndicator.displayName = "ComboboxItemIndicator";
var Inner$1 = /*#__PURE__*/ import_react.memo(/*#__PURE__*/ import_react.forwardRef((componentProps, forwardedRef) => {
	const { render, className, style, keepMounted, ...elementProps } = componentProps;
	const { selected } = useComboboxItemContext();
	const indicatorRef = import_react.useRef(null);
	const { transitionStatus, setMounted } = useTransitionStatus(selected);
	const element = useRenderElement("span", componentProps, {
		ref: [forwardedRef, indicatorRef],
		state: {
			selected,
			transitionStatus
		},
		props: [{
			"aria-hidden": true,
			children: "✔️"
		}, elementProps],
		stateAttributesMapping: transitionStatusMapping
	});
	useOpenChangeComplete({
		open: selected,
		ref: indicatorRef,
		onComplete() {
			if (!selected) setMounted(false);
		}
	});
	return element;
}));
Inner$1.displayName = "Inner";
//#endregion
//#region node_modules/@base-ui/react/combobox/chips/ComboboxChips.mjs
/**
* A container for the chips in a multiselectable input.
* Renders a `<div>` element.
*
* Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
*/
var ComboboxChips = /*#__PURE__*/ import_react.forwardRef(function ComboboxChips(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const store = useComboboxRootContext();
	const open = useStore(store, selectors$3.open);
	const hasSelectionChips = useStore(store, selectors$3.hasSelectionChips);
	const [highlightedChipIndex, setHighlightedChipIndex] = import_react.useState(void 0);
	if (open && highlightedChipIndex !== void 0) setHighlightedChipIndex(void 0);
	const chipsRef = import_react.useRef([]);
	const element = useRenderElement("div", componentProps, {
		ref: [forwardedRef, store.state.chipsContainerRef],
		props: [
			hasSelectionChips ? { role: "toolbar" } : EMPTY_OBJECT,
			{ onMouseDown(event) {
				handleInputPress(event, store, store.state.disabled, store.state.readOnly);
			} },
			elementProps
		]
	});
	const contextValue = import_react.useMemo(() => ({
		highlightedChipIndex,
		setHighlightedChipIndex,
		chipsRef
	}), [
		highlightedChipIndex,
		setHighlightedChipIndex,
		chipsRef
	]);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ComboboxChipsContext.Provider, {
		value: contextValue,
		children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(CompositeList, {
			elementsRef: chipsRef,
			children: element
		})
	});
});
ComboboxChips.displayName = "ComboboxChips";
//#endregion
//#region node_modules/@base-ui/react/combobox/chip/ComboboxChipContext.mjs
var ComboboxChipContext = /*#__PURE__*/ import_react.createContext(void 0);
ComboboxChipContext.displayName = "ComboboxChipContext";
function useComboboxChipContext() {
	const context = import_react.useContext(ComboboxChipContext);
	if (!context) throw new Error("Base UI: ComboboxChipContext is missing. ComboboxChip parts must be placed within <Combobox.Chip>.");
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/combobox/chip/ComboboxChip.mjs
/**
* An individual chip that represents a value in a multiselectable input.
* Renders a `<div>` element.
*
* Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
*/
var ComboboxChip = /*#__PURE__*/ import_react.forwardRef(function ComboboxChip(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const store = useComboboxRootContext();
	const { setHighlightedChipIndex, chipsRef } = useComboboxChipsContext();
	const direction = useDirection();
	const disabled = useStore(store, selectors$3.disabled);
	const readOnly = useStore(store, selectors$3.readOnly);
	const selectedValue = useStore(store, selectors$3.selectedValue);
	const { ref, index } = useCompositeListItem();
	function handleKeyDown(event) {
		let nextIndex = index;
		const [previousChipKey, nextChipKey] = getChipNavigationKeys(direction);
		if (event.key === previousChipKey) {
			event.preventDefault();
			if (index > 0) nextIndex = index - 1;
			else nextIndex = void 0;
		} else if (event.key === nextChipKey) {
			event.preventDefault();
			if (index < chipsRef.current.length - 1) nextIndex = index + 1;
			else nextIndex = void 0;
		} else if (event.key === "Backspace" || event.key === "Delete") {
			nextIndex = getIndexAfterChipRemoval(index, selectedValue.length);
			stopEvent(event);
			store.state.setIndices({
				activeIndex: null,
				selectedIndex: null,
				type: keyboard
			});
			store.state.setSelectedValue(selectedValue.filter((_, i) => i !== index), createChangeEventDetails(none, event.nativeEvent));
		} else if (event.key === "Enter" || event.key === " ") {
			stopEvent(event);
			nextIndex = void 0;
		} else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
			stopEvent(event);
			store.state.setOpen(true, createChangeEventDetails(listNavigation, event.nativeEvent));
			nextIndex = void 0;
		} else if (event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) nextIndex = void 0;
		return nextIndex;
	}
	const element = useRenderElement("div", componentProps, {
		ref: [forwardedRef, ref],
		state: { disabled },
		props: [{
			tabIndex: -1,
			"aria-disabled": disabled || void 0,
			"aria-readonly": readOnly || void 0,
			onKeyDown(event) {
				if (disabled || readOnly) return;
				const nextIndex = handleKeyDown(event);
				import_react_dom.flushSync(() => {
					setHighlightedChipIndex(nextIndex);
				});
				if (nextIndex === void 0) store.state.inputRef.current?.focus();
				else chipsRef.current[nextIndex]?.focus();
			}
		}, elementProps]
	});
	const contextValue = import_react.useMemo(() => ({ index }), [index]);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ComboboxChipContext.Provider, {
		value: contextValue,
		children: element
	});
});
ComboboxChip.displayName = "ComboboxChip";
//#endregion
//#region node_modules/@base-ui/react/combobox/chip-remove/ComboboxChipRemove.mjs
/**
* A button to remove a chip.
* Renders a `<button>` element.
*
* Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
*/
var ComboboxChipRemove = /*#__PURE__*/ import_react.forwardRef(function ComboboxChipRemove(componentProps, forwardedRef) {
	const { render, className, disabled: disabledProp = false, nativeButton = true, style, ...elementProps } = componentProps;
	const store = useComboboxRootContext();
	const { index } = useComboboxChipContext();
	const comboboxDisabled = useStore(store, selectors$3.disabled);
	const readOnly = useStore(store, selectors$3.readOnly);
	const selectedValue = useStore(store, selectors$3.selectedValue);
	const isItemEqualToValue = useStore(store, selectors$3.isItemEqualToValue);
	const disabled = comboboxDisabled || disabledProp;
	const { buttonRef, getButtonProps } = useButton({
		native: nativeButton,
		disabled: disabled || readOnly,
		focusableWhenDisabled: true
	});
	const state = { disabled };
	function clearActiveIndexForRemovedItem(removedItem) {
		const activeIndex = store.state.activeIndex;
		if (activeIndex == null) return;
		const removedIndex = findItemIndex(store.state.valuesRef.current, removedItem, isItemEqualToValue);
		if (removedIndex !== -1 && activeIndex === removedIndex) store.state.setIndices({
			activeIndex: null,
			type: store.state.keyboardActiveRef.current ? keyboard : pointer
		});
	}
	function removeChip(event) {
		const eventDetails = createChangeEventDetails(chipRemovePress, event.nativeEvent);
		const removedItem = selectedValue[index];
		clearActiveIndexForRemovedItem(removedItem);
		store.state.setSelectedValue(selectedValue.filter((_, i) => i !== index), eventDetails);
		store.state.inputRef.current?.focus();
		return eventDetails;
	}
	return useRenderElement("button", componentProps, {
		ref: [forwardedRef, buttonRef],
		state,
		props: [
			{
				tabIndex: -1,
				onMouseDown(event) {
					event.preventDefault();
				},
				onClick(event) {
					if (!removeChip(event).isPropagationAllowed) event.stopPropagation();
				},
				onKeyDown(event) {
					if (event.key === "Enter" || event.key === " ") {
						if (!removeChip(event).isPropagationAllowed) stopEvent(event);
					}
				}
			},
			elementProps,
			getButtonProps
		]
	});
});
ComboboxChipRemove.displayName = "ComboboxChipRemove";
//#endregion
//#region node_modules/@base-ui/react/combobox/separator/ComboboxSeparator.mjs
/**
* A visual separator between items or groups.
* Renders a `<div>` element.
*
* Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
*/
var ComboboxSeparator = ListboxSeparator;
//#endregion
//#region node_modules/@base-ui/react/combobox/index.parts.mjs
var index_parts_exports$6 = /* @__PURE__ */ __exportAll({
	Arrow: () => ComboboxArrow,
	Backdrop: () => ComboboxBackdrop,
	Chip: () => ComboboxChip,
	ChipRemove: () => ComboboxChipRemove,
	Chips: () => ComboboxChips,
	Clear: () => ComboboxClear,
	Collection: () => ComboboxCollection,
	Empty: () => ComboboxEmpty,
	Group: () => ComboboxGroup,
	GroupLabel: () => ComboboxGroupLabel,
	Icon: () => ComboboxIcon,
	Input: () => ComboboxInput,
	InputGroup: () => ComboboxInputGroup,
	Item: () => ComboboxItem,
	ItemIndicator: () => ComboboxItemIndicator,
	Label: () => ComboboxLabel,
	List: () => ComboboxList,
	Popup: () => ComboboxPopup,
	Portal: () => ComboboxPortal,
	Positioner: () => ComboboxPositioner,
	Root: () => ComboboxRoot,
	Row: () => ComboboxRow,
	Separator: () => ComboboxSeparator,
	Status: () => ComboboxStatus,
	Trigger: () => ComboboxTrigger,
	Value: () => ComboboxValue,
	useFilter: () => useComboboxFilter,
	useFilteredItems: () => useFilteredItems
});
//#endregion
//#region node_modules/@base-ui/react/context-menu/root/ContextMenuRoot.mjs
/**
* A component that creates a context menu activated by right clicking or long pressing.
* Doesn't render its own HTML element.
*
* Documentation: [Base UI Context Menu](https://base-ui.com/react/components/context-menu)
*/
function ContextMenuRoot(props) {
	const [anchor, setAnchor] = import_react.useState({ getBoundingClientRect() {
		return DOMRect.fromRect({
			width: 0,
			height: 0,
			x: 0,
			y: 0
		});
	} });
	const backdropRef = import_react.useRef(null);
	const internalBackdropRef = import_react.useRef(null);
	const actionsRef = import_react.useRef(null);
	const positionerRef = import_react.useRef(null);
	const allowMouseUpTriggerRef = import_react.useRef(true);
	const initialCursorPointRef = import_react.useRef(null);
	const id = useId();
	const contextValue = import_react.useMemo(() => ({
		anchor,
		setAnchor,
		actionsRef,
		backdropRef,
		internalBackdropRef,
		positionerRef,
		allowMouseUpTriggerRef,
		initialCursorPointRef,
		rootId: id
	}), [anchor, id]);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ContextMenuRootContext.Provider, {
		value: contextValue,
		children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(MenuRootContext.Provider, {
			value: void 0,
			children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(MenuRoot, { ...props })
		})
	});
}
//#endregion
//#region node_modules/@base-ui/react/context-menu/trigger/ContextMenuTrigger.mjs
var LONG_PRESS_DELAY = 500;
/**
* An area that opens the menu on right click or long press.
* Renders a `<div>` element.
*
* Documentation: [Base UI Context Menu](https://base-ui.com/react/components/context-menu)
*/
var ContextMenuTrigger = /*#__PURE__*/ import_react.forwardRef(function ContextMenuTrigger(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const { setAnchor, actionsRef, internalBackdropRef, backdropRef, positionerRef, allowMouseUpTriggerRef, initialCursorPointRef, rootId } = useContextMenuRootContext(false);
	const { store } = useMenuRootContext(false);
	const open = store.useState("open");
	const disabled = store.useState("disabled");
	const triggerRef = import_react.useRef(null);
	const touchPositionRef = import_react.useRef(null);
	const longPressTimeout = useTimeout();
	const allowMouseUpTimeout = useTimeout();
	const allowMouseUpRef = import_react.useRef(false);
	const mouseUpAbortControllerRef = import_react.useRef(null);
	function handleLongPress(x, y, event) {
		const isTouchEvent = event.type.startsWith("touch");
		initialCursorPointRef.current = {
			x,
			y
		};
		setAnchor({ getBoundingClientRect() {
			return DOMRect.fromRect({
				width: isTouchEvent ? 10 : 0,
				height: isTouchEvent ? 10 : 0,
				x,
				y
			});
		} });
		allowMouseUpRef.current = false;
		actionsRef.current?.setOpen(true, createChangeEventDetails(triggerPress, event));
		allowMouseUpTimeout.start(LONG_PRESS_DELAY, () => {
			allowMouseUpRef.current = true;
		});
	}
	function handleContextMenu(event) {
		if (disabled) return;
		allowMouseUpTriggerRef.current = true;
		stopEvent(event);
		handleLongPress(event.clientX, event.clientY, event.nativeEvent);
		const doc = ownerDocument(triggerRef.current);
		mouseUpAbortControllerRef.current?.abort();
		const mouseUpAbortController = new AbortController();
		mouseUpAbortControllerRef.current = mouseUpAbortController;
		doc.addEventListener("mouseup", (mouseEvent) => {
			allowMouseUpTriggerRef.current = false;
			if (!allowMouseUpRef.current) return;
			allowMouseUpTimeout.clear();
			allowMouseUpRef.current = false;
			const mouseUpTarget = getTarget(mouseEvent);
			if (contains(positionerRef.current, mouseUpTarget)) return;
			if (rootId && mouseUpTarget && findRootOwnerId(mouseUpTarget) === rootId) return;
			actionsRef.current?.setOpen(false, createChangeEventDetails(cancelOpen, mouseEvent));
		}, {
			once: true,
			signal: mouseUpAbortController.signal
		});
	}
	function cancelLongPress() {
		longPressTimeout.clear();
		touchPositionRef.current = null;
	}
	function handleTouchStart(event) {
		if (disabled) {
			cancelLongPress();
			return;
		}
		allowMouseUpTriggerRef.current = false;
		if (event.touches.length !== 1) {
			cancelLongPress();
			return;
		}
		event.stopPropagation();
		const touch = event.touches[0];
		const touchPosition = {
			x: touch.clientX,
			y: touch.clientY
		};
		touchPositionRef.current = touchPosition;
		longPressTimeout.start(LONG_PRESS_DELAY, () => {
			handleLongPress(touchPosition.x, touchPosition.y, event.nativeEvent);
		});
	}
	function handleTouchMove(event) {
		if (event.touches.length !== 1) {
			cancelLongPress();
			return;
		}
		if (longPressTimeout.isStarted() && touchPositionRef.current) {
			const touch = event.touches[0];
			const moveThreshold = 10;
			const deltaX = Math.abs(touch.clientX - touchPositionRef.current.x);
			const deltaY = Math.abs(touch.clientY - touchPositionRef.current.y);
			if (deltaX > moveThreshold || deltaY > moveThreshold) cancelLongPress();
		}
	}
	import_react.useEffect(() => () => {
		mouseUpAbortControllerRef.current?.abort();
	}, []);
	import_react.useEffect(() => {
		function handleDocumentContextMenu(event) {
			if (disabled) return;
			const targetElement = getTarget(event);
			if (contains(triggerRef.current, targetElement) || contains(internalBackdropRef.current, targetElement) || contains(backdropRef.current, targetElement)) event.preventDefault();
		}
		return addEventListener(ownerDocument(triggerRef.current), "contextmenu", handleDocumentContextMenu);
	}, [
		backdropRef,
		disabled,
		internalBackdropRef
	]);
	return useRenderElement("div", componentProps, {
		state: { open },
		ref: [triggerRef, forwardedRef],
		props: [{
			onContextMenu: handleContextMenu,
			onTouchStart: handleTouchStart,
			onTouchMove: handleTouchMove,
			onTouchEnd: cancelLongPress,
			onTouchCancel: cancelLongPress,
			style: { WebkitTouchCallout: "none" }
		}, elementProps],
		stateAttributesMapping: pressableTriggerOpenStateMapping
	});
});
ContextMenuTrigger.displayName = "ContextMenuTrigger";
//#endregion
//#region node_modules/@base-ui/react/context-menu/index.parts.mjs
var index_parts_exports$7 = /* @__PURE__ */ __exportAll({
	Arrow: () => MenuArrow,
	Backdrop: () => MenuBackdrop,
	CheckboxItem: () => MenuCheckboxItem,
	CheckboxItemIndicator: () => MenuCheckboxItemIndicator,
	Group: () => MenuGroup,
	GroupLabel: () => MenuGroupLabel,
	Item: () => MenuItem,
	LinkItem: () => MenuLinkItem,
	Popup: () => MenuPopup,
	Portal: () => MenuPortal,
	Positioner: () => MenuPositioner,
	RadioGroup: () => MenuRadioGroup,
	RadioItem: () => MenuRadioItem,
	RadioItemIndicator: () => MenuRadioItemIndicator,
	Root: () => ContextMenuRoot,
	Separator: () => Separator,
	SubmenuRoot: () => MenuSubmenuRoot,
	SubmenuTrigger: () => MenuSubmenuTrigger,
	Trigger: () => ContextMenuTrigger
});
//#endregion
//#region node_modules/@base-ui/react/internals/csp-context/CSPContext.mjs
var CSPContext = /*#__PURE__*/ import_react.createContext(void 0);
CSPContext.displayName = "CSPContext";
var DEFAULT_CSP_CONTEXT_VALUE = { disableStyleElements: false };
function useCSPContext() {
	return import_react.useContext(CSPContext) ?? DEFAULT_CSP_CONTEXT_VALUE;
}
//#endregion
//#region node_modules/@base-ui/react/csp-provider/CSPProvider.mjs
/**
* Provides a default Content Security Policy (CSP) configuration for Base UI components that
* require inline `<style>` or `<script>` tags.
*
* Documentation: [Base UI CSP Provider](https://base-ui.com/react/utils/csp-provider)
*/
function CSPProvider(props) {
	const { children, nonce, disableStyleElements } = props;
	const contextValue = import_react.useMemo(() => ({
		nonce,
		disableStyleElements
	}), [nonce, disableStyleElements]);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(CSPContext.Provider, {
		value: contextValue,
		children
	});
}
//#endregion
//#region node_modules/@base-ui/react/dialog/root/DialogRoot.mjs
/**
* Groups all parts of the dialog.
* Doesn't render its own HTML element.
*
* Documentation: [Base UI Dialog](https://base-ui.com/react/components/dialog)
*/
function DialogRoot(props) {
	return useRenderDialogRoot("dialog", props);
}
//#endregion
//#region node_modules/@base-ui/react/dialog/index.parts.mjs
var index_parts_exports$8 = /* @__PURE__ */ __exportAll({
	Backdrop: () => DialogBackdrop,
	Close: () => DialogClose,
	Description: () => DialogDescription,
	Handle: () => DialogHandle,
	Popup: () => DialogPopup,
	Portal: () => DialogPortal,
	Root: () => DialogRoot,
	Title: () => DialogTitle,
	Trigger: () => DialogTrigger,
	Viewport: () => DialogViewport,
	createHandle: () => createDialogHandle
});
//#endregion
//#region node_modules/@base-ui/react/drawer/popup/DrawerPopupCssVars.mjs
var DrawerPopupCssVars = /*#__PURE__*/ function(DrawerPopupCssVars) {
	/**
	* The number of nested drawers that are currently open.
	* @type {number}
	*/
	DrawerPopupCssVars["nestedDrawers"] = "--nested-drawers";
	/**
	* The height of the drawer popup.
	* @type {CSS length}
	*/
	DrawerPopupCssVars["height"] = "--drawer-height";
	/**
	* The height of the frontmost open drawer in the current nested drawer stack.
	* @type {CSS length}
	*/
	DrawerPopupCssVars["frontmostHeight"] = "--drawer-frontmost-height";
	/**
	* The swipe movement on the X axis.
	* @type {CSS length}
	*/
	DrawerPopupCssVars["swipeMovementX"] = "--drawer-swipe-movement-x";
	/**
	* The swipe movement on the Y axis.
	* @type {CSS length}
	*/
	DrawerPopupCssVars["swipeMovementY"] = "--drawer-swipe-movement-y";
	/**
	* The snap point offset used for translating the drawer.
	* @type {CSS length}
	*/
	DrawerPopupCssVars["snapPointOffset"] = "--drawer-snap-point-offset";
	/**
	* A scalar (0.1-1) used to scale the swipe release transition duration in CSS.
	* @type {number}
	*/
	DrawerPopupCssVars["swipeStrength"] = "--drawer-swipe-strength";
	return DrawerPopupCssVars;
}({});
//#endregion
//#region node_modules/@base-ui/react/drawer/backdrop/DrawerBackdropCssVars.mjs
var DrawerBackdropCssVars = /*#__PURE__*/ function(DrawerBackdropCssVars) {
	/**
	* The swipe progress of the drawer gesture.
	* @type {number}
	*/
	DrawerBackdropCssVars["swipeProgress"] = "--drawer-swipe-progress";
	return DrawerBackdropCssVars;
}({});
//#endregion
//#region node_modules/@base-ui/react/drawer/backdrop/DrawerBackdrop.mjs
/**
* An overlay displayed beneath the popup.
* Renders a `<div>` element.
*
* Documentation: [Base UI Drawer](https://base-ui.com/react/components/drawer)
*/
var DrawerBackdrop = /*#__PURE__*/ import_react.forwardRef(function DrawerBackdrop(componentProps, forwardedRef) {
	const { render, className, style, forceRender = false, ...elementProps } = componentProps;
	const store = useDialogRootContext();
	const open = store.useState("open");
	const nested = store.useState("nested");
	const mounted = store.useState("mounted");
	return useRenderElement("div", componentProps, {
		state: {
			open,
			transitionStatus: store.useState("transitionStatus")
		},
		ref: [store.context.backdropRef, forwardedRef],
		stateAttributesMapping: popupTransitionStateMapping,
		props: [{
			role: "presentation",
			hidden: !mounted,
			style: {
				pointerEvents: !open ? "none" : void 0,
				userSelect: "none",
				WebkitUserSelect: "none",
				[DrawerBackdropCssVars.swipeProgress]: "0",
				[DrawerPopupCssVars.swipeStrength]: "1"
			}
		}, elementProps],
		enabled: forceRender || !nested
	});
});
DrawerBackdrop.displayName = "DrawerBackdrop";
//#endregion
//#region node_modules/@base-ui/react/drawer/close/DrawerClose.mjs
/**
* A button that closes the drawer.
* Renders a `<button>` element.
*
* Documentation: [Base UI Drawer](https://base-ui.com/react/components/drawer)
*/
var DrawerClose = DialogClose;
//#endregion
//#region node_modules/@base-ui/react/drawer/content/DrawerContentDataAttributes.mjs
var DRAWER_CONTENT_ATTRIBUTE = "data-drawer-content";
//#endregion
//#region node_modules/@base-ui/react/drawer/content/DrawerContent.mjs
/**
* A container for the drawer contents.
* Renders a `<div>` element.
*
* Documentation: [Base UI Drawer](https://base-ui.com/react/components/drawer)
*/
var DrawerContent = /*#__PURE__*/ import_react.forwardRef(function DrawerContent(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	useDialogRootContext();
	return useRenderElement("div", componentProps, {
		ref: forwardedRef,
		props: [{ [DRAWER_CONTENT_ATTRIBUTE]: "" }, elementProps]
	});
});
DrawerContent.displayName = "DrawerContent";
//#endregion
//#region node_modules/@base-ui/react/drawer/description/DrawerDescription.mjs
/**
* A paragraph with additional information about the drawer.
* Renders a `<p>` element.
*
* Documentation: [Base UI Drawer](https://base-ui.com/react/components/drawer)
*/
var DrawerDescription = DialogDescription;
//#endregion
//#region node_modules/@base-ui/react/drawer/provider/DrawerProviderContext.mjs
var DrawerProviderContext = /*#__PURE__*/ import_react.createContext(void 0);
DrawerProviderContext.displayName = "DrawerProviderContext";
function useDrawerProviderContext() {
	return import_react.useContext(DrawerProviderContext);
}
//#endregion
//#region node_modules/@base-ui/react/drawer/indent/DrawerIndent.mjs
var stateAttributesMapping$14 = { active(value) {
	if (value) return { "data-active": "" };
	return { "data-inactive": "" };
} };
/**
* A wrapper element intended to contain your app's main UI.
* Applies `data-active` when any drawer within the nearest `<Drawer.Provider>` is open.
* Renders a `<div>` element.
*
* Documentation: [Base UI Drawer](https://base-ui.com/react/components/drawer)
*/
var DrawerIndent = /*#__PURE__*/ import_react.forwardRef(function DrawerIndent(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const providerContext = useDrawerProviderContext();
	const active = providerContext?.active ?? false;
	const visualStateStore = providerContext?.visualStateStore;
	const indentRef = import_react.useRef(null);
	useIsoLayoutEffect(() => {
		const element = indentRef.current;
		if (!element || !visualStateStore) return;
		const syncVisualState = () => {
			const { swipeProgress, frontmostHeight } = visualStateStore.getSnapshot();
			if (swipeProgress <= 0) element.style.setProperty(DrawerBackdropCssVars.swipeProgress, "0");
			else element.style.setProperty(DrawerBackdropCssVars.swipeProgress, `${swipeProgress}`);
			if (frontmostHeight <= 0) element.style.removeProperty(DrawerPopupCssVars.height);
			else element.style.setProperty(DrawerPopupCssVars.height, `${frontmostHeight}px`);
		};
		syncVisualState();
		const unsubscribe = visualStateStore.subscribe(syncVisualState);
		return () => {
			unsubscribe();
			element.style.setProperty(DrawerBackdropCssVars.swipeProgress, "0");
			element.style.removeProperty(DrawerPopupCssVars.height);
		};
	}, [visualStateStore]);
	return useRenderElement("div", componentProps, {
		ref: [forwardedRef, indentRef],
		state: { active },
		props: [{ style: { [DrawerBackdropCssVars.swipeProgress]: "0" } }, elementProps],
		stateAttributesMapping: stateAttributesMapping$14
	});
});
DrawerIndent.displayName = "DrawerIndent";
//#endregion
//#region node_modules/@base-ui/react/drawer/indent-background/DrawerIndentBackground.mjs
var stateAttributesMapping$13 = { active(value) {
	if (value) return { "data-active": "" };
	return { "data-inactive": "" };
} };
/**
* An element placed before `<Drawer.Indent>` to render a background layer that can be styled based on whether any drawer is open.
* Renders a `<div>` element.
*
* Documentation: [Base UI Drawer](https://base-ui.com/react/components/drawer)
*/
var DrawerIndentBackground = /*#__PURE__*/ import_react.forwardRef(function DrawerIndentBackground(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	return useRenderElement("div", componentProps, {
		ref: forwardedRef,
		state: { active: useDrawerProviderContext()?.active ?? false },
		props: elementProps,
		stateAttributesMapping: stateAttributesMapping$13
	});
});
DrawerIndentBackground.displayName = "DrawerIndentBackground";
//#endregion
//#region node_modules/@base-ui/react/drawer/popup/DrawerPopupDataAttributes.mjs
var DrawerPopupDataAttributes = function(DrawerPopupDataAttributes) {
	/**
	* Present when the drawer is open.
	*/
	DrawerPopupDataAttributes[DrawerPopupDataAttributes["open"] = CommonPopupDataAttributes.open] = "open";
	/**
	* Present when the drawer is closed.
	*/
	DrawerPopupDataAttributes[DrawerPopupDataAttributes["closed"] = CommonPopupDataAttributes.closed] = "closed";
	/**
	* Present when the drawer begins animating in.
	*/
	DrawerPopupDataAttributes[DrawerPopupDataAttributes["startingStyle"] = CommonPopupDataAttributes.startingStyle] = "startingStyle";
	/**
	* Present when the drawer is animating out.
	*/
	DrawerPopupDataAttributes[DrawerPopupDataAttributes["endingStyle"] = CommonPopupDataAttributes.endingStyle] = "endingStyle";
	/**
	* Present when the drawer is at the expanded (full-height) snap point.
	*/
	DrawerPopupDataAttributes["expanded"] = "data-expanded";
	/**
	* Present when a nested drawer is open.
	*/
	DrawerPopupDataAttributes["nestedDrawerOpen"] = "data-nested-drawer-open";
	/**
	* Present when a nested drawer is being swiped.
	*/
	DrawerPopupDataAttributes["nestedDrawerSwiping"] = "data-nested-drawer-swiping";
	/**
	* Present when the drawer is dismissed by swiping.
	*/
	DrawerPopupDataAttributes["swipeDismiss"] = "data-swipe-dismiss";
	/**
	* Indicates the swipe direction.
	* @type {'up' | 'down' | 'left' | 'right'}
	*/
	DrawerPopupDataAttributes["swipeDirection"] = "data-swipe-direction";
	/**
	* Present when the drawer is being swiped.
	*/
	DrawerPopupDataAttributes["swiping"] = "data-swiping";
	return DrawerPopupDataAttributes;
}({});
//#endregion
//#region node_modules/@base-ui/react/drawer/root/DrawerRootContext.mjs
var DrawerRootContext = /*#__PURE__*/ import_react.createContext(void 0);
DrawerRootContext.displayName = "DrawerRootContext";
function useDrawerRootContext(optional) {
	const drawerRootContext = import_react.useContext(DrawerRootContext);
	if (optional !== true && drawerRootContext === void 0) throw new Error("Base UI: DrawerRootContext is missing. Drawer parts must be placed within <Drawer.Root>.");
	return drawerRootContext;
}
//#endregion
//#region node_modules/@base-ui/react/drawer/root/useDrawerSnapPoints.mjs
/**
* Resolves the vertical swipe movement for a snap point, applying square-root damping once the drag
* overshoots the fully-open edge (`nextOffset < 0`) so the popup resists travelling past it.
*/
function getSnapPointSwipeMovement(baseOffset, movementValue) {
	const nextOffset = baseOffset + movementValue;
	if (nextOffset >= 0) return movementValue;
	return -Math.sqrt(-nextOffset) - baseOffset;
}
function resolveSnapPointValue(snapPoint, viewportHeight, rootFontSize) {
	if (!Number.isFinite(viewportHeight) || viewportHeight <= 0) return null;
	if (typeof snapPoint === "number") {
		if (!Number.isFinite(snapPoint)) return null;
		if (snapPoint <= 1) return clamp(snapPoint, 0, 1) * viewportHeight;
		return snapPoint;
	}
	const trimmed = snapPoint.trim();
	if (trimmed.endsWith("px")) {
		const value = Number.parseFloat(trimmed);
		return Number.isFinite(value) ? value : null;
	}
	if (trimmed.endsWith("rem")) {
		const value = Number.parseFloat(trimmed);
		return Number.isFinite(value) ? value * rootFontSize : null;
	}
	return null;
}
/**
* Returns the index of the value closest to `target`, or `-1` if `values` is empty.
*/
function closestSnapPointIndex(values, target) {
	let closestIndex = -1;
	let closestDistance = Infinity;
	for (let index = 0; index < values.length; index += 1) {
		const distance = Math.abs(values[index] - target);
		if (distance < closestDistance) {
			closestDistance = distance;
			closestIndex = index;
		}
	}
	return closestIndex;
}
function useDrawerSnapPoints() {
	const store = useDialogRootContext();
	const { snapPoints, activeSnapPoint, setActiveSnapPoint, popupHeight } = useDrawerRootContext();
	const viewportElement = store.useState("viewportElement");
	const [viewportHeight, setViewportHeight] = import_react.useState(0);
	const [rootFontSize, setRootFontSize] = import_react.useState(16);
	const measureViewportHeight = useStableCallback(() => {
		const html = ownerDocument(viewportElement).documentElement;
		setViewportHeight(viewportElement ? viewportElement.offsetHeight : html.clientHeight);
		const fontSize = parseFloat(getComputedStyle(html).fontSize);
		if (Number.isFinite(fontSize)) setRootFontSize(fontSize);
	});
	useIsoLayoutEffect(() => {
		measureViewportHeight();
		if (!viewportElement || typeof ResizeObserver !== "function") return;
		const resizeObserver = new ResizeObserver(measureViewportHeight);
		resizeObserver.observe(viewportElement);
		return () => {
			resizeObserver.disconnect();
		};
	}, [measureViewportHeight, viewportElement]);
	const resolvedSnapPoints = import_react.useMemo(() => {
		if (!snapPoints || snapPoints.length === 0 || viewportHeight <= 0 || popupHeight <= 0) return [];
		const maxHeight = Math.min(popupHeight, viewportHeight);
		const resolved = snapPoints.map((value) => {
			const resolvedHeight = resolveSnapPointValue(value, viewportHeight, rootFontSize);
			if (resolvedHeight === null) return null;
			const clampedHeight = clamp(resolvedHeight, 0, maxHeight);
			return {
				value,
				height: clampedHeight,
				offset: Math.max(0, popupHeight - clampedHeight)
			};
		}).filter((point) => Boolean(point));
		if (resolved.length <= 1) return resolved;
		const deduped = [];
		const seenHeights = [];
		for (let index = resolved.length - 1; index >= 0; index -= 1) {
			const point = resolved[index];
			if (seenHeights.some((height) => Math.abs(height - point.height) <= 1)) continue;
			seenHeights.push(point.height);
			deduped.push(point);
		}
		deduped.reverse();
		return deduped;
	}, [
		popupHeight,
		rootFontSize,
		snapPoints,
		viewportHeight
	]);
	return {
		snapPoints,
		activeSnapPoint,
		setActiveSnapPoint,
		popupHeight,
		viewportHeight,
		resolvedSnapPoints,
		activeSnapPointOffset: import_react.useMemo(() => {
			if (activeSnapPoint === null) return;
			const exactMatch = resolvedSnapPoints.find((point) => Object.is(point.value, activeSnapPoint));
			if (exactMatch) return exactMatch;
			const maxHeight = Math.min(popupHeight, viewportHeight);
			const resolvedHeight = resolveSnapPointValue(activeSnapPoint, viewportHeight, rootFontSize);
			if (resolvedHeight === null) return;
			const clampedHeight = clamp(resolvedHeight, 0, maxHeight);
			return resolvedSnapPoints[closestSnapPointIndex(resolvedSnapPoints.map((point) => point.height), clampedHeight)];
		}, [
			activeSnapPoint,
			popupHeight,
			resolvedSnapPoints,
			rootFontSize,
			viewportHeight
		])?.offset ?? null
	};
}
//#endregion
//#region node_modules/@base-ui/react/drawer/viewport/DrawerViewportContext.mjs
var DrawerViewportContext = /*#__PURE__*/ import_react.createContext(null);
DrawerViewportContext.displayName = "DrawerViewportContext";
function useDrawerViewportContext() {
	return import_react.useContext(DrawerViewportContext);
}
//#endregion
//#region node_modules/@base-ui/react/drawer/popup/DrawerPopup.mjs
var drawerSwipeVarsRegistered = false;
/**
* Removes inheritance of high-frequency drawer swipe CSS variables, which
* reduces style recalculation cost in complex drawers with deep subtrees.
* See https://motion.dev/blog/web-animation-performance-tier-list
* under the "Improving CSS variable performance" section.
*/
function removeCSSVariableInheritance$1() {
	if (drawerSwipeVarsRegistered) return;
	if (typeof CSS !== "undefined" && "registerProperty" in CSS) {
		[
			DrawerPopupCssVars.swipeMovementX,
			DrawerPopupCssVars.swipeMovementY,
			DrawerPopupCssVars.snapPointOffset
		].forEach((name) => {
			try {
				CSS.registerProperty({
					name,
					syntax: "<length>",
					inherits: false,
					initialValue: "0px"
				});
			} catch {}
		});
		[{
			name: DrawerBackdropCssVars.swipeProgress,
			initialValue: "0"
		}, {
			name: DrawerPopupCssVars.swipeStrength,
			initialValue: "1"
		}].forEach(({ name, initialValue }) => {
			try {
				CSS.registerProperty({
					name,
					syntax: "<number>",
					inherits: false,
					initialValue
				});
			} catch {}
		});
	}
	drawerSwipeVarsRegistered = true;
}
var stateAttributesMapping$12 = {
	...popupTransitionStateMapping,
	expanded(value) {
		return value ? { [DrawerPopupDataAttributes.expanded]: "" } : null;
	},
	nestedDrawerOpen(value) {
		return value ? { [DrawerPopupDataAttributes.nestedDrawerOpen]: "" } : null;
	},
	nestedDrawerSwiping(value) {
		return value ? { [DrawerPopupDataAttributes.nestedDrawerSwiping]: "" } : null;
	},
	swipeDirection(value) {
		return { [DrawerPopupDataAttributes.swipeDirection]: value };
	},
	swiping(value) {
		return value ? { [DrawerPopupDataAttributes.swiping]: "" } : null;
	}
};
/**
* A container for the drawer contents.
* Renders a `<div>` element.
*
* Documentation: [Base UI Drawer](https://base-ui.com/react/components/drawer)
*/
var DrawerPopup = /*#__PURE__*/ import_react.forwardRef(function DrawerPopup(componentProps, forwardedRef) {
	const { render, className, style, finalFocus, initialFocus, ...elementProps } = componentProps;
	const store = useDialogRootContext();
	const popupRef = store.context.popupRef;
	const { swipeDirection, frontmostHeight, hasNestedDrawer, nestedSwiping, nestedSwipeProgressStore, onPopupHeightChange, notifyParentFrontmostHeight, notifyParentHasNestedDrawer } = useDrawerRootContext();
	const descriptionElementId = store.useState("descriptionElementId");
	const disablePointerDismissal = store.useState("disablePointerDismissal");
	const floatingRootContext = store.useState("floatingRootContext");
	const rootPopupProps = store.useState("popupProps");
	const modal = store.useState("modal");
	const mounted = store.useState("mounted");
	const nested = store.useState("nested");
	const nestedOpenDrawerCount = store.useState("nestedOpenDrawerCount");
	const transitionStatus = store.useState("transitionStatus");
	const open = store.useState("open");
	const openMethod = store.useState("openMethod");
	const titleElementId = store.useState("titleElementId");
	const role = store.useState("role");
	const floatingId = floatingRootContext.useState("floatingId");
	const popupId = elementProps.id ?? floatingId;
	const swipe = useDrawerViewportContext();
	useDialogPortalContext();
	const { snapPoints, activeSnapPoint, activeSnapPointOffset } = useDrawerSnapPoints();
	const nestedDrawerOpen = nestedOpenDrawerCount > 0;
	const swiping = swipe?.swiping ?? false;
	const swipeStrength = swipe?.swipeStrength ?? null;
	const [popupHeight, setPopupHeight] = import_react.useState(0);
	const popupHeightRef = import_react.useRef(0);
	import_react.useEffect(() => {
		if (swipe) return;
		error(`<Drawer.Popup> expected to be rendered within <Drawer.Viewport>. Omitting the viewport disables drawer swipe handling and touch scroll locking. Wrap <Drawer.Popup> in <Drawer.Viewport>.${SafeReact.captureOwnerStack?.() || ""}`);
	}, [swipe]);
	const measureHeight = useStableCallback(() => {
		const popupElement = popupRef.current;
		if (!popupElement) return;
		const offsetHeight = popupElement.offsetHeight;
		if (popupHeightRef.current > 0 && frontmostHeight > popupHeightRef.current && offsetHeight > popupHeightRef.current) return;
		if (popupHeightRef.current > 0 && hasNestedDrawer) {
			const oldHeight = popupHeightRef.current;
			setPopupHeight(oldHeight);
			onPopupHeightChange(oldHeight);
			return;
		}
		const nextHeight = offsetHeight;
		if (nextHeight === popupHeightRef.current) return;
		popupHeightRef.current = nextHeight;
		setPopupHeight(nextHeight);
		onPopupHeightChange(nextHeight);
	});
	useIsoLayoutEffect(() => {
		if (!mounted) {
			popupHeightRef.current = 0;
			setPopupHeight(0);
			onPopupHeightChange(0);
			return;
		}
		const popupElement = popupRef.current;
		if (!popupElement) return;
		removeCSSVariableInheritance$1();
		measureHeight();
		if (typeof ResizeObserver !== "function") return;
		const resizeObserver = new ResizeObserver(measureHeight);
		resizeObserver.observe(popupElement);
		return () => {
			resizeObserver.disconnect();
		};
	}, [
		measureHeight,
		mounted,
		nestedDrawerOpen,
		onPopupHeightChange,
		popupRef
	]);
	useIsoLayoutEffect(() => {
		const syncNestedSwipeProgress = () => {
			const popupElement = popupRef.current;
			if (!popupElement) return;
			const progress = nestedSwipeProgressStore.getSnapshot();
			if (progress > 0) popupElement.style.setProperty(DrawerBackdropCssVars.swipeProgress, `${progress}`);
			else popupElement.style.setProperty(DrawerBackdropCssVars.swipeProgress, "0");
		};
		syncNestedSwipeProgress();
		const unsubscribe = nestedSwipeProgressStore.subscribe(syncNestedSwipeProgress);
		const popupElement = popupRef.current;
		return () => {
			unsubscribe();
			if (popupElement) popupElement.style.setProperty(DrawerBackdropCssVars.swipeProgress, "0");
		};
	}, [nestedSwipeProgressStore, popupRef]);
	useIsoLayoutEffect(() => {
		if (!open) return;
		notifyParentFrontmostHeight?.(frontmostHeight);
		return () => {
			notifyParentFrontmostHeight?.(0);
		};
	}, [
		frontmostHeight,
		open,
		notifyParentFrontmostHeight
	]);
	useIsoLayoutEffect(() => {
		if (!notifyParentHasNestedDrawer) return;
		notifyParentHasNestedDrawer(open || transitionStatus === "ending");
		return () => {
			notifyParentHasNestedDrawer(false);
		};
	}, [
		notifyParentHasNestedDrawer,
		open,
		transitionStatus
	]);
	useOpenChangeComplete({
		open,
		ref: popupRef,
		onComplete() {
			if (open) store.context.onOpenChangeComplete?.(true);
		}
	});
	const resolvedInitialFocus = initialFocus === void 0 ? popupRef : initialFocus;
	const setPopupElement = store.useStateSetter("popupElement");
	const state = {
		open,
		nested,
		transitionStatus,
		expanded: activeSnapPoint === 1,
		nestedDrawerOpen,
		nestedDrawerSwiping: nestedSwiping,
		swipeDirection,
		swiping
	};
	let popupHeightCssVarValue;
	if (popupHeight && !(!hasNestedDrawer && transitionStatus !== "ending")) popupHeightCssVarValue = `${popupHeight}px`;
	const shouldApplySnapPoints = snapPoints && snapPoints.length > 0 && (swipeDirection === "down" || swipeDirection === "up");
	let snapPointOffsetValue = null;
	if (shouldApplySnapPoints && activeSnapPointOffset !== null) snapPointOffsetValue = swipeDirection === "up" ? -activeSnapPointOffset : activeSnapPointOffset;
	let dragStyles = swipe ? swipe.getDragStyles() : EMPTY_OBJECT;
	if (shouldApplySnapPoints && swipeDirection === "down") {
		const baseOffset = activeSnapPointOffset ?? 0;
		const movementValue = Number.parseFloat(String(dragStyles[DrawerPopupCssVars.swipeMovementY]));
		if (swiping && Number.isFinite(movementValue)) dragStyles = {
			...dragStyles,
			transform: void 0,
			[DrawerPopupCssVars.swipeMovementY]: `${getSnapPointSwipeMovement(baseOffset, movementValue)}px`
		};
		else dragStyles = {
			...dragStyles,
			transform: void 0
		};
	}
	const element = useRenderElement("div", componentProps, {
		state,
		props: [
			rootPopupProps,
			{
				id: popupId,
				"aria-labelledby": titleElementId,
				"aria-describedby": descriptionElementId,
				role,
				...FOCUSABLE_POPUP_PROPS,
				hidden: !mounted,
				onKeyDown(event) {
					if (COMPOSITE_KEYS.has(event.key)) event.stopPropagation();
				},
				style: {
					...dragStyles,
					[DrawerBackdropCssVars.swipeProgress]: "0",
					[DrawerPopupCssVars.nestedDrawers]: nestedOpenDrawerCount,
					[DrawerPopupCssVars.height]: popupHeightCssVarValue,
					[DrawerPopupCssVars.snapPointOffset]: typeof snapPointOffsetValue === "number" ? `${snapPointOffsetValue}px` : "0px",
					[DrawerPopupCssVars.frontmostHeight]: frontmostHeight ? `${frontmostHeight}px` : void 0,
					[DrawerPopupCssVars.swipeStrength]: typeof swipeStrength === "number" && Number.isFinite(swipeStrength) && swipeStrength > 0 ? `${swipeStrength}` : "1"
				}
			},
			elementProps
		],
		ref: [
			forwardedRef,
			popupRef,
			setPopupElement
		],
		stateAttributesMapping: stateAttributesMapping$12
	});
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(FloatingFocusManager, {
		context: floatingRootContext,
		openInteractionType: openMethod,
		disabled: !mounted,
		closeOnFocusOut: !disablePointerDismissal,
		initialFocus: resolvedInitialFocus,
		returnFocus: finalFocus,
		modal: modal !== false,
		restoreFocus: "popup",
		children: element
	});
});
DrawerPopup.displayName = "DrawerPopup";
//#endregion
//#region node_modules/@base-ui/react/drawer/portal/DrawerPortal.mjs
/**
* A portal element that moves the popup to a different part of the DOM.
* By default, the portal element is appended to `<body>`.
* Renders a `<div>` element.
*
* Documentation: [Base UI Drawer](https://base-ui.com/react/components/drawer)
*/
var DrawerPortal = DialogPortal;
//#endregion
//#region node_modules/@base-ui/react/drawer/provider/DrawerProvider.mjs
/**
* Provides a shared context for coordinating global Drawer UI, such as indent/background effects based on whether any Drawer is open.
* Doesn't render its own HTML element.
*
* Documentation: [Base UI Drawer](https://base-ui.com/react/components/drawer)
*/
function DrawerProvider(props) {
	const { children } = props;
	const [openDrawers, setOpenDrawers] = import_react.useState(() => /* @__PURE__ */ new Set());
	const [visualStateStore] = import_react.useState(createVisualStateStore);
	const setDrawerOpen = useStableCallback((drawer, open) => {
		setOpenDrawers((prev) => {
			if (prev.has(drawer) === open) return prev;
			const next = new Set(prev);
			if (open) next.add(drawer);
			else next.delete(drawer);
			return next;
		});
	});
	const removeDrawer = useStableCallback((drawer) => {
		setDrawerOpen(drawer, false);
	});
	const active = openDrawers.size > 0;
	const contextValue = import_react.useMemo(() => ({
		setDrawerOpen,
		removeDrawer,
		active,
		visualStateStore
	}), [
		active,
		removeDrawer,
		setDrawerOpen,
		visualStateStore
	]);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(DrawerProviderContext.Provider, {
		value: contextValue,
		children
	});
}
function createVisualStateStore() {
	let state = {
		swipeProgress: 0,
		frontmostHeight: 0
	};
	const listeners = /* @__PURE__ */ new Set();
	return {
		getSnapshot: () => state,
		set(nextState) {
			let nextSwipeProgress = state.swipeProgress;
			if (nextState.swipeProgress !== void 0) nextSwipeProgress = Number.isFinite(nextState.swipeProgress) ? nextState.swipeProgress : 0;
			let nextFrontmostHeight = state.frontmostHeight;
			if (nextState.frontmostHeight !== void 0) nextFrontmostHeight = Number.isFinite(nextState.frontmostHeight) ? nextState.frontmostHeight : 0;
			if (nextSwipeProgress === state.swipeProgress && nextFrontmostHeight === state.frontmostHeight) return;
			state = {
				swipeProgress: nextSwipeProgress,
				frontmostHeight: nextFrontmostHeight
			};
			listeners.forEach((listener) => {
				listener();
			});
		},
		subscribe(listener) {
			listeners.add(listener);
			return () => {
				listeners.delete(listener);
			};
		}
	};
}
//#endregion
//#region node_modules/@base-ui/react/drawer/root/DrawerRoot.mjs
var _DrawerProviderReport;
var _DrawerProviderReport2;
/**
* Groups all parts of the drawer.
* Doesn't render its own HTML element.
*
* Documentation: [Base UI Drawer](https://base-ui.com/react/components/drawer)
*/
function DrawerRoot(props) {
	const { children, open: openProp, defaultOpen = false, onOpenChange, onOpenChangeComplete, disablePointerDismissal = false, modal = true, actionsRef, handle, triggerId: triggerIdProp, defaultTriggerId: defaultTriggerIdProp = null, swipeDirection = "down", snapToSequentialPoints = false, snapPoints, snapPoint: snapPointProp, defaultSnapPoint, onSnapPointChange } = props;
	const parentDrawerRootContext = useDrawerRootContext(true);
	const notifyParentSwipeProgressChange = parentDrawerRootContext?.onNestedSwipeProgressChange;
	const notifyParentFrontmostHeight = parentDrawerRootContext?.onNestedFrontmostHeightChange;
	const notifyParentSwipingChange = parentDrawerRootContext?.onNestedSwipingChange;
	const notifyParentHasNestedDrawer = parentDrawerRootContext?.onNestedDrawerPresenceChange;
	const [popupHeight, setPopupHeight] = import_react.useState(0);
	const [frontmostHeight, setFrontmostHeight] = import_react.useState(0);
	const [hasNestedDrawer, setHasNestedDrawer] = import_react.useState(false);
	const [nestedSwiping, setNestedSwiping] = import_react.useState(false);
	const [nestedSwipeProgressStore] = import_react.useState(createNestedSwipeProgressStore);
	const resolvedDefaultSnapPoint = defaultSnapPoint !== void 0 ? defaultSnapPoint : snapPoints?.[0] ?? null;
	const isSnapPointControlled = snapPointProp !== void 0;
	const [activeSnapPoint, setActiveSnapPointUnwrapped] = useControlled({
		controlled: snapPointProp,
		default: resolvedDefaultSnapPoint,
		name: "Drawer",
		state: "snapPoint"
	});
	const isNestedDrawerOpenRef = import_react.useRef(false);
	const swipeAreaActiveRef = import_react.useRef(false);
	const setActiveSnapPoint = useStableCallback((nextSnapPoint, eventDetails) => {
		const resolvedEventDetails = eventDetails ?? createChangeEventDetails("none");
		onSnapPointChange?.(nextSnapPoint, resolvedEventDetails);
		if (resolvedEventDetails.isCanceled) return;
		setActiveSnapPointUnwrapped(nextSnapPoint);
	});
	const resolvedActiveSnapPoint = import_react.useMemo(() => {
		if (isSnapPointControlled) return activeSnapPoint;
		if (!snapPoints || snapPoints.length === 0) return activeSnapPoint;
		if (activeSnapPoint === null || !snapPoints.some((snapPoint) => Object.is(snapPoint, activeSnapPoint))) return resolvedDefaultSnapPoint;
		return activeSnapPoint;
	}, [
		activeSnapPoint,
		isSnapPointControlled,
		resolvedDefaultSnapPoint,
		snapPoints
	]);
	const onPopupHeightChange = useStableCallback((height) => {
		setPopupHeight(height);
		if (!isNestedDrawerOpenRef.current && height > 0) setFrontmostHeight(height);
	});
	const onNestedFrontmostHeightChange = useStableCallback((height) => {
		if (height > 0) {
			isNestedDrawerOpenRef.current = true;
			setFrontmostHeight(height);
			return;
		}
		isNestedDrawerOpenRef.current = false;
		if (popupHeight > 0) setFrontmostHeight(popupHeight);
	});
	const onNestedDrawerPresenceChange = useStableCallback((present) => {
		setHasNestedDrawer(present);
	});
	const onNestedSwipeProgressChange = useStableCallback((progress) => {
		nestedSwipeProgressStore.set(progress);
		notifyParentSwipeProgressChange?.(progress);
	});
	const onNestedSwipingChange = useStableCallback((swiping) => {
		setNestedSwiping(swiping);
		notifyParentSwipingChange?.(swiping);
	});
	const handleOpenChange = useStableCallback((nextOpen, eventDetails) => {
		onOpenChange?.(nextOpen, eventDetails);
		if (eventDetails.isCanceled) return;
		if (!nextOpen && snapPoints && snapPoints.length > 0) setActiveSnapPoint(resolvedDefaultSnapPoint, createChangeEventDetails(eventDetails.reason, eventDetails.event, eventDetails.trigger));
	});
	const contextValue = import_react.useMemo(() => ({
		swipeDirection,
		swipeAreaActiveRef,
		snapToSequentialPoints,
		snapPoints,
		activeSnapPoint: resolvedActiveSnapPoint,
		setActiveSnapPoint,
		frontmostHeight,
		popupHeight,
		hasNestedDrawer,
		nestedSwiping,
		nestedSwipeProgressStore,
		onNestedDrawerPresenceChange,
		onPopupHeightChange,
		onNestedFrontmostHeightChange,
		onNestedSwipingChange,
		onNestedSwipeProgressChange,
		notifyParentFrontmostHeight,
		notifyParentSwipingChange,
		notifyParentSwipeProgressChange,
		notifyParentHasNestedDrawer
	}), [
		resolvedActiveSnapPoint,
		frontmostHeight,
		hasNestedDrawer,
		nestedSwiping,
		nestedSwipeProgressStore,
		notifyParentHasNestedDrawer,
		notifyParentSwipeProgressChange,
		notifyParentSwipingChange,
		notifyParentFrontmostHeight,
		onNestedDrawerPresenceChange,
		onNestedFrontmostHeightChange,
		onNestedSwipeProgressChange,
		onNestedSwipingChange,
		onPopupHeightChange,
		popupHeight,
		setActiveSnapPoint,
		snapPoints,
		snapToSequentialPoints,
		swipeAreaActiveRef,
		swipeDirection
	]);
	const dialog = useRenderDialogRoot("drawer", {
		open: openProp,
		defaultOpen,
		onOpenChange: handleOpenChange,
		onOpenChangeComplete,
		disablePointerDismissal,
		modal,
		actionsRef,
		handle,
		triggerId: triggerIdProp,
		defaultTriggerId: defaultTriggerIdProp,
		children: typeof children === "function" ? (payload) => /*#__PURE__*/ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [_DrawerProviderReport || (_DrawerProviderReport = /*#__PURE__*/ (0, import_jsx_runtime.jsx)(DrawerProviderReporter, {})), children(payload)] }) : /*#__PURE__*/ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [_DrawerProviderReport2 || (_DrawerProviderReport2 = /*#__PURE__*/ (0, import_jsx_runtime.jsx)(DrawerProviderReporter, {})), children] })
	});
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(DrawerRootContext.Provider, {
		value: contextValue,
		children: dialog
	});
}
function createNestedSwipeProgressStore() {
	let progress = 0;
	const listeners = /* @__PURE__ */ new Set();
	return {
		getSnapshot: () => progress,
		set(nextProgress) {
			const resolved = Number.isFinite(nextProgress) ? nextProgress : 0;
			if (resolved === progress) return;
			progress = resolved;
			listeners.forEach((listener) => {
				listener();
			});
		},
		subscribe(listener) {
			listeners.add(listener);
			return () => {
				listeners.delete(listener);
			};
		}
	};
}
function DrawerProviderReporter() {
	const providerContext = useDrawerProviderContext();
	const store = useDialogRootContext(false);
	const setDrawerOpen = providerContext?.setDrawerOpen;
	const removeDrawer = providerContext?.removeDrawer;
	const open = store.useState("open");
	const nestedOpenDialogCount = store.useState("nestedOpenDialogCount");
	const popupElement = store.useState("popupElement");
	const isTopmost = nestedOpenDialogCount === 0;
	useIsoLayoutEffect(() => {
		if (!removeDrawer) return;
		return () => {
			removeDrawer(store);
		};
	}, [removeDrawer, store]);
	useIsoLayoutEffect(() => {
		setDrawerOpen?.(store, open);
	}, [
		open,
		setDrawerOpen,
		store
	]);
	import_react.useEffect(() => {
		if (!open || !isTopmost || !android) return;
		const CloseWatcherCtor = getWindow(popupElement).CloseWatcher;
		if (!CloseWatcherCtor) return;
		function handleCloseWatcher(event) {
			if (!store.select("open")) return;
			store.setOpen(false, createChangeEventDetails(closeWatcher, event));
		}
		const closeWatcher$1 = new CloseWatcherCtor();
		const unsubscribe = addEventListener(closeWatcher$1, "close", handleCloseWatcher);
		return () => {
			unsubscribe();
			closeWatcher$1.destroy();
		};
	}, [
		store,
		isTopmost,
		open,
		popupElement
	]);
	return null;
}
//#endregion
//#region node_modules/@base-ui/react/drawer/swipe-area/DrawerSwipeAreaDataAttributes.mjs
var DrawerSwipeAreaDataAttributes = function(DrawerSwipeAreaDataAttributes) {
	/**
	* Present when the drawer is open.
	*/
	DrawerSwipeAreaDataAttributes[DrawerSwipeAreaDataAttributes["open"] = CommonPopupDataAttributes.open] = "open";
	/**
	* Present when the drawer is closed.
	*/
	DrawerSwipeAreaDataAttributes[DrawerSwipeAreaDataAttributes["closed"] = CommonPopupDataAttributes.closed] = "closed";
	/**
	* Present when the swipe area is disabled.
	*/
	DrawerSwipeAreaDataAttributes["disabled"] = "data-disabled";
	/**
	* Indicates the swipe direction.
	* @type {'up' | 'down' | 'left' | 'right'}
	*/
	DrawerSwipeAreaDataAttributes["swipeDirection"] = "data-swipe-direction";
	/**
	* Present when the drawer is being swiped.
	*/
	DrawerSwipeAreaDataAttributes["swiping"] = "data-swiping";
	return DrawerSwipeAreaDataAttributes;
}({});
//#endregion
//#region node_modules/@base-ui/react/drawer/swipe-area/DrawerSwipeArea.mjs
var DEFAULT_SWIPE_OPEN_RATIO = .5;
var MIN_SWIPE_START_DISTANCE = 1;
var VELOCITY_THRESHOLD = .1;
var FALLBACK_SWIPE_OPEN_THRESHOLD = 40;
var SWIPE_AREA_OPEN_HOOK = { [DrawerSwipeAreaDataAttributes.open]: "" };
var SWIPE_AREA_CLOSED_HOOK = { [DrawerSwipeAreaDataAttributes.closed]: "" };
var SWIPE_AREA_SWIPING_HOOK = { [DrawerSwipeAreaDataAttributes.swiping]: "" };
var SWIPE_AREA_DISABLED_HOOK = { [DrawerSwipeAreaDataAttributes.disabled]: "" };
var stateAttributesMapping$11 = {
	open(value) {
		return value ? SWIPE_AREA_OPEN_HOOK : SWIPE_AREA_CLOSED_HOOK;
	},
	swiping(value) {
		return value ? SWIPE_AREA_SWIPING_HOOK : null;
	},
	swipeDirection(value) {
		return { [DrawerSwipeAreaDataAttributes.swipeDirection]: value };
	},
	disabled(value) {
		return value ? SWIPE_AREA_DISABLED_HOOK : null;
	}
};
var oppositeSwipeDirection = {
	up: "down",
	down: "up",
	left: "right",
	right: "left"
};
function resolveTouchAction(direction) {
	return direction === "left" || direction === "right" ? "pan-y" : "pan-x";
}
/**
* An invisible area that listens for swipe gestures to open the drawer.
* Renders a `<div>` element.
*
* Documentation: [Base UI Drawer](https://base-ui.com/react/components/drawer)
*/
var DrawerSwipeArea = /*#__PURE__*/ import_react.forwardRef(function DrawerSwipeArea(componentProps, forwardedRef) {
	const { render, className, style, disabled = false, swipeDirection: swipeDirectionProp, ...elementProps } = componentProps;
	const store = useDialogRootContext();
	const { swipeDirection, frontmostHeight, swipeAreaActiveRef } = useDrawerRootContext();
	const providerContext = useDrawerProviderContext();
	const [swipeActive, setSwipeActive] = import_react.useState(false);
	const swipeAreaRef = import_react.useRef(null);
	const swipeStartEventRef = import_react.useRef(null);
	const openedBySwipeRef = import_react.useRef(false);
	const dragDeltaRef = import_react.useRef({
		x: 0,
		y: 0
	});
	const closedOffsetRef = import_react.useRef(null);
	const appliedSwipeStylesRef = import_react.useRef(false);
	const swipePopupElementRef = import_react.useRef(null);
	const swipeBackdropElementRef = import_react.useRef(null);
	const popupTransitionRef = import_react.useRef(null);
	const releaseGuardCleanupRef = import_react.useRef(NOOP);
	const swipeAreaId = useBaseUiId(componentProps.id);
	const registerTrigger = useTriggerRegistration(swipeAreaId, store);
	const open = store.useState("open");
	const resetDragDelta = useStableCallback(() => {
		dragDeltaRef.current.x = 0;
		dragDeltaRef.current.y = 0;
	});
	const resolvedSwipeDirection = swipeDirectionProp ?? oppositeSwipeDirection[swipeDirection];
	const dismissDirection = oppositeSwipeDirection[resolvedSwipeDirection];
	const enabled = !disabled && (!open || swipeActive);
	function disableDismissForSwipe() {
		releaseGuardCleanupRef.current();
		store.context.outsidePressEnabledRef.current = false;
	}
	const enableDismissAfterRelease = useStableCallback(() => {
		releaseGuardCleanupRef.current();
		const doc = ownerDocument(swipeAreaRef.current);
		function restore(event) {
			if (event?.type === "click" && event.detail !== 0 && !isVirtualClick(event)) return;
			releaseGuardCleanupRef.current = NOOP;
			doc.removeEventListener("pointerdown", restore, true);
			doc.removeEventListener("click", restore, true);
			store.context.outsidePressEnabledRef.current = true;
		}
		releaseGuardCleanupRef.current = restore;
		doc.addEventListener("pointerdown", restore, true);
		doc.addEventListener("click", restore, true);
	});
	function getPopupSize(popupElement) {
		const size = dismissDirection === "left" || dismissDirection === "right" ? popupElement.offsetWidth : popupElement.offsetHeight;
		if (size <= 0) return null;
		return size;
	}
	function resolvePopupSize() {
		const popupElement = store.context.popupRef.current;
		return popupElement ? getPopupSize(popupElement) : null;
	}
	function resolveClosedOffset(popupElement) {
		const offset = getPopupSize(popupElement);
		if (offset == null) return null;
		const isHorizontal = dismissDirection === "left" || dismissDirection === "right";
		const transform = getElementTransform(popupElement);
		const transformOffset = isHorizontal ? transform.x : transform.y;
		if (Number.isFinite(transformOffset) && Math.abs(transformOffset) > .5) return Math.min(offset, Math.abs(transformOffset));
		return offset;
	}
	function resolveSwipeOpenThreshold() {
		const popupSize = resolvePopupSize();
		if (popupSize == null) return FALLBACK_SWIPE_OPEN_THRESHOLD;
		return popupSize * DEFAULT_SWIPE_OPEN_RATIO;
	}
	function applySwipeMovement() {
		const popupElement = store.context.popupRef.current;
		if (!popupElement) return;
		if (!store.select("open") || !store.select("mounted")) return;
		if (closedOffsetRef.current == null) closedOffsetRef.current = resolveClosedOffset(popupElement);
		const closedOffset = closedOffsetRef.current;
		if (closedOffset === null) return;
		const { x, y } = dragDeltaRef.current;
		const displacement = getDisplacement(resolvedSwipeDirection, x, y);
		const clampedDisplacement = Math.max(0, displacement);
		const movement = (closedOffset - (clampedDisplacement > closedOffset ? closedOffset + Math.sqrt(clampedDisplacement - closedOffset) : clampedDisplacement)) * (dismissDirection === "left" || dismissDirection === "up" ? -1 : 1);
		const isHorizontal = dismissDirection === "left" || dismissDirection === "right";
		const movementX = isHorizontal ? movement : 0;
		const movementY = isHorizontal ? 0 : movement;
		const openProgress = Math.max(0, Math.min(1, clampedDisplacement / closedOffset));
		const backdropProgress = Math.max(0, Math.min(1, 1 - openProgress));
		popupElement.style.setProperty(DrawerPopupCssVars.swipeMovementX, `${movementX}px`);
		popupElement.style.setProperty(DrawerPopupCssVars.swipeMovementY, `${movementY}px`);
		popupElement.setAttribute(DrawerPopupDataAttributes.swiping, "");
		swipePopupElementRef.current = popupElement;
		if (popupTransitionRef.current === null) popupTransitionRef.current = popupElement.style.transition;
		popupElement.style.transition = "none";
		const backdropElement = store.context.backdropRef.current;
		if (backdropElement) {
			backdropElement.setAttribute(DrawerPopupDataAttributes.swiping, "");
			swipeBackdropElementRef.current = backdropElement;
			backdropElement.style.setProperty(DrawerBackdropCssVars.swipeProgress, `${backdropProgress}`);
			if (openProgress > 0 && frontmostHeight > 0) backdropElement.style.setProperty(DrawerPopupCssVars.height, `${frontmostHeight}px`);
			else backdropElement.style.removeProperty(DrawerPopupCssVars.height);
		}
		providerContext?.visualStateStore.set({
			swipeProgress: openProgress,
			frontmostHeight: openProgress > 0 ? frontmostHeight : 0
		});
		appliedSwipeStylesRef.current = true;
		swipeAreaActiveRef.current = true;
	}
	const clearSwipeStyles = useStableCallback(() => {
		const popupElement = swipePopupElementRef.current;
		if (popupElement) {
			popupElement.style.removeProperty(DrawerPopupCssVars.swipeMovementX);
			popupElement.style.removeProperty(DrawerPopupCssVars.swipeMovementY);
			popupElement.removeAttribute(DrawerPopupDataAttributes.swiping);
		}
		if (popupElement && popupTransitionRef.current !== null) {
			popupElement.style.transition = popupTransitionRef.current;
			popupTransitionRef.current = null;
		}
		const backdropElement = swipeBackdropElementRef.current;
		if (backdropElement) {
			backdropElement.removeAttribute(DrawerPopupDataAttributes.swiping);
			backdropElement.style.setProperty(DrawerBackdropCssVars.swipeProgress, "0");
			backdropElement.style.removeProperty(DrawerPopupCssVars.height);
		}
		providerContext?.visualStateStore.set({
			swipeProgress: 0,
			frontmostHeight: 0
		});
		appliedSwipeStylesRef.current = false;
		swipePopupElementRef.current = null;
		swipeBackdropElementRef.current = null;
		swipeAreaActiveRef.current = false;
	});
	function openDrawer(event) {
		openedBySwipeRef.current = true;
		store.setOpen(true, createChangeEventDetails(swipe, event, swipeAreaRef.current));
	}
	function closeDrawer(event) {
		store.setOpen(false, createChangeEventDetails(swipe, event, swipeAreaRef.current));
	}
	function resetSwipeInteractionState() {
		swipeStartEventRef.current = null;
		openedBySwipeRef.current = false;
		closedOffsetRef.current = null;
		setSwipeActive(false);
	}
	function finishSwipeInteraction() {
		resetSwipeInteractionState();
		enableDismissAfterRelease();
		resetDragDelta();
		clearSwipeStyles();
	}
	const swipe$2 = useSwipeDismiss({
		enabled,
		directions: [resolvedSwipeDirection],
		elementRef: swipeAreaRef,
		trackDrag: false,
		movementCssVars: {
			x: DrawerPopupCssVars.swipeMovementX,
			y: DrawerPopupCssVars.swipeMovementY
		},
		onSwipeStart(event) {
			disableDismissForSwipe();
			swipeStartEventRef.current = event;
			openedBySwipeRef.current = false;
			setSwipeActive(true);
			resetDragDelta();
		},
		onProgress(_progress, details) {
			if (!details) return;
			if (!swipeStartEventRef.current) return;
			dragDeltaRef.current.x = details.deltaX;
			dragDeltaRef.current.y = details.deltaY;
			if (details.direction !== resolvedSwipeDirection) return;
			const displacement = getDisplacement(resolvedSwipeDirection, details.deltaX, details.deltaY);
			if (!openedBySwipeRef.current && displacement < MIN_SWIPE_START_DISTANCE) return;
			if (!openedBySwipeRef.current && !store.select("open")) openDrawer(swipeStartEventRef.current);
			applySwipeMovement();
		},
		onRelease({ event, direction, deltaX, deltaY, releaseVelocityX, releaseVelocityY }) {
			const displacement = getDisplacement(resolvedSwipeDirection, deltaX, deltaY);
			const releaseVelocity = getDisplacement(resolvedSwipeDirection, releaseVelocityX, releaseVelocityY);
			const hasEnoughDistance = displacement >= resolveSwipeOpenThreshold();
			if (direction === resolvedSwipeDirection && (hasEnoughDistance || releaseVelocity >= VELOCITY_THRESHOLD) && !disabled) {
				if (!store.select("open")) openDrawer(event);
			} else if (openedBySwipeRef.current && store.select("open")) closeDrawer(event);
			finishSwipeInteraction();
			return false;
		},
		onCancel: finishSwipeInteraction
	});
	const swipePointerProps = swipe$2.getPointerProps();
	const swipeTouchProps = swipe$2.getTouchProps();
	const resetSwipe = swipe$2.reset;
	useIsoLayoutEffect(() => {
		if (swipeActive && appliedSwipeStylesRef.current) applySwipeMovement();
	});
	useIsoLayoutEffect(() => {
		if (!enabled) {
			if (swipeActive) enableDismissAfterRelease();
			resetSwipe();
			resetDragDelta();
			clearSwipeStyles();
			resetSwipeInteractionState();
		}
	}, [
		clearSwipeStyles,
		enableDismissAfterRelease,
		enabled,
		resetDragDelta,
		resetSwipe,
		swipeActive
	]);
	import_react.useEffect(() => {
		return () => {
			releaseGuardCleanupRef.current();
			store.context.outsidePressEnabledRef.current = true;
		};
	}, [store]);
	return useRenderElement("div", componentProps, {
		state: {
			open,
			swiping: swipe$2.swiping,
			swipeDirection: resolvedSwipeDirection,
			disabled
		},
		ref: [
			forwardedRef,
			swipeAreaRef,
			registerTrigger
		],
		stateAttributesMapping: stateAttributesMapping$11,
		props: [
			{
				role: "presentation",
				"aria-hidden": true,
				style: {
					pointerEvents: !enabled ? "none" : void 0,
					touchAction: resolveTouchAction(resolvedSwipeDirection)
				},
				onPointerDown(event) {
					if (event.pointerType === "touch") return;
					swipePointerProps.onPointerDown?.(event);
					if (event.cancelable) event.preventDefault();
				},
				onPointerMove(event) {
					if (event.pointerType === "touch") return;
					swipePointerProps.onPointerMove?.(event);
				},
				onPointerUp(event) {
					if (event.pointerType === "touch") return;
					swipePointerProps.onPointerUp?.(event);
				},
				onPointerCancel(event) {
					if (event.pointerType === "touch") return;
					swipePointerProps.onPointerCancel?.(event);
				}
			},
			swipeTouchProps,
			swipeAreaId ? { id: swipeAreaId } : void 0,
			elementProps
		]
	});
});
DrawerSwipeArea.displayName = "DrawerSwipeArea";
//#endregion
//#region node_modules/@base-ui/react/drawer/title/DrawerTitle.mjs
/**
* A heading that labels the drawer.
* Renders an `<h2>` element.
*
* Documentation: [Base UI Drawer](https://base-ui.com/react/components/drawer)
*/
var DrawerTitle = DialogTitle;
//#endregion
//#region node_modules/@base-ui/react/drawer/trigger/DrawerTrigger.mjs
/**
* A button that opens the drawer.
* Renders a `<button>` element.
*
* Documentation: [Base UI Drawer](https://base-ui.com/react/components/drawer)
*/
var DrawerTrigger = DialogTrigger;
//#endregion
//#region node_modules/@base-ui/react/drawer/virtual-keyboard-provider/DrawerVirtualKeyboardContext.mjs
var DrawerVirtualKeyboardContext = /*#__PURE__*/ import_react.createContext(void 0);
DrawerVirtualKeyboardContext.displayName = "DrawerVirtualKeyboardContext";
function useDrawerVirtualKeyboardContext() {
	return import_react.useContext(DrawerVirtualKeyboardContext);
}
//#endregion
//#region node_modules/@base-ui/react/drawer/viewport/DrawerViewport.mjs
var MIN_SWIPE_THRESHOLD = 10;
var FAST_SWIPE_VELOCITY = .5;
var SNAP_VELOCITY_THRESHOLD = .5;
var SNAP_VELOCITY_MULTIPLIER = 300;
var MAX_SNAP_VELOCITY = 4;
var MIN_SWIPE_RELEASE_VELOCITY = .2;
var MAX_SWIPE_RELEASE_VELOCITY = 4;
var MIN_SWIPE_RELEASE_DURATION_MS = 80;
var MAX_SWIPE_RELEASE_DURATION_MS = 360;
var MIN_SWIPE_RELEASE_SCALAR = .1;
var MAX_SWIPE_RELEASE_SCALAR = 1;
var AXIS_LOCK_SLOP = 6;
var AXIS_LOCK_BIAS = 2;
var DRAWER_CONTENT_SELECTOR = `[${DRAWER_CONTENT_ATTRIBUTE}]`;
/**
* A positioning container for the drawer popup that can be made scrollable.
* Renders a `<div>` element.
*
* Documentation: [Base UI Drawer](https://base-ui.com/react/components/drawer)
*/
var DrawerViewport = /*#__PURE__*/ import_react.forwardRef(function DrawerViewport(props, forwardedRef) {
	const { render, className, style, children, ...elementProps } = props;
	const store = useDialogRootContext();
	const popupRef = store.context.popupRef;
	const backdropRef = store.context.backdropRef;
	const { swipeDirection, notifyParentSwipingChange, notifyParentSwipeProgressChange, frontmostHeight, snapToSequentialPoints, swipeAreaActiveRef } = useDrawerRootContext();
	const providerContext = useDrawerProviderContext();
	const { snapPoints, resolvedSnapPoints, activeSnapPoint, activeSnapPointOffset, setActiveSnapPoint, popupHeight } = useDrawerSnapPoints();
	const open = store.useState("open");
	const mounted = store.useState("mounted");
	const nested = store.useState("nested");
	const nestedOpenDrawerCount = store.useState("nestedOpenDrawerCount");
	const viewportElement = store.useState("viewportElement");
	const popupElementState = store.useState("popupElement");
	const visualStateStore = providerContext?.visualStateStore;
	const nestedDrawerOpen = nestedOpenDrawerCount > 0;
	const scrollAxis = swipeDirection === "left" || swipeDirection === "right" ? "horizontal" : "vertical";
	const isVerticalScrollAxis = scrollAxis === "vertical";
	const crossScrollAxis = isVerticalScrollAxis ? "horizontal" : "vertical";
	const [swipeRelease, setSwipeRelease] = import_react.useState(null);
	const pendingSwipeCloseSnapPointRef = import_react.useRef(void 0);
	const resetSwipeRef = import_react.useRef(null);
	const controlledDismissFrame = useAnimationFrame();
	const swipingRef = import_react.useRef(false);
	const nestedSwipeActiveRef = import_react.useRef(false);
	const lastPointerTypeRef = import_react.useRef("");
	const ignoreNextTouchStartFromPenRef = import_react.useRef(false);
	const ignoreTouchSwipeRef = import_react.useRef(false);
	const touchScrollStateRef = import_react.useRef(null);
	const virtualKeyboard = useDrawerVirtualKeyboardContext();
	const snapPointRange = import_react.useMemo(() => {
		if (!snapPoints || snapPoints.length < 2 || resolvedSnapPoints.length < 2 || swipeDirection !== "down" && swipeDirection !== "up") return null;
		const offsets = resolvedSnapPoints.map((point) => point.offset).sort((a, b) => a - b);
		const minOffset = offsets[0];
		return {
			minOffset,
			range: offsets[1] - minOffset
		};
	}, [
		resolvedSnapPoints,
		snapPoints,
		swipeDirection
	]);
	const snapPointProgress = import_react.useMemo(() => {
		if (!snapPointRange || activeSnapPointOffset === null) return null;
		return clamp((activeSnapPointOffset - snapPointRange.minOffset) / snapPointRange.range, 0, 1);
	}, [activeSnapPointOffset, snapPointRange]);
	const swipeDirections = import_react.useMemo(() => {
		if (snapPoints && snapPoints.length > 0 && (swipeDirection === "down" || swipeDirection === "up")) return swipeDirection === "down" ? ["down", "up"] : ["up", "down"];
		return [swipeDirection];
	}, [snapPoints, swipeDirection]);
	const setSwipeDismissed = useStableCallback((dismissed) => {
		popupRef.current?.toggleAttribute(DrawerPopupDataAttributes.swipeDismiss, dismissed);
		backdropRef.current?.toggleAttribute(DrawerPopupDataAttributes.swipeDismiss, dismissed);
	});
	const clearSwipeRelease = useStableCallback(() => {
		setSwipeDismissed(false);
		popupRef.current?.removeAttribute(TransitionStatusDataAttributes.endingStyle);
		setSwipeRelease(null);
	});
	const finishNestedSwipe = useStableCallback(() => {
		if (!nestedSwipeActiveRef.current) return;
		nestedSwipeActiveRef.current = false;
		notifyParentSwipingChange?.(false);
	});
	const applySwipeProgress = useStableCallback((resolvedProgress, shouldTrackProgress, notifyParent) => {
		const isActive = open && !nested && shouldTrackProgress;
		const swipeProgress = isActive ? resolvedProgress : 0;
		const nestedSwipeProgress = open && shouldTrackProgress ? resolvedProgress : 0;
		if (notifyParent && notifyParentSwipeProgressChange) {
			notifyParentSwipeProgressChange(nestedSwipeProgress);
			if (nestedSwipeProgress <= 0) finishNestedSwipe();
		}
		visualStateStore?.set({
			swipeProgress,
			frontmostHeight: swipeProgress > 0 ? frontmostHeight : 0
		});
		const backdropElement = backdropRef.current;
		if (!backdropElement) return;
		const showProgress = isActive && swipeProgress > 0;
		backdropElement.style.setProperty(DrawerBackdropCssVars.swipeProgress, showProgress ? `${swipeProgress}` : "0");
		if (showProgress && frontmostHeight > 0) backdropElement.style.setProperty(DrawerPopupCssVars.height, `${frontmostHeight}px`);
		else backdropElement.style.removeProperty(DrawerPopupCssVars.height);
	});
	function resolveSwipeRelease(popupElement, direction, deltaX, deltaY, velocityX, velocityY, releaseVelocityX, releaseVelocityY) {
		const size = getBaseSwipeSize(popupElement, direction);
		if (size <= 0) return null;
		const translationAlongDirection = ((direction === "down" || direction === "up") && snapPoints && snapPoints.length > 0 ? activeSnapPointOffset ?? 0 : 0) + getDisplacement(direction, deltaX, deltaY);
		const remainingDistance = Math.max(0, size - translationAlongDirection);
		if (remainingDistance <= 0) return null;
		const releaseVelocity = getDisplacement(direction, releaseVelocityX, releaseVelocityY);
		const directionalVelocity = Math.abs(releaseVelocity) > 0 ? releaseVelocity : getDisplacement(direction, velocityX, velocityY);
		if (directionalVelocity <= MIN_SWIPE_RELEASE_VELOCITY) return null;
		return MIN_SWIPE_RELEASE_SCALAR + (clamp(remainingDistance / clamp(directionalVelocity, MIN_SWIPE_RELEASE_VELOCITY, MAX_SWIPE_RELEASE_VELOCITY), MIN_SWIPE_RELEASE_DURATION_MS, MAX_SWIPE_RELEASE_DURATION_MS) - MIN_SWIPE_RELEASE_DURATION_MS) / (MAX_SWIPE_RELEASE_DURATION_MS - MIN_SWIPE_RELEASE_DURATION_MS) * (MAX_SWIPE_RELEASE_SCALAR - MIN_SWIPE_RELEASE_SCALAR);
	}
	function updateNestedSwipeActive(details) {
		if (nestedSwipeActiveRef.current || !details) return;
		const delta = getDisplacement(details.direction ?? swipeDirection, details.deltaX, details.deltaY);
		if (Math.abs(delta) < MIN_SWIPE_THRESHOLD) return;
		nestedSwipeActiveRef.current = true;
		notifyParentSwipingChange?.(true);
	}
	const swipe$1 = useSwipeDismiss({
		enabled: mounted && !nestedDrawerOpen,
		directions: swipeDirections,
		elementRef: store.context.popupRef,
		ignoreSelectorWhenTouch: false,
		ignoreScrollableAncestors: true,
		movementCssVars: {
			x: DrawerPopupCssVars.swipeMovementX,
			y: DrawerPopupCssVars.swipeMovementY
		},
		onSwipeStart(event) {
			if ("touches" in event || event.pointerType === "touch") return;
			const popupElement = popupRef.current;
			const selection = ownerDocument(popupElement).getSelection?.();
			if (!selection || selection.isCollapsed) return;
			const anchorElement = isElement(selection.anchorNode) ? selection.anchorNode : selection.anchorNode?.parentElement;
			const focusElement = isElement(selection.focusNode) ? selection.focusNode : selection.focusNode?.parentElement;
			if (!contains(popupElement, anchorElement) && !contains(popupElement, focusElement)) return;
			selection.removeAllRanges();
		},
		onSwipingChange(swiping) {
			swipingRef.current = swiping;
			setBackdropSwipingAttribute(store.context.backdropRef.current, swiping);
			if (!swiping && !notifyParentSwipeProgressChange) finishNestedSwipe();
		},
		swipeThreshold({ element, direction }) {
			return getBaseSwipeThreshold(element, direction);
		},
		canStart(position, details) {
			const popupElement = store.context.popupRef.current;
			if (!popupElement) return false;
			const doc = popupElement.ownerDocument;
			const elementAtPoint = getElementAtPoint(popupElement.getRootNode(), position.x, position.y);
			if (!elementAtPoint || !contains(popupElement, elementAtPoint)) return false;
			const nativeEvent = details.nativeEvent;
			if (("touches" in nativeEvent || nativeEvent.pointerType === "touch") && shouldIgnoreSwipeForTextSelection(doc, popupElement)) return false;
			return true;
		},
		onProgress(progress, details) {
			updateNestedSwipeActive(details);
			const hasSnapPoints = Boolean(snapPoints && snapPoints.length > 0);
			if (swipingRef.current && swipeDirection === "down" && hasSnapPoints && details) {
				const popupElement = store.context.popupRef.current;
				if (popupElement) {
					popupElement.style.removeProperty("transform");
					popupElement.style.setProperty(DrawerPopupCssVars.swipeMovementY, `${getSnapPointSwipeMovement(activeSnapPointOffset ?? 0, details.deltaY)}px`);
				}
			}
			let resolvedProgress = progress;
			if (snapPointRange && popupHeight > 0) {
				const baseOffset = activeSnapPointOffset ?? snapPointRange.minOffset;
				const offsetToProgress = (nextOffset) => clamp((nextOffset - snapPointRange.minOffset) / snapPointRange.range, 0, 1);
				if (details && Number.isFinite(details.deltaY)) resolvedProgress = offsetToProgress(clamp(baseOffset + details.deltaY, 0, popupHeight));
				else if (snapPointProgress !== null) resolvedProgress = snapPointProgress;
			}
			applySwipeProgress(resolvedProgress, true, true);
		},
		onRelease({ event, deltaX, deltaY, direction, velocityX, velocityY, releaseVelocityX, releaseVelocityY }) {
			const popupElement = store.context.popupRef.current;
			if (!popupElement) {
				clearSwipeRelease();
				return;
			}
			const releasePopupElement = popupElement;
			function startSwipeRelease(resolvedDirection) {
				finishNestedSwipe();
				setSwipeDismissed(true);
				releasePopupElement.style.removeProperty("transition");
				releasePopupElement.setAttribute(TransitionStatusDataAttributes.endingStyle, "");
				import_react_dom.flushSync(() => {
					setSwipeRelease(resolveSwipeRelease(releasePopupElement, resolvedDirection, deltaX, deltaY, velocityX, velocityY, releaseVelocityX, releaseVelocityY));
				});
			}
			if (!snapPoints || snapPoints.length === 0) {
				if (!direction) {
					clearSwipeRelease();
					return;
				}
				const directionalDelta = getDisplacement(direction, deltaX, deltaY);
				if (directionalDelta <= 0) {
					clearSwipeRelease();
					return false;
				}
				if (getDisplacement(direction, velocityX, velocityY) >= FAST_SWIPE_VELOCITY) {
					startSwipeRelease(direction);
					return true;
				}
				const shouldClose = directionalDelta > getBaseSwipeThreshold(releasePopupElement, direction);
				if (shouldClose) startSwipeRelease(direction);
				else clearSwipeRelease();
				return shouldClose;
			}
			if (swipeDirection !== "down" && swipeDirection !== "up") {
				clearSwipeRelease();
				return;
			}
			if (!popupHeight) {
				clearSwipeRelease();
				return false;
			}
			if (resolvedSnapPoints.length === 0) {
				clearSwipeRelease();
				return;
			}
			const dragDelta = swipeDirection === "down" ? deltaY : -deltaY;
			const dragDirection = Math.sign(dragDelta);
			const releaseDirectionalVelocity = swipeDirection === "down" ? releaseVelocityY : -releaseVelocityY;
			const fallbackDirectionalVelocity = swipeDirection === "down" ? velocityY : -velocityY;
			let resolvedDirectionalVelocity = releaseDirectionalVelocity;
			if (dragDirection !== 0 && Math.abs(dragDelta) >= MIN_SWIPE_THRESHOLD) {
				const velocityDirection = Math.sign(resolvedDirectionalVelocity);
				if (velocityDirection !== 0 && velocityDirection !== dragDirection) resolvedDirectionalVelocity = fallbackDirectionalVelocity;
			}
			const currentOffset = activeSnapPointOffset ?? 0;
			const dragTargetOffset = clamp(currentOffset + dragDelta, 0, popupHeight);
			const velocityOffset = Math.abs(resolvedDirectionalVelocity) >= SNAP_VELOCITY_THRESHOLD ? clamp(resolvedDirectionalVelocity, -4, MAX_SNAP_VELOCITY) * SNAP_VELOCITY_MULTIPLIER : 0;
			const targetOffset = snapToSequentialPoints ? dragTargetOffset : clamp(dragTargetOffset + velocityOffset, 0, popupHeight);
			const snapPointEventDetails = createChangeEventDetails(swipe, event);
			const closeFromSnapPoints = () => {
				pendingSwipeCloseSnapPointRef.current = activeSnapPoint;
				setActiveSnapPoint(null, snapPointEventDetails);
				startSwipeRelease(swipeDirection);
				return true;
			};
			if (snapToSequentialPoints) {
				const orderedSnapPoints = [...resolvedSnapPoints].sort((first, second) => first.offset - second.offset);
				const orderedOffsets = orderedSnapPoints.map((point) => point.offset);
				const currentIndex = closestSnapPointIndex(orderedOffsets, currentOffset);
				let targetSnapPoint = orderedSnapPoints[closestSnapPointIndex(orderedOffsets, targetOffset)];
				const velocityDirection = Math.sign(resolvedDirectionalVelocity);
				const shouldAdvance = dragDirection !== 0 && velocityDirection !== 0 && velocityDirection === dragDirection && Math.abs(resolvedDirectionalVelocity) >= SNAP_VELOCITY_THRESHOLD;
				let effectiveTargetOffset = targetOffset;
				if (shouldAdvance) {
					const adjacentIndex = clamp(currentIndex + dragDirection, 0, orderedSnapPoints.length - 1);
					if (adjacentIndex !== currentIndex) {
						const adjacentPoint = orderedSnapPoints[adjacentIndex];
						if (dragDirection > 0 ? targetOffset < adjacentPoint.offset : targetOffset > adjacentPoint.offset) {
							targetSnapPoint = adjacentPoint;
							effectiveTargetOffset = adjacentPoint.offset;
						}
					} else if (dragDirection > 0) return closeFromSnapPoints();
				}
				if (Math.abs(effectiveTargetOffset - popupHeight) < Math.abs(effectiveTargetOffset - targetSnapPoint.offset)) return closeFromSnapPoints();
				setActiveSnapPoint(targetSnapPoint.value, snapPointEventDetails);
				clearSwipeRelease();
				return false;
			}
			if (resolvedDirectionalVelocity >= FAST_SWIPE_VELOCITY && dragDelta > 0) return closeFromSnapPoints();
			const closestSnapPoint = resolvedSnapPoints[closestSnapPointIndex(resolvedSnapPoints.map((point) => point.offset), targetOffset)];
			if (Math.abs(targetOffset - popupHeight) < Math.abs(targetOffset - closestSnapPoint.offset)) return closeFromSnapPoints();
			setActiveSnapPoint(closestSnapPoint.value, snapPointEventDetails);
			clearSwipeRelease();
			return false;
		},
		onDismiss(event) {
			visualStateStore?.set({
				swipeProgress: 0,
				frontmostHeight: 0
			});
			const backdropElement = store.context.backdropRef.current;
			if (backdropElement) {
				backdropElement.style.setProperty(DrawerBackdropCssVars.swipeProgress, "0");
				backdropElement.style.removeProperty(DrawerPopupCssVars.height);
			}
			const dismissEventDetails = createChangeEventDetails(swipe, event);
			store.setOpen(false, dismissEventDetails);
			if (dismissEventDetails.isCanceled) {
				const pendingSnapPoint = pendingSwipeCloseSnapPointRef.current;
				if (pendingSnapPoint !== void 0) setActiveSnapPoint(pendingSnapPoint, createChangeEventDetails(swipe, event));
				pendingSwipeCloseSnapPointRef.current = void 0;
				resetSwipeRef.current?.();
				clearSwipeRelease();
				return;
			}
			if (store.select("open")) {
				const savedEvent = event;
				controlledDismissFrame.request(() => {
					if (store.select("open")) {
						const pendingSnapPoint = pendingSwipeCloseSnapPointRef.current;
						if (pendingSnapPoint !== void 0) setActiveSnapPoint(pendingSnapPoint, createChangeEventDetails(swipe, savedEvent));
						pendingSwipeCloseSnapPointRef.current = void 0;
						clearSwipeRelease();
						resetSwipeRef.current?.();
					} else pendingSwipeCloseSnapPointRef.current = void 0;
				});
				return;
			}
			pendingSwipeCloseSnapPointRef.current = void 0;
			setSwipeDismissed(true);
		}
	});
	const swipePointerProps = swipe$1.getPointerProps();
	const swipeTouchProps = swipe$1.getTouchProps();
	const { moveNative: moveSwipeNative, reset: resetSwipe } = swipe$1;
	resetSwipeRef.current = resetSwipe;
	import_react.useEffect(() => {
		const rootElement = viewportElement ?? popupElementState;
		if (!rootElement) return;
		const resolvedRootElement = rootElement;
		const doc = ownerDocument(resolvedRootElement);
		function processTouchMove(event, touchState, touch) {
			const drawerAxisDelta = isVerticalScrollAxis ? touch.clientY - touchState.lastY : touch.clientX - touchState.lastX;
			if (event.touches.length === 2) return;
			if (shouldIgnoreSwipeForTextSelection(doc, resolvedRootElement) || !open || !mounted || nestedDrawerOpen) return;
			if (shouldYieldTouchMove(touchState, event, touch, isVerticalScrollAxis)) return;
			const scrollTarget = touchState.scrollTarget;
			if (!scrollTarget || scrollTarget === doc.documentElement || scrollTarget === doc.body) {
				if (event.cancelable) event.preventDefault();
				event.stopPropagation();
				moveSwipeNative(event, resolvedRootElement);
				return;
			}
			if (!hasScrollableContentOnAxis(scrollTarget, scrollAxis)) {
				if (event.cancelable) event.preventDefault();
				event.stopPropagation();
				return;
			}
			if (drawerAxisDelta !== 0) {
				const canSwipeFromScrollEdge = canSwipeFromScrollEdgeOnMove(scrollTarget, scrollAxis, swipeDirection, drawerAxisDelta);
				if (!touchState.allowSwipe) if (event.cancelable && canSwipeFromScrollEdge) {
					touchState.allowSwipe = true;
					event.preventDefault();
				} else touchState.allowSwipe = false;
				else if (event.cancelable) event.preventDefault();
			}
			if (touchState.allowSwipe === true) {
				event.stopPropagation();
				moveSwipeNative(event, resolvedRootElement);
			}
		}
		function handleNativeTouchMove(event) {
			virtualKeyboard?.onTouchMove(event);
			if (ignoreTouchSwipeRef.current) return;
			const touchState = touchScrollStateRef.current;
			const touch = event.touches[0];
			if (!touch || !touchState) return;
			processTouchMove(event, touchState, touch);
			updateTouchScrollPosition(touchState, touch);
		}
		return addEventListener(doc, "touchmove", handleNativeTouchMove, {
			passive: false,
			capture: true
		});
	}, [
		mounted,
		nestedDrawerOpen,
		open,
		popupElementState,
		isVerticalScrollAxis,
		scrollAxis,
		swipeDirection,
		moveSwipeNative,
		viewportElement,
		virtualKeyboard
	]);
	useIsoLayoutEffect(() => {
		if (!snapPointRange || swipe$1.swiping) return;
		applySwipeProgress(!open || nested ? 0 : snapPointProgress ?? 0, true, false);
	}, [
		applySwipeProgress,
		frontmostHeight,
		nested,
		notifyParentSwipeProgressChange,
		open,
		snapPointProgress,
		snapPointRange,
		swipe$1.swiping,
		store,
		visualStateStore
	]);
	useIsoLayoutEffect(() => {
		if (!notifyParentSwipeProgressChange) return;
		if (!open) notifyParentSwipeProgressChange(0);
		return () => {
			notifyParentSwipeProgressChange(0);
		};
	}, [notifyParentSwipeProgressChange, open]);
	useIsoLayoutEffect(() => {
		if (open) {
			if (!swipeAreaActiveRef.current) resetSwipe();
			clearSwipeRelease();
		}
	}, [
		clearSwipeRelease,
		open,
		resetSwipe,
		swipeAreaActiveRef
	]);
	useIsoLayoutEffect(() => {
		const backdropElement = backdropRef.current;
		return () => {
			visualStateStore?.set({
				swipeProgress: 0,
				frontmostHeight: 0
			});
			setBackdropSwipingAttribute(backdropElement, false);
			const currentBackdrop = backdropRef.current;
			if (currentBackdrop !== backdropElement) setBackdropSwipingAttribute(currentBackdrop, false);
			finishNestedSwipe();
		};
	}, [
		backdropRef,
		finishNestedSwipe,
		visualStateStore
	]);
	const swipeProviderValue = import_react.useMemo(() => ({
		swiping: swipe$1.swiping,
		getDragStyles: swipe$1.getDragStyles,
		swipeStrength: swipeRelease ?? null,
		setSwipeDismissed
	}), [
		setSwipeDismissed,
		swipe$1.getDragStyles,
		swipe$1.swiping,
		swipeRelease
	]);
	function resetTouchSwipeState(ignoreSwipe) {
		ignoreTouchSwipeRef.current = ignoreSwipe;
		touchScrollStateRef.current = null;
	}
	function resetTouchTrackingState() {
		resetTouchSwipeState(false);
		lastPointerTypeRef.current = "";
		ignoreNextTouchStartFromPenRef.current = false;
	}
	function handlePointerEnd(event) {
		lastPointerTypeRef.current = "";
		return event.pointerType !== "touch";
	}
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(DialogViewport, {
		ref: forwardedRef,
		className,
		style,
		render,
		...mergeProps(elementProps, {
			onPointerDown(event) {
				lastPointerTypeRef.current = event.pointerType;
				ignoreNextTouchStartFromPenRef.current = event.pointerType === "pen";
				if (!open || !mounted || nestedDrawerOpen) return;
				const elementAtPoint = getElementAtPoint(event.currentTarget.getRootNode(), event.clientX, event.clientY);
				if (isSwipeIgnoredTarget(elementAtPoint) || isDrawerContentTarget(elementAtPoint)) return;
				if (event.pointerType === "touch") return;
				swipePointerProps.onPointerDown?.(event);
			},
			onPointerMove(event) {
				if (event.pointerType === "touch") return;
				swipePointerProps.onPointerMove?.(event);
			},
			onPointerUp(event) {
				if (handlePointerEnd(event)) swipePointerProps.onPointerUp?.(event);
			},
			onPointerCancel(event) {
				if (handlePointerEnd(event)) swipePointerProps.onPointerCancel?.(event);
			},
			onTouchStart(event) {
				if (lastPointerTypeRef.current === "pen" && ignoreNextTouchStartFromPenRef.current) {
					ignoreNextTouchStartFromPenRef.current = false;
					resetTouchSwipeState(false);
					return;
				}
				if (!open || !mounted || nestedDrawerOpen) {
					resetTouchSwipeState(false);
					return;
				}
				const touch = event.touches[0];
				if (!touch) return;
				if (isReactTouchEventOnRangeInput(event)) {
					resetTouchSwipeState(false);
					return;
				}
				const rootElement = event.currentTarget;
				const elementAtPoint = getElementAtPoint(rootElement.getRootNode(), touch.clientX, touch.clientY);
				const eventTarget = getTarget(event.nativeEvent);
				const target = isElement(eventTarget) ? eventTarget : rootElement;
				if (!contains(rootElement, target)) {
					resetTouchSwipeState(true);
					return;
				}
				virtualKeyboard?.onTouchStart(event);
				if (isSwipeIgnoredTarget(elementAtPoint)) {
					resetTouchSwipeState(true);
					return;
				}
				ignoreTouchSwipeRef.current = false;
				const scrollTarget = findScrollableTouchTarget(target, rootElement, scrollAxis);
				const hasCrossAxisScrollableContent = findScrollableTouchTarget(target, rootElement, crossScrollAxis) != null;
				let allowSwipe = null;
				if (scrollTarget) allowSwipe = isAtSwipeStartEdge(scrollTarget, scrollAxis, swipeDirection) ? null : false;
				touchScrollStateRef.current = {
					startX: touch.clientX,
					startY: touch.clientY,
					lastX: touch.clientX,
					lastY: touch.clientY,
					scrollTarget,
					hasCrossAxisScrollableContent,
					allowSwipe,
					preserveNativeCrossAxisScroll: false,
					drawerAxisAttributed: false
				};
				swipeTouchProps.onTouchStart?.(event);
			},
			onTouchEnd(event) {
				virtualKeyboard?.onTouchEnd(event);
				resetTouchTrackingState();
				swipeTouchProps.onTouchEnd?.(event);
			},
			onTouchCancel(event) {
				virtualKeyboard?.onTouchCancel();
				resetTouchTrackingState();
				swipeTouchProps.onTouchCancel?.(event);
			},
			["data-nested-dialog-open"]: void 0
		}),
		children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(DrawerViewportContext.Provider, {
			value: swipeProviderValue,
			children
		})
	});
});
DrawerViewport.displayName = "DrawerViewport";
function setBackdropSwipingAttribute(backdropElement, swiping) {
	backdropElement?.toggleAttribute(DrawerPopupDataAttributes.swiping, swiping);
}
function isSwipeIgnoredTarget(target) {
	return Boolean(target?.closest(BASE_UI_SWIPE_IGNORE_SELECTOR));
}
function isDrawerContentTarget(target) {
	return Boolean(target?.closest(DRAWER_CONTENT_SELECTOR));
}
function getBaseSwipeSize(element, direction) {
	return direction === "left" || direction === "right" ? element.offsetWidth : element.offsetHeight;
}
function getBaseSwipeThreshold(element, direction) {
	return Math.max(getBaseSwipeSize(element, direction) * .5, MIN_SWIPE_THRESHOLD);
}
function isRangeInput(target, win) {
	return target instanceof win.HTMLInputElement && target.type === "range";
}
function isTextSelectionControl(target) {
	return target.tagName === "INPUT" || target.tagName === "TEXTAREA";
}
function hasExpandedSelectionWithinTarget(selection, target) {
	const anchorElement = isElement(selection.anchorNode) ? selection.anchorNode : selection.anchorNode?.parentElement;
	const focusElement = isElement(selection.focusNode) ? selection.focusNode : selection.focusNode?.parentElement;
	return selection.containsNode(target, true) || contains(target, anchorElement) || contains(target, focusElement);
}
function shouldIgnoreSwipeForTextSelection(doc, rootElement) {
	const activeEl = activeElement(doc);
	if (activeEl && contains(rootElement, activeEl) && isTextSelectionControl(activeEl)) {
		const { selectionStart, selectionEnd } = activeEl;
		if (selectionStart != null && selectionEnd != null && selectionStart < selectionEnd) return true;
	}
	const selection = doc.getSelection?.();
	if (!selection || selection.isCollapsed) return false;
	return hasExpandedSelectionWithinTarget(selection, rootElement);
}
function isEventOnRangeInput(event, win) {
	return event.composedPath().some((pathTarget) => isRangeInput(pathTarget, win));
}
function isReactTouchEventOnRangeInput(event) {
	return isEventOnRangeInput(event.nativeEvent, getWindow(event.currentTarget));
}
function updateTouchScrollPosition(touchState, touch) {
	touchState.lastX = touch.clientX;
	touchState.lastY = touch.clientY;
}
/**
* Arbitrates a touchmove between the drawer swipe and a native cross-axis scroll.
* Returns `true` when the move must be left alone — either because the cross axis already won the
* gesture, or because neither axis has passed the slop yet and the gesture cannot be attributed.
*/
function shouldYieldTouchMove(touchState, event, touch, isVerticalScrollAxis) {
	if (touchState.preserveNativeCrossAxisScroll) return true;
	if (touchState.drawerAxisAttributed || touchState.allowSwipe === true || !touchState.hasCrossAxisScrollableContent) return false;
	if (!event.cancelable) {
		touchState.preserveNativeCrossAxisScroll = true;
		return true;
	}
	const drawerAxisGestureDelta = isVerticalScrollAxis ? touch.clientY - touchState.startY : touch.clientX - touchState.startX;
	const crossAxisGestureDelta = isVerticalScrollAxis ? touch.clientX - touchState.startX : touch.clientY - touchState.startY;
	const absDrawerAxisGestureDelta = Math.abs(drawerAxisGestureDelta);
	const absCrossAxisGestureDelta = Math.abs(crossAxisGestureDelta);
	if (absCrossAxisGestureDelta >= AXIS_LOCK_SLOP && absCrossAxisGestureDelta > absDrawerAxisGestureDelta + AXIS_LOCK_BIAS) {
		touchState.preserveNativeCrossAxisScroll = true;
		return true;
	}
	if (absDrawerAxisGestureDelta >= AXIS_LOCK_SLOP) {
		touchState.drawerAxisAttributed = true;
		return false;
	}
	return true;
}
function hasScrollableContentOnAxis(scrollTarget, axis) {
	return getScrollMetrics(scrollTarget, axis).max > 0;
}
function getScrollMetrics(scrollTarget, axis) {
	if (axis === "vertical") {
		const max = Math.max(0, scrollTarget.scrollHeight - scrollTarget.clientHeight);
		return {
			offset: scrollTarget.scrollTop,
			max
		};
	}
	const max = Math.max(0, scrollTarget.scrollWidth - scrollTarget.clientWidth);
	return {
		offset: scrollTarget.scrollLeft,
		max
	};
}
function isAtSwipeStartEdge(scrollTarget, axis, direction) {
	const dismissFromStartEdge = shouldDismissFromStartEdge(direction, axis);
	const { offset, max } = getScrollMetrics(scrollTarget, axis);
	return dismissFromStartEdge ? offset <= 0 : offset >= max;
}
function canSwipeFromScrollEdgeOnMove(scrollTarget, axis, direction, delta) {
	if (!(shouldDismissFromStartEdge(direction, axis) ? delta > 0 : delta < 0)) return false;
	return isAtSwipeStartEdge(scrollTarget, axis, direction);
}
function shouldDismissFromStartEdge(direction, axis) {
	return axis === "vertical" ? direction === "down" : direction === "right";
}
//#endregion
//#region node_modules/@base-ui/react/drawer/viewport/DrawerViewportCssVars.mjs
var DrawerViewportCssVars = /*#__PURE__*/ function(DrawerViewportCssVars) {
	/**
	* The software keyboard inset, measured from the bottom edge of the layout viewport.
	* Present only when the drawer is wrapped in `Drawer.VirtualKeyboardProvider`.
	* @type {CSS length}
	*/
	DrawerViewportCssVars["keyboardInset"] = "--drawer-keyboard-inset";
	return DrawerViewportCssVars;
}({});
//#endregion
//#region node_modules/@base-ui/react/drawer/virtual-keyboard-provider/DrawerVirtualKeyboardProvider.mjs
var KEYBOARD_RESIZE_THRESHOLD = 60;
var KEYBOARD_VISIBILITY_MARGIN = 16;
var KEYBOARD_SCROLL_SLACK = 48;
var KEYBOARD_REALIGN_INTERVAL = 150;
var KEYBOARD_REALIGN_MAX_PASSES = 4;
var KEYBOARD_SETTLE_FRAME_LIMIT = 60;
var INPUT_TAP_MOVE_THRESHOLD = 10;
var INPUT_TAP_HIT_SLOP = 16;
var KEYBOARD_INPUT_TYPES = /* @__PURE__ */ new Set([
	"email",
	"number",
	"password",
	"search",
	"tel",
	"text",
	"url"
]);
var KEYBOARD_TAP_BLOCKED = Symbol("KeyboardTapBlocked");
/**
* Provides keyboard-aware focus and scroll handling for bottom-sheet drawers with form fields.
*
* Documentation: [Base UI Drawer](https://base-ui.com/react/components/drawer)
*/
function DrawerVirtualKeyboardProvider(props) {
	const { children } = props;
	const store = useDialogRootContext();
	const open = store.useState("open");
	const mounted = store.useState("mounted");
	const modal = store.useState("modal");
	const nestedOpenDialogCount = store.useState("nestedOpenDialogCount");
	const rootElement = store.useState("viewportElement");
	const nestedDrawerOpen = nestedOpenDialogCount > 0;
	const pendingKeyboardFocusMovedRef = import_react.useRef(false);
	const keyboardTouchStartRef = import_react.useRef(null);
	const focusedKeyboardTargetRef = import_react.useRef(null);
	const keyboardScrollAdjustmentRef = import_react.useRef(null);
	const programmaticKeyboardFocusRef = import_react.useRef(false);
	const keyboardFocusFrame = useAnimationFrame();
	const keyboardRealignTimeout = useTimeout();
	const restoreKeyboardScrollAdjustment = useStableCallback(() => {
		const adjustment = keyboardScrollAdjustmentRef.current;
		if (!adjustment) return;
		adjustment.element.style.overflowAnchor = adjustment.overflowAnchor;
		adjustment.element.style.paddingBottom = adjustment.paddingBottom;
		adjustment.element.style.scrollPaddingBottom = adjustment.scrollPaddingBottom;
		keyboardScrollAdjustmentRef.current = null;
	});
	const setKeyboardScrollSlack = useStableCallback((element, slack) => {
		const roundedSlack = Math.max(0, Math.ceil(slack));
		let adjustment = keyboardScrollAdjustmentRef.current;
		if (adjustment && !adjustment.element.isConnected) {
			restoreKeyboardScrollAdjustment();
			adjustment = null;
		}
		if (roundedSlack === 0) {
			restoreKeyboardScrollAdjustment();
			return;
		}
		if (adjustment && adjustment.element !== element) {
			restoreKeyboardScrollAdjustment();
			adjustment = null;
		}
		if (!adjustment) {
			const styles = getComputedStyle$1(element);
			adjustment = {
				element,
				overflowAnchor: element.style.overflowAnchor,
				paddingBottom: element.style.paddingBottom,
				scrollPaddingBottom: element.style.scrollPaddingBottom,
				computedPaddingBottom: Number.parseFloat(styles.paddingBottom) || 0,
				computedScrollPaddingBottom: Number.parseFloat(styles.scrollPaddingBottom) || 0
			};
			keyboardScrollAdjustmentRef.current = adjustment;
		}
		element.style.overflowAnchor = "none";
		element.style.paddingBottom = `${adjustment.computedPaddingBottom + roundedSlack}px`;
		element.style.scrollPaddingBottom = `${adjustment.computedScrollPaddingBottom + KEYBOARD_VISIBILITY_MARGIN}px`;
	});
	const animateKeyboardScroll = useStableCallback((element, scrollTop) => {
		const behavior = getWindow(element).matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ? "auto" : "smooth";
		element.scrollTo({
			top: scrollTop,
			behavior
		});
	});
	const resetTouchTrackingState = useStableCallback(() => {
		pendingKeyboardFocusMovedRef.current = false;
		keyboardTouchStartRef.current = null;
	});
	import_react.useEffect(() => {
		if (!mounted || !open) {
			focusedKeyboardTargetRef.current = null;
			restoreKeyboardScrollAdjustment();
			keyboardFocusFrame.cancel();
			return;
		}
		if (!rootElement) {
			restoreKeyboardScrollAdjustment();
			return;
		}
		const doc = ownerDocument(rootElement);
		const win = getWindow(rootElement);
		const visualViewport = win.visualViewport;
		let keyboardScrollElement = null;
		let keyboardScrollDestination = 0;
		let keyboardScrollChecks = 0;
		let keyboardScrollObserved = -1;
		const setDrawerKeyboardInset = (inset) => {
			rootElement.style.setProperty(DrawerViewportCssVars.keyboardInset, `${Math.max(0, Math.ceil(inset))}px`);
		};
		const clearFocusedKeyboardTarget = () => {
			focusedKeyboardTargetRef.current = null;
			keyboardScrollElement = null;
			setDrawerKeyboardInset(0);
			restoreKeyboardScrollAdjustment();
			keyboardFocusFrame.cancel();
			keyboardRealignTimeout.clear();
		};
		const baseScrollX = win.scrollX;
		const baseScrollY = win.scrollY;
		const restoreWindowScroll = () => {
			if (modal !== true || nestedDrawerOpen || !focusedKeyboardTargetRef.current || getKeyboardVisualViewport(win) == null) return false;
			if (win.scrollX !== baseScrollX || win.scrollY !== baseScrollY) {
				win.scrollTo({
					left: baseScrollX,
					top: baseScrollY,
					behavior: "instant"
				});
				return true;
			}
			return false;
		};
		let restorePreemptedFocus = null;
		const consumePreemptedFocus = () => {
			restorePreemptedFocus?.();
			restorePreemptedFocus = null;
		};
		const preemptFocusReveal = (target, keyboardViewport) => {
			consumePreemptedFocus();
			const rect = target.getBoundingClientRect();
			restorePreemptedFocus = overrideGeometryDuringFocus(target, (keyboardViewport.top + keyboardViewport.bottom - rect.top - rect.bottom) / 2);
		};
		const alignFocusedKeyboardTarget = () => {
			consumePreemptedFocus();
			const target = focusedKeyboardTargetRef.current;
			if (nestedDrawerOpen || !target || !contains(rootElement, target)) {
				setDrawerKeyboardInset(0);
				restoreKeyboardScrollAdjustment();
				return;
			}
			restoreWindowScroll();
			const keyboardViewport = getKeyboardVisualViewport(win);
			if (!keyboardViewport) {
				setDrawerKeyboardInset(0);
				restoreKeyboardScrollAdjustment();
				return;
			}
			setDrawerKeyboardInset(Math.max(0, win.innerHeight - keyboardViewport.bottom));
			const scrollTarget = findKeyboardScrollTarget(target, rootElement);
			if (!scrollTarget) {
				restoreKeyboardScrollAdjustment();
				return;
			}
			const scrollTargetRect = scrollTarget.getBoundingClientRect();
			const clippedBottom = Math.min(scrollTargetRect.bottom, keyboardViewport.bottom);
			const overlap = Math.max(0, scrollTargetRect.bottom - keyboardViewport.bottom);
			setKeyboardScrollSlack(scrollTarget, overlap > 0 ? overlap + KEYBOARD_SCROLL_SLACK : 0);
			const maxScrollTop = Math.max(0, scrollTarget.scrollHeight - scrollTarget.clientHeight);
			if (maxScrollTop <= 0) return;
			const visibleTop = Math.max(scrollTargetRect.top, keyboardViewport.top) + KEYBOARD_VISIBILITY_MARGIN;
			const visibleBottom = clippedBottom - KEYBOARD_VISIBILITY_MARGIN;
			if (visibleBottom <= visibleTop) return;
			const targetRect = target.getBoundingClientRect();
			const nextScrollTop = scrollTarget.scrollTop + (targetRect.top + targetRect.bottom - visibleTop - visibleBottom) / 2;
			const destination = Math.round(clamp(nextScrollTop, 0, maxScrollTop));
			if (!(keyboardScrollElement === scrollTarget && Math.abs(keyboardScrollDestination - destination) <= 1)) {
				const checks = keyboardScrollElement === scrollTarget ? keyboardScrollChecks + 1 : 1;
				keyboardScrollElement = scrollTarget;
				keyboardScrollDestination = destination;
				keyboardScrollChecks = checks;
				keyboardScrollObserved = -1;
				if (checks <= KEYBOARD_SETTLE_FRAME_LIMIT) {
					keyboardFocusFrame.request(alignFocusedKeyboardTarget);
					return;
				}
			} else if (keyboardScrollObserved >= 0) {
				const current = scrollTarget.scrollTop;
				if (Math.abs(current - destination) <= 1) return;
				if (current !== keyboardScrollObserved) {
					keyboardScrollObserved = current;
					return;
				}
			}
			keyboardScrollElement = scrollTarget;
			keyboardScrollDestination = destination;
			keyboardScrollChecks = 0;
			keyboardScrollObserved = scrollTarget.scrollTop;
			animateKeyboardScroll(scrollTarget, destination);
		};
		const scheduleKeyboardFocusAlignment = () => {
			keyboardFocusFrame.request(alignFocusedKeyboardTarget);
		};
		const scheduleDelayedKeyboardRealign = () => {
			let remainingPasses = KEYBOARD_REALIGN_MAX_PASSES;
			const realign = () => {
				alignFocusedKeyboardTarget();
				remainingPasses -= 1;
				if (remainingPasses > 0) keyboardRealignTimeout.start(KEYBOARD_REALIGN_INTERVAL, realign);
			};
			keyboardRealignTimeout.start(KEYBOARD_REALIGN_INTERVAL, realign);
		};
		const captureFocusedKeyboardTarget = (eventTarget) => {
			if (nestedDrawerOpen) return false;
			const target = resolveKeyboardInputTarget(eventTarget);
			if (!target || !contains(rootElement, target)) return false;
			if (focusedKeyboardTargetRef.current !== target) keyboardScrollElement = null;
			focusedKeyboardTargetRef.current = target;
			return true;
		};
		const handleFocusIn = (event) => {
			programmaticKeyboardFocusRef.current = false;
			consumePreemptedFocus();
			if (!captureFocusedKeyboardTarget(getTarget(event))) {
				clearFocusedKeyboardTarget();
				return;
			}
			if (getKeyboardVisualViewport(win) != null) scheduleDelayedKeyboardRealign();
			scheduleKeyboardFocusAlignment();
		};
		const handleFocusOut = (event) => {
			if (programmaticKeyboardFocusRef.current) return;
			if (captureFocusedKeyboardTarget(event.relatedTarget)) {
				const target = focusedKeyboardTargetRef.current;
				const keyboardViewport = getKeyboardVisualViewport(win);
				if (target && keyboardViewport) preemptFocusReveal(target, keyboardViewport);
				scheduleKeyboardFocusAlignment();
				return;
			}
			clearFocusedKeyboardTarget();
		};
		const handleViewportUpdate = () => {
			if (focusedKeyboardTargetRef.current || captureFocusedKeyboardTarget(activeElement(doc))) scheduleKeyboardFocusAlignment();
		};
		const cleanupListeners = [];
		if (visualViewport) cleanupListeners.push(addEventListener(visualViewport, "resize", handleViewportUpdate), addEventListener(visualViewport, "scroll", handleViewportUpdate));
		const handleWindowScroll = () => {
			if (restoreWindowScroll()) scheduleKeyboardFocusAlignment();
		};
		const cancelKeyboardRealignOnPointerDown = () => {
			keyboardFocusFrame.cancel();
			keyboardRealignTimeout.clear();
			keyboardScrollElement = null;
		};
		cleanupListeners.push(addEventListener(doc, "focusin", handleFocusIn, true), addEventListener(doc, "focusout", handleFocusOut, true), addEventListener(win, "scroll", handleWindowScroll), addEventListener(doc, "pointerdown", cancelKeyboardRealignOnPointerDown, true));
		if (captureFocusedKeyboardTarget(activeElement(doc))) scheduleKeyboardFocusAlignment();
		return () => {
			cleanupListeners.forEach((cleanup) => cleanup());
			consumePreemptedFocus();
			clearFocusedKeyboardTarget();
			rootElement.style.removeProperty(DrawerViewportCssVars.keyboardInset);
		};
	}, [
		animateKeyboardScroll,
		keyboardFocusFrame,
		keyboardRealignTimeout,
		modal,
		mounted,
		nestedDrawerOpen,
		open,
		restoreKeyboardScrollAdjustment,
		rootElement,
		setKeyboardScrollSlack
	]);
	const onTouchStart = useStableCallback((event) => {
		const touch = event.touches[0];
		pendingKeyboardFocusMovedRef.current = false;
		keyboardTouchStartRef.current = {
			x: touch.clientX,
			y: touch.clientY
		};
	});
	const onTouchMove = useStableCallback((event) => {
		const touch = event.touches[0];
		const touchStart = keyboardTouchStartRef.current;
		if (!touch || !touchStart || pendingKeyboardFocusMovedRef.current) return;
		if (Math.abs(touch.clientX - touchStart.x) > INPUT_TAP_MOVE_THRESHOLD || Math.abs(touch.clientY - touchStart.y) > INPUT_TAP_MOVE_THRESHOLD) pendingKeyboardFocusMovedRef.current = true;
	});
	const onTouchEnd = useStableCallback((event) => {
		if (!open || !mounted || nestedDrawerOpen || !rootElement || !keyboardTouchStartRef.current || pendingKeyboardFocusMovedRef.current) {
			resetTouchTrackingState();
			return;
		}
		const touch = event.changedTouches[0] ?? event.touches[0];
		const root = rootElement.getRootNode();
		const nativeEventTarget = getTarget(event.nativeEvent);
		const pointTarget = touch ? resolveKeyboardTouchTargetFromPoint(root, touch.clientX, touch.clientY) : null;
		if (pointTarget === KEYBOARD_TAP_BLOCKED) {
			resetTouchTrackingState();
			return;
		}
		const keyboardTarget = touch && (pointTarget ?? resolveKeyboardTouchTarget(nativeEventTarget));
		if (keyboardTarget && (!contains(rootElement, keyboardTarget.focusTarget) || !contains(rootElement, keyboardTarget.clickTarget))) {
			resetTouchTrackingState();
			return;
		}
		if (keyboardTarget) {
			const { clickTarget: keyboardClickTarget, focusTarget: keyboardFocusTarget } = keyboardTarget;
			const win = getWindow(keyboardFocusTarget);
			if (win.visualViewport && win.visualViewport.scale !== 1) {
				resetTouchTrackingState();
				return;
			}
			if (activeElement(ownerDocument(keyboardFocusTarget)) === keyboardFocusTarget && (!win.visualViewport || getKeyboardVisualViewport(win) != null)) {
				resetTouchTrackingState();
				return;
			}
			event.preventDefault();
			programmaticKeyboardFocusRef.current = true;
			try {
				focusKeyboardInputWithoutPageScroll(keyboardFocusTarget);
			} finally {
				programmaticKeyboardFocusRef.current = false;
			}
			dispatchKeyboardClick(keyboardClickTarget, touch);
			resetTouchTrackingState();
			return;
		}
		resetTouchTrackingState();
	});
	const contextValue = import_react.useMemo(() => ({
		onTouchStart,
		onTouchMove,
		onTouchEnd,
		onTouchCancel: resetTouchTrackingState
	}), [
		onTouchEnd,
		onTouchMove,
		onTouchStart,
		resetTouchTrackingState
	]);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(DrawerVirtualKeyboardContext.Provider, {
		value: contextValue,
		children
	});
}
function isKeyboardInputElement(element) {
	if (element.isContentEditable) return true;
	const win = getWindow(element);
	if (element instanceof win.HTMLTextAreaElement || element instanceof win.HTMLInputElement && KEYBOARD_INPUT_TYPES.has(element.type)) return !element.matches(":disabled");
	return false;
}
function resolveKeyboardInputTarget(target) {
	if (!isHTMLElement(target)) return null;
	if (isKeyboardInputElement(target)) return target.isContentEditable ? getContentEditableHost(target) : target;
	const control = target.closest("label")?.control ?? null;
	return isHTMLElement(control) && isKeyboardInputElement(control) ? control : null;
}
function resolveKeyboardTouchTarget(target) {
	if (!isHTMLElement(target)) return null;
	const focusTarget = resolveKeyboardInputTarget(target);
	if (!focusTarget) return null;
	return {
		focusTarget,
		clickTarget: target
	};
}
function getContentEditableHost(element) {
	let host = element;
	while (host.parentElement?.isContentEditable) host = host.parentElement;
	return host;
}
function resolveKeyboardTouchTargetFromPoint(root, clientX, clientY) {
	const exactTarget = getElementAtPoint(root, clientX, clientY);
	if (isHTMLElement(exactTarget)) {
		const exactKeyboardTarget = resolveKeyboardInputTarget(exactTarget);
		if (exactKeyboardTarget) return {
			focusTarget: exactKeyboardTarget,
			clickTarget: exactTarget
		};
	}
	if (isInteractiveElement(exactTarget) || exactTarget?.closest("label") != null) return KEYBOARD_TAP_BLOCKED;
	for (const [offsetX, offsetY] of [
		[0, INPUT_TAP_HIT_SLOP],
		[0, -16],
		[INPUT_TAP_HIT_SLOP, 0],
		[-16, 0]
	]) {
		const keyboardTarget = resolveKeyboardInputTarget(getElementAtPoint(root, clientX + offsetX, clientY + offsetY));
		if (keyboardTarget) return {
			focusTarget: keyboardTarget,
			clickTarget: keyboardTarget
		};
	}
	return null;
}
function dispatchKeyboardClick(target, touch) {
	const win = getWindow(target);
	const ClickEvent = win.PointerEvent ?? win.MouseEvent;
	target.dispatchEvent(new ClickEvent("click", {
		bubbles: true,
		cancelable: true,
		clientX: touch.clientX,
		clientY: touch.clientY,
		detail: 1,
		view: win
	}));
}
function focusKeyboardInputWithoutPageScroll(target) {
	const wasFocused = activeElement(ownerDocument(target)) === target;
	const restoreStyles = overrideGeometryDuringFocus(target, -2e3);
	try {
		if (wasFocused) target.blur();
		target.focus({ preventScroll: true });
	} finally {
		restoreStyles();
	}
}
function overrideGeometryDuringFocus(target, translateY) {
	const previousOpacity = target.style.opacity;
	const previousTransform = target.style.transform;
	const previousTransition = target.style.transition;
	target.style.transition = "none";
	target.style.opacity = "0";
	target.style.transform = `translateY(${translateY}px)`;
	return () => {
		target.style.opacity = previousOpacity;
		target.style.transform = previousTransform;
		target.style.transition = previousTransition;
	};
}
function findKeyboardScrollTarget(target, root) {
	const scrollStart = getParentNode(target);
	return findScrollableTouchTarget(scrollStart, root, "vertical") ?? findScrollableTouchTarget(scrollStart, root, "vertical", true);
}
function getKeyboardVisualViewport(win) {
	const visualViewport = win.visualViewport;
	if (!visualViewport || visualViewport.scale !== 1) return null;
	if (win.innerHeight - visualViewport.height <= KEYBOARD_RESIZE_THRESHOLD) return null;
	const top = Math.max(0, visualViewport.offsetTop);
	return {
		top,
		bottom: Math.min(win.innerHeight, top + visualViewport.height)
	};
}
//#endregion
//#region node_modules/@base-ui/react/drawer/handle.mjs
/**
* Controls a Drawer imperatively and associates detached `Drawer.Trigger` components with a
* `Drawer.Root`. Create one with `Drawer.createHandle()` and pass it to the `handle` prop of the
* root and of any triggers rendered outside of it.
*
* The imperative methods take effect only while a root using this handle is mounted; calls made
* before a root attaches (or after it unmounts) are ignored.
*/
var DrawerHandle = class extends DialogHandle {};
/**
* Creates a new handle to connect a Drawer.Root with detached Drawer.Trigger components.
*/
function createDrawerHandle() {
	return new DrawerHandle();
}
//#endregion
//#region node_modules/@base-ui/react/drawer/index.parts.mjs
var index_parts_exports$9 = /* @__PURE__ */ __exportAll({
	Backdrop: () => DrawerBackdrop,
	Close: () => DrawerClose,
	Content: () => DrawerContent,
	Description: () => DrawerDescription,
	Handle: () => DrawerHandle,
	Indent: () => DrawerIndent,
	IndentBackground: () => DrawerIndentBackground,
	Popup: () => DrawerPopup,
	Portal: () => DrawerPortal,
	Provider: () => DrawerProvider,
	Root: () => DrawerRoot,
	SwipeArea: () => DrawerSwipeArea,
	Title: () => DrawerTitle,
	Trigger: () => DrawerTrigger,
	Viewport: () => DrawerViewport,
	VirtualKeyboardProvider: () => DrawerVirtualKeyboardProvider,
	createHandle: () => createDrawerHandle
});
//#endregion
//#region node_modules/@base-ui/react/fieldset/root/FieldsetRootContext.mjs
var FieldsetRootContext = /*#__PURE__*/ import_react.createContext(void 0);
FieldsetRootContext.displayName = "FieldsetRootContext";
function useFieldsetRootContext(optional = false) {
	const context = import_react.useContext(FieldsetRootContext);
	if (!context && !optional) throw new Error("Base UI: FieldsetRootContext is missing. Fieldset parts must be placed within <Fieldset.Root>.");
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/internals/labelable-provider/LabelableProvider.mjs
var LabelableProvider = function LabelableProvider(props) {
	const defaultId = useBaseUiId();
	const initialControlId = props.controlId === void 0 ? defaultId : props.controlId;
	const [controlId, setControlIdState] = import_react.useState(initialControlId);
	const [labelId, setLabelId] = import_react.useState(props.labelId);
	const [messageIds, setMessageIds] = import_react.useState([]);
	const registrationsRef = useRefWithInit(() => /* @__PURE__ */ new Map());
	const { messageIds: parentMessageIds } = useLabelableContext();
	const registerControlId = useStableCallback((source, nextId) => {
		const registrations = registrationsRef.current;
		if (nextId === void 0) {
			registrations.delete(source);
			return;
		}
		registrations.set(source, nextId);
		setControlIdState((prev) => {
			if (registrations.size === 0) return;
			let nextControlId;
			for (const id of registrations.values()) {
				if (prev !== void 0 && id === prev) return prev;
				if (nextControlId === void 0) nextControlId = id;
			}
			return nextControlId;
		});
	});
	const getDescriptionProps = import_react.useCallback((externalProps) => {
		const ids = externalProps["aria-describedby"] ? externalProps["aria-describedby"].split(" ") : [];
		ids.push(...parentMessageIds, ...messageIds);
		return {
			...externalProps,
			"aria-describedby": Array.from(new Set(ids)).join(" ") || void 0
		};
	}, [parentMessageIds, messageIds]);
	const contextValue = import_react.useMemo(() => ({
		controlId,
		registerControlId,
		labelId,
		setLabelId,
		messageIds,
		setMessageIds,
		getDescriptionProps
	}), [
		controlId,
		registerControlId,
		labelId,
		setLabelId,
		messageIds,
		setMessageIds,
		getDescriptionProps
	]);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(LabelableContext.Provider, {
		value: contextValue,
		children: props.children
	});
};
LabelableProvider.displayName = "LabelableProvider";
//#endregion
//#region node_modules/@base-ui/react/internals/field-register-control/useFieldControlRegistration.mjs
function useFieldControlRegistration(params) {
	const { commit, invalid, markedDirtyRef, name, setRegisteredFieldName, registeredFieldIdRef, setValidityData, validityData } = params;
	const { formRef } = useFormContext();
	const activeFieldControlSourceRef = import_react.useRef(null);
	const registrationRef = import_react.useRef(null);
	const initialValueCapturedRef = import_react.useRef(false);
	const getValueForForm = useStableCallback(() => {
		const registration = registrationRef.current;
		if (!registration) return;
		if (registration.getValue) return registration.getValue();
		return registration.value;
	});
	function getRegistrationValue(registration) {
		return registration.value === void 0 ? getValueForForm() : registration.value;
	}
	const validate = useStableCallback(() => {
		const registration = registrationRef.current;
		markedDirtyRef.current = true;
		if (!registration) {
			commit(validityData.value);
			return;
		}
		commit(getRegistrationValue(registration));
	});
	function refreshRegistration() {
		const registration = registrationRef.current;
		if (!registration || !registration.id) return;
		formRef.current.fields.set(registration.id, {
			getValue: getValueForForm,
			name: name ?? registration.name,
			controlRef: registration.controlRef,
			validityData: getCombinedFieldValidityData(validityData, invalid),
			validate
		});
	}
	function deleteRegistration(id = registrationRef.current?.id) {
		if (id) formRef.current.fields.delete(id);
	}
	function captureInitialValue(registration) {
		if (initialValueCapturedRef.current) return;
		initialValueCapturedRef.current = true;
		const initialValue = getRegistrationValue(registration);
		setValidityData((prev) => prev.initialValue === initialValue ? prev : {
			...prev,
			initialValue
		});
	}
	useIsoLayoutEffect(() => {
		const registration = registrationRef.current;
		if (!registration || !registration.id) return;
		setRegisteredFieldName(name ? void 0 : registration.name);
		formRef.current.fields.set(registration.id, {
			getValue: getValueForForm,
			name: name ?? registration.name,
			controlRef: registration.controlRef,
			validityData: getCombinedFieldValidityData(validityData, invalid),
			validate
		});
	}, [
		formRef,
		getValueForForm,
		invalid,
		name,
		setRegisteredFieldName,
		validate,
		validityData
	]);
	useIsoLayoutEffect(() => {
		const fields = formRef.current.fields;
		return () => {
			const id = registrationRef.current?.id;
			if (id) fields.delete(id);
		};
	}, [formRef]);
	return [validate, useStableCallback((source, registration) => {
		if (!registration) {
			if (activeFieldControlSourceRef.current === source) {
				activeFieldControlSourceRef.current = null;
				deleteRegistration();
				registrationRef.current = null;
				setRegisteredFieldName(void 0);
				registeredFieldIdRef.current = void 0;
			}
			return;
		}
		const previousId = registrationRef.current?.id;
		activeFieldControlSourceRef.current = source;
		registrationRef.current = registration;
		if (!name) setRegisteredFieldName(registration.name);
		registeredFieldIdRef.current = registration.id;
		if (previousId && previousId !== registration.id) deleteRegistration(previousId);
		captureInitialValue(registration);
		refreshRegistration();
	})];
}
//#endregion
//#region node_modules/@base-ui/react/field/root/FieldRoot.mjs
/**
* @internal
*/
var FieldRootInner = /*#__PURE__*/ import_react.forwardRef(function FieldRootInner(componentProps, forwardedRef) {
	const { errors, validationMode: formValidationMode, submitAttemptedRef } = useFormContext();
	const { render, className, validate: validateProp, validationDebounceTime = 0, validationMode = formValidationMode, name, disabled: disabledProp = false, invalid: invalidProp, dirty: dirtyProp, touched: touchedProp, actionsRef, style, ...elementProps } = componentProps;
	const disabledFieldset = useFieldsetRootContext(true)?.disabled;
	const validate = useStableCallback(validateProp || (() => null));
	const disabled = disabledFieldset || disabledProp;
	const [touchedState, setTouchedUnwrapped] = import_react.useState(false);
	const [dirtyState, setDirtyUnwrapped] = import_react.useState(false);
	const [filled, setFilled] = import_react.useState(false);
	const [focused, setFocused] = import_react.useState(false);
	const dirty = dirtyProp ?? dirtyState;
	const touched = touchedProp ?? touchedState;
	const markedDirtyRef = import_react.useRef(dirty);
	const registeredFieldIdRef = import_react.useRef(void 0);
	const [registeredFieldName, setRegisteredFieldName] = import_react.useState();
	const effectiveName = name ?? registeredFieldName;
	useIsoLayoutEffect(() => {
		if (dirtyProp !== void 0) markedDirtyRef.current = dirtyProp;
	}, [dirtyProp]);
	const setDirty = useStableCallback((value) => {
		if (dirtyProp !== void 0) return;
		if (value) markedDirtyRef.current = true;
		setDirtyUnwrapped(value);
	});
	const setTouched = useStableCallback((value) => {
		if (touchedProp !== void 0) return;
		setTouchedUnwrapped(value);
	});
	const shouldValidateOnChange = useStableCallback(() => validationMode === "onChange" || validationMode === "onSubmit" && submitAttemptedRef.current);
	const formError = effectiveName && Object.hasOwn(errors, effectiveName) ? errors[effectiveName] : null;
	const hasFormError = !!(Array.isArray(formError) ? formError.length : formError);
	const invalid = invalidProp === true || hasFormError;
	const [validityData, setValidityData] = import_react.useState({
		state: DEFAULT_VALIDITY_STATE,
		error: "",
		errors: [],
		value: null,
		initialValue: null
	});
	const valid = !invalid && (disabled ? null : validityData.state.valid);
	const state = import_react.useMemo(() => ({
		disabled,
		touched,
		dirty,
		valid,
		filled,
		focused
	}), [
		disabled,
		touched,
		dirty,
		valid,
		filled,
		focused
	]);
	const validation = useFieldValidation({
		setValidityData,
		validate,
		validityData,
		validationDebounceTime,
		invalid,
		markedDirtyRef,
		state,
		shouldValidateOnChange,
		registeredFieldIdRef
	});
	const [validateFieldControl, registerFieldControl] = useFieldControlRegistration({
		commit: validation.commit,
		invalid,
		markedDirtyRef,
		name,
		setRegisteredFieldName,
		registeredFieldIdRef,
		setValidityData,
		validityData
	});
	import_react.useImperativeHandle(actionsRef, () => ({ validate: validateFieldControl }), [validateFieldControl]);
	const contextValue = import_react.useMemo(() => ({
		invalid,
		name: effectiveName,
		validityData,
		setValidityData,
		disabled,
		setTouched,
		setDirty,
		setFilled,
		setFocused,
		validationMode,
		shouldValidateOnChange,
		state,
		registerFieldControl,
		validation
	}), [
		invalid,
		effectiveName,
		validityData,
		disabled,
		setTouched,
		setDirty,
		setFilled,
		setFocused,
		validationMode,
		shouldValidateOnChange,
		state,
		registerFieldControl,
		validation
	]);
	const element = useRenderElement("div", componentProps, {
		ref: forwardedRef,
		state,
		props: elementProps,
		stateAttributesMapping: fieldValidityMapping
	});
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(FieldRootContext.Provider, {
		value: contextValue,
		children: element
	});
});
FieldRootInner.displayName = "FieldRootInner";
var FieldRoot = /*#__PURE__*/ import_react.forwardRef(function FieldRoot(componentProps, forwardedRef) {
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(LabelableProvider, { children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(FieldRootInner, {
		...componentProps,
		ref: forwardedRef
	}) });
});
FieldRoot.displayName = "FieldRoot";
//#endregion
//#region node_modules/@base-ui/react/field/label/FieldLabel.mjs
/**
* An accessible label that is automatically associated with the field control.
* Renders a `<label>` element.
*
* Documentation: [Base UI Field](https://base-ui.com/react/components/field)
*/
var FieldLabel = /*#__PURE__*/ import_react.forwardRef(function FieldLabel(componentProps, forwardedRef) {
	const { render, className, style, id: idProp, nativeLabel = true, ...elementProps } = componentProps;
	const fieldRootContext = useFieldRootContext(false);
	const fieldItemContext = useFieldItemContext();
	const { labelId } = useLabelableContext();
	const state = {
		...fieldRootContext.state,
		disabled: fieldRootContext.disabled || fieldItemContext.disabled
	};
	const labelRef = import_react.useRef(null);
	const labelProps = useLabel({
		id: labelId ?? idProp,
		native: nativeLabel
	});
	import_react.useEffect(() => {
		if (!labelRef.current) return;
		const isLabelTag = labelRef.current.tagName === "LABEL";
		if (nativeLabel) {
			if (!isLabelTag) error(`<Field.Label> expected a <label> element because the \`nativeLabel\` prop is true. Rendering a non-<label> disables native label association, so \`htmlFor\` will not work. Use a real <label> in the \`render\` prop, or set \`nativeLabel\` to \`false\`.${SafeReact.captureOwnerStack?.() || ""}`);
		} else if (isLabelTag) error(`<Field.Label> expected a non-<label> element because the \`nativeLabel\` prop is false. Rendering a <label> assumes native label behavior while Base UI treats it as non-native, which can cause unexpected pointer behavior. Use a non-<label> in the \`render\` prop, or set \`nativeLabel\` to \`true\`.${SafeReact.captureOwnerStack?.() || ""}`);
	}, [nativeLabel]);
	return useRenderElement("label", componentProps, {
		ref: [forwardedRef, labelRef],
		state,
		props: [labelProps, elementProps],
		stateAttributesMapping: fieldValidityMapping
	});
});
FieldLabel.displayName = "FieldLabel";
//#endregion
//#region node_modules/@base-ui/react/field/error/FieldError.mjs
var stateAttributesMapping$10 = {
	...fieldValidityMapping,
	...transitionStatusMapping
};
/**
* An error message displayed if the field control fails validation.
* Renders a `<div>` element.
*
* Documentation: [Base UI Field](https://base-ui.com/react/components/field)
*/
var FieldError = /*#__PURE__*/ import_react.forwardRef(function FieldError(componentProps, forwardedRef) {
	const { render, id: idProp, className, match, style, ...elementProps } = componentProps;
	const id = useBaseUiId(idProp);
	const { validityData, state: fieldState, name } = useFieldRootContext(false);
	const { setMessageIds } = useLabelableContext();
	const { errors } = useFormContext();
	const formError = name && Object.hasOwn(errors, name) ? errors[name] : null;
	const hasFormError = !!(Array.isArray(formError) ? formError.length : formError);
	const hasSpecificMatch = typeof match === "string";
	let rendered = false;
	if (match === true) rendered = true;
	else if (fieldState.disabled) rendered = false;
	else if (hasSpecificMatch) rendered = Boolean(validityData.state[match]);
	else rendered = hasFormError || validityData.state.valid === false;
	const { mounted, transitionStatus, setMounted } = useTransitionStatus(rendered);
	useIsoLayoutEffect(() => {
		if (!rendered || !id) return;
		setMessageIds((v) => v.concat(id));
		return () => {
			setMessageIds((v) => v.filter((item) => item !== id));
		};
	}, [
		rendered,
		id,
		setMessageIds
	]);
	const errorRef = import_react.useRef(null);
	const [lastRenderedMessage, setLastRenderedMessage] = import_react.useState(null);
	const [lastRenderedMessageKey, setLastRenderedMessageKey] = import_react.useState(null);
	let error = validityData.error;
	if (!hasSpecificMatch && hasFormError) error = formError;
	else if (validityData.errors.length > 1) error = validityData.errors;
	let errorMessage = error;
	if (Array.isArray(error)) errorMessage = error.length > 1 ? /*#__PURE__*/ (0, import_jsx_runtime.jsx)("ul", { children: error.map((message) => /*#__PURE__*/ (0, import_jsx_runtime.jsx)("li", { children: message }, message)) }) : error[0];
	const errorKey = Array.isArray(error) ? JSON.stringify(error) : error;
	if (rendered && errorKey !== lastRenderedMessageKey) {
		setLastRenderedMessageKey(errorKey);
		setLastRenderedMessage(errorMessage);
	}
	useOpenChangeComplete({
		open: rendered,
		ref: errorRef,
		onComplete() {
			if (!rendered) setMounted(false);
		}
	});
	const state = {
		...fieldState,
		transitionStatus
	};
	const element = useRenderElement("div", componentProps, {
		ref: [forwardedRef, errorRef],
		state,
		props: [{
			id,
			children: rendered ? errorMessage : lastRenderedMessage
		}, elementProps],
		stateAttributesMapping: stateAttributesMapping$10,
		enabled: mounted
	});
	if (!mounted) return null;
	return element;
});
FieldError.displayName = "FieldError";
//#endregion
//#region node_modules/@base-ui/react/field/description/FieldDescription.mjs
/**
* A paragraph with additional information about the field.
* Renders a `<p>` element.
*
* Documentation: [Base UI Field](https://base-ui.com/react/components/field)
*/
var FieldDescription = /*#__PURE__*/ import_react.forwardRef(function FieldDescription(componentProps, forwardedRef) {
	const { render, id: idProp, className, style, ...elementProps } = componentProps;
	const id = useBaseUiId(idProp);
	const fieldRootContext = useFieldRootContext(false);
	const fieldItemContext = useFieldItemContext();
	const { setMessageIds } = useLabelableContext();
	const state = {
		...fieldRootContext.state,
		disabled: fieldRootContext.disabled || fieldItemContext.disabled
	};
	useIsoLayoutEffect(() => {
		if (!id) return;
		setMessageIds((v) => v.concat(id));
		return () => {
			setMessageIds((v) => v.filter((item) => item !== id));
		};
	}, [id, setMessageIds]);
	return useRenderElement("p", componentProps, {
		ref: forwardedRef,
		state,
		props: [{ id }, elementProps],
		stateAttributesMapping: fieldValidityMapping
	});
});
FieldDescription.displayName = "FieldDescription";
//#endregion
//#region node_modules/@base-ui/react/field/control/FieldControl.mjs
/**
* The form control to label and validate.
* Renders an `<input>` element.
*
* You can omit this part and use any Base UI input component instead. For example,
* [Input](https://base-ui.com/react/components/input), [Checkbox](https://base-ui.com/react/components/checkbox),
* or [Select](https://base-ui.com/react/components/select), among others, will work with Field out of the box.
*
* Documentation: [Base UI Field](https://base-ui.com/react/components/field)
*/
var FieldControl = /*#__PURE__*/ import_react.forwardRef(function FieldControl(componentProps, forwardedRef) {
	const { render, className, id: idProp, name: nameProp, value: valueProp, disabled: disabledProp = false, onValueChange, defaultValue, autoFocus = false, style, ...elementProps } = componentProps;
	const { state: fieldState, name: fieldName, disabled: fieldDisabled, setTouched, setDirty, validityData, setFocused, setFilled, validationMode, validation } = useFieldRootContext();
	const { clearErrors } = useFormContext();
	const disabled = fieldDisabled || disabledProp;
	const name = fieldName ?? nameProp;
	const state = {
		...fieldState,
		disabled
	};
	const { labelId } = useLabelableContext();
	const id = useLabelableId({ id: idProp });
	useIsoLayoutEffect(() => {
		const hasExternalValue = valueProp != null;
		if (validation.inputRef.current?.value || hasExternalValue && valueProp !== "") setFilled(true);
		else if (hasExternalValue && valueProp === "") setFilled(false);
	}, [
		validation.inputRef,
		setFilled,
		valueProp
	]);
	const inputRef = import_react.useRef(null);
	useIsoLayoutEffect(() => {
		if (autoFocus && inputRef.current === activeElement(ownerDocument(inputRef.current))) setFocused(true);
	}, [autoFocus, setFocused]);
	const [valueUnwrapped] = useControlled({
		controlled: valueProp,
		default: defaultValue,
		name: "FieldControl",
		state: "value"
	});
	const isControlled = valueProp !== void 0;
	const value = isControlled ? valueUnwrapped : void 0;
	const getValueFromInput = useStableCallback(() => validation.inputRef.current?.value);
	useRegisterFieldControl(validation.inputRef, id, value, getValueFromInput, !disabled, nameProp);
	return useRenderElement("input", componentProps, {
		ref: [forwardedRef, inputRef],
		state,
		props: [
			{
				id,
				disabled,
				name,
				ref: validation.inputRef,
				"aria-labelledby": labelId,
				autoFocus,
				...isControlled ? { value } : { defaultValue },
				onChange(event) {
					const inputValue = event.currentTarget.value;
					onValueChange?.(inputValue, createChangeEventDetails(none, event.nativeEvent));
					setDirty(inputValue !== (validityData.initialValue ?? ""));
					setFilled(inputValue !== "");
					if (!event.nativeEvent.defaultPrevented) {
						clearErrors(name);
						validation.change(inputValue);
					}
				},
				onFocus() {
					setFocused(true);
				},
				onBlur(event) {
					setTouched(true);
					setFocused(false);
					if (validationMode === "onBlur") validation.commit(event.currentTarget.value);
				},
				onKeyDown(event) {
					if (event.currentTarget.tagName === "INPUT" && event.key === "Enter") {
						setTouched(true);
						validation.commit(event.currentTarget.value);
					}
				}
			},
			elementProps,
			(props) => validation.getValidationProps(disabled, props)
		],
		stateAttributesMapping: fieldValidityMapping
	});
});
FieldControl.displayName = "FieldControl";
//#endregion
//#region node_modules/@base-ui/react/field/validity/FieldValidity.mjs
/**
* Used to display a custom message based on the field's validity.
* Requires `children` to be a function that accepts field validity state as an argument.
*
* Documentation: [Base UI Field](https://base-ui.com/react/components/field)
*/
var FieldValidity = function FieldValidity(props) {
	const { children } = props;
	const { validityData, invalid } = useFieldRootContext(false);
	const combinedFieldValidityData = import_react.useMemo(() => getCombinedFieldValidityData(validityData, invalid), [validityData, invalid]);
	const { transitionStatus } = useTransitionStatus(combinedFieldValidityData.state.valid === false);
	const fieldValidityState = import_react.useMemo(() => {
		return {
			...combinedFieldValidityData,
			validity: combinedFieldValidityData.state,
			transitionStatus
		};
	}, [combinedFieldValidityData, transitionStatus]);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: children(fieldValidityState) });
};
FieldValidity.displayName = "FieldValidity";
//#endregion
//#region node_modules/@base-ui/react/field/item/FieldItem.mjs
/**
* Groups individual items in a checkbox group or radio group with a label and description.
* Renders a `<div>` element.
*
* Documentation: [Base UI Field](https://base-ui.com/react/components/field)
*/
var FieldItem = /*#__PURE__*/ import_react.forwardRef(function FieldItem(componentProps, forwardedRef) {
	const { render, className, style, disabled: disabledProp = false, ...elementProps } = componentProps;
	const { state: fieldState, disabled: rootDisabled } = useFieldRootContext(false);
	const disabled = rootDisabled || disabledProp;
	const state = {
		...fieldState,
		disabled
	};
	const fieldItemContext = import_react.useMemo(() => ({ disabled }), [disabled]);
	const element = useRenderElement("div", componentProps, {
		ref: forwardedRef,
		state,
		props: elementProps,
		stateAttributesMapping: fieldValidityMapping
	});
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(LabelableProvider, { children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(FieldItemContext.Provider, {
		value: fieldItemContext,
		children: element
	}) });
});
FieldItem.displayName = "FieldItem";
//#endregion
//#region node_modules/@base-ui/react/field/index.parts.mjs
var index_parts_exports$10 = /* @__PURE__ */ __exportAll({
	Control: () => FieldControl,
	Description: () => FieldDescription,
	Error: () => FieldError,
	Item: () => FieldItem,
	Label: () => FieldLabel,
	Root: () => FieldRoot,
	Validity: () => FieldValidity
});
//#endregion
//#region node_modules/@base-ui/react/fieldset/root/FieldsetRoot.mjs
/**
* Groups a shared legend with related controls.
* Renders a `<fieldset>` element.
*
* Documentation: [Base UI Fieldset](https://base-ui.com/react/components/fieldset)
*/
var FieldsetRoot = /*#__PURE__*/ import_react.forwardRef(function FieldsetRoot(componentProps, forwardedRef) {
	const { render, className, style, disabled: disabledProp = false, ...elementProps } = componentProps;
	const [legendId, setLegendId] = import_react.useState(void 0);
	const disabled = useFieldsetRootContext(true)?.disabled || disabledProp;
	const element = useRenderElement("fieldset", componentProps, {
		ref: forwardedRef,
		state: { disabled },
		props: [{
			"aria-labelledby": legendId,
			disabled
		}, elementProps]
	});
	const contextValue = import_react.useMemo(() => ({
		legendId,
		setLegendId,
		disabled
	}), [
		legendId,
		setLegendId,
		disabled
	]);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(FieldsetRootContext.Provider, {
		value: contextValue,
		children: element
	});
});
FieldsetRoot.displayName = "FieldsetRoot";
//#endregion
//#region node_modules/@base-ui/react/fieldset/legend/FieldsetLegend.mjs
/**
* An accessible label that is automatically associated with the fieldset.
* Renders a `<div>` element.
*
* Documentation: [Base UI Fieldset](https://base-ui.com/react/components/fieldset)
*/
var FieldsetLegend = /*#__PURE__*/ import_react.forwardRef(function FieldsetLegend(componentProps, forwardedRef) {
	const { render, className, style, id: idProp, ...elementProps } = componentProps;
	const { disabled, setLegendId } = useFieldsetRootContext();
	const id = useRegisteredLabelId(idProp, setLegendId);
	return useRenderElement("div", componentProps, {
		state: { disabled },
		ref: forwardedRef,
		props: [{ id }, elementProps]
	});
});
FieldsetLegend.displayName = "FieldsetLegend";
//#endregion
//#region node_modules/@base-ui/react/fieldset/index.parts.mjs
var index_parts_exports$11 = /* @__PURE__ */ __exportAll({
	Legend: () => FieldsetLegend,
	Root: () => FieldsetRoot
});
//#endregion
//#region node_modules/@base-ui/react/form/Form.mjs
/**
* A native form element with consolidated error handling.
* Renders a `<form>` element.
*
* Documentation: [Base UI Form](https://base-ui.com/react/components/form)
*/
var Form = /*#__PURE__*/ import_react.forwardRef(function Form(componentProps, forwardedRef) {
	const { render, className, validationMode = "onSubmit", errors: externalErrors, onSubmit, onFormSubmit, actionsRef, style, ...elementProps } = componentProps;
	const formRef = import_react.useRef({ fields: /* @__PURE__ */ new Map() });
	const elementRef = import_react.useRef(null);
	const submittedRef = import_react.useRef(false);
	const submitAttemptedRef = import_react.useRef(false);
	const focusFirstInvalid = useStableCallback(() => {
		let hasInvalid = false;
		let firstControl = null;
		for (const field of formRef.current.fields.values()) {
			if (field.validityData.state.valid !== false) continue;
			hasInvalid = true;
			const control = field.controlRef.current;
			if (control && (!firstControl || comesBeforeInSameTree(control, firstControl))) firstControl = control;
		}
		if (firstControl) {
			firstControl.focus();
			if (firstControl.tagName === "INPUT") firstControl.select();
			return true;
		}
		return hasInvalid;
	});
	const [errors, setErrors] = import_react.useState(externalErrors);
	useValueChanged(externalErrors, () => {
		setErrors(externalErrors);
	});
	import_react.useEffect(() => {
		if (!submittedRef.current) return;
		submittedRef.current = false;
		focusFirstInvalid();
	}, [errors, focusFirstInvalid]);
	import_react.useImperativeHandle(actionsRef, () => ({ validate(fieldName) {
		if (fieldName) Array.from(formRef.current.fields.values()).find((field) => field.name === fieldName)?.validate();
		else formRef.current.fields.forEach((field) => {
			field.validate();
		});
	} }), []);
	const element = useRenderElement("form", componentProps, {
		ref: [forwardedRef, elementRef],
		props: [{
			noValidate: true,
			onSubmit(event) {
				submitAttemptedRef.current = true;
				formRef.current.fields.forEach((field) => {
					field.validate();
				});
				if (focusFirstInvalid()) {
					event.preventDefault();
					return;
				}
				submittedRef.current = true;
				onSubmit?.(event);
				if (onFormSubmit) {
					event.preventDefault();
					const formValues = {};
					formRef.current.fields.forEach((field) => {
						if (field.name) formValues[field.name] = field.getValue();
					});
					onFormSubmit(formValues, createGenericEventDetails(none, event.nativeEvent));
				}
			}
		}, elementProps]
	});
	const clearErrors = useStableCallback((name) => {
		if (name && errors && Object.hasOwn(errors, name)) {
			const nextErrors = { ...errors };
			delete nextErrors[name];
			setErrors(nextErrors);
		}
	});
	const contextValue = import_react.useMemo(() => ({
		elementRef,
		formRef,
		validationMode,
		errors: errors ?? EMPTY_OBJECT,
		clearErrors,
		submitAttemptedRef
	}), [
		formRef,
		validationMode,
		errors,
		clearErrors
	]);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(FormContext.Provider, {
		value: contextValue,
		children: element
	});
});
Form.displayName = "Form";
function comesBeforeInSameTree(element, reference) {
	const position = element.compareDocumentPosition(reference);
	return (position & Node.DOCUMENT_POSITION_DISCONNECTED) === 0 && (position & Node.DOCUMENT_POSITION_FOLLOWING) !== 0;
}
//#endregion
//#region node_modules/@base-ui/react/input/Input.mjs
/**
* A native input element that automatically works with [Field](https://base-ui.com/react/components/field).
* Renders an `<input>` element.
*
* Documentation: [Base UI Input](https://base-ui.com/react/components/input)
*/
var Input = /*#__PURE__*/ import_react.forwardRef(function Input(props, forwardedRef) {
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(FieldControl, {
		ref: forwardedRef,
		...props
	});
});
Input.displayName = "Input";
//#endregion
//#region node_modules/@base-ui/react/internals/composite/constants.mjs
var ACTIVE_COMPOSITE_ITEM = "data-composite-item-active";
//#endregion
//#region node_modules/@base-ui/react/internals/composite/root/useCompositeRoot.mjs
var EMPTY_ARRAY = [];
function useCompositeRoot(params) {
	const { loopFocus = true, orientation = "both", grid, onLoop, direction, highlightedIndex: externalHighlightedIndex, onHighlightedIndexChange: externalSetHighlightedIndex, rootRef: externalRef, enableHomeAndEndKeys = false, stopEventPropagation, disabledIndices, modifierKeys = EMPTY_ARRAY } = params;
	const [internalHighlightedIndex, internalSetHighlightedIndex] = import_react.useState(0);
	const isGrid = grid != null;
	const rootRef = import_react.useRef(null);
	const mergedRef = useMergedRefs(rootRef, externalRef);
	const elementsRef = import_react.useRef([]);
	const hasSetDefaultIndexRef = import_react.useRef(false);
	const highlightedIndex = externalHighlightedIndex ?? internalHighlightedIndex;
	const onHighlightedIndexChange = useStableCallback((index, shouldScrollIntoView = false) => {
		(externalSetHighlightedIndex ?? internalSetHighlightedIndex)(index);
		if (shouldScrollIntoView) {
			const newActiveItem = elementsRef.current[index];
			scrollIntoViewIfNeeded(rootRef.current, newActiveItem, direction, orientation);
		}
	});
	const onMapChange = useStableCallback((map) => {
		if (map.size === 0 || hasSetDefaultIndexRef.current) return;
		hasSetDefaultIndexRef.current = true;
		const sortedElements = Array.from(map.keys());
		const activeItem = sortedElements.find((compositeElement) => compositeElement?.hasAttribute("data-composite-item-active")) ?? null;
		const activeIndex = activeItem ? map.get(activeItem)?.index ?? -1 : -1;
		if (activeIndex !== -1) onHighlightedIndexChange(activeIndex);
		else if (isListIndexDisabled(sortedElements, highlightedIndex, disabledIndices)) {
			const firstEnabledIndex = findNonDisabledListIndex(sortedElements, { disabledIndices });
			if (!isIndexOutOfListBounds(sortedElements, firstEnabledIndex)) onHighlightedIndexChange(firstEnabledIndex);
		}
		scrollIntoViewIfNeeded(rootRef.current, activeItem, direction, orientation);
	});
	useIsoLayoutEffect(() => {
		if (disabledIndices == null || externalHighlightedIndex != null || !hasSetDefaultIndexRef.current) return;
		const elements = elementsRef.current;
		if (isListIndexDisabled(elements, highlightedIndex, disabledIndices)) {
			const firstEnabledIndex = findNonDisabledListIndex(elements, { disabledIndices });
			if (!isIndexOutOfListBounds(elements, firstEnabledIndex)) onHighlightedIndexChange(firstEnabledIndex);
		}
	}, [
		disabledIndices,
		externalHighlightedIndex,
		highlightedIndex,
		elementsRef,
		onHighlightedIndexChange
	]);
	const wrappedOnLoop = useStableCallback((event, prevIndex, nextIndex) => {
		if (!onLoop) return nextIndex;
		return onLoop(event, prevIndex, nextIndex, elementsRef);
	});
	const onKeyDown = useStableCallback((event) => {
		const isHomeOrEnd = event.key === "Home" || event.key === "End";
		if (!COMPOSITE_KEYS.has(event.key) || !enableHomeAndEndKeys && isHomeOrEnd) return;
		if (isModifierKeySet(event, modifierKeys)) return;
		if (!rootRef.current) return;
		const isRtl = direction === "rtl";
		const horizontalForwardKey = isRtl ? ARROW_LEFT : ARROW_RIGHT;
		const horizontalBackwardKey = isRtl ? ARROW_RIGHT : ARROW_LEFT;
		const forwardKey = orientation === "vertical" ? ARROW_DOWN : horizontalForwardKey;
		const backwardKey = orientation === "vertical" ? ARROW_UP : horizontalBackwardKey;
		const target = getTarget(event.nativeEvent);
		if (target != null && isNativeInput(target) && !isElementDisabled(target)) {
			const selectionStart = target.selectionStart;
			const selectionEnd = target.selectionEnd;
			const textContent = target.value;
			if (selectionStart == null || event.shiftKey || selectionStart !== selectionEnd) return;
			if (event.key !== backwardKey && selectionStart < textContent.length) return;
			if (event.key !== forwardKey && selectionStart > 0) return;
		}
		let nextIndex = highlightedIndex;
		const minIndex = getMinListIndex(elementsRef, disabledIndices);
		const maxIndex = getMaxListIndex(elementsRef, disabledIndices);
		if (grid != null) nextIndex = grid({
			disabledIndices,
			elementsRef,
			event,
			highlightedIndex,
			loopFocus,
			maxIndex,
			minIndex,
			onLoop: wrappedOnLoop,
			orientation,
			rtl: isRtl
		});
		const isForwardKey = orientation !== "vertical" && event.key === horizontalForwardKey || orientation !== "horizontal" && event.key === "ArrowDown";
		const isBackwardKey = orientation !== "vertical" && event.key === horizontalBackwardKey || orientation !== "horizontal" && event.key === "ArrowUp";
		if (enableHomeAndEndKeys) {
			if (event.key === "Home") nextIndex = minIndex;
			else if (event.key === "End") nextIndex = maxIndex;
		}
		if (nextIndex === highlightedIndex && (isForwardKey || isBackwardKey)) if (loopFocus && nextIndex === maxIndex && isForwardKey) {
			nextIndex = minIndex;
			if (onLoop) nextIndex = onLoop(event, highlightedIndex, nextIndex, elementsRef);
		} else if (loopFocus && nextIndex === minIndex && isBackwardKey) {
			nextIndex = maxIndex;
			if (onLoop) nextIndex = onLoop(event, highlightedIndex, nextIndex, elementsRef);
		} else nextIndex = findNonDisabledListIndex(elementsRef.current, {
			startingIndex: nextIndex,
			decrement: isBackwardKey,
			disabledIndices
		});
		if (nextIndex !== highlightedIndex && !isIndexOutOfListBounds(elementsRef.current, nextIndex)) {
			if (stopEventPropagation) event.stopPropagation();
			if (isGrid || isHomeOrEnd || isForwardKey || isBackwardKey) event.preventDefault();
			onHighlightedIndexChange(nextIndex, true);
			queueMicrotask(() => {
				elementsRef.current[nextIndex]?.focus();
			});
		}
	});
	return {
		props: {
			ref: mergedRef,
			onFocus(event) {
				const element = rootRef.current;
				const target = getTarget(event.nativeEvent);
				if (!element || target == null || !isNativeInput(target)) return;
				target.setSelectionRange(0, target.value.length);
			},
			onKeyDown
		},
		highlightedIndex,
		onHighlightedIndexChange,
		elementsRef,
		onMapChange,
		relayKeyboardEvent: onKeyDown
	};
}
function isModifierKeySet(event, ignoredModifierKeys) {
	for (const key of MODIFIER_KEYS$1) {
		if (ignoredModifierKeys.includes(key)) continue;
		if (event.getModifierState(key)) return true;
	}
	return false;
}
//#endregion
//#region node_modules/@base-ui/react/internals/composite/root/CompositeRoot.mjs
function CompositeRoot(componentProps) {
	const { render, className, style, refs = EMPTY_ARRAY$1, props = EMPTY_ARRAY$1, state = EMPTY_OBJECT, stateAttributesMapping, highlightedIndex: highlightedIndexProp, onHighlightedIndexChange: onHighlightedIndexChangeProp, orientation, grid, loopFocus, onLoop, enableHomeAndEndKeys, onMapChange: onMapChangeProp, stopEventPropagation = true, rootRef, disabledIndices, modifierKeys, highlightItemOnHover = false, tag = "div", ...elementProps } = componentProps;
	const { props: defaultProps, highlightedIndex, onHighlightedIndexChange, elementsRef, onMapChange: onMapChangeUnwrapped, relayKeyboardEvent } = useCompositeRoot({
		grid,
		loopFocus,
		onLoop,
		orientation,
		highlightedIndex: highlightedIndexProp,
		onHighlightedIndexChange: onHighlightedIndexChangeProp,
		rootRef,
		stopEventPropagation,
		enableHomeAndEndKeys,
		direction: useDirection(),
		disabledIndices,
		modifierKeys
	});
	const element = useRenderElement(tag, componentProps, {
		state,
		ref: refs,
		props: [
			defaultProps,
			...props,
			elementProps
		],
		stateAttributesMapping
	});
	const contextValue = import_react.useMemo(() => ({
		highlightedIndex,
		onHighlightedIndexChange,
		highlightItemOnHover,
		relayKeyboardEvent
	}), [
		highlightedIndex,
		onHighlightedIndexChange,
		highlightItemOnHover,
		relayKeyboardEvent
	]);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(CompositeRootContext.Provider, {
		value: contextValue,
		children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(CompositeList, {
			elementsRef,
			onMapChange: (newMap) => {
				onMapChangeProp?.(newMap);
				onMapChangeUnwrapped(newMap);
			},
			children: element
		})
	});
}
//#endregion
//#region node_modules/@base-ui/react/menubar/MenubarDataAttributes.mjs
var MenubarDataAttributes = /*#__PURE__*/ function(MenubarDataAttributes) {
	/**
	* Present when the corresponding menubar is modal.
	*/
	MenubarDataAttributes["modal"] = "data-modal";
	/**
	* Determines the orientation of the menubar.
	* @type {'horizontal' | 'vertical'}
	*/
	MenubarDataAttributes["orientation"] = "data-orientation";
	/**
	* Present when any submenu within the menubar is open.
	*/
	MenubarDataAttributes["hasSubmenuOpen"] = "data-has-submenu-open";
	return MenubarDataAttributes;
}({});
//#endregion
//#region node_modules/@base-ui/react/menubar/Menubar.mjs
var menubarStateAttributesMapping = { hasSubmenuOpen(value) {
	return value ? { [MenubarDataAttributes.hasSubmenuOpen]: "" } : null;
} };
/**
* The container for menus.
*
* Documentation: [Base UI Menubar](https://base-ui.com/react/components/menubar)
*/
var Menubar = /*#__PURE__*/ import_react.forwardRef(function Menubar(props, forwardedRef) {
	const { orientation = "horizontal", loopFocus = true, render, className, modal = true, disabled = false, id: idProp, style, ...elementProps } = props;
	const [contentElement, setContentElement] = import_react.useState(null);
	const [hasSubmenuOpen, setHasSubmenuOpen] = import_react.useState(false);
	const id = useBaseUiId(idProp);
	const state = {
		orientation,
		modal,
		hasSubmenuOpen
	};
	const contentRef = import_react.useRef(null);
	const allowMouseUpTriggerRef = import_react.useRef(false);
	const context = import_react.useMemo(() => ({
		contentElement,
		setContentElement,
		setHasSubmenuOpen,
		hasSubmenuOpen,
		modal,
		disabled,
		orientation,
		allowMouseUpTriggerRef,
		rootId: id
	}), [
		contentElement,
		hasSubmenuOpen,
		modal,
		disabled,
		orientation,
		id
	]);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(MenubarContext.Provider, {
		value: context,
		children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(FloatingTree, { children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(MenubarContent, { children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(CompositeRoot, {
			render,
			className,
			style,
			state,
			stateAttributesMapping: menubarStateAttributesMapping,
			refs: [
				forwardedRef,
				setContentElement,
				contentRef
			],
			props: [{
				role: "menubar",
				id,
				"aria-orientation": orientation
			}, elementProps],
			orientation,
			loopFocus,
			enableHomeAndEndKeys: true,
			highlightItemOnHover: hasSubmenuOpen
		}) }) })
	});
});
Menubar.displayName = "Menubar";
function MenubarContent(props) {
	const nodeId = useFloatingNodeId();
	const { events: menuEvents } = useFloatingTree();
	const rootContext = useMenubarContext();
	import_react.useEffect(() => {
		function onSubmenuOpenChange(details) {
			if (!details.nodeId || details.parentNodeId !== nodeId) return;
			if (details.open) {
				if (!rootContext.hasSubmenuOpen) rootContext.setHasSubmenuOpen(true);
			} else if (details.reason !== "sibling-open" && details.reason !== "list-navigation") rootContext.setHasSubmenuOpen(false);
		}
		menuEvents.on("menuopenchange", onSubmenuOpenChange);
		return () => {
			menuEvents.off("menuopenchange", onSubmenuOpenChange);
		};
	}, [
		menuEvents,
		nodeId,
		rootContext
	]);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(FloatingNode, {
		id: nodeId,
		children: props.children
	});
}
//#endregion
//#region node_modules/@base-ui/react/meter/root/MeterRootContext.mjs
var MeterRootContext = /*#__PURE__*/ import_react.createContext(void 0);
MeterRootContext.displayName = "MeterRootContext";
function useMeterRootContext() {
	const context = import_react.useContext(MeterRootContext);
	if (context === void 0) throw new Error("Base UI: MeterRootContext is missing. Meter parts must be placed within <Meter.Root>.");
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/utils/formatNumber.mjs
var cache = /* @__PURE__ */ new Map();
function getFormatter(locale, options) {
	const optionsString = JSON.stringify({
		locale: stringifyLocale(locale),
		options
	});
	const cachedFormatter = cache.get(optionsString);
	if (cachedFormatter) return cachedFormatter;
	const formatter = new Intl.NumberFormat(locale, options);
	cache.set(optionsString, formatter);
	return formatter;
}
function formatNumber(value, locale, options) {
	if (value == null) return "";
	return getFormatter(locale, options).format(value);
}
//#endregion
//#region node_modules/@base-ui/react/utils/valueToPercent.mjs
function valueToPercent(value, min, max) {
	return (value - min) * 100 / (max - min);
}
//#endregion
//#region node_modules/@base-ui/react/meter/root/MeterRoot.mjs
/**
* Groups all parts of the meter and provides the value for screen readers.
* Renders a `<div>` element.
*
* Documentation: [Base UI Meter](https://base-ui.com/react/components/meter)
*/
var MeterRoot = /*#__PURE__*/ import_react.forwardRef(function MeterRoot(componentProps, forwardedRef) {
	const { format, getAriaValueText, locale, max = 100, min = 0, value: valueProp, render, className, children, style, ...elementProps } = componentProps;
	const [labelId, setLabelId] = import_react.useState();
	const rawPercentage = valueToPercent(valueProp, min, max);
	const percentageValue = clamp(Number.isNaN(rawPercentage) ? 0 : rawPercentage, 0, 100);
	const clampedValue = clamp(Number.isNaN(valueProp) ? min : valueProp, min, max);
	const formattedValue = format ? formatNumber(clampedValue, locale, format) : formatNumber(percentageValue / 100, locale, { style: "percent" });
	let ariaValuetext = formattedValue;
	if (getAriaValueText) ariaValuetext = getAriaValueText(formattedValue, valueProp);
	const defaultProps = {
		"aria-labelledby": labelId,
		"aria-valuemax": max,
		"aria-valuemin": min,
		"aria-valuenow": clampedValue,
		"aria-valuetext": ariaValuetext,
		role: "meter",
		children: /*#__PURE__*/ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [children, /*#__PURE__*/ (0, import_jsx_runtime.jsx)("span", {
			role: "presentation",
			style: visuallyHidden,
			children: "x"
		})] })
	};
	const contextValue = import_react.useMemo(() => ({
		formattedValue,
		percentageValue,
		setLabelId,
		value: valueProp
	}), [
		formattedValue,
		percentageValue,
		setLabelId,
		valueProp
	]);
	const element = useRenderElement("div", componentProps, {
		ref: forwardedRef,
		props: [defaultProps, elementProps]
	});
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(MeterRootContext.Provider, {
		value: contextValue,
		children: element
	});
});
MeterRoot.displayName = "MeterRoot";
//#endregion
//#region node_modules/@base-ui/react/meter/track/MeterTrack.mjs
/**
* Contains the meter indicator and represents the entire range of the meter.
* Renders a `<div>` element.
*
* Documentation: [Base UI Meter](https://base-ui.com/react/components/meter)
*/
var MeterTrack = /*#__PURE__*/ import_react.forwardRef(function MeterTrack(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	return useRenderElement("div", componentProps, {
		ref: forwardedRef,
		props: elementProps
	});
});
MeterTrack.displayName = "MeterTrack";
//#endregion
//#region node_modules/@base-ui/react/meter/indicator/MeterIndicator.mjs
/**
* Visualizes the position of the value along the range.
* Renders a `<div>` element.
*
* Documentation: [Base UI Meter](https://base-ui.com/react/components/meter)
*/
var MeterIndicator = /*#__PURE__*/ import_react.forwardRef(function MeterIndicator(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const { percentageValue } = useMeterRootContext();
	return useRenderElement("div", componentProps, {
		ref: forwardedRef,
		props: [{ style: {
			insetInlineStart: 0,
			height: "inherit",
			width: `${percentageValue}%`
		} }, elementProps]
	});
});
MeterIndicator.displayName = "MeterIndicator";
//#endregion
//#region node_modules/@base-ui/react/meter/value/MeterValue.mjs
/**
* A text element displaying the current value.
* Renders a `<span>` element.
*
* Documentation: [Base UI Meter](https://base-ui.com/react/components/meter)
*/
var MeterValue = /*#__PURE__*/ import_react.forwardRef(function MeterValue(componentProps, forwardedRef) {
	const { className, render, children, style, ...elementProps } = componentProps;
	const { value, formattedValue } = useMeterRootContext();
	return useRenderElement("span", componentProps, {
		ref: forwardedRef,
		props: [{
			"aria-hidden": true,
			children: typeof children === "function" ? children(formattedValue, value) : formattedValue
		}, elementProps]
	});
});
MeterValue.displayName = "MeterValue";
//#endregion
//#region node_modules/@base-ui/react/meter/label/MeterLabel.mjs
/**
* An accessible label for the meter.
* Renders a `<span>` element.
*
* Documentation: [Base UI Meter](https://base-ui.com/react/components/meter)
*/
var MeterLabel = /*#__PURE__*/ import_react.forwardRef(function MeterLabel(componentProps, forwardedRef) {
	const { render, className, style, id: idProp, ...elementProps } = componentProps;
	const { setLabelId } = useMeterRootContext();
	return useRenderElement("span", componentProps, {
		ref: forwardedRef,
		props: [{
			id: useRegisteredLabelId(idProp, setLabelId),
			role: "presentation"
		}, elementProps]
	});
});
MeterLabel.displayName = "MeterLabel";
//#endregion
//#region node_modules/@base-ui/react/meter/index.parts.mjs
var index_parts_exports$13 = /* @__PURE__ */ __exportAll({
	Indicator: () => MeterIndicator,
	Label: () => MeterLabel,
	Root: () => MeterRoot,
	Track: () => MeterTrack,
	Value: () => MeterValue
});
//#endregion
//#region node_modules/@base-ui/react/navigation-menu/root/NavigationMenuRootContext.mjs
var NavigationMenuRootContext = /*#__PURE__*/ import_react.createContext(void 0);
NavigationMenuRootContext.displayName = "NavigationMenuRootContext";
NavigationMenuRootContext.displayName = "NavigationMenuRootContext";
function useNavigationMenuRootContext(optional) {
	const context = import_react.useContext(NavigationMenuRootContext);
	if (context === void 0 && !optional) throw new Error("Base UI: NavigationMenuRootContext is missing. Navigation Menu parts must be placed within <NavigationMenu.Root>.");
	return context;
}
var NavigationMenuTreeContext = /*#__PURE__*/ import_react.createContext(void 0);
NavigationMenuTreeContext.displayName = "NavigationMenuTreeContext";
function useNavigationMenuTreeContext() {
	return import_react.useContext(NavigationMenuTreeContext);
}
//#endregion
//#region node_modules/@base-ui/react/navigation-menu/positioner/NavigationMenuPositionerCssVars.mjs
var NavigationMenuPositionerCssVars = /*#__PURE__*/ function(NavigationMenuPositionerCssVars) {
	/**
	* The available width between the trigger and the edge of the viewport.
	* @type {number}
	*/
	NavigationMenuPositionerCssVars["availableWidth"] = "--available-width";
	/**
	* The available height between the trigger and the edge of the viewport.
	* @type {number}
	*/
	NavigationMenuPositionerCssVars["availableHeight"] = "--available-height";
	/**
	* The anchor's width.
	* @type {number}
	*/
	NavigationMenuPositionerCssVars["anchorWidth"] = "--anchor-width";
	/**
	* The anchor's height.
	* @type {number}
	*/
	NavigationMenuPositionerCssVars["anchorHeight"] = "--anchor-height";
	/**
	* The coordinates that this element is anchored to. Used for animations and transitions.
	* @type {string}
	*/
	NavigationMenuPositionerCssVars["transformOrigin"] = "--transform-origin";
	/**
	* The fixed width of the positioner element.
	* @type {number}
	*/
	NavigationMenuPositionerCssVars["positionerWidth"] = "--positioner-width";
	/**
	* The fixed height of the positioner element.
	* @type {number}
	*/
	NavigationMenuPositionerCssVars["positionerHeight"] = "--positioner-height";
	return NavigationMenuPositionerCssVars;
}({});
//#endregion
//#region node_modules/@base-ui/react/navigation-menu/popup/NavigationMenuPopupCssVars.mjs
var NavigationMenuPopupCssVars = /*#__PURE__*/ function(NavigationMenuPopupCssVars) {
	/**
	* The fixed width of the popup element.
	* @type {number}
	*/
	NavigationMenuPopupCssVars["popupWidth"] = "--popup-width";
	/**
	* The fixed height of the popup element.
	* @type {number}
	*/
	NavigationMenuPopupCssVars["popupHeight"] = "--popup-height";
	return NavigationMenuPopupCssVars;
}({});
//#endregion
//#region node_modules/@base-ui/react/navigation-menu/utils/setSharedFixedSize.mjs
function setSharedFixedSize(popupElement, positionerElement, width, height) {
	popupElement.style.setProperty(NavigationMenuPopupCssVars.popupWidth, `${width}px`);
	popupElement.style.setProperty(NavigationMenuPopupCssVars.popupHeight, `${height}px`);
	positionerElement.style.setProperty(NavigationMenuPositionerCssVars.positionerWidth, `${width}px`);
	positionerElement.style.setProperty(NavigationMenuPositionerCssVars.positionerHeight, `${height}px`);
}
//#endregion
//#region node_modules/@base-ui/react/navigation-menu/root/NavigationMenuRoot.mjs
var blockedReturnFocusReasons = /* @__PURE__ */ new Set([
	triggerHover,
	outsidePress,
	focusOut
]);
function getPositionerFixedSize(positionerElement) {
	const width = parseFloat(positionerElement.style.getPropertyValue(NavigationMenuPositionerCssVars.positionerWidth)) || 0;
	const height = parseFloat(positionerElement.style.getPropertyValue(NavigationMenuPositionerCssVars.positionerHeight)) || 0;
	if (width <= 0 || height <= 0) return null;
	return {
		width,
		height
	};
}
/**
* Groups all parts of the navigation menu.
* Renders a `<nav>` element at the root, or `<div>` element when nested.
*
* Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
*/
var NavigationMenuRoot = /*#__PURE__*/ import_react.forwardRef(function NavigationMenuRoot(componentProps, forwardedRef) {
	const { defaultValue = null, value: valueParam, onValueChange, actionsRef, delay = 50, closeDelay = 50, orientation = "horizontal", onOpenChangeComplete } = componentProps;
	const nested = useFloatingParentNodeId() != null;
	const parentRootContext = useNavigationMenuRootContext(true);
	const [value, setValueUnwrapped] = useControlled({
		controlled: valueParam,
		default: defaultValue,
		name: "NavigationMenu",
		state: "value"
	});
	const open = value != null;
	const closeReasonRef = import_react.useRef(void 0);
	const rootRef = import_react.useRef(null);
	const [positionerElement, setPositionerElement] = import_react.useState(null);
	const [popupElement, setPopupElement] = import_react.useState(null);
	const [viewportElement, setViewportElement] = import_react.useState(null);
	const [viewportTargetElement, setViewportTargetElement] = import_react.useState(null);
	const [activationDirection, setActivationDirection] = import_react.useState(null);
	const [floatingRootContext, setFloatingRootContext] = import_react.useState(void 0);
	const [viewportInert, setViewportInert] = import_react.useState(false);
	const prevTriggerElementRef = import_react.useRef(null);
	const currentContentRef = import_react.useRef(null);
	const beforeInsideRef = import_react.useRef(null);
	const afterInsideRef = import_react.useRef(null);
	const beforeOutsideRef = import_react.useRef(null);
	const afterOutsideRef = import_react.useRef(null);
	const popupAutoSizeResetRef = import_react.useRef({
		abortController: null,
		owner: null
	});
	const { mounted, setMounted, transitionStatus } = useTransitionStatus(open);
	useIsoLayoutEffect(() => {
		if (open) return;
		if (!positionerElement || !popupElement) return;
		const closeTransitionSize = getPositionerFixedSize(positionerElement);
		if (!closeTransitionSize) return;
		setSharedFixedSize(popupElement, positionerElement, closeTransitionSize.width, closeTransitionSize.height);
	}, [
		open,
		popupElement,
		positionerElement
	]);
	import_react.useEffect(() => {
		setViewportInert(false);
	}, [value]);
	const setValue = useStableCallback((nextValue, eventDetails) => {
		if (nextValue == null) closeReasonRef.current = eventDetails.reason;
		if (nextValue !== value) onValueChange?.(nextValue, eventDetails);
		if (eventDetails.isCanceled) return;
		if (nextValue == null) {
			setActivationDirection(null);
			setFloatingRootContext(void 0);
		}
		setValueUnwrapped(nextValue);
		if (nested && nextValue == null && eventDetails.reason === "link-press" && parentRootContext) parentRootContext.setValue(null, eventDetails);
	});
	const handleUnmount = useStableCallback(() => {
		const activeEl = activeElement(ownerDocument(rootRef.current));
		if (!(closeReasonRef.current ? blockedReturnFocusReasons.has(closeReasonRef.current) : false) && isHTMLElement(prevTriggerElementRef.current) && (activeEl === ownerDocument(popupElement).body || contains(popupElement, activeEl)) && popupElement) {
			prevTriggerElementRef.current.focus({ preventScroll: true });
			prevTriggerElementRef.current = void 0;
		}
		setMounted(false);
		onOpenChangeComplete?.(false);
		setActivationDirection(null);
		setFloatingRootContext(void 0);
		currentContentRef.current = null;
		closeReasonRef.current = void 0;
	});
	import_react.useImperativeHandle(actionsRef, () => ({ unmount: handleUnmount }), [handleUnmount]);
	useOpenChangeComplete({
		enabled: !actionsRef,
		open,
		ref: { current: popupElement },
		onComplete() {
			if (!open) handleUnmount();
		}
	});
	useOpenChangeComplete({
		enabled: !actionsRef,
		open,
		ref: { current: viewportTargetElement },
		onComplete() {
			if (!open) handleUnmount();
		}
	});
	const contextActivationDirection = open ? activationDirection : null;
	const contextValue = import_react.useMemo(() => ({
		open,
		value,
		setValue,
		mounted,
		transitionStatus,
		positionerElement,
		setPositionerElement,
		popupElement,
		setPopupElement,
		viewportElement,
		setViewportElement,
		viewportTargetElement,
		setViewportTargetElement,
		activationDirection: contextActivationDirection,
		setActivationDirection,
		floatingRootContext,
		setFloatingRootContext,
		currentContentRef,
		nested,
		rootRef,
		beforeInsideRef,
		afterInsideRef,
		beforeOutsideRef,
		afterOutsideRef,
		prevTriggerElementRef,
		popupAutoSizeResetRef,
		delay,
		closeDelay,
		orientation,
		viewportInert,
		setViewportInert
	}), [
		open,
		value,
		setValue,
		mounted,
		transitionStatus,
		positionerElement,
		popupElement,
		viewportElement,
		viewportTargetElement,
		contextActivationDirection,
		floatingRootContext,
		nested,
		delay,
		closeDelay,
		orientation,
		viewportInert
	]);
	const jsx = /*#__PURE__*/ (0, import_jsx_runtime.jsx)(NavigationMenuRootContext.Provider, {
		value: contextValue,
		children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(TreeContext, {
			componentProps,
			forwardedRef,
			children: componentProps.children
		})
	});
	if (!nested) return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(FloatingTree, { children: jsx });
	return jsx;
});
NavigationMenuRoot.displayName = "NavigationMenuRoot";
function TreeContext(props) {
	const { className, render, defaultValue, value: valueParam, onValueChange, actionsRef, delay, closeDelay, orientation, onOpenChangeComplete, style, ...elementProps } = props.componentProps;
	const nodeId = useFloatingNodeId();
	const { rootRef, nested, open } = useNavigationMenuRootContext();
	const state = {
		open,
		nested
	};
	const element = useRenderElement(nested ? "div" : "nav", props.componentProps, {
		state,
		ref: [props.forwardedRef, rootRef],
		props: elementProps
	});
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(NavigationMenuTreeContext.Provider, {
		value: nodeId,
		children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(FloatingNode, {
			id: nodeId,
			children: element
		})
	});
}
//#endregion
//#region node_modules/@base-ui/react/navigation-menu/utils/constants.mjs
var NAVIGATION_MENU_TRIGGER_IDENTIFIER = "data-base-ui-navigation-menu-trigger";
//#endregion
//#region node_modules/@base-ui/react/navigation-menu/list/NavigationMenuDismissContext.mjs
var NavigationMenuDismissContext = /*#__PURE__*/ import_react.createContext(void 0);
NavigationMenuDismissContext.displayName = "NavigationMenuDismissContext";
function useNavigationMenuDismissContext() {
	return import_react.useContext(NavigationMenuDismissContext);
}
//#endregion
//#region node_modules/@base-ui/react/navigation-menu/list/NavigationMenuList.mjs
/**
* Contains a list of navigation menu items.
* Renders a `<ul>` element.
*
* Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
*/
var NavigationMenuList = /*#__PURE__*/ import_react.forwardRef(function NavigationMenuList(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const nodeId = useNavigationMenuTreeContext();
	const { orientation, open, floatingRootContext, positionerElement, value, closeDelay, viewportElement, nested } = useNavigationMenuRootContext();
	const fallbackContext = import_react.useMemo(() => getEmptyRootContext(), []);
	const context = floatingRootContext || fallbackContext;
	const interactionsEnabled = positionerElement != null || value == null;
	useHoverFloatingInteraction(context, {
		enabled: Boolean(floatingRootContext) && (positionerElement != null || viewportElement != null || value == null),
		closeDelay,
		nodeId
	});
	const dismiss = useDismiss(context, {
		enabled: interactionsEnabled,
		outsidePressEvent: "intentional",
		outsidePress(event) {
			return getTarget(event)?.closest(`[${NAVIGATION_MENU_TRIGGER_IDENTIFIER}]`) === null;
		}
	});
	const dismissProps = floatingRootContext ? dismiss : void 0;
	const state = { open };
	const defaultProps = nested ? EMPTY_OBJECT : { onKeyDown(event) {
		if (orientation === "horizontal" && (event.key === "ArrowLeft" || event.key === "ArrowRight") || orientation === "vertical" && (event.key === "ArrowUp" || event.key === "ArrowDown")) event.stopPropagation();
	} };
	const props = [
		dismissProps?.floating || EMPTY_OBJECT,
		defaultProps,
		elementProps
	];
	const element = useRenderElement("ul", componentProps, {
		state,
		ref: forwardedRef,
		props,
		enabled: nested
	});
	if (nested) return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(NavigationMenuDismissContext.Provider, {
		value: dismissProps,
		children: element
	});
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(NavigationMenuDismissContext.Provider, {
		value: dismissProps,
		children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(CompositeRoot, {
			render,
			className,
			style,
			state,
			refs: [forwardedRef],
			props,
			loopFocus: false,
			orientation,
			tag: "ul"
		})
	});
});
NavigationMenuList.displayName = "NavigationMenuList";
//#endregion
//#region node_modules/@base-ui/react/navigation-menu/item/NavigationMenuItemContext.mjs
var NavigationMenuItemContext = /*#__PURE__*/ import_react.createContext(void 0);
NavigationMenuItemContext.displayName = "NavigationMenuItemContext";
function useNavigationMenuItemContext() {
	const value = import_react.useContext(NavigationMenuItemContext);
	if (!value) throw new Error("Base UI: NavigationMenuItem parts must be used within a <NavigationMenu.Item>.");
	return value;
}
//#endregion
//#region node_modules/@base-ui/react/navigation-menu/item/NavigationMenuItem.mjs
/**
* An individual navigation menu item.
* Renders a `<li>` element.
*
* Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
*/
var NavigationMenuItem = /*#__PURE__*/ import_react.forwardRef(function NavigationMenuItem(componentProps, forwardedRef) {
	const { render, className, style, value: valueProp, ...elementProps } = componentProps;
	const fallbackValue = useBaseUiId();
	const value = valueProp ?? fallbackValue;
	const element = useRenderElement("li", componentProps, {
		ref: forwardedRef,
		props: elementProps
	});
	const contextValue = import_react.useMemo(() => ({ value }), [value]);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(NavigationMenuItemContext.Provider, {
		value: contextValue,
		children: element
	});
});
NavigationMenuItem.displayName = "NavigationMenuItem";
//#endregion
//#region node_modules/@base-ui/react/navigation-menu/content/NavigationMenuContent.mjs
var stateAttributesMapping$9 = {
	...popupStateMapping,
	...transitionStatusMapping,
	activationDirection(value) {
		if (!value) return null;
		return { "data-activation-direction": value };
	}
};
/**
* A container for the content of the navigation menu item that is moved into the popup
* when the item is active.
* Renders a `<div>` element.
*
* Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
*/
var NavigationMenuContent = /*#__PURE__*/ import_react.forwardRef(function NavigationMenuContent(componentProps, forwardedRef) {
	const { render, className, style, keepMounted = false, ...elementProps } = componentProps;
	const { mounted: popupMounted, viewportElement, value, activationDirection, currentContentRef, viewportTargetElement } = useNavigationMenuRootContext();
	const { value: itemValue } = useNavigationMenuItemContext();
	const nodeId = useNavigationMenuTreeContext();
	const open = popupMounted && value === itemValue;
	const ref = import_react.useRef(null);
	const [hasMountedInPortal, setHasMountedInPortal] = import_react.useState(false);
	const [focusInside, setFocusInside] = import_react.useState(false);
	const { mounted, setMounted, transitionStatus } = useTransitionStatus(open);
	if (mounted && !popupMounted) setMounted(false);
	useOpenChangeComplete({
		ref,
		open,
		onComplete() {
			if (!open) setMounted(false);
		}
	});
	useIsoLayoutEffect(() => {
		if (open && ref.current) currentContentRef.current = ref.current;
	}, [open, currentContentRef]);
	const state = {
		open,
		transitionStatus,
		activationDirection
	};
	const handleCurrentContentRef = useStableCallback((node) => {
		if (node && open) currentContentRef.current = node;
	});
	const commonProps = {
		onFocus(event) {
			if (getTarget(event.nativeEvent)?.hasAttribute("data-base-ui-focus-guard")) return;
			setFocusInside(true);
		},
		onBlur(event) {
			if (!contains(event.currentTarget, event.relatedTarget)) setFocusInside(false);
		}
	};
	const defaultProps = !open && mounted ? {
		style: {
			position: "absolute",
			top: 0,
			left: 0
		},
		inert: inertValue(!focusInside),
		...commonProps
	} : commonProps;
	const portalContainer = viewportTargetElement || viewportElement;
	const hidden = keepMounted && !mounted;
	const shouldRenderInline = keepMounted && !portalContainer && !hasMountedInPortal;
	if (keepMounted && portalContainer && !hasMountedInPortal) setHasMountedInPortal(true);
	if (shouldRenderInline) return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(CompositeRoot, {
		render,
		className,
		style,
		state,
		refs: [forwardedRef],
		props: [
			defaultProps,
			{ hidden: true },
			elementProps
		],
		stateAttributesMapping: stateAttributesMapping$9
	});
	if (!portalContainer || !mounted && !keepMounted) return null;
	return /*#__PURE__*/ import_react_dom.createPortal(/*#__PURE__*/ (0, import_jsx_runtime.jsx)(FloatingNode, {
		id: nodeId,
		children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(CompositeRoot, {
			render,
			className,
			style,
			state,
			refs: [
				forwardedRef,
				ref,
				handleCurrentContentRef
			],
			props: [
				defaultProps,
				hidden ? { hidden: true } : EMPTY_OBJECT,
				elementProps
			],
			stateAttributesMapping: stateAttributesMapping$9
		})
	}), portalContainer);
});
NavigationMenuContent.displayName = "NavigationMenuContent";
//#endregion
//#region node_modules/@base-ui/react/navigation-menu/utils/isOutsideMenuEvent.mjs
function isOutsideMenuEvent({ currentTarget, relatedTarget }, params) {
	const { popupElement, rootRef, tree, nodeId } = params;
	const nodeChildrenContains = tree ? getNodeChildren(tree.nodesRef.current, nodeId).some((node) => contains(node.context?.elements.floating, relatedTarget)) : false;
	if (!popupElement) return !contains(rootRef.current, relatedTarget) && !nodeChildrenContains;
	return !contains(popupElement, currentTarget) && !contains(popupElement, relatedTarget) && !contains(rootRef.current, relatedTarget) && !nodeChildrenContains;
}
//#endregion
//#region node_modules/@base-ui/react/navigation-menu/trigger/NavigationMenuTrigger.mjs
var DEFAULT_SIZE$1 = {
	width: 0,
	height: 0
};
/**
* Opens the navigation menu popup when hovered or clicked, revealing the
* associated content.
* Renders a `<button>` element.
*
* Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
*/
var NavigationMenuTrigger = /*#__PURE__*/ import_react.forwardRef(function NavigationMenuTrigger(componentProps, forwardedRef) {
	const { render, className, style, nativeButton = true, disabled, ...elementProps } = componentProps;
	const { value, setValue, mounted, open, positionerElement, setActivationDirection, setFloatingRootContext, popupElement, viewportElement, transitionStatus, rootRef, beforeOutsideRef, afterOutsideRef, afterInsideRef, beforeInsideRef, prevTriggerElementRef, popupAutoSizeResetRef, currentContentRef, delay, closeDelay, orientation, setViewportInert, nested } = useNavigationMenuRootContext();
	const { value: itemValue } = useNavigationMenuItemContext();
	const nodeId = useNavigationMenuTreeContext();
	const tree = useFloatingTree();
	const dismissProps = useNavigationMenuDismissContext();
	const direction = useDirection();
	const stickIfOpenTimeout = useTimeout();
	const focusFrame = useAnimationFrame();
	const mutationFrame = useAnimationFrame();
	const resizeFrame = useAnimationFrame();
	const sizeFrame = useAnimationFrame();
	const [triggerElement, setTriggerElement] = import_react.useState(null);
	const [stickIfOpen, setStickIfOpen] = import_react.useState(true);
	const [pointerType, setPointerType] = import_react.useState("");
	const triggerElementRef = import_react.useRef(null);
	const allowFocusRef = import_react.useRef(false);
	const prevSizeRef = import_react.useRef(DEFAULT_SIZE$1);
	const skipAutoSizeSyncRef = import_react.useRef(false);
	const isActiveItem = open && value === itemValue;
	const isActiveItemRef = useValueAsRef(isActiveItem);
	const interactionsEnabled = (positionerElement != null || value == null) && !disabled;
	const hoverFloatingElement = positionerElement || viewportElement;
	const hoverInteractionsEnabled = (hoverFloatingElement != null || value == null) && !disabled;
	const runOnceAnimationsFinish = useAnimationsFinished(popupElement);
	const handleTriggerElement = import_react.useCallback((element) => {
		triggerElementRef.current = element;
		setTriggerElement(element);
	}, []);
	const cancelAutoSizeReset = useStableCallback((force = false) => {
		if (!force && popupAutoSizeResetRef.current.owner !== itemValue) return;
		popupAutoSizeResetRef.current.abortController?.abort();
		popupAutoSizeResetRef.current.abortController = null;
		popupAutoSizeResetRef.current.owner = null;
	});
	useIsoLayoutEffect(() => {
		if (isActiveItem) return;
		mutationFrame.cancel();
		sizeFrame.cancel();
		cancelAutoSizeReset();
	}, [
		isActiveItem,
		mutationFrame,
		sizeFrame,
		cancelAutoSizeReset
	]);
	function setAutoSizes(element) {
		element.style.setProperty(NavigationMenuPopupCssVars.popupWidth, "auto");
		element.style.setProperty(NavigationMenuPopupCssVars.popupHeight, "auto");
	}
	function clearFixedSizes(popup, positioner) {
		popup.style.removeProperty(NavigationMenuPopupCssVars.popupWidth);
		popup.style.removeProperty(NavigationMenuPopupCssVars.popupHeight);
		positioner.style.removeProperty(NavigationMenuPositionerCssVars.positionerWidth);
		positioner.style.removeProperty(NavigationMenuPositionerCssVars.positionerHeight);
	}
	function scheduleAutoSizeReset(popup) {
		cancelAutoSizeReset(true);
		const abortController = new AbortController();
		popupAutoSizeResetRef.current.abortController = abortController;
		popupAutoSizeResetRef.current.owner = itemValue;
		runOnceAnimationsFinish(() => {
			popupAutoSizeResetRef.current.abortController = null;
			popupAutoSizeResetRef.current.owner = null;
			setAutoSizes(popup);
		}, abortController.signal);
	}
	const handleValueChange = useStableCallback((popup, positioner, currentWidth, currentHeight) => {
		cancelAutoSizeReset(true);
		clearFixedSizes(popup, positioner);
		const { width, height } = getCssDimensions(popup);
		const measuredWidth = width || prevSizeRef.current.width;
		const measuredHeight = height || prevSizeRef.current.height;
		if (currentHeight === 0 || currentWidth === 0) {
			currentWidth = measuredWidth;
			currentHeight = measuredHeight;
		}
		popup.style.setProperty(NavigationMenuPopupCssVars.popupWidth, `${currentWidth}px`);
		popup.style.setProperty(NavigationMenuPopupCssVars.popupHeight, `${currentHeight}px`);
		positioner.style.setProperty(NavigationMenuPositionerCssVars.positionerWidth, `${measuredWidth}px`);
		positioner.style.setProperty(NavigationMenuPositionerCssVars.positionerHeight, `${measuredHeight}px`);
		sizeFrame.request(() => {
			if (!isActiveItemRef.current) return;
			popup.style.setProperty(NavigationMenuPopupCssVars.popupWidth, `${measuredWidth}px`);
			popup.style.setProperty(NavigationMenuPopupCssVars.popupHeight, `${measuredHeight}px`);
			scheduleAutoSizeReset(popup);
		});
	});
	const handleInterruptedMutationResize = useStableCallback((popup, positioner, currentWidth, currentHeight) => {
		sizeFrame.cancel();
		mutationFrame.cancel();
		cancelAutoSizeReset(true);
		if (currentWidth === 0 || currentHeight === 0) return;
		setSharedFixedSize(popup, positioner, currentWidth, currentHeight);
		mutationFrame.request(() => {
			mutationFrame.request(() => {
				clearFixedSizes(popup, positioner);
				const { width, height } = getCssDimensions(popup);
				const measuredWidth = width || currentWidth;
				const measuredHeight = height || currentHeight;
				setSharedFixedSize(popup, positioner, currentWidth, currentHeight);
				sizeFrame.request(() => {
					if (!isActiveItemRef.current) return;
					setSharedFixedSize(popup, positioner, measuredWidth, measuredHeight);
					scheduleAutoSizeReset(popup);
				});
			});
		});
	});
	const syncCurrentSize = useStableCallback((popup, positioner) => {
		sizeFrame.cancel();
		cancelAutoSizeReset(true);
		clearFixedSizes(popup, positioner);
		const { width, height } = getCssDimensions(popup);
		if (width === 0 || height === 0) return;
		prevSizeRef.current = {
			width,
			height
		};
		setAutoSizes(popup);
		positioner.style.setProperty(NavigationMenuPositionerCssVars.positionerWidth, `${width}px`);
		positioner.style.setProperty(NavigationMenuPositionerCssVars.positionerHeight, `${height}px`);
	});
	const getMutationBaseline = useStableCallback((popup) => {
		const popupWidth = popup.style.getPropertyValue(NavigationMenuPopupCssVars.popupWidth);
		const popupHeight = popup.style.getPropertyValue(NavigationMenuPopupCssVars.popupHeight);
		if (!(popupWidth !== "" && popupWidth !== "auto" && popupHeight !== "" && popupHeight !== "auto")) return {
			size: prevSizeRef.current,
			syncPositioner: false
		};
		return {
			size: {
				width: popup.offsetWidth || prevSizeRef.current.width,
				height: popup.offsetHeight || prevSizeRef.current.height
			},
			syncPositioner: true
		};
	});
	import_react.useEffect(() => {
		if (!open) {
			stickIfOpenTimeout.clear();
			mutationFrame.cancel();
			resizeFrame.cancel();
			sizeFrame.cancel();
			cancelAutoSizeReset(true);
			skipAutoSizeSyncRef.current = false;
			setPointerType("");
		}
	}, [
		stickIfOpenTimeout,
		open,
		mutationFrame,
		resizeFrame,
		sizeFrame,
		cancelAutoSizeReset
	]);
	import_react.useEffect(() => {
		if (!mounted) prevSizeRef.current = DEFAULT_SIZE$1;
	}, [mounted]);
	useIsoLayoutEffect(() => {
		if (!popupElement || typeof ResizeObserver !== "function") return;
		const resizeObserver = new ResizeObserver(() => {
			prevSizeRef.current = {
				width: popupElement.offsetWidth,
				height: popupElement.offsetHeight
			};
		});
		resizeObserver.observe(popupElement);
		return () => {
			resizeObserver.disconnect();
		};
	}, [popupElement]);
	import_react.useEffect(() => {
		if (!open || !isActiveItem || !popupElement || !positionerElement) return;
		const popup = popupElement;
		const positioner = positionerElement;
		const win = getWindow(positioner);
		function handleResize() {
			resizeFrame.cancel();
			resizeFrame.request(() => syncCurrentSize(popup, positioner));
		}
		const unsubscribe = addEventListener(win, "resize", handleResize);
		return () => {
			resizeFrame.cancel();
			unsubscribe();
		};
	}, [
		open,
		isActiveItem,
		popupElement,
		positionerElement,
		resizeFrame,
		syncCurrentSize
	]);
	import_react.useEffect(() => {
		const observedElement = currentContentRef.current;
		if (!observedElement || !popupElement || !positionerElement || !isActiveItem || typeof MutationObserver !== "function") return;
		const mutationObserver = new MutationObserver(() => {
			if (transitionStatus === "starting" || popupElement.hasAttribute(TransitionStatusDataAttributes.startingStyle)) {
				syncCurrentSize(popupElement, positionerElement);
				return;
			}
			const { size, syncPositioner } = getMutationBaseline(popupElement);
			if (syncPositioner) {
				handleInterruptedMutationResize(popupElement, positionerElement, size.width, size.height);
				return;
			}
			handleValueChange(popupElement, positionerElement, size.width, size.height);
		});
		mutationObserver.observe(observedElement, {
			childList: true,
			subtree: true,
			characterData: true,
			attributes: true,
			attributeFilter: ["hidden"]
		});
		return () => {
			mutationObserver.disconnect();
		};
	}, [
		currentContentRef,
		popupElement,
		positionerElement,
		isActiveItem,
		transitionStatus,
		getMutationBaseline,
		handleInterruptedMutationResize,
		handleValueChange,
		syncCurrentSize
	]);
	import_react.useEffect(() => {
		if (isActiveItem && open && popupElement && allowFocusRef.current) {
			allowFocusRef.current = false;
			focusFrame.request(() => {
				beforeOutsideRef.current?.focus();
			});
		}
		return () => {
			focusFrame.cancel();
		};
	}, [
		beforeOutsideRef,
		focusFrame,
		isActiveItem,
		open,
		popupElement
	]);
	useIsoLayoutEffect(() => {
		if (isActiveItemRef.current && open && popupElement && positionerElement) {
			if (skipAutoSizeSyncRef.current) {
				skipAutoSizeSyncRef.current = false;
				return;
			}
			const { width, height } = getCssDimensions(popupElement);
			handleValueChange(popupElement, positionerElement, width, height);
		}
	}, [
		currentContentRef,
		handleValueChange,
		isActiveItemRef,
		open,
		popupElement,
		positionerElement,
		transitionStatus
	]);
	function handleOpenChange(nextOpen, eventDetails) {
		const isHover = eventDetails.reason === triggerHover;
		if (!interactionsEnabled) return;
		if (pointerType === "touch" && isHover) return;
		if (!nextOpen && value !== itemValue) return;
		function changeState() {
			if (isHover) {
				setStickIfOpen(true);
				stickIfOpenTimeout.clear();
				stickIfOpenTimeout.start(500, () => {
					setStickIfOpen(false);
				});
			}
			if (nextOpen) setValue(itemValue, eventDetails);
			else {
				setValue(null, eventDetails);
				setPointerType("");
			}
		}
		if (isHover) import_react_dom.flushSync(changeState);
		else changeState();
	}
	const context = useFloatingRootContext({
		open,
		onOpenChange: handleOpenChange,
		elements: {
			reference: triggerElement,
			floating: hoverFloatingElement
		}
	});
	const hoverInteractionState = useHoverInteractionSharedState(context);
	const shouldBlockSafePolygonPointerEvents = pointerType !== "touch";
	import_react.useEffect(() => {
		if (!open) {
			context.context.dataRef.current.openEvent = void 0;
			hoverInteractionState.pointerType = void 0;
			hoverInteractionState.interactedInside = false;
			hoverInteractionState.restTimeoutPending = false;
			hoverInteractionState.openChangeTimeout.clear();
			hoverInteractionState.restTimeout.clear();
		}
		return () => {
			clearSafePolygonPointerEventsMutation(hoverInteractionState);
		};
	}, [
		context,
		hoverInteractionState,
		open
	]);
	const getInlineHandleCloseContext = useStableCallback(() => {
		if (!nested || positionerElement || !triggerElementRef.current || !hoverFloatingElement) return null;
		return getHandleCloseContext(triggerElementRef.current, hoverFloatingElement, nodeId);
	});
	function getScope() {
		if (nested && positionerElement) return null;
		return triggerElementRef.current?.closest("ul") ?? null;
	}
	const hoverProps = useHoverReferenceInteraction(context, {
		enabled: hoverInteractionsEnabled,
		move: false,
		handleClose: safePolygon({
			blockPointerEvents: shouldBlockSafePolygonPointerEvents,
			getScope
		}),
		restMs: mounted && positionerElement ? 0 : delay,
		delay: { close: closeDelay },
		triggerElementRef,
		getHandleCloseContext: getInlineHandleCloseContext
	});
	const hover = import_react.useMemo(() => hoverProps ? { reference: hoverProps } : void 0, [hoverProps]);
	const click = useClick(context, {
		enabled: interactionsEnabled,
		stickIfOpen,
		toggle: isActiveItem
	});
	const referenceProps = import_react.useMemo(() => mergeProps(click.reference, hover?.reference), [click.reference, hover]);
	useIsoLayoutEffect(() => {
		if (isActiveItem) {
			setFloatingRootContext(context);
			prevTriggerElementRef.current = triggerElement;
		}
	}, [
		isActiveItem,
		context,
		setFloatingRootContext,
		prevTriggerElementRef,
		triggerElement
	]);
	function handleActivation(event) {
		import_react_dom.flushSync(() => {
			const currentTarget = event.currentTarget;
			const prevTriggerRect = prevTriggerElementRef.current?.getBoundingClientRect();
			if (mounted && prevTriggerRect && triggerElement) {
				const nextTriggerRect = triggerElement.getBoundingClientRect();
				const isMovingRight = nextTriggerRect.left > prevTriggerRect.left;
				const isMovingDown = nextTriggerRect.top > prevTriggerRect.top;
				if (orientation === "horizontal" && nextTriggerRect.left !== prevTriggerRect.left) setActivationDirection(isMovingRight ? "right" : "left");
				else if (orientation === "vertical" && nextTriggerRect.top !== prevTriggerRect.top) setActivationDirection(isMovingDown ? "down" : "up");
			}
			if (event.type !== "click" && value != null) context.context.dataRef.current.openEvent = void 0;
			if (pointerType === "touch" && event.type !== "click") return;
			if (value != null && event.type !== "keydown") setValue(itemValue, createChangeEventDetails(event.type === "mouseenter" ? triggerHover : triggerPress, event.nativeEvent));
			if (event.type === "mouseenter" && shouldBlockSafePolygonPointerEvents && (!nested || !positionerElement) && hoverFloatingElement) {
				const applyPointerEventsMutation = () => {
					const scopeElement = getScope() ?? currentTarget.ownerDocument.body;
					applySafePolygonPointerEventsMutation(hoverInteractionState, {
						scopeElement,
						referenceElement: currentTarget,
						floatingElement: hoverFloatingElement
					});
				};
				if (value != null && value !== itemValue) queueMicrotask(applyPointerEventsMutation);
				else applyPointerEventsMutation();
			}
		});
	}
	const handleOpenEvent = useStableCallback((event) => {
		if (disabled) return;
		if (!popupElement || !positionerElement) {
			handleActivation(event);
			return;
		}
		const { width, height } = getCssDimensions(popupElement);
		const shouldSkipAutoSizeSync = value != null && value !== itemValue && (event.type === "click" || pointerType !== "touch");
		handleActivation(event);
		if (shouldSkipAutoSizeSync) skipAutoSizeSyncRef.current = true;
		handleValueChange(popupElement, positionerElement, width, height);
	});
	const state = { open: isActiveItem };
	function handleSetPointerType(event) {
		setPointerType(event.pointerType);
	}
	function handleTriggerPointerDown(event) {
		handleSetPointerType(event);
		clearSafePolygonPointerEventsMutation(hoverInteractionState);
	}
	const defaultProps = {
		tabIndex: 0,
		onMouseEnter: handleOpenEvent,
		onClick: handleOpenEvent,
		onPointerEnter: handleSetPointerType,
		onPointerDown: handleTriggerPointerDown,
		"aria-expanded": isActiveItem,
		"aria-controls": isActiveItem ? popupElement?.id : void 0,
		[NAVIGATION_MENU_TRIGGER_IDENTIFIER]: "",
		onFocus() {
			if (!isActiveItem) return;
			setViewportInert(false);
		},
		onMouseMove() {
			allowFocusRef.current = false;
		},
		onKeyDown(event) {
			allowFocusRef.current = true;
			if (nested) return;
			const verticalOpenKey = direction === "rtl" ? "ArrowLeft" : "ArrowRight";
			const openHorizontal = orientation === "horizontal" && event.key === "ArrowDown";
			const openVertical = orientation === "vertical" && event.key === verticalOpenKey;
			if (openHorizontal || openVertical) {
				setValue(itemValue, createChangeEventDetails(listNavigation, event.nativeEvent));
				handleOpenEvent(event);
				stopEvent(event);
			}
		},
		onBlur(event) {
			if (positionerElement && popupElement && isOutsideMenuEvent({
				currentTarget: event.currentTarget,
				relatedTarget: event.relatedTarget
			}, {
				popupElement,
				rootRef,
				tree,
				nodeId
			})) setValue(null, createChangeEventDetails(focusOut, event.nativeEvent));
		}
	};
	const { getButtonProps, buttonRef } = useButton({
		disabled,
		focusableWhenDisabled: true,
		native: nativeButton
	});
	const referenceElement = hoverFloatingElement;
	return /*#__PURE__*/ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [/*#__PURE__*/ (0, import_jsx_runtime.jsx)(CompositeItem, {
		tag: "button",
		render,
		className,
		style,
		state,
		stateAttributesMapping: pressableTriggerOpenStateMapping,
		refs: [
			forwardedRef,
			handleTriggerElement,
			buttonRef
		],
		props: [
			referenceProps,
			dismissProps?.reference || EMPTY_ARRAY$1,
			defaultProps,
			elementProps,
			getButtonProps
		]
	}), isActiveItem && /*#__PURE__*/ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [
		/*#__PURE__*/ (0, import_jsx_runtime.jsx)(FocusGuard, {
			ref: beforeOutsideRef,
			onFocus: (event) => {
				if (referenceElement && isOutsideEvent(event, referenceElement)) beforeInsideRef.current?.focus();
				else getPreviousTabbable(triggerElement)?.focus();
			}
		}),
		/*#__PURE__*/ (0, import_jsx_runtime.jsx)("span", {
			"aria-owns": viewportElement?.id,
			style: ownerVisuallyHidden
		}),
		/*#__PURE__*/ (0, import_jsx_runtime.jsx)(FocusGuard, {
			ref: afterOutsideRef,
			onFocus: (event) => {
				if (referenceElement && isOutsideEvent(event, referenceElement)) {
					import_react_dom.flushSync(() => {
						setViewportInert(false);
					});
					(afterInsideRef.current || triggerElement)?.focus();
				} else {
					let nextTabbable = getNextTabbable(triggerElement);
					if (nested && !positionerElement && referenceElement && nextTabbable && contains(referenceElement, nextTabbable)) nextTabbable = getTabbableAfterElement(afterInsideRef.current);
					nextTabbable?.focus();
					if ((!nested || positionerElement) && !contains(rootRef.current, nextTabbable)) setValue(null, createChangeEventDetails("focus-out", event.nativeEvent));
				}
			}
		})
	] })] });
});
NavigationMenuTrigger.displayName = "NavigationMenuTrigger";
function getPlacementFromElements(domReferenceElement, floatingElement) {
	const referenceRect = domReferenceElement.getBoundingClientRect();
	const floatingRect = floatingElement.getBoundingClientRect();
	const referenceCenterX = referenceRect.left + referenceRect.width / 2;
	const referenceCenterY = referenceRect.top + referenceRect.height / 2;
	const floatingCenterX = floatingRect.left + floatingRect.width / 2;
	const floatingCenterY = floatingRect.top + floatingRect.height / 2;
	const deltaX = floatingCenterX - referenceCenterX;
	const deltaY = floatingCenterY - referenceCenterY;
	if (Math.abs(deltaX) >= Math.abs(deltaY)) return deltaX >= 0 ? "right" : "left";
	return deltaY >= 0 ? "bottom" : "top";
}
function getHandleCloseContext(domReferenceElement, floatingElement, nodeId) {
	return {
		placement: getPlacementFromElements(domReferenceElement, floatingElement),
		elements: {
			domReference: domReferenceElement,
			floating: floatingElement
		},
		nodeId
	};
}
//#endregion
//#region node_modules/@base-ui/react/navigation-menu/portal/NavigationMenuPortalContext.mjs
var NavigationMenuPortalContext = /*#__PURE__*/ import_react.createContext(void 0);
NavigationMenuPortalContext.displayName = "NavigationMenuPortalContext";
function useNavigationMenuPortalContext() {
	const value = import_react.useContext(NavigationMenuPortalContext);
	if (value === void 0) throw new Error("Base UI: <NavigationMenu.Portal> is missing.");
	return value;
}
//#endregion
//#region node_modules/@base-ui/react/navigation-menu/portal/NavigationMenuPortal.mjs
/**
* A portal element that moves the popup to a different part of the DOM.
* By default, the portal element is appended to `<body>`.
* Renders a `<div>` element.
*
* Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
*/
var NavigationMenuPortal = /*#__PURE__*/ import_react.forwardRef(function NavigationMenuPortal(props, forwardedRef) {
	const { keepMounted = false, ...portalProps } = props;
	const { mounted } = useNavigationMenuRootContext();
	if (!(mounted || keepMounted)) return null;
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(NavigationMenuPortalContext.Provider, {
		value: keepMounted,
		children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(FloatingPortal, {
			ref: forwardedRef,
			...portalProps
		})
	});
});
NavigationMenuPortal.displayName = "NavigationMenuPortal";
//#endregion
//#region node_modules/@base-ui/react/navigation-menu/utils/useNavigationMenuAnchorPositioning.mjs
/**
* Positioning path for the Navigation Menu, whose active trigger supplies its root store after the
* positioner has already rendered.
*/
function useNavigationMenuAnchorPositioning(params) {
	return useAnchorPositioningWithHook(params, useFloating);
}
//#endregion
//#region node_modules/@base-ui/react/navigation-menu/positioner/NavigationMenuPositionerContext.mjs
var NavigationMenuPositionerContext = /*#__PURE__*/ import_react.createContext(void 0);
NavigationMenuPositionerContext.displayName = "NavigationMenuPositionerContext";
function useNavigationMenuPositionerContext(optional = false) {
	const context = import_react.useContext(NavigationMenuPositionerContext);
	if (!context && !optional) throw new Error("Base UI: NavigationMenuPositionerContext is missing. NavigationMenuPositioner parts must be placed within <NavigationMenu.Positioner>.");
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/navigation-menu/positioner/NavigationMenuPositioner.mjs
var EMPTY_ROOT_CONTEXT$1 = getEmptyRootContext();
/**
* Positions the navigation menu against the currently active trigger.
* Renders a `<div>` element.
*
* Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
*/
var NavigationMenuPositioner = /*#__PURE__*/ import_react.forwardRef(function NavigationMenuPositioner(componentProps, forwardedRef) {
	const { open, mounted, positionerElement, setPositionerElement, floatingRootContext, nested, transitionStatus } = useNavigationMenuRootContext();
	const { className, render, anchor, positionMethod = "absolute", side = "bottom", align = "center", sideOffset = 0, alignOffset = 0, collisionBoundary = "clipping-ancestors", collisionPadding = 5, collisionAvoidance = nested ? POPUP_COLLISION_AVOIDANCE : DROPDOWN_COLLISION_AVOIDANCE, arrowPadding = 5, sticky = false, disableAnchorTracking = false, style, ...elementProps } = componentProps;
	const keepMounted = useNavigationMenuPortalContext();
	const nodeId = useNavigationMenuTreeContext();
	const initialInstantTimeout = useTimeout();
	const resizeTimeout = useTimeout();
	const [instant, setInstant] = import_react.useState(open);
	const needsInitialInstantResetRef = import_react.useRef(open);
	import_react.useEffect(() => {
		if (!positionerElement) return;
		function onFocus(event) {
			if (positionerElement && isOutsideEvent(event)) (event.type === "focusin" ? enableFocusInside : disableFocusInside)(positionerElement);
		}
		return mergeCleanups(addEventListener(positionerElement, "focusin", onFocus, true), addEventListener(positionerElement, "focusout", onFocus, true));
	}, [positionerElement]);
	const domReference = (floatingRootContext || EMPTY_ROOT_CONTEXT$1).useState("domReferenceElement");
	const positioning = useNavigationMenuAnchorPositioning({
		anchor: anchor ?? domReference,
		positionMethod,
		mounted,
		side,
		sideOffset,
		align,
		alignOffset,
		arrowPadding,
		collisionBoundary,
		collisionPadding,
		sticky,
		disableAnchorTracking,
		keepMounted,
		floatingRootContext,
		collisionAvoidance,
		shift: { rootBoundary: "layoutViewport" },
		nodeId,
		adaptiveOrigin
	});
	const state = {
		open,
		side: positioning.side,
		align: positioning.align,
		anchorHidden: positioning.anchorHidden,
		instant
	};
	import_react.useEffect(() => {
		if (!open) return;
		if (needsInitialInstantResetRef.current) initialInstantTimeout.start(0, () => {
			needsInitialInstantResetRef.current = false;
			if (!resizeTimeout.isStarted()) setInstant(false);
		});
		function handleResize() {
			import_react_dom.flushSync(() => {
				setInstant(true);
			});
			resizeTimeout.start(100, () => {
				setInstant(false);
			});
		}
		return addEventListener(getWindow(positionerElement), "resize", handleResize);
	}, [
		open,
		initialInstantTimeout,
		resizeTimeout,
		positionerElement
	]);
	const element = usePositioner(componentProps, state, {
		styles: positioning.positionerStyles,
		transitionStatus,
		props: elementProps,
		refs: [forwardedRef, setPositionerElement],
		hidden: !mounted,
		inert: !open
	});
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(NavigationMenuPositionerContext.Provider, {
		value: positioning,
		children: element
	});
});
NavigationMenuPositioner.displayName = "NavigationMenuPositioner";
//#endregion
//#region node_modules/@base-ui/react/navigation-menu/viewport/NavigationMenuViewport.mjs
var EMPTY_ROOT_CONTEXT = getEmptyRootContext();
function Guards({ children }) {
	const { beforeInsideRef, beforeOutsideRef, afterInsideRef, afterOutsideRef, positionerElement, viewportElement, floatingRootContext } = useNavigationMenuRootContext();
	const hasPositioner = Boolean(useNavigationMenuPositionerContext(true));
	const referenceElement = positionerElement || viewportElement;
	if (!floatingRootContext && !hasPositioner) return children;
	return /*#__PURE__*/ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [
		/*#__PURE__*/ (0, import_jsx_runtime.jsx)(FocusGuard, {
			ref: beforeInsideRef,
			onFocus: (event) => {
				if (referenceElement && isOutsideEvent(event, referenceElement)) getNextTabbable(referenceElement)?.focus();
				else beforeOutsideRef.current?.focus();
			}
		}),
		children,
		/*#__PURE__*/ (0, import_jsx_runtime.jsx)(FocusGuard, {
			ref: afterInsideRef,
			onFocus: (event) => {
				if (referenceElement && isOutsideEvent(event, referenceElement)) getPreviousTabbable(referenceElement)?.focus();
				else afterOutsideRef.current?.focus();
			}
		})
	] });
}
/**
* The clipping viewport of the navigation menu's current content.
* Renders a `<div>` element.
*
* Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
*/
var NavigationMenuViewport = /*#__PURE__*/ import_react.forwardRef(function NavigationMenuViewport(componentProps, forwardedRef) {
	const { render, className, style, children, id: idProp, ...elementProps } = componentProps;
	const id = useId(idProp);
	const { setViewportElement, setViewportTargetElement, floatingRootContext, prevTriggerElementRef, viewportInert, setViewportInert } = useNavigationMenuRootContext();
	const positioning = useNavigationMenuPositionerContext(true);
	const hasPositioner = Boolean(positioning);
	const domReference = (floatingRootContext || EMPTY_ROOT_CONTEXT).useState("domReferenceElement");
	useIsoLayoutEffect(() => {
		if (domReference) prevTriggerElementRef.current = domReference;
	}, [domReference, prevTriggerElementRef]);
	const element = useRenderElement("div", componentProps, {
		ref: [forwardedRef, setViewportElement],
		props: [{
			id,
			onBlur(event) {
				const relatedTarget = event.relatedTarget;
				const currentTarget = event.currentTarget;
				if (relatedTarget && !contains(currentTarget, relatedTarget) && relatedTarget !== domReference) setViewportInert(true);
			},
			...!hasPositioner && viewportInert && { inert: inertValue(true) },
			children: hasPositioner ? children : /*#__PURE__*/ (0, import_jsx_runtime.jsx)(Guards, { children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)("div", {
				ref: setViewportTargetElement,
				children
			}) })
		}, elementProps]
	});
	return hasPositioner ? /*#__PURE__*/ (0, import_jsx_runtime.jsx)(Guards, { children: element }) : element;
});
NavigationMenuViewport.displayName = "NavigationMenuViewport";
//#endregion
//#region node_modules/@base-ui/react/navigation-menu/backdrop/NavigationMenuBackdrop.mjs
/**
* A backdrop for the navigation menu popup.
* Renders a `<div>` element.
*
* Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
*/
var NavigationMenuBackdrop = /*#__PURE__*/ import_react.forwardRef(function NavigationMenuBackdrop(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const { open, mounted, transitionStatus } = useNavigationMenuRootContext();
	return useRenderElement("div", componentProps, {
		state: {
			open,
			transitionStatus
		},
		ref: forwardedRef,
		props: [{
			role: "presentation",
			hidden: !mounted,
			style: {
				userSelect: "none",
				WebkitUserSelect: "none"
			}
		}, elementProps],
		stateAttributesMapping: popupTransitionStateMapping
	});
});
NavigationMenuBackdrop.displayName = "NavigationMenuBackdrop";
//#endregion
//#region node_modules/@base-ui/react/navigation-menu/popup/NavigationMenuPopup.mjs
/**
* A container for the navigation menu contents.
* Renders a `<nav>` element.
*
* Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
*/
var NavigationMenuPopup = /*#__PURE__*/ import_react.forwardRef(function NavigationMenuPopup(componentProps, forwardedRef) {
	const { render, className, style, id: idProp, ...elementProps } = componentProps;
	const { open, transitionStatus, setPopupElement } = useNavigationMenuRootContext();
	const positioning = useNavigationMenuPositionerContext();
	const direction = useDirection();
	const id = useBaseUiId(idProp);
	const state = {
		open,
		transitionStatus,
		side: positioning.side,
		align: positioning.align,
		anchorHidden: positioning.anchorHidden
	};
	let isPhysicalLeft = positioning.side === "left";
	if (direction === "rtl") isPhysicalLeft = isPhysicalLeft || positioning.side === "inline-end";
	else isPhysicalLeft = isPhysicalLeft || positioning.side === "inline-start";
	const isOriginSide = positioning.side === "top" || isPhysicalLeft;
	return useRenderElement("nav", componentProps, {
		state,
		ref: [forwardedRef, setPopupElement],
		props: [
			{
				id,
				tabIndex: -1,
				style: isOriginSide ? {
					position: "absolute",
					[positioning.side === "top" ? "bottom" : "top"]: "0",
					[isPhysicalLeft ? "right" : "left"]: "0"
				} : {}
			},
			getDisabledMountTransitionStyles(transitionStatus),
			elementProps
		],
		stateAttributesMapping: popupTransitionStateMapping
	});
});
NavigationMenuPopup.displayName = "NavigationMenuPopup";
//#endregion
//#region node_modules/@base-ui/react/navigation-menu/arrow/NavigationMenuArrow.mjs
/**
* Displays an element pointing toward the navigation menu's current anchor.
* Renders a `<div>` element.
*
* Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
*/
var NavigationMenuArrow = /*#__PURE__*/ import_react.forwardRef(function NavigationMenuArrow(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const { open, transitionStatus } = useNavigationMenuRootContext();
	const { arrowRef, side, align, arrowUncentered, arrowStyles } = useNavigationMenuPositionerContext();
	return useRenderElement("div", componentProps, {
		state: {
			open,
			side,
			align,
			uncentered: arrowUncentered
		},
		ref: [forwardedRef, arrowRef],
		props: [
			{
				style: arrowStyles,
				"aria-hidden": true
			},
			getDisabledMountTransitionStyles(transitionStatus),
			elementProps
		],
		stateAttributesMapping: popupStateMapping
	});
});
NavigationMenuArrow.displayName = "NavigationMenuArrow";
//#endregion
//#region node_modules/@base-ui/react/navigation-menu/link/NavigationMenuLink.mjs
/**
* A link in the navigation menu that can be used to navigate to a different page or section.
* Renders an `<a>` element.
*
* Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
*/
var NavigationMenuLink = /*#__PURE__*/ import_react.forwardRef(function NavigationMenuLink(componentProps, forwardedRef) {
	const { className, render, active = false, closeOnClick = false, style, ...elementProps } = componentProps;
	const { setValue, popupElement, positionerElement, rootRef } = useNavigationMenuRootContext();
	const nodeId = useNavigationMenuTreeContext();
	const tree = useFloatingTree();
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(CompositeItem, {
		tag: "a",
		render,
		className,
		style,
		state: { active },
		refs: [forwardedRef],
		props: [{
			"aria-current": active ? "page" : void 0,
			tabIndex: void 0,
			onClick(event) {
				if (closeOnClick) setValue(null, createChangeEventDetails(linkPress, event.nativeEvent));
			},
			onBlur(event) {
				if (positionerElement && popupElement && isOutsideMenuEvent({
					currentTarget: event.currentTarget,
					relatedTarget: event.relatedTarget
				}, {
					popupElement,
					rootRef,
					tree,
					nodeId
				})) setValue(null, createChangeEventDetails(focusOut, event.nativeEvent));
			}
		}, elementProps]
	});
});
NavigationMenuLink.displayName = "NavigationMenuLink";
//#endregion
//#region node_modules/@base-ui/react/navigation-menu/icon/NavigationMenuIcon.mjs
/**
* An icon that indicates that the trigger button opens a menu.
*
* Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
*/
var NavigationMenuIcon = /*#__PURE__*/ import_react.forwardRef(function NavigationMenuIcon(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const { value: itemValue } = useNavigationMenuItemContext();
	const { open, value } = useNavigationMenuRootContext();
	return useRenderElement("span", componentProps, {
		state: { open: open && value === itemValue },
		ref: forwardedRef,
		props: [{
			"aria-hidden": true,
			children: "▼"
		}, elementProps],
		stateAttributesMapping: triggerOpenStateMapping$1
	});
});
NavigationMenuIcon.displayName = "NavigationMenuIcon";
//#endregion
//#region node_modules/@base-ui/react/navigation-menu/index.parts.mjs
var index_parts_exports$14 = /* @__PURE__ */ __exportAll({
	Arrow: () => NavigationMenuArrow,
	Backdrop: () => NavigationMenuBackdrop,
	Content: () => NavigationMenuContent,
	Icon: () => NavigationMenuIcon,
	Item: () => NavigationMenuItem,
	Link: () => NavigationMenuLink,
	List: () => NavigationMenuList,
	Popup: () => NavigationMenuPopup,
	Portal: () => NavigationMenuPortal,
	Positioner: () => NavigationMenuPositioner,
	Root: () => NavigationMenuRoot,
	Trigger: () => NavigationMenuTrigger,
	Viewport: () => NavigationMenuViewport
});
//#endregion
//#region node_modules/@base-ui/react/number-field/root/NumberFieldRootContext.mjs
var NumberFieldRootContext = /*#__PURE__*/ import_react.createContext(void 0);
NumberFieldRootContext.displayName = "NumberFieldRootContext";
function useNumberFieldRootContext() {
	const context = import_react.useContext(NumberFieldRootContext);
	if (context === void 0) throw new Error("Base UI: NumberFieldRootContext is missing. NumberField parts must be placed within <NumberField.Root>.");
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/number-field/utils/stateAttributesMapping.mjs
var stateAttributesMapping$8 = {
	inputValue: () => null,
	value: () => null,
	...fieldValidityMapping
};
//#endregion
//#region node_modules/@base-ui/react/number-field/utils/parse.mjs
var HAN_NUMERALS = "零〇一二三四五六七八九";
var NON_ASCII_DIGIT_RE = /[٠-٩۰-۹０-９]/g;
var HAN_RE = /[零〇一二三四五六七八九]/g;
var PERCENTAGES = [
	"%",
	"٪",
	"％",
	"﹪"
];
var PERMILLE = ["‰", "؉"];
var PERCENT_RE = /[%٪％﹪]/;
var PERMILLE_RE = /[‰؉]/;
var PERCENT_GLOBAL_RE = /[%٪％﹪]/g;
var PERMILLE_GLOBAL_RE = /[‰؉]/g;
var ARABIC_PERSIAN_DETECT_RE = /[٠-٩۰-۹]/;
var HAN_DETECT_RE = /[零〇一二三四五六七八九]/;
var ANY_NUMERAL_DETECT_RE = /[0-9٠-٩۰-۹０-９零〇一二三四五六七八九]/;
function isNumeralChar(char) {
	return ANY_NUMERAL_DETECT_RE.test(char);
}
var BASE_NON_NUMERIC_SYMBOLS = [
	".",
	",",
	"．",
	"，",
	"٫",
	"٬"
];
var SPACE_SEPARATOR_RE = /\p{Zs}/u;
var FORMAT_CONTROL_DETECT_RE = /\p{Cf}/u;
var FORMAT_CONTROL_GLOBAL_RE = /\p{Cf}/gu;
var PLUS_SIGNS_WITH_ASCII = [
	"+",
	"＋",
	"﹢"
];
var MINUS_SIGNS_WITH_ASCII = [
	"-",
	"−",
	"－",
	"‒",
	"–",
	"—",
	"﹣"
];
var escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
function shiftDecimal(value, exponentDelta) {
	const [coefficient, exponent = "0"] = String(value).split("e");
	return Number(`${coefficient}e${Number(exponent) + exponentDelta}`);
}
var ANY_MINUS_RE = /[-−－‒–—﹣]/gu;
var ANY_PLUS_RE = /[+＋﹢]/gu;
var ANY_MINUS_DETECT_RE = /[-−－‒–—﹣]/;
var ANY_PLUS_DETECT_RE = /[+＋﹢]/;
var SAMPLE_FORMAT_NUMBER = 11111.1;
/**
* Returns the `Intl.NumberFormat` parts of a representative number, which surface every
* non-numeric symbol a given locale/format renders.
*/
function getFormatParts(locale, options) {
	return getFormatter(locale, options).formatToParts(SAMPLE_FORMAT_NUMBER);
}
function getNumberLocaleDetails(locale, options) {
	const parts = getFormatParts(locale, options);
	const result = {};
	parts.forEach((part) => {
		result[part.type] = part.value;
	});
	let decimal = ".";
	getFormatter(locale).formatToParts(.1).forEach((part) => {
		if (part.type === "decimal") decimal = part.value;
	});
	return {
		...result,
		decimal
	};
}
function parseNumber(formattedNumber, locale, options) {
	let input = formattedNumber.replace(FORMAT_CONTROL_GLOBAL_RE, "").trim();
	input = input.replace(ANY_MINUS_RE, "-").replace(ANY_PLUS_RE, "+");
	let isNegative = false;
	const takeSign = (match, sign) => {
		if (sign === "-") isNegative = true;
		return "";
	};
	input = input.replace(/([+-])\s*$/, takeSign).replace(/^\s*([+-])/, takeSign);
	let computedLocale = locale;
	if (computedLocale === void 0) {
		if (ARABIC_PERSIAN_DETECT_RE.test(input)) computedLocale = "ar";
		else if (HAN_DETECT_RE.test(input)) computedLocale = "zh";
	}
	const { group, decimal, currency, exponentSeparator } = getNumberLocaleDetails(computedLocale, options);
	const unitParts = getFormatter(computedLocale, options).formatToParts(1).filter((p) => p.type === "unit").map((p) => escapeRegExp(p.value));
	const unitRegex = unitParts.length ? new RegExp(unitParts.join("|"), "g") : null;
	let groupRegex = null;
	if (group) {
		const isSpaceGroup = /\p{Zs}/u.test(group);
		const isApostropheGroup = group === "'" || group === "’";
		if (isSpaceGroup) groupRegex = /\p{Zs}/gu;
		else if (isApostropheGroup) groupRegex = /['’]/g;
		else groupRegex = new RegExp(escapeRegExp(group), "g");
	}
	let unformatted = [
		[groupRegex, ""],
		[new RegExp(escapeRegExp(decimal), "g"), "."],
		[/[．٫]/g, "."],
		[/[，٬]/g, ""],
		[currency ? new RegExp(escapeRegExp(currency), "g") : null, ""],
		[unitRegex, ""],
		[PERCENT_GLOBAL_RE, ""],
		[PERMILLE_GLOBAL_RE, ""],
		[exponentSeparator ? new RegExp(escapeRegExp(exponentSeparator), "g") : null, "e"],
		[NON_ASCII_DIGIT_RE, (ch) => String(ch.charCodeAt(0) % 16)],
		[HAN_RE, (ch) => String(Math.max(HAN_NUMERALS.indexOf(ch) - 1, 0))]
	].reduce((acc, [regex, replacement]) => {
		return regex ? acc.replace(regex, replacement) : acc;
	}, input);
	const lastDot = unformatted.lastIndexOf(".");
	if (lastDot !== -1) unformatted = `${unformatted.slice(0, lastDot).replace(/\./g, "")}.${unformatted.slice(lastDot + 1).replace(/\./g, "")}`;
	if (/^[-+]?Infinity$/i.test(input) || input.includes("∞")) return null;
	const parseTarget = (isNegative ? "-" : "") + unformatted;
	let num = parseFloat(parseTarget);
	const style = options?.style;
	const isUnitPercent = style === "unit" && options?.unit === "percent";
	const hasPercentSymbol = PERCENT_RE.test(formattedNumber) || style === "percent";
	if (PERMILLE_RE.test(formattedNumber)) num = shiftDecimal(num, -3);
	else if (!isUnitPercent && hasPercentSymbol) num = shiftDecimal(num, -2);
	if (!Number.isFinite(num)) return null;
	return num;
}
//#endregion
//#region node_modules/@base-ui/react/number-field/utils/validate.mjs
var STEP_EPSILON_FACTOR = 1e-10;
var MAX_FLOATING_POINT_CLEANUP_DELTA = 1e-10;
function hasNumberFormatRoundingOptions(format) {
	return format?.maximumFractionDigits != null || format?.minimumFractionDigits != null || format?.maximumSignificantDigits != null || format?.minimumSignificantDigits != null || format?.roundingIncrement != null || format?.roundingMode != null || format?.roundingPriority != null;
}
function removeFloatingPointErrors(value, format) {
	if (!Number.isFinite(value)) return value;
	if (!hasNumberFormatRoundingOptions(format)) {
		const roundedValue = parseFloat(value.toPrecision(15));
		return Math.abs(roundedValue - value) <= Math.min(Number.EPSILON * Math.max(1, Math.abs(value)), MAX_FLOATING_POINT_CLEANUP_DELTA) ? roundedValue : value;
	}
	const formatter = getFormatter("en-US", {
		...format,
		signDisplay: "auto",
		currencySign: "standard",
		notation: format.notation === "compact" ? "standard" : format.notation,
		useGrouping: false
	});
	const roundedText = formatter.format(value);
	const roundedValue = parseNumber(roundedText, "en-US", format);
	if (roundedValue === null) return value;
	return formatter.format(roundedValue) === roundedText ? roundedValue : value;
}
function snapToStep(value, base, step, nearest) {
	const stepSize = Math.abs(step);
	const direction = Math.sign(step);
	const tolerance = stepSize * STEP_EPSILON_FACTOR * direction;
	const rawSteps = value - base + tolerance;
	if (nearest) return base + Math.round(rawSteps / step) * step;
	return base + (direction > 0 ? Math.floor(rawSteps / stepSize) : Math.ceil(rawSteps / stepSize)) * stepSize;
}
function toValidatedNumber(value, step, minWithDefault, maxWithDefault, minWithZeroDefault, format, snapOnStep, small, shouldClamp) {
	if (value === null) return value;
	let nextValue = value;
	if (step != null && snapOnStep && step !== 0) {
		const base = small || minWithDefault === Number.MIN_SAFE_INTEGER ? minWithZeroDefault : minWithDefault;
		nextValue = snapToStep(nextValue, base, step, small);
	}
	if (shouldClamp) nextValue = clamp(nextValue, minWithDefault, maxWithDefault);
	if (step == null && !hasNumberFormatRoundingOptions(format)) return nextValue;
	const roundedValue = removeFloatingPointErrors(nextValue, format);
	return shouldClamp ? clamp(roundedValue, minWithDefault, maxWithDefault) : roundedValue;
}
//#endregion
//#region node_modules/@base-ui/react/number-field/root/NumberFieldRoot.mjs
/**
* Groups all parts of the number field and manages its state.
* Renders a `<div>` element.
*
* Documentation: [Base UI Number Field](https://base-ui.com/react/components/number-field)
*/
var NumberFieldRoot = /*#__PURE__*/ import_react.forwardRef(function NumberFieldRoot(componentProps, forwardedRef) {
	const { id: idProp, min, max, smallStep = .1, step: stepProp = 1, largeStep = 10, required = false, disabled: disabledProp = false, readOnly = false, form, name: nameProp, defaultValue, value: valueProp, onValueChange: onValueChangeProp, onValueCommitted: onValueCommittedProp, allowWheelScrub = false, snapOnStep = false, allowOutOfRange = false, format, locale, render, className, inputRef: inputRefProp, style, ...elementProps } = componentProps;
	const { setDirty, validityData, disabled: fieldDisabled, setFilled, name: fieldName, state: fieldState, validation } = useFieldRootContext();
	const { clearErrors } = useFormContext();
	const disabled = fieldDisabled || disabledProp;
	const name = fieldName ?? nameProp;
	const step = stepProp === "any" ? 1 : stepProp;
	const [isScrubbing, setIsScrubbing] = import_react.useState(false);
	const minWithDefault = min ?? Number.MIN_SAFE_INTEGER;
	const maxWithDefault = max ?? Number.MAX_SAFE_INTEGER;
	const minWithZeroDefault = min ?? 0;
	const formatStyle = format?.style;
	const inputRef = import_react.useRef(null);
	const hiddenInputRef = useMergedRefs(inputRefProp, validation.inputRef);
	const id = useLabelableId({ id: idProp });
	const [valueUnwrapped, setValueUnwrapped] = useControlled({
		controlled: valueProp,
		default: defaultValue,
		name: "NumberField",
		state: "value"
	});
	const value = valueUnwrapped ?? null;
	const valueRef = useValueAsRef(value);
	useIsoLayoutEffect(() => {
		setFilled(value !== null);
	}, [setFilled, value]);
	const forceRender = useForcedRerendering();
	const formatOptionsRef = useValueAsRef(format);
	const hasPendingCommitRef = import_react.useRef(false);
	const onValueCommitted = useStableCallback((nextValue, eventDetails) => {
		hasPendingCommitRef.current = false;
		onValueCommittedProp?.(nextValue, eventDetails);
	});
	const allowInputSyncRef = import_react.useRef(true);
	const lastChangedValueRef = import_react.useRef(null);
	const [inputValue, setInputValue] = import_react.useState(() => formatNumber(value, locale, format));
	const [inputMode, setInputMode] = import_react.useState("numeric");
	const getAllowedNonNumericKeys = useStableCallback(() => {
		const parts = getFormatParts(locale, format);
		const keys = new Set(BASE_NON_NUMERIC_SYMBOLS);
		const addAll = (chars) => chars.forEach((char) => keys.add(char));
		const decimal = parts.find((part) => part.type === "decimal")?.value ?? getNumberLocaleDetails(locale, format).decimal;
		keys.add(decimal);
		parts.forEach((part) => {
			if (part.type === "integer" || part.type === "fraction" || part.type === "exponentInteger" || part.type === "compact") return;
			addAll(Array.from(part.value));
			if (SPACE_SEPARATOR_RE.test(part.value)) keys.add(" ");
		});
		const allowPercentSymbols = formatStyle === "percent" || formatStyle === "unit" && format?.unit === "percent";
		const allowPermilleSymbols = formatStyle === "percent" || formatStyle === "unit" && format?.unit === "permille";
		if (allowPercentSymbols) addAll(PERCENTAGES);
		if (allowPermilleSymbols) addAll(PERMILLE);
		addAll(PLUS_SIGNS_WITH_ASCII);
		if (minWithDefault < 0 || allowOutOfRange) addAll(MINUS_SIGNS_WITH_ASCII);
		return keys;
	});
	const getStepAmount = useStableCallback((event) => {
		if (event?.altKey) return smallStep;
		if (event?.shiftKey) return largeStep;
		return step;
	});
	const setValue = useStableCallback((unvalidatedValue, details) => {
		const eventWithOptionalKeyState = details.event;
		const dir = details.direction;
		const isInputReason = details.reason.startsWith("input-") || details.reason === "none";
		const shouldClampValue = !allowOutOfRange || !isInputReason;
		const validatedValue = toValidatedNumber(unvalidatedValue, dir ? getStepAmount(eventWithOptionalKeyState) * dir : void 0, minWithDefault, maxWithDefault, minWithZeroDefault, formatOptionsRef.current, snapOnStep, eventWithOptionalKeyState?.altKey ?? false, shouldClampValue);
		const shouldFireChange = validatedValue !== value || isInputReason && (unvalidatedValue !== value || allowInputSyncRef.current === false);
		if (shouldFireChange) {
			onValueChangeProp?.(validatedValue, details);
			if (details.isCanceled) return false;
			setValueUnwrapped(validatedValue);
			setDirty(validatedValue !== validityData.initialValue);
			hasPendingCommitRef.current = true;
		}
		lastChangedValueRef.current = validatedValue;
		if (allowInputSyncRef.current) setInputValue(formatNumber(validatedValue, locale, format));
		forceRender();
		return shouldFireChange;
	});
	const incrementValue = useStableCallback((amount, { direction, currentValue, event, reason }) => {
		const prevValue = currentValue == null ? valueRef.current : currentValue;
		const nativeEvent = event;
		if (typeof prevValue !== "number") return setValue(0, createChangeEventDetails(reason, nativeEvent));
		return setValue(prevValue + amount * direction, createChangeEventDetails(reason, nativeEvent, void 0, { direction }));
	});
	useIsoLayoutEffect(function syncFormattedInputValueOnValueChange() {
		if (!allowInputSyncRef.current) return;
		const nextInputValue = formatNumber(value, locale, format);
		if (nextInputValue !== inputValue) setInputValue(nextInputValue);
	});
	useIsoLayoutEffect(function setDynamicInputModeForIOS() {
		if (!ios) return;
		let computedInputMode = "text";
		if (minWithDefault >= 0) computedInputMode = "decimal";
		setInputMode(computedInputMode);
	}, [minWithDefault]);
	import_react.useEffect(function registerElementWheelListener() {
		const element = inputRef.current;
		if (disabled || readOnly || !allowWheelScrub || !element) return;
		function handleWheel(event) {
			if (event.ctrlKey || activeElement(ownerDocument(inputRef.current)) !== inputRef.current) return;
			event.preventDefault();
			allowInputSyncRef.current = true;
			const amount = getStepAmount(event);
			if (incrementValue(amount, {
				direction: event.deltaY > 0 ? -1 : 1,
				event,
				reason: "wheel"
			})) onValueCommitted(lastChangedValueRef.current, createGenericEventDetails(wheel, event));
		}
		return addEventListener(element, "wheel", handleWheel);
	}, [
		allowWheelScrub,
		incrementValue,
		disabled,
		readOnly,
		getStepAmount,
		onValueCommitted,
		lastChangedValueRef,
		valueRef
	]);
	const state = import_react.useMemo(() => ({
		...fieldState,
		disabled,
		readOnly,
		required,
		value,
		inputValue,
		scrubbing: isScrubbing
	}), [
		fieldState,
		disabled,
		readOnly,
		required,
		value,
		inputValue,
		isScrubbing
	]);
	const contextValue = import_react.useMemo(() => ({
		inputRef,
		minWithDefault,
		maxWithDefault,
		id,
		setValue,
		incrementValue,
		getStepAmount,
		allowInputSyncRef,
		formatOptionsRef,
		valueRef,
		lastChangedValueRef,
		hasPendingCommitRef,
		name,
		nameProp,
		inputMode,
		getAllowedNonNumericKeys,
		min,
		max,
		setInputValue,
		locale,
		setIsScrubbing,
		state,
		onValueCommitted
	}), [
		inputRef,
		minWithDefault,
		maxWithDefault,
		id,
		setValue,
		incrementValue,
		getStepAmount,
		formatOptionsRef,
		valueRef,
		name,
		nameProp,
		inputMode,
		getAllowedNonNumericKeys,
		min,
		max,
		setInputValue,
		locale,
		state,
		onValueCommitted
	]);
	const element = useRenderElement("div", componentProps, {
		ref: forwardedRef,
		state,
		props: elementProps,
		stateAttributesMapping: stateAttributesMapping$8
	});
	return /*#__PURE__*/ (0, import_jsx_runtime.jsxs)(NumberFieldRootContext.Provider, {
		value: contextValue,
		children: [element, /*#__PURE__*/ (0, import_jsx_runtime.jsx)("input", {
			...validation.getValidationProps(disabled, {
				onFocus() {
					inputRef.current?.focus();
				},
				onChange(event) {
					if (event.nativeEvent.defaultPrevented || disabled || readOnly) return;
					const nextValue = event.currentTarget.valueAsNumber;
					const parsedValue = Number.isNaN(nextValue) ? null : nextValue;
					const details = createChangeEventDetails(none, event.nativeEvent);
					setValue(parsedValue, details);
					clearErrors(name);
					validation.change(lastChangedValueRef.current ?? parsedValue);
				}
			}),
			ref: hiddenInputRef,
			type: "number",
			form,
			name,
			value: value ?? "",
			min,
			max,
			step: stepProp,
			disabled,
			readOnly,
			required,
			"aria-hidden": true,
			tabIndex: -1,
			style: name ? visuallyHiddenInput : visuallyHidden,
			suppressHydrationWarning: true
		})]
	});
});
NumberFieldRoot.displayName = "NumberFieldRoot";
//#endregion
//#region node_modules/@base-ui/react/number-field/group/NumberFieldGroup.mjs
/**
* Groups the input with the increment and decrement buttons.
* Renders a `<div>` element.
*
* Documentation: [Base UI Number Field](https://base-ui.com/react/components/number-field)
*/
var NumberFieldGroup = /*#__PURE__*/ import_react.forwardRef(function NumberFieldGroup(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const { state } = useNumberFieldRootContext();
	return useRenderElement("div", componentProps, {
		ref: forwardedRef,
		state,
		props: [{ role: "group" }, elementProps],
		stateAttributesMapping: stateAttributesMapping$8
	});
});
NumberFieldGroup.displayName = "NumberFieldGroup";
//#endregion
//#region node_modules/@base-ui/utils/useInterval.mjs
var EMPTY = 0;
var Interval = class Interval extends Timeout {
	static create() {
		return new Interval();
	}
	/**
	* Executes `fn` at `delay` interval, clearing any previously scheduled call.
	*/
	start(delay, fn) {
		this.clear();
		this.currentId = setInterval(() => {
			fn();
		}, delay);
	}
	clear = () => {
		if (this.currentId !== EMPTY) {
			clearInterval(this.currentId);
			this.currentId = EMPTY;
		}
	};
};
/**
* A `setInterval` with automatic cleanup and guard.
*/
function useInterval() {
	const timeout = useRefWithInit(Interval.create).current;
	useOnMount(timeout.disposeEffect);
	return timeout;
}
//#endregion
//#region node_modules/@base-ui/react/internals/usePressAndHold.mjs
var DEFAULT_TICK_DELAY = 60;
var DEFAULT_START_DELAY = 400;
var DEFAULT_SCROLL_DISTANCE = 8;
var TOUCH_TIMEOUT = 50;
var MAX_POINTER_MOVES_AFTER_TOUCH = 3;
function isTouchLikePointerType(pointerType) {
	return pointerType === "touch" || pointerType === "pen";
}
/**
* Adds press-and-hold behavior to a button element.
* On pointer down, performs one action immediately, then after a delay starts
* continuous repeated actions at a fixed interval. Handles mouse, touch, and pen
* inputs correctly, including Android-specific quirks.
*/
function usePressAndHold(params) {
	const { disabled, tick, onStop, tickDelay = DEFAULT_TICK_DELAY, startDelay = DEFAULT_START_DELAY, scrollDistance = DEFAULT_SCROLL_DISTANCE, elementRef } = params;
	const startTickTimeout = useTimeout();
	const tickInterval = useInterval();
	const intentionalTouchCheckTimeout = useTimeout();
	const isPressedRef = import_react.useRef(false);
	const movesAfterTouchRef = import_react.useRef(0);
	const downCoordsRef = import_react.useRef({
		x: 0,
		y: 0
	});
	const isTouchingButtonRef = import_react.useRef(false);
	const ignoreClickRef = import_react.useRef(false);
	const pointerTypeRef = import_react.useRef("");
	const unsubscribeFromGlobalContextMenuRef = import_react.useRef(NOOP);
	const unsubscribeFromGlobalPointerUpRef = import_react.useRef(NOOP);
	const stopAutoChange = useStableCallback(() => {
		intentionalTouchCheckTimeout.clear();
		startTickTimeout.clear();
		tickInterval.clear();
		unsubscribeFromGlobalContextMenuRef.current();
		movesAfterTouchRef.current = 0;
	});
	function startAutoChange(triggerNativeEvent) {
		stopAutoChange();
		const element = elementRef.current;
		if (!element) return;
		const win = getWindow(element);
		function handleContextMenu(event) {
			event.preventDefault();
		}
		unsubscribeFromGlobalContextMenuRef.current = addEventListener(win, "contextmenu", handleContextMenu);
		unsubscribeFromGlobalPointerUpRef.current();
		unsubscribeFromGlobalPointerUpRef.current = addEventListener(win, "pointerup", (event) => {
			isPressedRef.current = false;
			stopAutoChange();
			onStop?.(event);
		}, { once: true });
		if (!tick(triggerNativeEvent)) {
			stopAutoChange();
			return;
		}
		startTickTimeout.start(startDelay, () => {
			tickInterval.start(tickDelay, () => {
				if (!tick(triggerNativeEvent)) stopAutoChange();
			});
		});
	}
	import_react.useEffect(() => () => {
		stopAutoChange();
		unsubscribeFromGlobalPointerUpRef.current();
	}, [stopAutoChange]);
	return {
		pointerHandlers: {
			onTouchStart() {
				isTouchingButtonRef.current = true;
			},
			onTouchEnd() {
				isTouchingButtonRef.current = false;
			},
			onPointerDown(event) {
				if (event.defaultPrevented || event.button || disabled) return;
				pointerTypeRef.current = event.pointerType;
				ignoreClickRef.current = false;
				isPressedRef.current = true;
				downCoordsRef.current = {
					x: event.clientX,
					y: event.clientY
				};
				if (!isTouchLikePointerType(event.pointerType)) {
					event.preventDefault();
					startAutoChange(event.nativeEvent);
				} else intentionalTouchCheckTimeout.start(TOUCH_TIMEOUT, () => {
					const moves = movesAfterTouchRef.current;
					movesAfterTouchRef.current = 0;
					if (isPressedRef.current && moves < MAX_POINTER_MOVES_AFTER_TOUCH) {
						startAutoChange(event.nativeEvent);
						ignoreClickRef.current = true;
					} else {
						ignoreClickRef.current = false;
						stopAutoChange();
					}
				});
			},
			onPointerUp(event) {
				if (isTouchLikePointerType(event.pointerType)) isPressedRef.current = false;
			},
			onPointerMove(event) {
				if (disabled || !isTouchLikePointerType(event.pointerType) || !isPressedRef.current) return;
				movesAfterTouchRef.current += 1;
				const { x, y } = downCoordsRef.current;
				const dx = x - event.clientX;
				const dy = y - event.clientY;
				if (dx ** 2 + dy ** 2 > scrollDistance ** 2) stopAutoChange();
			},
			onMouseEnter(event) {
				if (event.defaultPrevented || disabled || !isPressedRef.current || isTouchingButtonRef.current || isTouchLikePointerType(pointerTypeRef.current)) return;
				startAutoChange(event.nativeEvent);
			},
			onMouseLeave() {
				if (isTouchingButtonRef.current) return;
				stopAutoChange();
			},
			onMouseUp() {
				if (isTouchingButtonRef.current) return;
				stopAutoChange();
			}
		},
		shouldSkipClick: useStableCallback((event) => {
			if (event.defaultPrevented) return true;
			if (isTouchLikePointerType(pointerTypeRef.current)) return ignoreClickRef.current;
			return event.detail !== 0;
		})
	};
}
//#endregion
//#region node_modules/@base-ui/react/number-field/root/useNumberFieldStepperButton.mjs
var SELECT_NONE_STYLE = {
	WebkitUserSelect: "none",
	userSelect: "none"
};
/**
* Shared implementation for the increment and decrement stepper buttons. They differ only in the
* direction they step and the boundary (`max` vs `min`) at which they become disabled.
*/
function useNumberFieldStepperButton(componentProps, forwardedRef, isIncrement) {
	const { render, className, disabled: disabledProp = false, nativeButton = true, style, ...elementProps } = componentProps;
	const { allowInputSyncRef, formatOptionsRef, getStepAmount, id, incrementValue, inputRef, maxWithDefault, minWithDefault, setValue, state, valueRef, locale, lastChangedValueRef, onValueCommitted } = useNumberFieldRootContext();
	const { disabled: contextDisabled, readOnly, value, inputValue } = state;
	const disabled = disabledProp || contextDisabled || value != null && (isIncrement ? value >= maxWithDefault : value <= minWithDefault);
	const pressReason = isIncrement ? incrementPress : decrementPress;
	function commitValue(nativeEvent) {
		const shouldCommitInputValue = !allowInputSyncRef.current;
		allowInputSyncRef.current = true;
		if (!shouldCommitInputValue) {
			lastChangedValueRef.current = valueRef.current;
			return;
		}
		const parsedValue = parseNumber(inputValue, locale, formatOptionsRef.current);
		if (parsedValue !== null) {
			const details = createChangeEventDetails(pressReason, nativeEvent);
			setValue(parsedValue, details);
			if (!details.isCanceled) valueRef.current = parsedValue;
		}
	}
	const { pointerHandlers, shouldSkipClick } = usePressAndHold({
		disabled: disabled || readOnly,
		elementRef: inputRef,
		tick(triggerEvent) {
			const amount = getStepAmount(triggerEvent);
			return incrementValue(amount, {
				direction: isIncrement ? 1 : -1,
				event: triggerEvent,
				reason: pressReason
			});
		},
		onStop(nativeEvent) {
			const committed = lastChangedValueRef.current ?? valueRef.current;
			onValueCommitted(committed, createGenericEventDetails(pressReason, nativeEvent));
		}
	});
	const props = {
		disabled,
		"aria-label": isIncrement ? "Increase" : "Decrease",
		"aria-controls": id,
		tabIndex: -1,
		style: SELECT_NONE_STYLE,
		...pointerHandlers,
		onClick(event) {
			const isDisabled = disabled || readOnly;
			if (event.defaultPrevented || isDisabled || shouldSkipClick(event)) return;
			commitValue(event.nativeEvent);
			const amount = getStepAmount(event);
			const prev = valueRef.current;
			incrementValue(amount, {
				direction: isIncrement ? 1 : -1,
				event: event.nativeEvent,
				reason: pressReason
			});
			const committed = lastChangedValueRef.current ?? valueRef.current;
			if (committed !== prev) onValueCommitted(committed, createGenericEventDetails(pressReason, event.nativeEvent));
		},
		onPointerDown(event) {
			if (event.defaultPrevented || readOnly || event.button || disabled) return;
			commitValue(event.nativeEvent);
			lastChangedValueRef.current = null;
			if (!isTouchLikePointerType(event.pointerType)) inputRef.current?.focus();
			pointerHandlers.onPointerDown(event);
		}
	};
	const { getButtonProps, buttonRef } = useButton({
		disabled: disabled || readOnly,
		native: nativeButton,
		focusableWhenDisabled: true
	});
	const buttonState = {
		...state,
		disabled
	};
	return useRenderElement("button", componentProps, {
		ref: [forwardedRef, buttonRef],
		state: buttonState,
		props: [
			props,
			elementProps,
			getButtonProps
		],
		stateAttributesMapping: stateAttributesMapping$8
	});
}
//#endregion
//#region node_modules/@base-ui/react/number-field/increment/NumberFieldIncrement.mjs
/**
* A stepper button that increases the field value when clicked.
* Renders a `<button>` element.
*
* Documentation: [Base UI Number Field](https://base-ui.com/react/components/number-field)
*/
var NumberFieldIncrement = /*#__PURE__*/ import_react.forwardRef(function NumberFieldIncrement(componentProps, forwardedRef) {
	return useNumberFieldStepperButton(componentProps, forwardedRef, true);
});
NumberFieldIncrement.displayName = "NumberFieldIncrement";
//#endregion
//#region node_modules/@base-ui/react/number-field/decrement/NumberFieldDecrement.mjs
/**
* A stepper button that decreases the field value when clicked.
* Renders a `<button>` element.
*
* Documentation: [Base UI Number Field](https://base-ui.com/react/components/number-field)
*/
var NumberFieldDecrement = /*#__PURE__*/ import_react.forwardRef(function NumberFieldDecrement(componentProps, forwardedRef) {
	return useNumberFieldStepperButton(componentProps, forwardedRef, false);
});
NumberFieldDecrement.displayName = "NumberFieldDecrement";
//#endregion
//#region node_modules/@base-ui/react/number-field/input/NumberFieldInput.mjs
var NAVIGATE_KEYS = /* @__PURE__ */ new Set([
	"Backspace",
	"Delete",
	"ArrowLeft",
	"ArrowRight",
	"Tab",
	"Enter",
	"Escape"
]);
/**
* The native input control in the number field.
* Renders an `<input>` element.
*
* Documentation: [Base UI Number Field](https://base-ui.com/react/components/number-field)
*/
var NumberFieldInput = /*#__PURE__*/ import_react.forwardRef(function NumberFieldInput(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const { allowInputSyncRef, formatOptionsRef, getAllowedNonNumericKeys, getStepAmount, id, incrementValue, inputMode, max, min, name, nameProp, setValue, state, setInputValue, locale, inputRef, onValueCommitted, lastChangedValueRef, hasPendingCommitRef, valueRef } = useNumberFieldRootContext();
	const { disabled, readOnly, required, value, inputValue } = state;
	const { clearErrors } = useFormContext();
	const { validationMode, setTouched, setFocused, invalid, shouldValidateOnChange, validation } = useFieldRootContext();
	const { labelId } = useLabelableContext();
	const hasTouchedInputRef = import_react.useRef(false);
	const blockRevalidationRef = import_react.useRef(false);
	const pendingCaretRef = import_react.useRef(null);
	useRegisterFieldControl(inputRef, id, value, void 0, !disabled, nameProp);
	useIsoLayoutEffect(() => {
		if (pendingCaretRef.current != null) {
			const caret = pendingCaretRef.current;
			pendingCaretRef.current = null;
			inputRef.current?.setSelectionRange(caret, caret);
		}
	});
	useValueChanged(value, () => {
		clearErrors(name);
		if (blockRevalidationRef.current && !shouldValidateOnChange()) {
			blockRevalidationRef.current = false;
			return;
		}
		validation.change(value);
	});
	return useRenderElement("input", componentProps, {
		ref: [forwardedRef, inputRef],
		state,
		props: [
			{
				id,
				required,
				disabled,
				readOnly,
				inputMode,
				value: inputValue,
				type: "text",
				autoComplete: "off",
				autoCorrect: "off",
				spellCheck: "false",
				"aria-roledescription": "Number field",
				"aria-invalid": !disabled && invalid ? true : void 0,
				"aria-labelledby": labelId,
				suppressHydrationWarning: true,
				onFocus(event) {
					if (event.defaultPrevented || disabled) return;
					setFocused(true);
					if (hasTouchedInputRef.current) return;
					hasTouchedInputRef.current = true;
					const target = event.currentTarget;
					const length = target.value.length;
					target.setSelectionRange(length, length);
				},
				onBlur(event) {
					if (event.defaultPrevented || disabled) return;
					setTouched(true);
					setFocused(false);
					if (readOnly) return;
					const hadManualInput = !allowInputSyncRef.current;
					const hadPendingProgrammaticChange = hasPendingCommitRef.current;
					allowInputSyncRef.current = true;
					if (inputValue.trim() === "") {
						const clearDetails = createChangeEventDetails(inputClear, event.nativeEvent);
						setValue(null, clearDetails);
						if (clearDetails.isCanceled) return;
						if (validationMode === "onBlur") validation.commit(null);
						if (hadManualInput || hadPendingProgrammaticChange || value !== null) onValueCommitted(null, createGenericEventDetails(inputClear, event.nativeEvent));
						return;
					}
					const formatOptions = formatOptionsRef.current;
					const parsedValue = parseNumber(inputValue, locale, formatOptions);
					if (parsedValue === null) return;
					const hasRoundingOptions = hasNumberFormatRoundingOptions(formatOptions);
					let committed;
					if (!hadManualInput && !hasRoundingOptions) committed = value;
					else if (hasRoundingOptions) committed = removeFloatingPointErrors(parsedValue, formatOptions);
					else committed = parsedValue;
					const nextEventDetails = createGenericEventDetails(inputBlur, event.nativeEvent);
					const shouldUpdateValue = value !== committed;
					const shouldCommit = hadManualInput || shouldUpdateValue || hadPendingProgrammaticChange;
					let committedValue = committed;
					if (shouldUpdateValue) {
						const changeDetails = createChangeEventDetails(inputBlur, event.nativeEvent);
						blockRevalidationRef.current = true;
						setValue(committed, changeDetails);
						if (changeDetails.isCanceled) {
							blockRevalidationRef.current = false;
							return;
						}
						committedValue = lastChangedValueRef.current;
						if (committedValue === value) blockRevalidationRef.current = false;
					}
					if (validationMode === "onBlur") validation.commit(committedValue);
					if (shouldCommit) onValueCommitted(committedValue, nextEventDetails);
					const canonicalText = formatNumber(committedValue, locale, formatOptions);
					if (inputValue !== canonicalText) setInputValue(canonicalText);
				},
				onChange(event) {
					if (event.nativeEvent.defaultPrevented) return;
					allowInputSyncRef.current = false;
					const targetValue = event.currentTarget.value;
					if (targetValue.trim() === "") {
						setInputValue(targetValue);
						setValue(null, createChangeEventDetails(inputClear, event.nativeEvent));
						return;
					}
					const allowedNonNumericKeys = getAllowedNonNumericKeys();
					if (!Array.from(targetValue).every((ch) => isNumeralChar(ch) || ANY_MINUS_DETECT_RE.test(ch) || allowedNonNumericKeys.has(ch) || FORMAT_CONTROL_DETECT_RE.test(ch))) return;
					const parsedValue = parseNumber(targetValue, locale, formatOptionsRef.current);
					setInputValue(targetValue);
					if (parsedValue !== null) setValue(parsedValue, createChangeEventDetails(inputChange, event.nativeEvent));
				},
				onKeyDown(event) {
					if (event.defaultPrevented || readOnly || disabled) return;
					const nativeEvent = event.nativeEvent;
					const hadManualInput = !allowInputSyncRef.current;
					const allowedNonNumericKeys = getAllowedNonNumericKeys();
					let isAllowedNonNumericKey = allowedNonNumericKeys.has(event.key);
					const { decimal, currency, percentSign } = getNumberLocaleDetails(locale, formatOptionsRef.current);
					const selectionStart = event.currentTarget.selectionStart;
					const selectionEnd = event.currentTarget.selectionEnd;
					const isAllSelected = selectionStart === 0 && selectionEnd === inputValue.length;
					const selectionContainsIndex = (index) => selectionStart != null && selectionEnd != null && index >= selectionStart && index < selectionEnd;
					[[ANY_MINUS_DETECT_RE, ANY_MINUS_RE], [ANY_PLUS_DETECT_RE, ANY_PLUS_RE]].forEach(([detectRe, globalRe]) => {
						if (detectRe.test(event.key) && Array.from(allowedNonNumericKeys).some((k) => detectRe.test(k))) {
							const existingIndex = inputValue.search(globalRe);
							const isReplacingExisting = existingIndex !== -1 && selectionContainsIndex(existingIndex);
							isAllowedNonNumericKey = !(ANY_MINUS_DETECT_RE.test(inputValue) || ANY_PLUS_DETECT_RE.test(inputValue)) || isAllSelected || isReplacingExisting;
						}
					});
					[
						decimal,
						currency,
						percentSign
					].forEach((symbol) => {
						if (event.key === symbol) {
							const symbolIndex = inputValue.indexOf(symbol);
							const isSymbolHighlighted = selectionContainsIndex(symbolIndex);
							isAllowedNonNumericKey = symbolIndex === -1 || isAllSelected || isSymbolHighlighted;
						}
					});
					const isNavigateKey = NAVIGATE_KEYS.has(event.key);
					const isStepKey = event.key === "ArrowUp" || event.key === "ArrowDown";
					if (event.which === 229 || event.altKey && !isStepKey || event.ctrlKey || event.metaKey || isAllowedNonNumericKey || isNumeralChar(event.key) || isNavigateKey) return;
					let boundaryValue = null;
					if (event.key === "Home" && min != null) boundaryValue = min;
					else if (event.key === "End" && max != null) boundaryValue = max;
					if (event.key.length > 1 && !isStepKey && boundaryValue === null) return;
					const currentValue = hadManualInput ? parseNumber(inputValue, locale, formatOptionsRef.current) : null;
					const amount = getStepAmount(event);
					event.preventDefault();
					event.stopPropagation();
					const commitDetails = createGenericEventDetails(keyboard, nativeEvent);
					let changed = false;
					if (isStepKey || boundaryValue !== null) allowInputSyncRef.current = true;
					if (isStepKey) {
						if (!hadManualInput) lastChangedValueRef.current = valueRef.current;
						changed = incrementValue(amount, {
							direction: event.key === "ArrowUp" ? 1 : -1,
							currentValue,
							event: nativeEvent,
							reason: keyboard
						});
					} else if (boundaryValue !== null) changed = setValue(boundaryValue, createChangeEventDetails(keyboard, nativeEvent));
					if (changed) onValueCommitted(lastChangedValueRef.current, commitDetails);
				},
				onPaste(event) {
					if (event.defaultPrevented || readOnly || disabled) return;
					let pastedData = "";
					try {
						pastedData = event.clipboardData?.getData("text/plain") ?? "";
					} catch {
						warn("<NumberField.Input> could not read clipboard text during paste handling.", SafeReact.captureOwnerStack?.() || "");
						return;
					}
					event.preventDefault();
					const input = event.currentTarget;
					const selectionStart = input.selectionStart;
					const selectionEnd = input.selectionEnd;
					const nextText = inputValue.slice(0, selectionStart) + pastedData + inputValue.slice(selectionEnd);
					const parsedValue = parseNumber(nextText, locale, formatOptionsRef.current);
					if (parsedValue !== null) {
						allowInputSyncRef.current = false;
						pendingCaretRef.current = selectionStart + pastedData.length;
						setValue(parsedValue, createChangeEventDetails(inputPaste, event.nativeEvent));
						setInputValue(nextText);
					}
				}
			},
			elementProps,
			(props) => validation.getValidationProps(disabled, props)
		],
		stateAttributesMapping: stateAttributesMapping$8
	});
});
NumberFieldInput.displayName = "NumberFieldInput";
//#endregion
//#region node_modules/@base-ui/react/number-field/scrub-area/NumberFieldScrubAreaContext.mjs
var NumberFieldScrubAreaContext = /*#__PURE__*/ import_react.createContext(void 0);
NumberFieldScrubAreaContext.displayName = "NumberFieldScrubAreaContext";
function useNumberFieldScrubAreaContext() {
	const context = import_react.useContext(NumberFieldScrubAreaContext);
	if (context === void 0) throw new Error("Base UI: NumberFieldScrubAreaContext is missing. NumberFieldScrubArea parts must be placed within <NumberField.ScrubArea>.");
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/number-field/utils/getViewportRect.mjs
function getViewportRect(teleportDistance, scrubAreaEl) {
	const win = getWindow(scrubAreaEl);
	if (teleportDistance != null) {
		const rect = scrubAreaEl.getBoundingClientRect();
		return {
			left: rect.left - teleportDistance / 2,
			top: rect.top - teleportDistance / 2,
			right: rect.right + teleportDistance / 2,
			bottom: rect.bottom + teleportDistance / 2
		};
	}
	const vV = win.visualViewport;
	if (vV) return {
		left: vV.offsetLeft,
		top: vV.offsetTop,
		right: vV.offsetLeft + vV.width,
		bottom: vV.offsetTop + vV.height
	};
	return {
		left: 0,
		top: 0,
		right: win.document.documentElement.clientWidth,
		bottom: win.document.documentElement.clientHeight
	};
}
//#endregion
//#region node_modules/@base-ui/react/number-field/scrub-area/NumberFieldScrubArea.mjs
var SCRUB_AREA_STYLE = {
	touchAction: "none",
	WebkitUserSelect: "none",
	userSelect: "none"
};
/**
* An interactive area where the user can click and drag to change the field value.
* Renders a `<span>` element.
*
* Documentation: [Base UI Number Field](https://base-ui.com/react/components/number-field)
*/
var NumberFieldScrubArea = /*#__PURE__*/ import_react.forwardRef(function NumberFieldScrubArea(componentProps, forwardedRef) {
	const { render, className, direction = "horizontal", pixelSensitivity = 2, teleportDistance, style, ...elementProps } = componentProps;
	const { state, setIsScrubbing: setRootScrubbing, inputRef, incrementValue, allowInputSyncRef, getStepAmount, onValueCommitted, lastChangedValueRef, valueRef } = useNumberFieldRootContext();
	const { disabled, readOnly } = state;
	const scrubAreaRef = import_react.useRef(null);
	const isScrubbingRef = import_react.useRef(false);
	const didMoveRef = import_react.useRef(false);
	const pointerDownTargetRef = import_react.useRef(null);
	const scrubAreaCursorRef = import_react.useRef(null);
	const virtualCursorCoords = import_react.useRef({
		x: 0,
		y: 0
	});
	const exitPointerLockTimeout = useTimeout();
	const [isTouchInput, setIsTouchInput] = import_react.useState(false);
	const [isPointerLockDenied, setIsPointerLockDenied] = import_react.useState(false);
	const [isScrubbing, setIsScrubbing] = import_react.useState(false);
	function updateCursorTransform(virtualCursor, x, y) {
		const scale = getWindow(virtualCursor).visualViewport?.scale ?? 1;
		virtualCursor.style.transform = `translate3d(${x}px,${y}px,0) scale(${1 / scale})`;
	}
	const onScrub = useStableCallback(({ movementX, movementY }) => {
		const virtualCursor = scrubAreaCursorRef.current;
		const scrubAreaEl = scrubAreaRef.current;
		if (!virtualCursor || !scrubAreaEl) return;
		const rect = getViewportRect(teleportDistance, scrubAreaEl);
		const coords = virtualCursorCoords.current;
		const wrap = (coord, halfSize, low, high) => {
			if (coord + halfSize < low) return high - halfSize;
			if (coord + halfSize > high) return low - halfSize;
			return coord;
		};
		const newCoords = {
			x: wrap(Math.round(coords.x + movementX), virtualCursor.offsetWidth / 2, rect.left, rect.right),
			y: wrap(Math.round(coords.y + movementY), virtualCursor.offsetHeight / 2, rect.top, rect.bottom)
		};
		virtualCursorCoords.current = newCoords;
		updateCursorTransform(virtualCursor, newCoords.x, newCoords.y);
	});
	const onScrubbingChange = useStableCallback((scrubbingValue, { clientX, clientY }) => {
		import_react_dom.flushSync(() => {
			setIsScrubbing(scrubbingValue);
			setRootScrubbing(scrubbingValue);
		});
		const virtualCursor = scrubAreaCursorRef.current;
		if (!virtualCursor || !scrubbingValue) return;
		const initialCoords = {
			x: clientX - virtualCursor.offsetWidth / 2,
			y: clientY - virtualCursor.offsetHeight / 2
		};
		virtualCursorCoords.current = initialCoords;
		updateCursorTransform(virtualCursor, initialCoords.x, initialCoords.y);
	});
	import_react.useEffect(function registerGlobalScrubbingEventListeners() {
		if (!inputRef.current || disabled || readOnly || !isScrubbing) return;
		let cumulativeDelta = 0;
		function handleScrubPointerUp(event) {
			function handler() {
				try {
					ownerDocument(scrubAreaRef.current).exitPointerLock();
				} catch {} finally {
					isScrubbingRef.current = false;
					onScrubbingChange(false, event);
					onValueCommitted(lastChangedValueRef.current ?? valueRef.current, createGenericEventDetails(scrub, event));
					const pointerDownTarget = pointerDownTargetRef.current;
					const input = inputRef.current;
					if (!didMoveRef.current && pointerDownTarget != null && input) pointerDownTarget.dispatchEvent(new (getWindow(input)).MouseEvent("click", {
						bubbles: true,
						cancelable: true
					}));
					didMoveRef.current = false;
					pointerDownTargetRef.current = null;
				}
			}
			if (gecko) exitPointerLockTimeout.start(20, handler);
			else handler();
		}
		function handleScrubPointerMove(event) {
			if (!isScrubbingRef.current) return;
			event.preventDefault();
			onScrub(event);
			const { movementX, movementY } = event;
			cumulativeDelta += direction === "vertical" ? movementY : movementX;
			if (Math.abs(cumulativeDelta) >= pixelSensitivity) {
				cumulativeDelta = 0;
				didMoveRef.current = true;
				const rawAmount = (direction === "vertical" ? -movementY : movementX) * getStepAmount(event);
				if (rawAmount !== 0) {
					allowInputSyncRef.current = true;
					incrementValue(Math.abs(rawAmount), {
						direction: rawAmount >= 0 ? 1 : -1,
						event,
						reason: scrub
					});
				}
			}
		}
		const win = getWindow(inputRef.current);
		const unsubscribe = mergeCleanups(addEventListener(win, "pointerup", handleScrubPointerUp, true), addEventListener(win, "pointermove", handleScrubPointerMove, true));
		return () => {
			exitPointerLockTimeout.clear();
			unsubscribe();
		};
	}, [
		disabled,
		readOnly,
		allowInputSyncRef,
		incrementValue,
		isScrubbing,
		getStepAmount,
		inputRef,
		onScrubbingChange,
		onScrub,
		direction,
		pixelSensitivity,
		lastChangedValueRef,
		onValueCommitted,
		valueRef,
		exitPointerLockTimeout
	]);
	import_react.useEffect(() => () => {
		if (isScrubbingRef.current) {
			isScrubbingRef.current = false;
			setRootScrubbing(false);
			try {
				ownerDocument(scrubAreaRef.current).exitPointerLock();
			} catch {}
		}
	}, [setRootScrubbing]);
	import_react.useEffect(function registerScrubberTouchPreventListener() {
		const element = scrubAreaRef.current;
		if (!element || disabled || readOnly) return;
		function handleTouchStart(event) {
			if (event.touches.length === 1) event.preventDefault();
		}
		return addEventListener(element, "touchstart", handleTouchStart);
	}, [disabled, readOnly]);
	const element = useRenderElement("span", componentProps, {
		ref: [forwardedRef, scrubAreaRef],
		state,
		props: [{
			role: "presentation",
			style: SCRUB_AREA_STYLE,
			async onPointerDown(event) {
				if (event.defaultPrevented || readOnly || event.button || disabled) return;
				const isTouch = event.pointerType === "touch";
				setIsTouchInput(isTouch);
				if (event.pointerType === "mouse") {
					event.preventDefault();
					inputRef.current?.focus();
				}
				isScrubbingRef.current = true;
				didMoveRef.current = false;
				pointerDownTargetRef.current = getTarget(event.nativeEvent);
				onScrubbingChange(true, event.nativeEvent);
				if (!isTouch && !webkit) try {
					await ownerDocument(scrubAreaRef.current).body.requestPointerLock();
					setIsPointerLockDenied(false);
				} catch (error) {
					setIsPointerLockDenied(true);
				} finally {
					if (isScrubbingRef.current) onScrubbingChange(true, event.nativeEvent);
				}
			}
		}, elementProps],
		stateAttributesMapping: stateAttributesMapping$8
	});
	const contextValue = import_react.useMemo(() => ({
		isScrubbing,
		isTouchInput,
		isPointerLockDenied,
		scrubAreaCursorRef
	}), [
		isScrubbing,
		isTouchInput,
		isPointerLockDenied
	]);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(NumberFieldScrubAreaContext.Provider, {
		value: contextValue,
		children: element
	});
});
NumberFieldScrubArea.displayName = "NumberFieldScrubArea";
//#endregion
//#region node_modules/@base-ui/react/number-field/scrub-area-cursor/NumberFieldScrubAreaCursor.mjs
var CURSOR_STYLE = {
	position: "fixed",
	top: 0,
	left: 0,
	pointerEvents: "none"
};
/**
* A custom element to display instead of the native cursor while using the scrub area.
* Renders a `<span>` element.
*
* This component uses the [Pointer Lock API](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API), which may prompt the browser to display a related notification. It is disabled
* in Safari to avoid a layout shift that this notification causes there.
*
* Documentation: [Base UI Number Field](https://base-ui.com/react/components/number-field)
*/
var NumberFieldScrubAreaCursor = /*#__PURE__*/ import_react.forwardRef(function NumberFieldScrubAreaCursor(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const { state } = useNumberFieldRootContext();
	const { isScrubbing, isTouchInput, isPointerLockDenied, scrubAreaCursorRef } = useNumberFieldScrubAreaContext();
	const [domElement, setDomElement] = import_react.useState(null);
	const element = useRenderElement("span", componentProps, {
		enabled: isScrubbing && !webkit && !isTouchInput && !isPointerLockDenied,
		ref: [
			forwardedRef,
			scrubAreaCursorRef,
			setDomElement
		],
		state,
		props: [{
			role: "presentation",
			style: CURSOR_STYLE
		}, elementProps],
		stateAttributesMapping: stateAttributesMapping$8
	});
	return element && /*#__PURE__*/ import_react_dom.createPortal(element, ownerDocument(domElement).body);
});
NumberFieldScrubAreaCursor.displayName = "NumberFieldScrubAreaCursor";
//#endregion
//#region node_modules/@base-ui/react/number-field/index.parts.mjs
var index_parts_exports$15 = /* @__PURE__ */ __exportAll({
	Decrement: () => NumberFieldDecrement,
	Group: () => NumberFieldGroup,
	Increment: () => NumberFieldIncrement,
	Input: () => NumberFieldInput,
	Root: () => NumberFieldRoot,
	ScrubArea: () => NumberFieldScrubArea,
	ScrubAreaCursor: () => NumberFieldScrubAreaCursor
});
//#endregion
//#region node_modules/@base-ui/react/otp-field/root/OTPFieldRootContext.mjs
var OTPFieldRootContext = /*#__PURE__*/ import_react.createContext(void 0);
OTPFieldRootContext.displayName = "OTPFieldRootContext";
function useOTPFieldRootContext() {
	const context = import_react.useContext(OTPFieldRootContext);
	if (context === void 0) throw new Error("Base UI: OTPFieldRootContext is missing. OTPField parts must be placed within <OTPField.Root>.");
	return context;
}
function getOTPFieldInputState(state, value, index) {
	return {
		...state,
		value,
		index,
		filled: value !== ""
	};
}
//#endregion
//#region node_modules/@base-ui/react/otp-field/utils/stateAttributesMapping.mjs
var rootStateAttributesMapping = {
	value: () => null,
	length: () => null,
	...fieldValidityMapping
};
var inputStateAttributesMapping = {
	value: () => null,
	index: () => null,
	...fieldValidityMapping
};
//#endregion
//#region node_modules/@base-ui/react/otp-field/utils/otp.mjs
var OTP_VALIDATION_CONFIG = {
	numeric: {
		slotPattern: "\\d{1}",
		getRootPattern: (length) => `\\d{${length}}`,
		regexp: /[^\d]/g,
		inputMode: "numeric"
	},
	alpha: {
		slotPattern: "[a-zA-Z]{1}",
		getRootPattern: (length) => `[a-zA-Z]{${length}}`,
		regexp: /[^a-zA-Z]/g,
		inputMode: "text"
	},
	alphanumeric: {
		slotPattern: "[a-zA-Z0-9]{1}",
		getRootPattern: (length) => `[a-zA-Z0-9]{${length}}`,
		regexp: /[^a-zA-Z0-9]/g,
		inputMode: "text"
	}
};
function getOTPValidationConfig(validationType) {
	if (validationType === "none") return null;
	return OTP_VALIDATION_CONFIG[validationType];
}
function stripOTPWhitespace(value) {
	return (value ?? "").replace(/\s/g, "");
}
function applyOTPValidation(value, validation) {
	return validation ? value.replace(validation.regexp, "") : value;
}
/**
* Normalizes user-entered OTP text by stripping whitespace, applying validation and custom
* normalization, and clamping the final value to the configured slot count.
*/
function normalizeOTPValueWithDetails(value, length, validationType, normalizeValue) {
	const strippedValue = stripOTPWhitespace(value);
	const validation = getOTPValidationConfig(validationType);
	let normalizedValue = applyOTPValidation(strippedValue, validation);
	let didRejectCharacters = strippedValue.length > normalizedValue.length;
	if (normalizeValue) {
		const customNormalizedValue = normalizeValue(normalizedValue);
		didRejectCharacters ||= normalizedValue.length > customNormalizedValue.length;
		normalizedValue = applyOTPValidation(customNormalizedValue, validation);
		didRejectCharacters ||= customNormalizedValue.length > normalizedValue.length;
	}
	const maxLength = length < 0 ? 0 : length;
	const normalizedCharacters = Array.from(normalizedValue);
	return [normalizedCharacters.slice(0, maxLength).join(""), didRejectCharacters || normalizedCharacters.length > maxLength];
}
function normalizeOTPValue(value, length, validationType, normalizeValue) {
	return normalizeOTPValueWithDetails(value, length, validationType, normalizeValue)[0];
}
/**
* Replaces characters starting at the provided slot index, then re-normalizes the final OTP value
* so paste and multi-character edits stay contiguous and length-bounded.
*/
function replaceOTPValue(currentValue, index, nextValue, length, validationType, normalizeValue) {
	const normalizedValue = normalizeOTPValue(nextValue, length, validationType, normalizeValue);
	return normalizeOTPValue(`${currentValue.slice(0, index)}${normalizedValue}${currentValue.slice(index + normalizedValue.length)}`, length, validationType, normalizeValue);
}
function removeOTPCharacter(currentValue, index) {
	if (index < 0 || index >= currentValue.length) return currentValue;
	return `${currentValue.slice(0, index)}${currentValue.slice(index + 1)}`;
}
//#endregion
//#region node_modules/@base-ui/react/otp-field/root/OTPFieldRoot.mjs
/**
* Groups all OTP field parts and manages their state.
* Renders a `<div>` element.
*
* Documentation: [Base UI OTP Field](https://base-ui.com/react/components/otp-field)
*/
var OTPFieldRoot = /*#__PURE__*/ import_react.forwardRef(function OTPFieldRoot(componentProps, forwardedRef) {
	const { "aria-describedby": ariaDescribedByProp, "aria-labelledby": ariaLabelledByProp, id: idProp, autoComplete = "one-time-code", defaultValue, value: valueProp, onValueChange, onValueComplete: onValueCompleteProp, form, length, autoSubmit = false, mask = false, inputMode: inputModeProp, validationType = "numeric", normalizeValue, disabled: disabledProp = false, readOnly = false, required = false, name: nameProp, onValueInvalid, render, className, style, ...elementProps } = componentProps;
	const { setDirty, validityData, disabled: fieldDisabled, setFilled, invalid, name: fieldName, state: fieldState, validation, validationMode, setFocused, setTouched } = useFieldRootContext();
	const { clearErrors } = useFormContext();
	const { getDescriptionProps, labelId } = useLabelableContext();
	const disabled = fieldDisabled || disabledProp;
	const name = fieldName ?? nameProp;
	const [valueUnwrapped, setValueUnwrapped] = useControlled({
		controlled: valueProp,
		default: defaultValue,
		name: "OTPField",
		state: "value"
	});
	const rootRef = import_react.useRef(null);
	const inputRefs = import_react.useRef([]);
	const pendingFocusRef = import_react.useRef(null);
	const pendingCompleteValueRef = import_react.useRef(null);
	const firstInputRef = import_react.useMemo(() => ({ get current() {
		return inputRefs.current[0] ?? null;
	} }), []);
	const id = useLabelableId({ id: idProp });
	const ariaLabelledBy = useAriaLabelledBy(ariaLabelledByProp, labelId, firstInputRef, true, id);
	const inputAriaLabelledBy = ariaLabelledByProp == null ? ariaLabelledBy : void 0;
	const ariaDescribedBy = mergeAriaIds(ariaDescribedByProp, getDescriptionProps({})["aria-describedby"]);
	const validationConfig = getOTPValidationConfig(validationType);
	const pattern = validationConfig?.slotPattern;
	const hiddenInputPattern = validationConfig?.getRootPattern(length);
	const inputMode = inputModeProp ?? validationConfig?.inputMode;
	const hasValidLength = Number.isInteger(length) && length > 0;
	const value = normalizeOTPValue(valueUnwrapped, length, validationType, normalizeValue);
	const valueRef = useValueAsRef(value);
	const filled = value !== "";
	const [inputCount, setInputCount] = import_react.useState(0);
	const [focusedIndex, setFocusedIndex] = import_react.useState(() => Math.min(value.length, length - 1));
	const [focused, setFocusedState] = import_react.useState(false);
	const activeIndex = focused ? Math.min(focusedIndex, Math.max(length - 1, 0)) : Math.min(value.length, length - 1);
	useIsoLayoutEffect(() => {
		setFilled(filled);
	}, [filled, setFilled]);
	useOTPFieldRootDevWarnings({
		inputCount,
		length
	});
	useRegisterFieldControl(firstInputRef, id, value, void 0, !disabled, nameProp);
	const focusInput = useStableCallback((index) => {
		const targetIndex = Math.min(Math.max(index, 0), Math.max(inputRefs.current.length - 1, 0));
		const target = inputRefs.current[targetIndex];
		target?.focus();
		target?.select();
	});
	const queueFocusInput = useStableCallback((index, nextValue) => {
		pendingFocusRef.current = {
			index,
			value: nextValue
		};
	});
	function requestSubmit() {
		let formElement = validation.inputRef.current?.form ?? inputRefs.current[0]?.form ?? null;
		if (form) {
			const associatedElement = ownerDocument(rootRef.current).getElementById(form);
			if (associatedElement?.tagName === "FORM") formElement = associatedElement;
		}
		if (formElement && typeof formElement.requestSubmit === "function") formElement.requestSubmit();
	}
	function completeValue(completedValue, eventDetails) {
		onValueCompleteProp?.(completedValue, eventDetails);
		if (autoSubmit) requestSubmit();
	}
	useValueChanged(value, () => {
		clearErrors(name);
		setDirty(value !== validityData.initialValue);
		validation.change(value);
		const pendingFocus = pendingFocusRef.current;
		if (pendingFocus != null) {
			pendingFocusRef.current = null;
			if (pendingFocus.value === value) focusInput(pendingFocus.index);
		}
		const pendingCompleteValue = pendingCompleteValueRef.current;
		if (pendingCompleteValue != null) {
			pendingCompleteValueRef.current = null;
			if (pendingCompleteValue.value === value) completeValue(value, pendingCompleteValue.eventDetails);
		}
	});
	const setValue = useStableCallback((nextValue, details) => {
		const normalizedValue = normalizeOTPValue(nextValue, length, validationType, normalizeValue);
		const completeEventDetails = (details.reason === "input-change" || details.reason === "input-paste") && normalizedValue.length === length && (valueRef.current.length !== length || details.reason === "input-paste") ? createGenericEventDetails(details.reason, details.event) : null;
		if (normalizedValue === valueRef.current) {
			if (completeEventDetails != null) completeValue(normalizedValue, completeEventDetails);
			return null;
		}
		onValueChange?.(normalizedValue, details);
		if (details.isCanceled) return null;
		setValueUnwrapped(normalizedValue);
		if (completeEventDetails != null) pendingCompleteValueRef.current = {
			value: normalizedValue,
			eventDetails: completeEventDetails
		};
		else if (normalizedValue.length !== length) pendingCompleteValueRef.current = null;
		return normalizedValue;
	});
	const reportValueInvalid = useStableCallback((invalidValue, details) => {
		onValueInvalid?.(invalidValue, details);
	});
	const handleInputFocus = useStableCallback((index, event) => {
		if (index > valueRef.current.length) {
			focusInput(Math.min(valueRef.current.length, length - 1));
			return;
		}
		setFocusedIndex(index);
		setFocusedState(true);
		setFocused(true);
		event.currentTarget.select();
	});
	const handleInputBlur = useStableCallback((event) => {
		if (contains(rootRef.current, event.relatedTarget)) return;
		setTouched(true);
		setFocusedState(false);
		setFocused(false);
		if (validationMode === "onBlur") validation.commit(valueRef.current);
	});
	const getInputId = import_react.useCallback((index) => {
		if (id == null) return;
		return index === 0 ? id : `${id}-${index + 1}`;
	}, [id]);
	const state = import_react.useMemo(() => ({
		...fieldState,
		complete: value.length === length,
		disabled,
		filled,
		focused,
		length,
		readOnly,
		required,
		value
	}), [
		disabled,
		fieldState,
		filled,
		focused,
		length,
		readOnly,
		required,
		value
	]);
	const contextValue = import_react.useMemo(() => ({
		autoComplete,
		activeIndex,
		disabled,
		form,
		focusInput,
		queueFocusInput,
		getInputId,
		handleInputBlur,
		handleInputFocus,
		inputMode,
		inputAriaLabelledBy,
		invalid,
		length,
		mask,
		pattern,
		reportValueInvalid,
		readOnly,
		required,
		normalizeValue,
		setValue,
		state,
		validationType,
		value
	}), [
		activeIndex,
		autoComplete,
		disabled,
		focusInput,
		form,
		getInputId,
		handleInputBlur,
		handleInputFocus,
		inputMode,
		inputAriaLabelledBy,
		invalid,
		length,
		mask,
		pattern,
		queueFocusInput,
		readOnly,
		reportValueInvalid,
		required,
		normalizeValue,
		setValue,
		state,
		validationType,
		value
	]);
	const element = useRenderElement("div", componentProps, {
		ref: [forwardedRef, rootRef],
		state,
		props: [{
			role: "group",
			"aria-describedby": ariaDescribedBy,
			"aria-labelledby": ariaLabelledBy
		}, elementProps],
		stateAttributesMapping: rootStateAttributesMapping
	});
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(CompositeList, {
		elementsRef: inputRefs,
		onMapChange: (newMap) => {
			setInputCount(newMap.size);
		},
		children: /*#__PURE__*/ (0, import_jsx_runtime.jsxs)(OTPFieldRootContext.Provider, {
			value: contextValue,
			children: [element, hasValidLength && /*#__PURE__*/ (0, import_jsx_runtime.jsx)("input", {
				...validation.getValidationProps(disabled, {
					onFocus() {
						focusInput(0);
					},
					onChange(event) {
						if (event.nativeEvent.defaultPrevented || disabled || readOnly) return;
						const rawValue = event.currentTarget.value;
						const [normalizedValue, didRejectCharacters] = normalizeOTPValueWithDetails(rawValue, length, validationType, normalizeValue);
						if (didRejectCharacters) reportValueInvalid(rawValue, createGenericEventDetails("input-change", event.nativeEvent));
						const committedValue = setValue(normalizedValue, createChangeEventDetails("input-change", event.nativeEvent));
						if (committedValue != null && committedValue !== "") queueFocusInput(committedValue.length - 1, committedValue);
					}
				}),
				ref: validation.inputRef,
				type: "text",
				id: id && name == null ? `${id}-hidden-input` : void 0,
				form,
				name,
				value,
				autoComplete,
				inputMode,
				minLength: length,
				maxLength: length,
				pattern: hiddenInputPattern,
				disabled,
				readOnly,
				required,
				"aria-hidden": true,
				tabIndex: -1,
				style: name ? visuallyHiddenInput : visuallyHidden
			})]
		})
	});
});
OTPFieldRoot.displayName = "OTPFieldRoot";
function mergeAriaIds(...values) {
	const ids = values.flatMap((value) => value?.split(/\s+/).filter(Boolean) ?? []);
	return ids.length > 0 ? Array.from(new Set(ids)).join(" ") : void 0;
}
function useOTPFieldRootDevWarnings(parameters) {
	const { inputCount, length } = parameters;
	import_react.useEffect(() => {
		if (!Number.isInteger(length) || length <= 0 || inputCount === 0 || inputCount === length) return;
		const ownerStackMessage = SafeReact.captureOwnerStack?.() || "";
		warn(`<OTPField.Root> \`length\` must match the number of rendered <OTPField.Input /> parts. Received \`length={${length}}\` but rendered ${inputCount} input${inputCount === 1 ? "" : "s"}.`, ownerStackMessage);
	}, [inputCount, length]);
	import_react.useEffect(() => {
		if (Number.isInteger(length) && length > 0) return;
		const ownerStackMessage = SafeReact.captureOwnerStack?.() || "";
		warn(`<OTPField.Root> \`length\` must be a positive integer. Received \`length={${String(length)}}\`.`, ownerStackMessage);
	}, [length]);
}
//#endregion
//#region node_modules/@base-ui/react/otp-field/input/OTPFieldInput.mjs
/**
* An individual OTP character input.
* Renders an `<input>` element.
*
* Documentation: [Base UI OTP Field](https://base-ui.com/react/components/otp-field)
*/
var OTPFieldInput = /*#__PURE__*/ import_react.forwardRef(function OTPFieldInput(componentProps, forwardedRef) {
	const { "aria-label": externalAriaLabel, "aria-labelledby": externalAriaLabelledBy, render, className, style, ...elementProps } = componentProps;
	const { activeIndex, autoComplete, disabled, form, focusInput, queueFocusInput, getInputId, handleInputBlur, handleInputFocus, inputMode, inputAriaLabelledBy, invalid, length, mask, pattern, reportValueInvalid, readOnly, required, normalizeValue, setValue, state, validationType, value } = useOTPFieldRootContext();
	const { ref: listItemRef, index } = useCompositeListItem({ guess: true });
	const inputRef = import_react.useRef(null);
	const direction = useDirection();
	const slotValue = value[index] ?? "";
	const inputState = getOTPFieldInputState(state, slotValue, index);
	const slotAriaLabel = externalAriaLabel;
	const inheritedLabel = externalAriaLabelledBy ?? inputAriaLabelledBy;
	const ariaLabel = index === 0 ? void 0 : slotAriaLabel;
	import_react.useEffect(() => {
		if (index !== 0 || slotAriaLabel == null || inputRef.current?.labels?.length) return;
		warn("<OTPField.Input> ignores `aria-label` on the first input. Use a `<label>` or `<Field.Label>` to label the OTP field.", SafeReact.captureOwnerStack?.() || "");
	}, [index, slotAriaLabel]);
	const inputProps = {
		id: getInputId(index),
		value: slotValue,
		type: mask ? "password" : "text",
		inputMode,
		autoComplete: index === 0 ? autoComplete : "off",
		autoCorrect: "off",
		spellCheck: "false",
		enterKeyHint: index === length - 1 ? "done" : "next",
		maxLength: index === 0 ? length : void 0,
		tabIndex: activeIndex === index ? 0 : -1,
		disabled,
		form,
		pattern,
		readOnly,
		required,
		"aria-labelledby": ariaLabel == null ? inheritedLabel : void 0,
		"aria-invalid": !disabled && invalid ? true : void 0,
		"aria-label": ariaLabel,
		onMouseDown(event) {
			if (event.defaultPrevented || disabled) return;
			event.preventDefault();
			focusInput(index);
		},
		onFocus(event) {
			if (event.defaultPrevented || disabled) return;
			handleInputFocus(index, event);
		},
		onBlur(event) {
			if (event.defaultPrevented) return;
			handleInputBlur(event);
		},
		onChange(event) {
			if (event.defaultPrevented || disabled || readOnly) return;
			const rawValue = event.currentTarget.value;
			const [nextDigits, didRejectCharacters] = normalizeOTPValueWithDetails(rawValue, length, validationType, normalizeValue);
			if (didRejectCharacters) reportValueInvalid(rawValue, createGenericEventDetails(inputChange, event.nativeEvent));
			if (nextDigits === "") {
				if (rawValue === "") setValue(removeOTPCharacter(value, index), createChangeEventDetails(inputClear, event.nativeEvent));
				else if (slotValue !== "") {
					event.currentTarget.value = slotValue;
					event.currentTarget.select();
				}
				return;
			}
			const nextValue = replaceOTPValue(value, index, nextDigits, length, validationType, normalizeValue);
			const committedValue = setValue(nextValue, createChangeEventDetails(inputChange, event.nativeEvent));
			if (committedValue != null) {
				const nextInput = Math.min(index + nextDigits.length, length - 1);
				queueFocusInput(nextInput, committedValue);
			}
		},
		onKeyDown(event) {
			if (event.defaultPrevented || disabled) return;
			const firstIndex = 0;
			const lastIndex = Math.max(length - 1, firstIndex);
			const endTargetIndex = Math.min(value.length, lastIndex);
			const hasBoundaryModifier = (event.ctrlKey || event.metaKey) && !event.altKey;
			const isRtl = direction === "rtl";
			const previousKey = isRtl ? "ArrowRight" : "ArrowLeft";
			const nextKey = isRtl ? "ArrowLeft" : "ArrowRight";
			if (event.key === previousKey) {
				stopEvent(event);
				focusInput(hasBoundaryModifier ? firstIndex : Math.max(firstIndex, index - 1));
				return;
			}
			if (event.key === nextKey) {
				stopEvent(event);
				focusInput(hasBoundaryModifier ? endTargetIndex : Math.min(lastIndex, index + 1));
				return;
			}
			if (event.key === "Home" || event.key === "ArrowUp") {
				stopEvent(event);
				focusInput(firstIndex);
				return;
			}
			if (event.key === "End" || event.key === "ArrowDown") {
				stopEvent(event);
				focusInput(endTargetIndex);
				return;
			}
			if (readOnly) return;
			function setKeyboardValue(nextValue, targetIndex) {
				const committedValue = setValue(nextValue, createChangeEventDetails(keyboard, event.nativeEvent));
				if (committedValue != null) queueFocusInput(targetIndex, committedValue);
			}
			if (event.key === "Backspace" && hasBoundaryModifier) {
				stopEvent(event);
				setKeyboardValue("", firstIndex);
				return;
			}
			if (event.key === "Delete") {
				stopEvent(event);
				setKeyboardValue(removeOTPCharacter(value, index), index);
				return;
			}
			const inputValue = event.currentTarget.value;
			const fullSelection = event.currentTarget.selectionStart === 0 && event.currentTarget.selectionEnd === inputValue.length;
			if (event.key.length === 1 && fullSelection && slotValue === event.key) {
				stopEvent(event);
				if (index < length - 1) focusInput(index + 1);
				return;
			}
			if (event.key === "Backspace") {
				stopEvent(event);
				const targetIndex = Math.max(firstIndex, index - 1);
				setKeyboardValue(removeOTPCharacter(value, slotValue === "" ? targetIndex : index), targetIndex);
			}
		},
		onPaste(event) {
			if (event.defaultPrevented || disabled || readOnly) return;
			let rawValue = "";
			try {
				rawValue = event.clipboardData?.getData("text/plain") ?? "";
			} catch {
				warn("<OTPField.Input> could not read clipboard text during paste handling.", SafeReact.captureOwnerStack?.() || "");
				return;
			}
			event.preventDefault();
			const [nextDigits, didRejectCharacters] = normalizeOTPValueWithDetails(rawValue, length, validationType, normalizeValue);
			if (didRejectCharacters) reportValueInvalid(rawValue, createGenericEventDetails(inputPaste, event.nativeEvent));
			if (nextDigits === "") return;
			const committedValue = setValue(replaceOTPValue(value, index, nextDigits, length, validationType, normalizeValue), createChangeEventDetails(inputPaste, event.nativeEvent));
			if (committedValue != null) {
				const nextInput = Math.min(index + nextDigits.length, length - 1);
				queueFocusInput(nextInput, committedValue);
			}
		}
	};
	return useRenderElement("input", componentProps, {
		ref: [
			forwardedRef,
			listItemRef,
			inputRef
		],
		state: inputState,
		props: [inputProps, elementProps],
		stateAttributesMapping: inputStateAttributesMapping
	});
});
OTPFieldInput.displayName = "OTPFieldInput";
//#endregion
//#region node_modules/@base-ui/react/otp-field/index.parts.mjs
var index_parts_exports$16 = /* @__PURE__ */ __exportAll({
	Input: () => OTPFieldInput,
	Root: () => OTPFieldRoot,
	Separator: () => Separator
});
//#endregion
//#region node_modules/@base-ui/react/preview-card/root/PreviewCardContext.mjs
var PreviewCardRootContext = /*#__PURE__*/ import_react.createContext(void 0);
PreviewCardRootContext.displayName = "PreviewCardRootContext";
function usePreviewCardRootContext(optional) {
	const context = import_react.useContext(PreviewCardRootContext);
	if (context === void 0 && !optional) throw new Error("Base UI: PreviewCardRootContext is missing. PreviewCard parts must be placed within <PreviewCard.Root>.");
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/preview-card/store/PreviewCardStore.mjs
var selectors$2 = {
	...popupStoreSelectors,
	instantType: (state) => state.instantType,
	adaptiveOrigin: (state) => state.adaptiveOrigin,
	closeDelay: (state) => state.closeDelay
};
/**
* The store view that detached handle-backed triggers read from. Both the real `PreviewCardStore`
* and the inert fallback store satisfy it, so a trigger can read from whichever store the handle
* currently exposes. Narrowed to the trigger-data members a trigger uses; it exposes no popup-open
* mutator, so the inert fallback can be a plain `NullStore`.
*/
var PreviewCardStore = class extends ReactStore {
	constructor(initialState, floatingId, nested) {
		const triggerElements = new PopupTriggerMap();
		super(createInitialState$1(initialState, triggerElements, floatingId, nested), createInitialContext$1(triggerElements), selectors$2);
	}
	setOpen = (nextOpen, eventDetails) => {
		const { inlineRectCoordsRef } = this.context;
		applyPopupOpenChange(this, nextOpen, eventDetails, { onBeforeDispatch() {
			const event = eventDetails.event;
			if (nextOpen && eventDetails.reason === "trigger-hover" && eventDetails.trigger && "clientX" in event && "clientY" in event && inlineRectCoordsRef.current?.element !== eventDetails.trigger) updateInlineRectCoords(inlineRectCoordsRef, eventDetails.trigger, event.clientX, event.clientY);
		} });
	};
};
/**
* Creates the inert fallback store used by detached handle-backed triggers while no
* `PreviewCard.Root` is attached. It preserves a preview-card-specific trigger registry in context
* so detached triggers can register before migrating to the live root store.
*/
function createNullPreviewCardStore() {
	const triggerElements = new PopupTriggerMap();
	return new NullStore(Object.freeze(createInitialState$1(void 0, triggerElements)), Object.freeze(createInitialContext$1(triggerElements)), selectors$2);
}
function createInitialState$1(initialState, triggerElements, floatingId, nested = false) {
	const state = {
		...createInitialPopupStoreState(),
		instantType: void 0,
		adaptiveOrigin: void 0,
		closeDelay: 300,
		...initialState
	};
	state.floatingRootContext = createPopupFloatingRootContext(triggerElements, floatingId, nested);
	return state;
}
function createInitialContext$1(triggerElements) {
	return {
		popupRef: /*#__PURE__*/ import_react.createRef(),
		onOpenChange: void 0,
		onOpenChangeComplete: void 0,
		triggerElements,
		inlineRectCoordsRef: { current: void 0 }
	};
}
//#endregion
//#region node_modules/@base-ui/react/preview-card/root/PreviewCardRoot.mjs
function PreviewCardRootComponent(props) {
	const { open: openProp, defaultOpen = false, onOpenChange, onOpenChangeComplete, actionsRef, handle, triggerId: triggerIdProp, defaultTriggerId: defaultTriggerIdProp = null, children } = props;
	const store = usePopupRootStore((floatingId, nested) => new PreviewCardStore({
		open: defaultOpen,
		openProp,
		activeTriggerId: defaultTriggerIdProp,
		triggerIdProp
	}, floatingId, nested));
	store.useControlledProp("openProp", openProp);
	store.useControlledProp("triggerIdProp", triggerIdProp);
	store.useContextCallback("onOpenChange", onOpenChange);
	store.useContextCallback("onOpenChangeComplete", onOpenChangeComplete);
	const open = store.useState("open");
	const activeTriggerId = store.useState("activeTriggerId");
	const mounted = store.useState("mounted");
	const payload = store.useState("payload");
	useImplicitActiveTrigger(store, { closeOnActiveTriggerUnmount: true });
	const { forceUnmount } = useOpenStateTransitions(open, store, () => {
		store.context.inlineRectCoordsRef.current = void 0;
	});
	useIsoLayoutEffect(() => {
		if (open) {
			if (activeTriggerId == null) store.set("payload", void 0);
		}
	}, [
		store,
		activeTriggerId,
		open
	]);
	import_react.useImperativeHandle(actionsRef, () => ({
		unmount: forceUnmount,
		close: () => store.setOpen(false, createChangeEventDetails(imperativeAction))
	}), [forceUnmount, store]);
	const shouldRenderInteractions = open || mounted;
	return /*#__PURE__*/ (0, import_jsx_runtime.jsxs)(PreviewCardRootContext.Provider, {
		value: store,
		children: [
			handle && /*#__PURE__*/ (0, import_jsx_runtime.jsx)(PopupHandleAttachment, {
				handle,
				store
			}),
			shouldRenderInteractions && /*#__PURE__*/ (0, import_jsx_runtime.jsx)(PreviewCardInteractions, { store }),
			typeof children === "function" ? children({ payload }) : children
		]
	});
}
function PreviewCardInteractions({ store }) {
	const dismiss = useDismiss(store.useState("floatingRootContext"));
	usePopupInteractionProps(store, {
		activeTriggerProps: dismiss.reference,
		inactiveTriggerProps: dismiss.trigger,
		popupProps: dismiss.floating
	});
	return null;
}
/**
* Groups all parts of the preview card.
* Doesn't render its own HTML element.
*
* Documentation: [Base UI Preview Card](https://base-ui.com/react/components/preview-card)
*/
var PreviewCardRoot = fastComponent(function PreviewCardRoot(props) {
	if (usePreviewCardRootContext(true)) return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(PreviewCardRootComponent, { ...props });
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(FloatingTree, { children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(PreviewCardRootComponent, { ...props }) });
});
PreviewCardRoot.displayName = "PreviewCardRoot";
//#endregion
//#region node_modules/@base-ui/react/preview-card/portal/PreviewCardPortalContext.mjs
var PreviewCardPortalContext = /*#__PURE__*/ import_react.createContext(void 0);
PreviewCardPortalContext.displayName = "PreviewCardPortalContext";
function usePreviewCardPortalContext() {
	const value = import_react.useContext(PreviewCardPortalContext);
	if (value === void 0) throw new Error("Base UI: <PreviewCard.Portal> is missing.");
	return value;
}
//#endregion
//#region node_modules/@base-ui/react/preview-card/portal/PreviewCardPortal.mjs
/**
* A portal element that moves the popup to a different part of the DOM.
* By default, the portal element is appended to `<body>`.
* Renders a `<div>` element.
*
* Documentation: [Base UI Preview Card](https://base-ui.com/react/components/preview-card)
*/
var PreviewCardPortal = /*#__PURE__*/ import_react.forwardRef(function PreviewCardPortal(props, forwardedRef) {
	const { keepMounted = false, ...portalProps } = props;
	if (!(usePreviewCardRootContext().useState("mounted") || keepMounted)) return null;
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(PreviewCardPortalContext.Provider, {
		value: keepMounted,
		children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(FloatingPortalLite, {
			ref: forwardedRef,
			...portalProps
		})
	});
});
PreviewCardPortal.displayName = "PreviewCardPortal";
//#endregion
//#region node_modules/@base-ui/react/preview-card/trigger/PreviewCardTrigger.mjs
/**
* A link that opens the preview card.
* Renders an `<a>` element.
*
* Documentation: [Base UI Preview Card](https://base-ui.com/react/components/preview-card)
*/
var PreviewCardTrigger = fastComponentRef(function PreviewCardTrigger(componentProps, forwardedRef) {
	const { render, className, delay, closeDelay, id: idProp, payload, handle, style, ...elementProps } = componentProps;
	const rootContext = usePreviewCardRootContext(true);
	const store = usePopupHandleStore(handle) ?? rootContext;
	if (!store) throw new Error("Base UI: <PreviewCard.Trigger> must be either used within a <PreviewCard.Root> component or provided with a handle.");
	const thisTriggerId = useBaseUiId(idProp);
	const isTriggerActive = store.useState("isTriggerActive", thisTriggerId);
	const isOpenedByThisTrigger = store.useState("isOpenedByTrigger", thisTriggerId);
	const floatingRootContext = store.useState("floatingRootContext");
	const inlineRectCoordsRef = store.context.inlineRectCoordsRef;
	const triggerElementRef = import_react.useRef(null);
	const delayWithDefault = delay ?? 600;
	const closeDelayWithDefault = closeDelay ?? 300;
	const { registerTrigger, isMountedByThisTrigger } = useTriggerDataForwarding(thisTriggerId, triggerElementRef, store, {
		payload,
		closeDelay: closeDelayWithDefault
	});
	const hoverProps = useHoverReferenceInteraction(floatingRootContext, {
		mouseOnly: true,
		move: false,
		handleClose: safePolygon(),
		delay: () => ({
			open: delayWithDefault,
			close: closeDelayWithDefault
		}),
		triggerElementRef,
		isActiveTrigger: isTriggerActive,
		isClosing: () => store.select("transitionStatus") === "ending"
	});
	const focusProps = useFocus(floatingRootContext, { delay: delayWithDefault });
	const state = { open: isOpenedByThisTrigger };
	const rootTriggerProps = store.useState("triggerProps", isMountedByThisTrigger);
	const inlineRectTriggerProps = getInlineRectTriggerProps(inlineRectCoordsRef, isOpenedByThisTrigger);
	return useRenderElement("a", componentProps, {
		state,
		ref: [
			forwardedRef,
			registerTrigger,
			triggerElementRef
		],
		props: [
			hoverProps,
			focusProps.reference,
			rootTriggerProps,
			inlineRectTriggerProps,
			{ id: thisTriggerId },
			elementProps
		],
		stateAttributesMapping: triggerOpenStateMapping$1
	});
});
PreviewCardTrigger.displayName = "PreviewCardTrigger";
//#endregion
//#region node_modules/@base-ui/react/preview-card/positioner/PreviewCardPositionerContext.mjs
var PreviewCardPositionerContext = /*#__PURE__*/ import_react.createContext(void 0);
PreviewCardPositionerContext.displayName = "PreviewCardPositionerContext";
function usePreviewCardPositionerContext() {
	const context = import_react.useContext(PreviewCardPositionerContext);
	if (context === void 0) throw new Error("Base UI: PreviewCardPositionerContext is missing. PreviewCardPositioner parts must be placed within <PreviewCard.Positioner>.");
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/preview-card/positioner/PreviewCardPositioner.mjs
/**
* Positions the popup against the trigger.
* Renders a `<div>` element.
*
* Documentation: [Base UI Preview Card](https://base-ui.com/react/components/preview-card)
*/
var PreviewCardPositioner = /*#__PURE__*/ import_react.forwardRef(function PreviewCardPositioner(componentProps, forwardedRef) {
	const { render, className, anchor, positionMethod = "absolute", side = "bottom", align = "center", sideOffset = 0, alignOffset = 0, collisionBoundary = "clipping-ancestors", collisionPadding = 5, arrowPadding = 5, sticky = false, disableAnchorTracking = false, collisionAvoidance = POPUP_COLLISION_AVOIDANCE, style, ...elementProps } = componentProps;
	const store = usePreviewCardRootContext();
	const keepMounted = usePreviewCardPortalContext();
	const nodeId = useFloatingNodeId();
	const open = store.useState("open");
	const mounted = store.useState("mounted");
	const floatingRootContext = store.useState("floatingRootContext");
	const instantType = store.useState("instantType");
	const transitionStatus = store.useState("transitionStatus");
	const adaptiveOrigin = store.useState("adaptiveOrigin");
	const inlineRectCoordsRef = store.context.inlineRectCoordsRef;
	const positioning = useAnchorPositioning({
		anchor,
		floatingRootContext,
		positionMethod,
		mounted,
		side,
		sideOffset,
		align,
		alignOffset,
		arrowPadding,
		collisionBoundary,
		collisionPadding,
		sticky,
		disableAnchorTracking,
		keepMounted,
		nodeId,
		collisionAvoidance,
		adaptiveOrigin,
		inline: createInlineMiddleware(inlineRectCoordsRef)
	});
	const updatePosition = positioning.update;
	useIsoLayoutEffect(() => {
		if (open && mounted) updatePosition();
	}, [
		open,
		mounted,
		updatePosition
	]);
	const element = usePositioner(componentProps, {
		open,
		side: positioning.side,
		align: positioning.align,
		anchorHidden: positioning.anchorHidden,
		instant: instantType
	}, {
		styles: positioning.positionerStyles,
		transitionStatus,
		props: elementProps,
		refs: [forwardedRef, store.useStateSetter("positionerElement")],
		hidden: !mounted,
		inert: !open
	});
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(PreviewCardPositionerContext.Provider, {
		value: positioning,
		children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(FloatingNode, {
			id: nodeId,
			children: element
		})
	});
});
PreviewCardPositioner.displayName = "PreviewCardPositioner";
//#endregion
//#region node_modules/@base-ui/react/preview-card/popup/PreviewCardPopup.mjs
/**
* A container for the preview card contents.
* Renders a `<div>` element.
*
* Documentation: [Base UI Preview Card](https://base-ui.com/react/components/preview-card)
*/
var PreviewCardPopup = /*#__PURE__*/ import_react.forwardRef(function PreviewCardPopup(componentProps, forwardedRef) {
	const { className, render, style, ...elementProps } = componentProps;
	const store = usePreviewCardRootContext();
	const { side, align } = usePreviewCardPositionerContext();
	const open = store.useState("open");
	const instantType = store.useState("instantType");
	const transitionStatus = store.useState("transitionStatus");
	const popupProps = store.useState("popupProps");
	const floatingContext = store.useState("floatingRootContext");
	const closeDelay = store.useState("closeDelay");
	useOpenChangeComplete({
		open,
		ref: store.context.popupRef,
		onComplete() {
			if (open) store.context.onOpenChangeComplete?.(true);
		}
	});
	useHoverFloatingInteraction(floatingContext, { closeDelay });
	return useRenderElement("div", componentProps, {
		state: {
			open,
			side,
			align,
			instant: instantType,
			transitionStatus
		},
		ref: [
			forwardedRef,
			store.context.popupRef,
			store.useStateSetter("popupElement")
		],
		props: [
			FOCUSABLE_POPUP_PROPS,
			popupProps,
			getDisabledMountTransitionStyles(transitionStatus),
			elementProps
		],
		stateAttributesMapping: popupTransitionStateMapping
	});
});
PreviewCardPopup.displayName = "PreviewCardPopup";
//#endregion
//#region node_modules/@base-ui/react/preview-card/arrow/PreviewCardArrow.mjs
/**
* Displays an element positioned against the preview card anchor.
* Renders a `<div>` element.
*
* Documentation: [Base UI Preview Card](https://base-ui.com/react/components/preview-card)
*/
var PreviewCardArrow = /*#__PURE__*/ import_react.forwardRef(function PreviewCardArrow(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const store = usePreviewCardRootContext();
	const { arrowRef, side, align, arrowUncentered, arrowStyles } = usePreviewCardPositionerContext();
	return useRenderElement("div", componentProps, {
		state: {
			open: store.useState("open"),
			side,
			align,
			uncentered: arrowUncentered
		},
		ref: [arrowRef, forwardedRef],
		props: [{
			style: arrowStyles,
			"aria-hidden": true
		}, elementProps],
		stateAttributesMapping: popupStateMapping
	});
});
PreviewCardArrow.displayName = "PreviewCardArrow";
//#endregion
//#region node_modules/@base-ui/react/preview-card/backdrop/PreviewCardBackdrop.mjs
/**
* A presentational overlay displayed beneath the popup.
* Renders a `<div>` element.
*
* Documentation: [Base UI Preview Card](https://base-ui.com/react/components/preview-card)
*/
var PreviewCardBackdrop = /*#__PURE__*/ import_react.forwardRef(function PreviewCardBackdrop(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const store = usePreviewCardRootContext();
	const open = store.useState("open");
	const mounted = store.useState("mounted");
	return useRenderElement("div", componentProps, {
		state: {
			open,
			transitionStatus: store.useState("transitionStatus")
		},
		ref: [forwardedRef],
		props: [{
			role: "presentation",
			hidden: !mounted,
			style: {
				pointerEvents: "none",
				userSelect: "none",
				WebkitUserSelect: "none"
			}
		}, elementProps],
		stateAttributesMapping: popupTransitionStateMapping
	});
});
PreviewCardBackdrop.displayName = "PreviewCardBackdrop";
//#endregion
//#region node_modules/@base-ui/react/preview-card/viewport/PreviewCardViewport.mjs
/**
* A viewport for displaying content transitions.
* This component is only required if one popup can be opened by multiple triggers, its content
* changes based on the trigger, and switching between them is animated.
* Renders a `<div>` element.
*
* Documentation: [Base UI Preview Card](https://base-ui.com/react/components/preview-card)
*/
var PreviewCardViewport = /*#__PURE__*/ import_react.forwardRef(function PreviewCardViewport(componentProps, forwardedRef) {
	const { render, className, style, children, ...elementProps } = componentProps;
	const store = usePreviewCardRootContext();
	const positioner = usePreviewCardPositionerContext();
	const instantType = store.useState("instantType");
	const { children: childrenToRender, state: viewportState } = usePopupViewport({
		store,
		side: positioner.side,
		children
	});
	return useRenderElement("div", componentProps, {
		state: {
			activationDirection: viewportState.activationDirection,
			transitioning: viewportState.transitioning,
			instant: instantType
		},
		ref: forwardedRef,
		props: [elementProps, { children: childrenToRender }],
		stateAttributesMapping: popupViewportStateMapping
	});
});
PreviewCardViewport.displayName = "PreviewCardViewport";
//#endregion
//#region node_modules/@base-ui/react/preview-card/store/PreviewCardHandle.mjs
/**
* Controls a PreviewCard imperatively and associates detached `PreviewCard.Trigger` components with
* a `PreviewCard.Root`. Create one with `PreviewCard.createHandle()` and pass it to the `handle`
* prop of the root and of any triggers rendered outside of it.
*
* The imperative methods take effect only while a root using this handle is mounted; calls made
* before a root attaches (or after it unmounts) are ignored.
*/
var PreviewCardHandle = class extends BasePopupHandle {
	constructor() {
		super(createNullPreviewCardStore(), "PreviewCard");
	}
	/**
	* Opens the preview card and associates it with the trigger with the given id.
	*
	* This method should only be called in an event handler or an effect (not during rendering).
	*
	* @param triggerId ID of the trigger to associate with the preview card. The trigger must be a
	* matching `PreviewCard.Trigger` with this handle passed as a prop.
	*/
	open(triggerId) {
		this.openByTrigger(triggerId);
	}
	/**
	* Closes the preview card.
	*
	* This method should only be called in an event handler or an effect (not during rendering).
	*/
	close() {
		this.closePopup();
	}
	/**
	* Whether the preview card is currently open. Returns `false` while no root is attached to the handle.
	*/
	get isOpen() {
		return this.attachedStore?.select("open") ?? false;
	}
};
/**
* Creates a new handle to connect a PreviewCard.Root with detached PreviewCard.Trigger components.
*/
function createPreviewCardHandle() {
	return new PreviewCardHandle();
}
//#endregion
//#region node_modules/@base-ui/react/preview-card/index.parts.mjs
var index_parts_exports$18 = /* @__PURE__ */ __exportAll({
	Arrow: () => PreviewCardArrow,
	Backdrop: () => PreviewCardBackdrop,
	Handle: () => PreviewCardHandle,
	Popup: () => PreviewCardPopup,
	Portal: () => PreviewCardPortal,
	Positioner: () => PreviewCardPositioner,
	Root: () => PreviewCardRoot,
	Trigger: () => PreviewCardTrigger,
	Viewport: () => PreviewCardViewport,
	createHandle: () => createPreviewCardHandle
});
//#endregion
//#region node_modules/@base-ui/react/progress/root/ProgressRootContext.mjs
/**
* @internal
*/
var ProgressRootContext = /*#__PURE__*/ import_react.createContext(void 0);
ProgressRootContext.displayName = "ProgressRootContext";
function useProgressRootContext() {
	const context = import_react.useContext(ProgressRootContext);
	if (context === void 0) throw new Error("Base UI: ProgressRootContext is missing. Progress parts must be placed within <Progress.Root>.");
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/progress/root/stateAttributesMapping.mjs
var progressStateAttributesMapping = { status(value) {
	return { [`data-${value}`]: "" };
} };
//#endregion
//#region node_modules/@base-ui/react/progress/root/ProgressRoot.mjs
/**
* Groups all parts of the progress bar and provides the task completion status to screen readers.
* Renders a `<div>` element.
*
* Documentation: [Base UI Progress](https://base-ui.com/react/components/progress)
*/
var ProgressRoot = /*#__PURE__*/ import_react.forwardRef(function ProgressRoot(componentProps, forwardedRef) {
	const { format, getAriaValueText, locale, max = 100, min = 0, value, render, className, children, style, ...elementProps } = componentProps;
	const [labelId, setLabelId] = import_react.useState();
	let status = "indeterminate";
	let percentageValue = null;
	let clampedValue = null;
	let formattedValue = "";
	let defaultAriaValueText = "indeterminate progress";
	if (value != null && Number.isFinite(value)) {
		const rawPercentage = valueToPercent(value, min, max);
		percentageValue = clamp(Number.isNaN(rawPercentage) ? 0 : rawPercentage, 0, 100);
		clampedValue = clamp(value, min, max);
		status = clampedValue === max ? "complete" : "progressing";
		formattedValue = format ? formatNumber(clampedValue, locale, format) : formatNumber(percentageValue / 100, locale, { style: "percent" });
		defaultAriaValueText = formattedValue;
	}
	const state = import_react.useMemo(() => ({ status }), [status]);
	const defaultProps = {
		"aria-labelledby": labelId,
		"aria-valuemax": max,
		"aria-valuemin": min,
		"aria-valuenow": clampedValue ?? void 0,
		"aria-valuetext": getAriaValueText ? getAriaValueText(formattedValue, value) : defaultAriaValueText,
		role: "progressbar",
		children: /*#__PURE__*/ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [children, /*#__PURE__*/ (0, import_jsx_runtime.jsx)("span", {
			role: "presentation",
			style: visuallyHidden,
			children: "x"
		})] })
	};
	const contextValue = import_react.useMemo(() => ({
		formattedValue,
		percentageValue,
		setLabelId,
		state,
		value
	}), [
		formattedValue,
		percentageValue,
		setLabelId,
		state,
		value
	]);
	const element = useRenderElement("div", componentProps, {
		state,
		ref: forwardedRef,
		props: [defaultProps, elementProps],
		stateAttributesMapping: progressStateAttributesMapping
	});
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ProgressRootContext.Provider, {
		value: contextValue,
		children: element
	});
});
ProgressRoot.displayName = "ProgressRoot";
//#endregion
//#region node_modules/@base-ui/react/progress/track/ProgressTrack.mjs
/**
* Contains the progress bar indicator.
* Renders a `<div>` element.
*
* Documentation: [Base UI Progress](https://base-ui.com/react/components/progress)
*/
var ProgressTrack = /*#__PURE__*/ import_react.forwardRef(function ProgressTrack(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const { state } = useProgressRootContext();
	return useRenderElement("div", componentProps, {
		state,
		ref: forwardedRef,
		props: elementProps,
		stateAttributesMapping: progressStateAttributesMapping
	});
});
ProgressTrack.displayName = "ProgressTrack";
//#endregion
//#region node_modules/@base-ui/react/progress/indicator/ProgressIndicator.mjs
/**
* Visualizes the completion status of the task.
* Renders a `<div>` element.
*
* Documentation: [Base UI Progress](https://base-ui.com/react/components/progress)
*/
var ProgressIndicator = /*#__PURE__*/ import_react.forwardRef(function ProgressIndicator(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const { percentageValue, state } = useProgressRootContext();
	return useRenderElement("div", componentProps, {
		state,
		ref: forwardedRef,
		props: [{ style: percentageValue == null ? {} : {
			insetInlineStart: 0,
			height: "inherit",
			width: `${percentageValue}%`
		} }, elementProps],
		stateAttributesMapping: progressStateAttributesMapping
	});
});
ProgressIndicator.displayName = "ProgressIndicator";
//#endregion
//#region node_modules/@base-ui/react/progress/value/ProgressValue.mjs
/**
* A text element displaying the current value.
* Renders a `<span>` element.
*
* Documentation: [Base UI Progress](https://base-ui.com/react/components/progress)
*/
var ProgressValue = /*#__PURE__*/ import_react.forwardRef(function ProgressValue(componentProps, forwardedRef) {
	const { className, render, children, style, ...elementProps } = componentProps;
	const { value, formattedValue, state } = useProgressRootContext();
	const indeterminate = state.status === "indeterminate";
	return useRenderElement("span", componentProps, {
		state,
		ref: forwardedRef,
		props: [{
			"aria-hidden": true,
			children: typeof children === "function" ? children(indeterminate ? "indeterminate" : formattedValue, value) : indeterminate ? null : formattedValue
		}, elementProps],
		stateAttributesMapping: progressStateAttributesMapping
	});
});
ProgressValue.displayName = "ProgressValue";
//#endregion
//#region node_modules/@base-ui/react/progress/label/ProgressLabel.mjs
/**
* An accessible label for the progress bar.
* Renders a `<span>` element.
*
* Documentation: [Base UI Progress](https://base-ui.com/react/components/progress)
*/
var ProgressLabel = /*#__PURE__*/ import_react.forwardRef(function ProgressLabel(componentProps, forwardedRef) {
	const { render, className, style, id: idProp, ...elementProps } = componentProps;
	const { setLabelId, state } = useProgressRootContext();
	return useRenderElement("span", componentProps, {
		state,
		ref: forwardedRef,
		props: [{
			id: useRegisteredLabelId(idProp, setLabelId),
			role: "presentation"
		}, elementProps],
		stateAttributesMapping: progressStateAttributesMapping
	});
});
ProgressLabel.displayName = "ProgressLabel";
//#endregion
//#region node_modules/@base-ui/react/progress/index.parts.mjs
var index_parts_exports$19 = /* @__PURE__ */ __exportAll({
	Indicator: () => ProgressIndicator,
	Label: () => ProgressLabel,
	Root: () => ProgressRoot,
	Track: () => ProgressTrack,
	Value: () => ProgressValue
});
//#endregion
//#region node_modules/@base-ui/react/radio/utils/stateAttributesMapping.mjs
var stateAttributesMapping$7 = {
	checked(value) {
		if (value) return { "data-checked": "" };
		return { "data-unchecked": "" };
	},
	...transitionStatusMapping,
	...fieldValidityMapping
};
//#endregion
//#region node_modules/@base-ui/react/radio-group/RadioGroupContext.mjs
var RadioGroupContext = /*#__PURE__*/ import_react.createContext(void 0);
RadioGroupContext.displayName = "RadioGroupContext";
function useRadioGroupContext() {
	return import_react.useContext(RadioGroupContext);
}
//#endregion
//#region node_modules/@base-ui/react/radio/root/RadioRootContext.mjs
var RadioRootContext = /*#__PURE__*/ import_react.createContext(void 0);
RadioRootContext.displayName = "RadioRootContext";
function useRadioRootContext() {
	const value = import_react.useContext(RadioRootContext);
	if (value === void 0) throw new Error("Base UI: RadioRootContext is missing. Radio parts must be placed within <Radio.Root>.");
	return value;
}
//#endregion
//#region node_modules/@base-ui/react/radio/root/RadioRoot.mjs
/**
* Represents the radio button itself.
* Renders a `<span>` element and a hidden `<input>` beside.
*
* Documentation: [Base UI Radio](https://base-ui.com/react/components/radio)
*/
var RadioRoot = /*#__PURE__*/ import_react.forwardRef(function RadioRoot(componentProps, forwardedRef) {
	const { render, className, disabled: disabledProp = false, readOnly: readOnlyProp = false, required: requiredProp = false, "aria-labelledby": ariaLabelledByProp, value, inputRef: inputRefProp, nativeButton = false, id: idProp, style, ...elementProps } = componentProps;
	const groupContext = useRadioGroupContext();
	const { disabled: disabledGroup, readOnly: readOnlyGroup, required: requiredGroup, form: formGroup, checkedValue, touched = false, validation, name, setCheckedValue = NOOP, setTouched = NOOP, registerInputRef = NOOP } = groupContext ?? {};
	const { setTouched: setFieldTouched, setFilled, state: fieldState, disabled: fieldDisabled } = useFieldRootContext();
	const fieldItemContext = useFieldItemContext();
	const { labelId, getDescriptionProps } = useLabelableContext();
	const disabled = fieldDisabled || fieldItemContext.disabled || disabledGroup || disabledProp;
	const readOnly = readOnlyGroup || readOnlyProp;
	const required = requiredGroup || requiredProp;
	const form = formGroup;
	const checked = groupContext ? checkedValue === value : value === "";
	const radioRef = import_react.useRef(null);
	const inputRef = import_react.useRef(null);
	const registerFieldInput = validation?.registerInput;
	const mergedInputRef = useMergedRefs(inputRefProp, inputRef, registerInputRef, import_react.useCallback((element) => registerFieldInput?.(element, {
		controlRef: radioRef,
		value: void 0
	}), [registerFieldInput]));
	useIsoLayoutEffect(() => {
		if (inputRef.current?.checked) setFilled(true);
	}, [setFilled]);
	useIsoLayoutEffect(() => {
		if (!inputRef.current) return;
		if (disabled && checked) {
			registerInputRef(null);
			return;
		}
		registerInputRef(inputRef.current);
	}, [
		checked,
		disabled,
		registerInputRef
	]);
	const id = useBaseUiId();
	const inputId = useLabelableId({
		id: idProp,
		implicit: false,
		controlRef: radioRef
	});
	const hiddenInputId = nativeButton ? void 0 : inputId;
	const rootProps = {
		role: "radio",
		"aria-checked": checked,
		"aria-labelledby": useAriaLabelledBy(ariaLabelledByProp, labelId, inputRef, !nativeButton, hiddenInputId),
		[ACTIVE_COMPOSITE_ITEM]: checked ? "" : void 0,
		id: nativeButton ? inputId : id,
		onKeyDown(event) {
			if (event.key === "Enter") event.preventDefault();
		},
		onClick(event) {
			if (event.defaultPrevented || disabled || readOnly) return;
			event.preventDefault();
			const input = inputRef.current;
			if (!input) return;
			dispatchClickWithModifiers(input, event);
		},
		onFocus(event) {
			if (event.defaultPrevented || disabled || readOnly || !touched) return;
			inputRef.current?.click();
			setTouched(false);
		}
	};
	const { getButtonProps, buttonRef } = useButton({
		disabled,
		native: nativeButton,
		composite: false
	});
	const inputProps = {
		type: "radio",
		ref: mergedInputRef,
		form,
		id: hiddenInputId,
		name,
		tabIndex: -1,
		style: name ? visuallyHiddenInput : visuallyHidden,
		"aria-hidden": true,
		...value !== void 0 ? { value: serializeValue(value) } : EMPTY_OBJECT,
		disabled,
		checked,
		required,
		readOnly,
		onChange(event) {
			if (event.nativeEvent.defaultPrevented) return;
			if (disabled || readOnly || value === void 0) return;
			const details = createChangeEventDetails(none, event.nativeEvent);
			setCheckedValue(value, details);
			if (details.isCanceled) return;
			setFieldTouched(true);
		},
		onClick(event) {
			event.stopPropagation();
		},
		onFocus() {
			radioRef.current?.focus();
		}
	};
	const state = import_react.useMemo(() => ({
		...fieldState,
		required,
		disabled,
		readOnly,
		checked
	}), [
		fieldState,
		disabled,
		readOnly,
		checked,
		required
	]);
	const contextValue = state;
	const isRadioGroup = groupContext !== void 0;
	const refs = [
		forwardedRef,
		radioRef,
		buttonRef
	];
	const props = [
		rootProps,
		elementProps,
		getButtonProps,
		getDescriptionProps,
		validation ? (validationProps) => validation.getValidationProps(disabled, validationProps) : EMPTY_OBJECT
	];
	const element = useRenderElement("span", componentProps, {
		enabled: !isRadioGroup,
		state,
		ref: refs,
		props,
		stateAttributesMapping: stateAttributesMapping$7
	});
	return /*#__PURE__*/ (0, import_jsx_runtime.jsxs)(RadioRootContext.Provider, {
		value: contextValue,
		children: [isRadioGroup ? /*#__PURE__*/ (0, import_jsx_runtime.jsx)(CompositeItem, {
			tag: "span",
			render,
			className,
			style,
			state,
			refs,
			props,
			stateAttributesMapping: stateAttributesMapping$7
		}) : element, /*#__PURE__*/ (0, import_jsx_runtime.jsx)("input", {
			...inputProps,
			suppressHydrationWarning: true
		})]
	});
});
RadioRoot.displayName = "RadioRoot";
//#endregion
//#region node_modules/@base-ui/react/radio/indicator/RadioIndicator.mjs
/**
* Indicates whether the radio button is selected.
* Renders a `<span>` element.
*
* Documentation: [Base UI Radio](https://base-ui.com/react/components/radio)
*/
var RadioIndicator = /*#__PURE__*/ import_react.forwardRef(function RadioIndicator(componentProps, forwardedRef) {
	const { render, className, style, keepMounted = false, ...elementProps } = componentProps;
	const rootState = useRadioRootContext();
	const rendered = rootState.checked;
	const { mounted, transitionStatus, setMounted } = useTransitionStatus(rendered);
	const state = {
		...rootState,
		transitionStatus
	};
	const indicatorRef = import_react.useRef(null);
	const shouldRender = keepMounted || mounted;
	const element = useRenderElement("span", componentProps, {
		ref: [forwardedRef, indicatorRef],
		state,
		props: elementProps,
		stateAttributesMapping: stateAttributesMapping$7
	});
	useOpenChangeComplete({
		open: rendered,
		ref: indicatorRef,
		onComplete() {
			if (!rendered) setMounted(false);
		}
	});
	if (!shouldRender) return null;
	return element;
});
RadioIndicator.displayName = "RadioIndicator";
//#endregion
//#region node_modules/@base-ui/react/radio/index.parts.mjs
var index_parts_exports$20 = /* @__PURE__ */ __exportAll({
	Indicator: () => RadioIndicator,
	Root: () => RadioRoot
});
//#endregion
//#region node_modules/@base-ui/react/radio-group/RadioGroup.mjs
var MODIFIER_KEYS = [SHIFT];
/**
* Provides a shared state to a series of radio buttons.
* Renders a `<div>` element.
*
* Documentation: [Base UI Radio Group](https://base-ui.com/react/components/radio)
*/
var RadioGroup = /*#__PURE__*/ import_react.forwardRef(function RadioGroup(componentProps, forwardedRef) {
	const { render, className, disabled: disabledProp, readOnly, required, onValueChange: onValueChangeProp, value: externalValue, defaultValue, form, name: nameProp, inputRef: inputRefProp, id: idProp, style, ...elementProps } = componentProps;
	const { setTouched: setFieldTouched, setFocused, validationMode, name: fieldName, disabled: fieldDisabled, state: fieldState, validation, setDirty, setFilled, validityData } = useFieldRootContext();
	const { labelId } = useLabelableContext();
	const { clearErrors, elementRef } = useFormContext();
	const fieldsetContext = useFieldsetRootContext(true);
	const disabled = fieldDisabled || disabledProp;
	const name = fieldName ?? nameProp;
	const id = useBaseUiId(idProp);
	const [checkedValue, setCheckedValueUnwrapped] = useControlled({
		controlled: externalValue,
		default: defaultValue,
		name: "RadioGroup",
		state: "value"
	});
	const [touched, setTouched] = import_react.useState(false);
	const setCheckedValue = useStableCallback((value, eventDetails) => {
		onValueChangeProp?.(value, eventDetails);
		if (eventDetails.isCanceled) return;
		setCheckedValueUnwrapped(value);
	});
	const getInputControl = validation.getInputControl;
	const controlRef = import_react.useMemo(() => ({ get current() {
		return getInputControl();
	} }), [getInputControl]);
	const groupInputRef = import_react.useRef(null);
	const firstEnabledInputRef = import_react.useRef(null);
	function setInputRef(hiddenInput) {
		let cleanup = void 0;
		if (inputRefProp) if (typeof inputRefProp === "function") cleanup = inputRefProp(hiddenInput);
		else inputRefProp.current = hiddenInput;
		groupInputRef.current = hiddenInput;
		return cleanup;
	}
	const registerInputRef = useStableCallback((input) => {
		if (!input || input.disabled) return;
		if (!firstEnabledInputRef.current) firstEnabledInputRef.current = input;
		const currentInput = groupInputRef.current;
		const cleanup = input.checked || currentInput == null || currentInput.disabled ? setInputRef(input) : void 0;
		return () => {
			if (firstEnabledInputRef.current === input) firstEnabledInputRef.current = null;
			if (groupInputRef.current === input) if (cleanup) {
				cleanup();
				groupInputRef.current = null;
			} else setInputRef(null);
			else cleanup?.();
		};
	});
	const getFormValue = useStableCallback(() => {
		const formElement = elementRef.current;
		if (!formElement) return checkedValue ?? null;
		for (const input of validation.registeredInputs.keys()) if (input.checked && isEligibleInput(input, formElement)) return checkedValue ?? null;
		return null;
	});
	useRegisterFieldControl(controlRef, id, checkedValue ?? null, getFormValue, !disabled, nameProp);
	useValueChanged(checkedValue, () => {
		clearErrors(name);
		setDirty(checkedValue !== validityData.initialValue);
		setFilled(checkedValue != null);
		validation.change(checkedValue);
		const fallbackInput = firstEnabledInputRef.current;
		if (checkedValue == null && fallbackInput && !fallbackInput.disabled) setInputRef(fallbackInput);
	});
	const ariaLabelledby = labelId ?? fieldsetContext?.legendId;
	const state = {
		...fieldState,
		disabled: disabled ?? false,
		required: required ?? false,
		readOnly: readOnly ?? false
	};
	const contextValue = import_react.useMemo(() => ({
		checkedValue,
		disabled,
		form,
		validation,
		name,
		readOnly,
		registerInputRef,
		required,
		setCheckedValue,
		setTouched,
		touched
	}), [
		checkedValue,
		disabled,
		form,
		validation,
		name,
		readOnly,
		registerInputRef,
		required,
		setCheckedValue,
		setTouched,
		touched
	]);
	const defaultProps = {
		id: idProp,
		role: "radiogroup",
		"aria-required": required || void 0,
		"aria-disabled": disabled || void 0,
		"aria-readonly": readOnly || void 0,
		"aria-labelledby": ariaLabelledby,
		onFocus() {
			setFocused(true);
		},
		onBlur(event) {
			if (!contains(event.currentTarget, event.relatedTarget)) {
				setFieldTouched(true);
				setFocused(false);
				if (validationMode === "onBlur") validation.commit(checkedValue);
			}
		},
		onKeyDownCapture(event) {
			if (event.key.startsWith("Arrow")) {
				setTouched(true);
				setFocused(true);
			}
		}
	};
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(RadioGroupContext.Provider, {
		value: contextValue,
		children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(CompositeRoot, {
			render,
			className,
			style,
			state,
			props: [
				defaultProps,
				elementProps,
				(props) => validation.getValidationProps(disabled ?? false, props)
			],
			refs: [forwardedRef],
			stateAttributesMapping: fieldValidityMapping,
			enableHomeAndEndKeys: false,
			modifierKeys: MODIFIER_KEYS
		})
	});
});
RadioGroup.displayName = "RadioGroup";
//#endregion
//#region node_modules/@base-ui/react/scroll-area/root/ScrollAreaRootContext.mjs
var ScrollAreaRootContext = /*#__PURE__*/ import_react.createContext(void 0);
ScrollAreaRootContext.displayName = "ScrollAreaRootContext";
function useScrollAreaRootContext() {
	const context = import_react.useContext(ScrollAreaRootContext);
	if (context === void 0) throw new Error("Base UI: ScrollAreaRootContext is missing. ScrollArea parts must be placed within <ScrollArea.Root>.");
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/scroll-area/utils/getOffset.mjs
function getOffset(element, prop, axis) {
	if (!element) return 0;
	const styles = getComputedStyle(element);
	const key = `${prop}${axis === "x" ? "Inline" : "Block"}`;
	const start = parseFloat(styles[`${key}Start`]);
	if (axis === "x" && prop === "margin") return start * 2;
	return start + parseFloat(styles[`${key}End`]);
}
//#endregion
//#region node_modules/@base-ui/react/utils/styles.mjs
var DISABLE_SCROLLBAR_CLASS_NAME = "base-ui-disable-scrollbar";
var styleDisableScrollbar = {
	className: DISABLE_SCROLLBAR_CLASS_NAME,
	getElement(nonce) {
		return /*#__PURE__*/ (0, import_jsx_runtime.jsx)("style", {
			nonce,
			href: DISABLE_SCROLLBAR_CLASS_NAME,
			precedence: "base-ui:low",
			children: `.${DISABLE_SCROLLBAR_CLASS_NAME}{scrollbar-width:none}.${DISABLE_SCROLLBAR_CLASS_NAME}::-webkit-scrollbar{display:none}`
		});
	}
};
styleDisableScrollbar.getElement.displayName = "styleDisableScrollbar.getElement";
//#endregion
//#region node_modules/@base-ui/react/scroll-area/root/stateAttributes.mjs
var attr = (name) => (value) => value ? { [name]: "" } : null;
var scrollAreaStateAttributesMapping = {
	hasOverflowX: attr("data-has-overflow-x"),
	hasOverflowY: attr("data-has-overflow-y"),
	overflowXStart: attr("data-overflow-x-start"),
	overflowXEnd: attr("data-overflow-x-end"),
	overflowYStart: attr("data-overflow-y-start"),
	overflowYEnd: attr("data-overflow-y-end"),
	cornerHidden: () => null
};
//#endregion
//#region node_modules/@base-ui/react/scroll-area/root/ScrollAreaRoot.mjs
var DEFAULT_COORDS = {
	x: 0,
	y: 0
};
var DEFAULT_SIZE = {
	width: 0,
	height: 0
};
var DEFAULT_OVERFLOW_EDGES = {
	xStart: false,
	xEnd: false,
	yStart: false,
	yEnd: false
};
var DEFAULT_HIDDEN_STATE = {
	x: true,
	y: true,
	corner: true
};
/**
* Groups all parts of the scroll area.
* Renders a `<div>` element.
*
* Documentation: [Base UI Scroll Area](https://base-ui.com/react/components/scroll-area)
*/
var ScrollAreaRoot = /*#__PURE__*/ import_react.forwardRef(function ScrollAreaRoot(componentProps, forwardedRef) {
	const { render, className, overflowEdgeThreshold: overflowEdgeThresholdProp, style, ...elementProps } = componentProps;
	const { xStart, xEnd, yStart, yEnd } = normalizeOverflowEdgeThreshold(overflowEdgeThresholdProp);
	const rootId = useBaseUiId();
	const scrollYTimeout = useTimeout();
	const scrollXTimeout = useTimeout();
	const { nonce, disableStyleElements } = useCSPContext();
	const [hovering, setHovering] = import_react.useState(false);
	const [scrollingX, setScrollingX] = import_react.useState(false);
	const [scrollingY, setScrollingY] = import_react.useState(false);
	const [touchModality, setTouchModality] = import_react.useState(false);
	const [hasMeasuredScrollbar, setHasMeasuredScrollbar] = import_react.useState(false);
	const [cornerSize, setCornerSize] = import_react.useState(DEFAULT_SIZE);
	const [thumbSize, setThumbSize] = import_react.useState(DEFAULT_SIZE);
	const [overflowEdges, setOverflowEdges] = import_react.useState(DEFAULT_OVERFLOW_EDGES);
	const [hiddenState, setHiddenState] = import_react.useState(DEFAULT_HIDDEN_STATE);
	const rootRef = import_react.useRef(null);
	const viewportRef = import_react.useRef(null);
	const scrollbarYRef = import_react.useRef(null);
	const scrollbarXRef = import_react.useRef(null);
	const thumbYRef = import_react.useRef(null);
	const thumbXRef = import_react.useRef(null);
	const cornerRef = import_react.useRef(null);
	const activePointerIdRef = import_react.useRef(null);
	const startYRef = import_react.useRef(0);
	const startXRef = import_react.useRef(0);
	const startScrollTopRef = import_react.useRef(0);
	const startScrollLeftRef = import_react.useRef(0);
	const currentOrientationRef = import_react.useRef("vertical");
	const scrollPositionRef = import_react.useRef(DEFAULT_COORDS);
	const savedSnapTypeRef = import_react.useRef(null);
	function startScrolling(vertical) {
		const setScrolling = vertical ? setScrollingY : setScrollingX;
		const timeout = vertical ? scrollYTimeout : scrollXTimeout;
		setScrolling(true);
		timeout.start(500, () => {
			setScrolling(false);
		});
	}
	const handleScroll = useStableCallback((scrollPosition) => {
		const offsetX = scrollPosition.x - scrollPositionRef.current.x;
		const offsetY = scrollPosition.y - scrollPositionRef.current.y;
		scrollPositionRef.current = scrollPosition;
		if (offsetY !== 0) startScrolling(true);
		if (offsetX !== 0) startScrolling(false);
	});
	const disableViewportSnap = useStableCallback(() => {
		const viewportEl = viewportRef.current;
		if (viewportEl && savedSnapTypeRef.current === null) {
			savedSnapTypeRef.current = viewportEl.style.scrollSnapType;
			viewportEl.style.scrollSnapType = "none";
		}
	});
	const handlePointerDown = useStableCallback((event) => {
		if (event.button !== 0) return;
		if (activePointerIdRef.current !== null) {
			if ((currentOrientationRef.current === "vertical" ? thumbYRef.current : thumbXRef.current)?.hasPointerCapture(activePointerIdRef.current)) return;
		}
		activePointerIdRef.current = event.pointerId;
		startYRef.current = event.clientY;
		startXRef.current = event.clientX;
		currentOrientationRef.current = event.currentTarget.getAttribute("data-orientation");
		const viewportEl = viewportRef.current;
		if (viewportEl) {
			startScrollTopRef.current = viewportEl.scrollTop;
			startScrollLeftRef.current = viewportEl.scrollLeft;
			disableViewportSnap();
		}
		(currentOrientationRef.current === "vertical" ? thumbYRef.current : thumbXRef.current)?.setPointerCapture(event.pointerId);
	});
	const handlePointerUp = useStableCallback((event) => {
		if (event.pointerId !== activePointerIdRef.current) return;
		activePointerIdRef.current = null;
		(currentOrientationRef.current === "vertical" ? setScrollingY : setScrollingX)(false);
		if (savedSnapTypeRef.current !== null) {
			if (viewportRef.current) viewportRef.current.style.scrollSnapType = savedSnapTypeRef.current;
			savedSnapTypeRef.current = null;
		}
		const thumb = currentOrientationRef.current === "vertical" ? thumbYRef.current : thumbXRef.current;
		if (thumb?.hasPointerCapture(event.pointerId)) thumb.releasePointerCapture(event.pointerId);
	});
	const handlePointerMove = useStableCallback((event) => {
		if (event.pointerId !== activePointerIdRef.current) return;
		if (event.buttons % 2 === 0) {
			handlePointerUp(event);
			return;
		}
		const viewportEl = viewportRef.current;
		if (!viewportEl) return;
		const vertical = currentOrientationRef.current === "vertical";
		const thumbEl = vertical ? thumbYRef.current : thumbXRef.current;
		const scrollbarEl = vertical ? scrollbarYRef.current : scrollbarXRef.current;
		if (!thumbEl || !scrollbarEl) return;
		const axis = vertical ? "y" : "x";
		const scrollbarOffset = getOffset(scrollbarEl, "padding", axis);
		const thumbOffset = getOffset(thumbEl, "margin", axis);
		const thumbSizePx = vertical ? thumbEl.offsetHeight : thumbEl.offsetWidth;
		const maxThumbOffset = (vertical ? scrollbarEl.offsetHeight : scrollbarEl.offsetWidth) - thumbSizePx - scrollbarOffset - thumbOffset;
		const delta = vertical ? event.clientY - startYRef.current : event.clientX - startXRef.current;
		const scrollRatio = maxThumbOffset <= 0 ? 0 : delta / maxThumbOffset;
		const scrollableSize = vertical ? viewportEl.scrollHeight : viewportEl.scrollWidth;
		const viewportSize = vertical ? viewportEl.clientHeight : viewportEl.clientWidth;
		const nextScroll = (vertical ? startScrollTopRef.current : startScrollLeftRef.current) + scrollRatio * (scrollableSize - viewportSize);
		if (vertical) viewportEl.scrollTop = nextScroll;
		else viewportEl.scrollLeft = nextScroll;
		event.preventDefault();
		startScrolling(vertical);
	});
	function handleTouchModalityChange(event) {
		setTouchModality(event.pointerType === "touch");
	}
	function handlePointerEnterOrMove(event) {
		handleTouchModalityChange(event);
		if (event.pointerType !== "touch") {
			const isTargetRootChild = contains(rootRef.current, event.target);
			setHovering(isTargetRootChild);
		}
	}
	const state = import_react.useMemo(() => ({
		scrolling: scrollingX || scrollingY,
		hasOverflowX: !hiddenState.x,
		hasOverflowY: !hiddenState.y,
		overflowXStart: overflowEdges.xStart,
		overflowXEnd: overflowEdges.xEnd,
		overflowYStart: overflowEdges.yStart,
		overflowYEnd: overflowEdges.yEnd,
		cornerHidden: hiddenState.corner
	}), [
		scrollingX,
		scrollingY,
		hiddenState.x,
		hiddenState.y,
		hiddenState.corner,
		overflowEdges
	]);
	const props = {
		role: "presentation",
		onPointerEnter: handlePointerEnterOrMove,
		onPointerMove: handlePointerEnterOrMove,
		onPointerDown: handleTouchModalityChange,
		onPointerLeave() {
			setHovering(false);
		},
		style: {
			position: "relative",
			["--scroll-area-corner-height"]: `${cornerSize.height}px`,
			["--scroll-area-corner-width"]: `${cornerSize.width}px`
		}
	};
	const element = useRenderElement("div", componentProps, {
		state,
		ref: [forwardedRef, rootRef],
		props: [props, elementProps],
		stateAttributesMapping: scrollAreaStateAttributesMapping
	});
	const contextValue = import_react.useMemo(() => ({
		handlePointerDown,
		handlePointerMove,
		handlePointerUp,
		handleScroll,
		disableViewportSnap,
		cornerSize,
		setCornerSize,
		thumbSize,
		setThumbSize,
		hasMeasuredScrollbar,
		setHasMeasuredScrollbar,
		touchModality,
		cornerRef,
		scrollingX,
		scrollingY,
		hovering,
		setHovering,
		viewportRef,
		scrollbarYRef,
		scrollbarXRef,
		thumbYRef,
		thumbXRef,
		rootId,
		hiddenState,
		setHiddenState,
		overflowEdges,
		setOverflowEdges,
		viewportState: state,
		overflowEdgeThreshold: {
			xStart,
			xEnd,
			yStart,
			yEnd
		}
	}), [
		handlePointerDown,
		handlePointerMove,
		handlePointerUp,
		handleScroll,
		disableViewportSnap,
		cornerSize,
		thumbSize,
		hasMeasuredScrollbar,
		touchModality,
		scrollingX,
		scrollingY,
		hovering,
		rootId,
		hiddenState,
		overflowEdges,
		state,
		xStart,
		xEnd,
		yStart,
		yEnd
	]);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsxs)(ScrollAreaRootContext.Provider, {
		value: contextValue,
		children: [!disableStyleElements && styleDisableScrollbar.getElement(nonce), element]
	});
});
ScrollAreaRoot.displayName = "ScrollAreaRoot";
function normalizeOverflowEdgeThreshold(threshold) {
	const thresholds = typeof threshold === "number" ? {
		xStart: threshold,
		xEnd: threshold,
		yStart: threshold,
		yEnd: threshold
	} : threshold;
	return {
		xStart: Math.max(0, thresholds?.xStart || 0),
		xEnd: Math.max(0, thresholds?.xEnd || 0),
		yStart: Math.max(0, thresholds?.yStart || 0),
		yEnd: Math.max(0, thresholds?.yEnd || 0)
	};
}
//#endregion
//#region node_modules/@base-ui/react/scroll-area/viewport/ScrollAreaViewportContext.mjs
var ScrollAreaViewportContext = /*#__PURE__*/ import_react.createContext(void 0);
ScrollAreaViewportContext.displayName = "ScrollAreaViewportContext";
function useScrollAreaViewportContext() {
	const context = import_react.useContext(ScrollAreaViewportContext);
	if (context === void 0) throw new Error("Base UI: ScrollAreaViewportContext missing. ScrollAreaViewport parts must be placed within <ScrollArea.Viewport>.");
	return context;
}
function getMaxScrollOffset(scrollSize, clientSize) {
	return Math.max(0, scrollSize - clientSize);
}
function normalizeScrollOffset(value, max) {
	if (max <= 0) return 0;
	const clamped = clamp(value, 0, max);
	const startDistance = clamped;
	const endDistance = max - clamped;
	const withinStartTolerance = startDistance <= 1;
	const withinEndTolerance = endDistance <= 1;
	if (withinStartTolerance && withinEndTolerance) return startDistance <= endDistance ? 0 : max;
	if (withinStartTolerance) return 0;
	if (withinEndTolerance) return max;
	return clamped;
}
//#endregion
//#region node_modules/@base-ui/react/scroll-area/viewport/ScrollAreaViewport.mjs
var OVERFLOW_EDGE_VARS = [
	"--scroll-area-overflow-x-start",
	"--scroll-area-overflow-x-end",
	"--scroll-area-overflow-y-start",
	"--scroll-area-overflow-y-end"
];
var scrollAreaOverflowVarsRegistered = false;
/**
* Removes inheritance of the scroll area overflow CSS variables, which
* improves rendering performance in complex scroll areas with deep subtrees.
* Instead, each child must manually opt-in to using these properties by
* specifying `inherit`.
* See https://motion.dev/blog/web-animation-performance-tier-list
* under the "Improving CSS variable performance" section.
*/
function removeCSSVariableInheritance() {
	if (scrollAreaOverflowVarsRegistered || webkit) return;
	if (typeof CSS !== "undefined" && "registerProperty" in CSS) OVERFLOW_EDGE_VARS.forEach((name) => {
		try {
			CSS.registerProperty({
				name,
				syntax: "<length>",
				inherits: false,
				initialValue: "0px"
			});
		} catch {}
	});
	scrollAreaOverflowVarsRegistered = true;
}
/**
* The actual scrollable container of the scroll area.
* Renders a `<div>` element.
*
* Documentation: [Base UI Scroll Area](https://base-ui.com/react/components/scroll-area)
*/
var ScrollAreaViewport = /*#__PURE__*/ import_react.forwardRef(function ScrollAreaViewport(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const { viewportRef, scrollbarYRef, scrollbarXRef, thumbYRef, thumbXRef, cornerRef, cornerSize, setCornerSize, setThumbSize, rootId, setHiddenState, hiddenState, setHasMeasuredScrollbar, handleScroll, touchModality, setHovering, setOverflowEdges, overflowEdgeThreshold, viewportState } = useScrollAreaRootContext();
	const direction = useDirection();
	const programmaticScrollRef = import_react.useRef(true);
	const lastMeasuredViewportMetricsRef = import_react.useRef([
		NaN,
		NaN,
		NaN,
		NaN
	]);
	const scrollEndTimeout = useTimeout();
	const waitForAnimationsTimeout = useTimeout();
	const computeThumbPosition = useStableCallback(() => {
		const viewportEl = viewportRef.current;
		const scrollbarYEl = scrollbarYRef.current;
		const scrollbarXEl = scrollbarXRef.current;
		const thumbYEl = thumbYRef.current;
		const thumbXEl = thumbXRef.current;
		const cornerEl = cornerRef.current;
		if (!viewportEl) return;
		const scrollableContentHeight = viewportEl.scrollHeight;
		const scrollableContentWidth = viewportEl.scrollWidth;
		const viewportHeight = viewportEl.clientHeight;
		const viewportWidth = viewportEl.clientWidth;
		const scrollTop = viewportEl.scrollTop;
		const scrollLeft = viewportEl.scrollLeft;
		const lastMeasuredViewportMetrics = lastMeasuredViewportMetricsRef.current;
		const isFirstMeasurement = Number.isNaN(lastMeasuredViewportMetrics[0]);
		lastMeasuredViewportMetrics[0] = viewportHeight;
		lastMeasuredViewportMetrics[1] = scrollableContentHeight;
		lastMeasuredViewportMetrics[2] = viewportWidth;
		lastMeasuredViewportMetrics[3] = scrollableContentWidth;
		if (isFirstMeasurement) setHasMeasuredScrollbar(true);
		if (scrollableContentHeight === 0 || scrollableContentWidth === 0) return;
		const nextHiddenState = getHiddenState(viewportEl);
		const scrollbarYHidden = nextHiddenState.y;
		const scrollbarXHidden = nextHiddenState.x;
		const ratioX = viewportWidth / scrollableContentWidth;
		const ratioY = viewportHeight / scrollableContentHeight;
		const maxScrollLeft = Math.max(0, scrollableContentWidth - viewportWidth);
		const maxScrollTop = Math.max(0, scrollableContentHeight - viewportHeight);
		let scrollLeftFromStart = 0;
		let scrollLeftFromEnd = 0;
		if (!scrollbarXHidden) {
			scrollLeftFromStart = normalizeScrollOffset(direction === "rtl" ? -scrollLeft : scrollLeft, maxScrollLeft);
			scrollLeftFromEnd = maxScrollLeft - scrollLeftFromStart;
		}
		const scrollTopFromStart = scrollbarYHidden ? 0 : normalizeScrollOffset(scrollTop, maxScrollTop);
		const scrollTopFromEnd = scrollbarYHidden ? 0 : maxScrollTop - scrollTopFromStart;
		const nextWidth = scrollbarXHidden ? 0 : viewportWidth;
		const nextHeight = scrollbarYHidden ? 0 : viewportHeight;
		let nextCornerWidth = 0;
		let nextCornerHeight = 0;
		if (!scrollbarXHidden && !scrollbarYHidden) {
			nextCornerWidth = scrollbarYEl?.offsetWidth || 0;
			nextCornerHeight = scrollbarXEl?.offsetHeight || 0;
		}
		const cornerNotYetSized = cornerSize.width === 0 && cornerSize.height === 0;
		const cornerWidthOffset = cornerNotYetSized ? nextCornerWidth : 0;
		const cornerHeightOffset = cornerNotYetSized ? nextCornerHeight : 0;
		const scrollbarXOffset = getOffset(scrollbarXEl, "padding", "x");
		const scrollbarYOffset = getOffset(scrollbarYEl, "padding", "y");
		const thumbXOffset = getOffset(thumbXEl, "margin", "x");
		const thumbYOffset = getOffset(thumbYEl, "margin", "y");
		const idealNextWidth = nextWidth - scrollbarXOffset - thumbXOffset;
		const idealNextHeight = nextHeight - scrollbarYOffset - thumbYOffset;
		const maxNextWidth = scrollbarXEl ? Math.min(scrollbarXEl.offsetWidth - cornerWidthOffset, idealNextWidth) : idealNextWidth;
		const maxNextHeight = scrollbarYEl ? Math.min(scrollbarYEl.offsetHeight - cornerHeightOffset, idealNextHeight) : idealNextHeight;
		const clampedNextWidth = Math.max(16, maxNextWidth * ratioX);
		const clampedNextHeight = Math.max(16, maxNextHeight * ratioY);
		setThumbSize((prevSize) => pickState(prevSize, {
			width: clampedNextWidth,
			height: clampedNextHeight
		}));
		if (scrollbarYEl && thumbYEl) {
			const thumbOffsetY = applyOverscrollThumb(thumbYEl, "--scroll-area-thumb-height", scrollTop, maxScrollTop, scrollableContentHeight, clampedNextHeight, scrollbarYEl.offsetHeight - clampedNextHeight - scrollbarYOffset - thumbYOffset);
			thumbYEl.style.transform = `translate3d(0,${thumbOffsetY}px,0)`;
		}
		if (scrollbarXEl && thumbXEl) {
			const maxThumbOffsetX = scrollbarXEl.offsetWidth - clampedNextWidth - scrollbarXOffset - thumbXOffset;
			const offsetX = applyOverscrollThumb(thumbXEl, "--scroll-area-thumb-width", direction === "rtl" ? -scrollLeft : scrollLeft, maxScrollLeft, scrollableContentWidth, clampedNextWidth, maxThumbOffsetX);
			thumbXEl.style.transform = `translate3d(${direction === "rtl" ? -offsetX : offsetX}px,0,0)`;
		}
		const overflowMetricsPx = [
			scrollLeftFromStart,
			scrollLeftFromEnd,
			scrollTopFromStart,
			scrollTopFromEnd
		];
		OVERFLOW_EDGE_VARS.forEach((cssVar, index) => {
			viewportEl.style.setProperty(cssVar, `${overflowMetricsPx[index]}px`);
		});
		if (cornerEl) setCornerSize((prevSize) => pickState(prevSize, {
			width: nextCornerWidth,
			height: nextCornerHeight
		}));
		setHiddenState((prevState) => pickState(prevState, nextHiddenState));
		const nextOverflowEdges = {
			xStart: !scrollbarXHidden && scrollLeftFromStart > overflowEdgeThreshold.xStart,
			xEnd: !scrollbarXHidden && scrollLeftFromEnd > overflowEdgeThreshold.xEnd,
			yStart: !scrollbarYHidden && scrollTopFromStart > overflowEdgeThreshold.yStart,
			yEnd: !scrollbarYHidden && scrollTopFromEnd > overflowEdgeThreshold.yEnd
		};
		setOverflowEdges((prev) => pickState(prev, nextOverflowEdges));
	});
	useIsoLayoutEffect(() => {
		removeCSSVariableInheritance();
	}, []);
	useIsoLayoutEffect(() => {
		queueMicrotask(computeThumbPosition);
	}, [
		computeThumbPosition,
		hiddenState,
		direction,
		overflowEdgeThreshold.xStart,
		overflowEdgeThreshold.xEnd,
		overflowEdgeThreshold.yStart,
		overflowEdgeThreshold.yEnd
	]);
	useIsoLayoutEffect(() => {
		if (viewportRef.current?.matches(":hover")) setHovering(true);
	}, [viewportRef, setHovering]);
	useIsoLayoutEffect(() => {
		const viewport = viewportRef.current;
		if (typeof ResizeObserver === "undefined" || !viewport) return;
		let hasInitialized = false;
		const resizeObserver = new ResizeObserver(() => {
			if (!hasInitialized) {
				hasInitialized = true;
				const lastMeasuredViewportMetrics = lastMeasuredViewportMetricsRef.current;
				if (lastMeasuredViewportMetrics[0] === viewport.clientHeight && lastMeasuredViewportMetrics[1] === viewport.scrollHeight && lastMeasuredViewportMetrics[2] === viewport.clientWidth && lastMeasuredViewportMetrics[3] === viewport.scrollWidth) return;
			}
			computeThumbPosition();
		});
		resizeObserver.observe(viewport);
		waitForAnimationsTimeout.start(0, () => {
			const animations = viewport.getAnimations({ subtree: true });
			if (animations.length === 0) return;
			Promise.allSettled(animations.map((animation) => animation.finished)).then(computeThumbPosition).catch(() => {});
		});
		return () => {
			resizeObserver.disconnect();
			waitForAnimationsTimeout.clear();
		};
	}, [
		computeThumbPosition,
		viewportRef,
		waitForAnimationsTimeout
	]);
	function handleUserInteraction() {
		programmaticScrollRef.current = false;
	}
	const props = {
		role: "presentation",
		...rootId && { "data-id": `${rootId}-viewport` },
		tabIndex: hiddenState.x && hiddenState.y ? -1 : 0,
		className: styleDisableScrollbar.className,
		style: { overflow: "scroll" },
		onScroll() {
			if (!viewportRef.current) return;
			computeThumbPosition();
			if (touchModality || !programmaticScrollRef.current) handleScroll({
				x: viewportRef.current.scrollLeft,
				y: viewportRef.current.scrollTop
			});
			scrollEndTimeout.start(100, () => {
				programmaticScrollRef.current = true;
			});
		},
		onWheel: handleUserInteraction,
		onPointerMove: handleUserInteraction,
		onPointerEnter: handleUserInteraction,
		onKeyDown: handleUserInteraction
	};
	const element = useRenderElement("div", componentProps, {
		ref: [forwardedRef, viewportRef],
		state: viewportState,
		props: [props, elementProps],
		stateAttributesMapping: scrollAreaStateAttributesMapping
	});
	const contextValue = import_react.useMemo(() => ({ computeThumbPosition }), [computeThumbPosition]);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ScrollAreaViewportContext.Provider, {
		value: contextValue,
		children: element
	});
});
ScrollAreaViewport.displayName = "ScrollAreaViewport";
function getHiddenState(viewport) {
	const y = viewport.clientHeight >= viewport.scrollHeight;
	const x = viewport.clientWidth >= viewport.scrollWidth;
	return {
		y,
		x,
		corner: y || x
	};
}
/**
* Returns `prev` when `next` is shallow-equal to it so setState bails out and
* scroll-frame updates don't rebuild the root context.
*/
function pickState(prev, next) {
	for (const key in next) if (prev[key] !== next[key]) return next;
	return prev;
}
/**
* Sizes the thumb and returns its axis offset. On overscroll (Safari rubber-band only) it shrinks
* against the pinned edge, damped by `content / (content + overscroll)` to match native feedback;
* the size flows through the thumb-size variable so the resting `var(...)` still applies.
*/
function applyOverscrollThumb(thumbEl, sizeVar, scrollFromStart, maxScroll, content, size, maxThumbOffset) {
	const clamped = clamp(scrollFromStart, 0, maxScroll);
	const overscroll = scrollFromStart - clamped;
	const nextSize = Math.max(16, size * content / (content + Math.abs(overscroll)));
	thumbEl.style.setProperty(sizeVar, overscroll ? `${nextSize}px` : "");
	return (maxScroll ? clamped / maxScroll * maxThumbOffset : 0) + (overscroll > 0 ? size - nextSize : 0);
}
//#endregion
//#region node_modules/@base-ui/react/scroll-area/scrollbar/ScrollAreaScrollbarContext.mjs
var ScrollAreaScrollbarContext = /*#__PURE__*/ import_react.createContext(void 0);
ScrollAreaScrollbarContext.displayName = "ScrollAreaScrollbarContext";
function useScrollAreaScrollbarContext() {
	const context = import_react.useContext(ScrollAreaScrollbarContext);
	if (context === void 0) throw new Error("Base UI: ScrollAreaScrollbarContext is missing. ScrollAreaScrollbar parts must be placed within <ScrollArea.Scrollbar>.");
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/scroll-area/scrollbar/ScrollAreaScrollbar.mjs
/**
* A vertical or horizontal scrollbar for the scroll area.
* Renders a `<div>` element.
*
* Documentation: [Base UI Scroll Area](https://base-ui.com/react/components/scroll-area)
*/
var ScrollAreaScrollbar = /*#__PURE__*/ import_react.forwardRef(function ScrollAreaScrollbar(componentProps, forwardedRef) {
	const { render, className, orientation = "vertical", keepMounted = false, style, ...elementProps } = componentProps;
	const { hovering, scrollingX, scrollingY, hiddenState, scrollbarYRef, scrollbarXRef, viewportRef, thumbYRef, thumbXRef, handlePointerDown, handlePointerUp, handleScroll, disableViewportSnap, rootId, thumbSize, hasMeasuredScrollbar, viewportState } = useScrollAreaRootContext();
	const vertical = orientation === "vertical";
	const state = {
		...viewportState,
		hovering,
		scrolling: vertical ? scrollingY : scrollingX,
		orientation
	};
	const direction = useDirection();
	const hideTrackUntilMeasured = !hasMeasuredScrollbar && !keepMounted;
	const isHidden = vertical ? hiddenState.y : hiddenState.x;
	const shouldRender = keepMounted || !isHidden;
	import_react.useEffect(() => {
		if (!shouldRender) return;
		const viewportEl = viewportRef.current;
		const scrollbarEl = vertical ? scrollbarYRef.current : scrollbarXRef.current;
		if (!scrollbarEl) return;
		function handleWheel(event) {
			if (!viewportEl || event.ctrlKey) return;
			const horizontal = !vertical;
			const scrollProperty = horizontal ? "scrollLeft" : "scrollTop";
			const delta = horizontal ? event.deltaX : event.deltaY;
			if (delta === 0) return;
			const maxScroll = horizontal ? viewportEl.scrollWidth - viewportEl.clientWidth : viewportEl.scrollHeight - viewportEl.clientHeight;
			const minScroll = horizontal && direction === "rtl" ? -maxScroll : 0;
			const maxScrollValue = horizontal && direction === "rtl" ? 0 : maxScroll;
			const scrollValue = viewportEl[scrollProperty];
			if (scrollValue <= minScroll && delta < 0 || scrollValue >= maxScrollValue && delta > 0) return;
			event.preventDefault();
			viewportEl[scrollProperty] = Math.min(maxScrollValue, Math.max(minScroll, scrollValue + delta));
			handleScroll({
				x: viewportEl.scrollLeft,
				y: viewportEl.scrollTop
			});
		}
		return addEventListener(scrollbarEl, "wheel", handleWheel, { passive: false });
	}, [
		direction,
		handleScroll,
		vertical,
		scrollbarXRef,
		scrollbarYRef,
		shouldRender,
		viewportRef
	]);
	const props = {
		...rootId && { "data-id": `${rootId}-scrollbar` },
		onPointerDown(event) {
			if (event.button !== 0) return;
			const target = getTarget(event.nativeEvent);
			const thumbEl = vertical ? thumbYRef.current : thumbXRef.current;
			if (thumbEl && contains(thumbEl, target)) return;
			const viewportEl = viewportRef.current;
			if (!viewportEl) return;
			const scrollbarEl = vertical ? scrollbarYRef.current : scrollbarXRef.current;
			if (!thumbEl || !scrollbarEl) return;
			const axis = vertical ? "y" : "x";
			const thumbOffset = getOffset(thumbEl, "margin", axis);
			const scrollbarOffset = getOffset(scrollbarEl, "padding", axis);
			const thumbSizePx = vertical ? thumbEl.offsetHeight : thumbEl.offsetWidth;
			const trackRect = scrollbarEl.getBoundingClientRect();
			const clickPosition = vertical ? event.clientY - trackRect.top - thumbSizePx / 2 - scrollbarOffset + thumbOffset / 2 : event.clientX - trackRect.left - thumbSizePx / 2 - scrollbarOffset + thumbOffset / 2;
			const scrollableSize = vertical ? viewportEl.scrollHeight : viewportEl.scrollWidth;
			const viewportSize = vertical ? viewportEl.clientHeight : viewportEl.clientWidth;
			const maxThumbOffset = (vertical ? scrollbarEl.offsetHeight : scrollbarEl.offsetWidth) - thumbSizePx - scrollbarOffset - thumbOffset;
			if (maxThumbOffset <= 0) return;
			const scrollRatio = clickPosition / maxThumbOffset;
			const maxScrollDistance = scrollableSize - viewportSize;
			disableViewportSnap();
			if (vertical) viewportEl.scrollTop = scrollRatio * maxScrollDistance;
			else if (direction === "rtl") viewportEl.scrollLeft = -(1 - scrollRatio) * maxScrollDistance;
			else viewportEl.scrollLeft = scrollRatio * maxScrollDistance;
			handleScroll({
				x: viewportEl.scrollLeft,
				y: viewportEl.scrollTop
			});
			handlePointerDown(event);
		},
		onPointerUp: handlePointerUp,
		onPointerCancel: handlePointerUp,
		style: {
			position: "absolute",
			touchAction: "none",
			WebkitUserSelect: "none",
			userSelect: "none",
			visibility: hideTrackUntilMeasured ? "hidden" : void 0,
			...vertical ? {
				top: 0,
				bottom: "var(--scroll-area-corner-height)",
				insetInlineEnd: 0,
				["--scroll-area-thumb-height"]: `${thumbSize.height}px`
			} : {
				insetInlineStart: 0,
				insetInlineEnd: "var(--scroll-area-corner-width)",
				bottom: 0,
				["--scroll-area-thumb-width"]: `${thumbSize.width}px`
			}
		}
	};
	const element = useRenderElement("div", componentProps, {
		ref: [forwardedRef, vertical ? scrollbarYRef : scrollbarXRef],
		state,
		props: [props, elementProps],
		stateAttributesMapping: scrollAreaStateAttributesMapping
	});
	if (!shouldRender) return null;
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarContext.Provider, {
		value: orientation,
		children: element
	});
});
ScrollAreaScrollbar.displayName = "ScrollAreaScrollbar";
//#endregion
//#region node_modules/@base-ui/react/scroll-area/content/ScrollAreaContent.mjs
/**
* A container for the content of the scroll area.
* Renders a `<div>` element.
*
* Documentation: [Base UI Scroll Area](https://base-ui.com/react/components/scroll-area)
*/
var ScrollAreaContent = /*#__PURE__*/ import_react.forwardRef(function ScrollAreaContent(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const { computeThumbPosition } = useScrollAreaViewportContext();
	const { hasMeasuredScrollbar, viewportState } = useScrollAreaRootContext();
	const contentWrapperRef = import_react.useRef(null);
	const computeOnInitialResizeRef = import_react.useRef(hasMeasuredScrollbar);
	useIsoLayoutEffect(() => {
		if (typeof ResizeObserver === "undefined") return;
		let hasInitialized = false;
		const resizeObserver = new ResizeObserver(() => {
			if (!hasInitialized) {
				hasInitialized = true;
				if (!computeOnInitialResizeRef.current) return;
			}
			computeThumbPosition();
		});
		if (contentWrapperRef.current) resizeObserver.observe(contentWrapperRef.current);
		return () => {
			resizeObserver.disconnect();
		};
	}, [computeThumbPosition]);
	return useRenderElement("div", componentProps, {
		ref: [forwardedRef, contentWrapperRef],
		state: viewportState,
		stateAttributesMapping: scrollAreaStateAttributesMapping,
		props: [{
			role: "presentation",
			style: { minWidth: "fit-content" }
		}, elementProps]
	});
});
ScrollAreaContent.displayName = "ScrollAreaContent";
//#endregion
//#region node_modules/@base-ui/react/scroll-area/thumb/ScrollAreaThumb.mjs
/**
* The draggable part of the scrollbar that indicates the current scroll position.
* Renders a `<div>` element.
*
* Documentation: [Base UI Scroll Area](https://base-ui.com/react/components/scroll-area)
*/
var ScrollAreaThumb = /*#__PURE__*/ import_react.forwardRef(function ScrollAreaThumb(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const { thumbYRef, thumbXRef, handlePointerDown, handlePointerMove, handlePointerUp, scrollingX, scrollingY, hasMeasuredScrollbar } = useScrollAreaRootContext();
	const orientation = useScrollAreaScrollbarContext();
	const vertical = orientation === "vertical";
	return useRenderElement("div", componentProps, {
		ref: [forwardedRef, vertical ? thumbYRef : thumbXRef],
		state: {
			scrolling: vertical ? scrollingY : scrollingX,
			orientation
		},
		props: [{
			onPointerDown: handlePointerDown,
			onPointerMove: handlePointerMove,
			onPointerUp: handlePointerUp,
			onPointerCancel: handlePointerUp,
			style: {
				visibility: hasMeasuredScrollbar ? void 0 : "hidden",
				...vertical ? { height: "var(--scroll-area-thumb-height)" } : { width: "var(--scroll-area-thumb-width)" }
			}
		}, elementProps]
	});
});
ScrollAreaThumb.displayName = "ScrollAreaThumb";
//#endregion
//#region node_modules/@base-ui/react/scroll-area/corner/ScrollAreaCorner.mjs
/**
* A small rectangular area that appears at the intersection of horizontal and vertical scrollbars.
* Renders a `<div>` element.
*
* Documentation: [Base UI Scroll Area](https://base-ui.com/react/components/scroll-area)
*/
var ScrollAreaCorner = /*#__PURE__*/ import_react.forwardRef(function ScrollAreaCorner(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const { cornerRef, cornerSize, hiddenState } = useScrollAreaRootContext();
	const element = useRenderElement("div", componentProps, {
		ref: [forwardedRef, cornerRef],
		props: [{ style: {
			position: "absolute",
			bottom: 0,
			insetInlineEnd: 0,
			width: cornerSize.width,
			height: cornerSize.height
		} }, elementProps]
	});
	if (hiddenState.corner) return null;
	return element;
});
ScrollAreaCorner.displayName = "ScrollAreaCorner";
//#endregion
//#region node_modules/@base-ui/react/scroll-area/index.parts.mjs
var index_parts_exports$21 = /* @__PURE__ */ __exportAll({
	Content: () => ScrollAreaContent,
	Corner: () => ScrollAreaCorner,
	Root: () => ScrollAreaRoot,
	Scrollbar: () => ScrollAreaScrollbar,
	Thumb: () => ScrollAreaThumb,
	Viewport: () => ScrollAreaViewport
});
//#endregion
//#region node_modules/@base-ui/react/select/root/SelectRootContext.mjs
var SelectRootContext = /*#__PURE__*/ import_react.createContext(null);
SelectRootContext.displayName = "SelectRootContext";
function useSelectRootContext() {
	const context = import_react.useContext(SelectRootContext);
	if (context === null) throw new Error("Base UI: SelectRootContext is missing. Select parts must be placed within <Select.Root>.");
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/select/store.mjs
var selectors$1 = {
	id: (state) => state.id,
	labelId: (state) => state.labelId,
	modal: (state) => state.modal,
	items: (state) => state.items,
	itemToStringLabel: (state) => state.itemToStringLabel,
	isItemEqualToValue: (state) => state.isItemEqualToValue,
	value: (state) => state.value,
	hasSelectedValue: (state) => {
		const { value, multiple, itemToStringValue } = state;
		if (value == null) return false;
		if (multiple && Array.isArray(value)) return value.length > 0;
		return stringifyAsValue(value, itemToStringValue) !== "";
	},
	hasNullItemLabel: (state, enabled) => {
		return enabled ? hasNullItemLabel(state.items) : false;
	},
	open: (state) => state.open,
	mounted: (state) => state.mounted,
	forceMount: (state) => state.forceMount,
	transitionStatus: (state) => state.transitionStatus,
	openMethod: (state) => state.openMethod,
	activeIndex: (state) => state.activeIndex,
	selectedIndex: (state) => state.selectedIndex,
	isActive: (state, index) => state.activeIndex === index,
	isSelected: (state, itemValue) => {
		const comparer = state.isItemEqualToValue;
		const storeValue = state.value;
		if (state.multiple) return Array.isArray(storeValue) && storeValue.some((selectedItem) => compareItemEquality(itemValue, selectedItem, comparer));
		return compareItemEquality(itemValue, storeValue, comparer);
	},
	isSelectedByFocus: (state, index) => {
		return state.selectedIndex === index;
	},
	popupProps: (state) => state.popupProps,
	triggerProps: (state) => state.triggerProps,
	triggerElement: (state) => state.triggerElement,
	positionerElement: (state) => state.positionerElement,
	listElement: (state) => state.listElement,
	popupSide: (state) => state.popupSide,
	scrollUpArrowVisible: (state) => state.scrollUpArrowVisible,
	scrollDownArrowVisible: (state) => state.scrollDownArrowVisible,
	hasScrollArrows: (state) => state.hasScrollArrows
};
//#endregion
//#region node_modules/@base-ui/react/select/root/SelectRoot.mjs
/**
* Groups all parts of the select.
* Doesn't render its own HTML element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
function SelectRoot(props) {
	const { id, value: valueProp, defaultValue = null, onValueChange, open: openProp, defaultOpen = false, onOpenChange, name: nameProp, form, autoComplete, disabled: disabledProp = false, readOnly = false, required = false, modal = true, actionsRef, inputRef, onOpenChangeComplete, items, multiple = false, itemToStringLabel, itemToStringValue, isItemEqualToValue = defaultItemEquality, highlightItemOnHover = true, children } = props;
	const { clearErrors } = useFormContext();
	const { setDirty, setTouched, setFocused, validityData, setFilled, name: fieldName, disabled: fieldDisabled, validation, validationMode } = useFieldRootContext();
	const generatedId = useLabelableId({ id });
	const disabled = fieldDisabled || disabledProp;
	const name = fieldName ?? nameProp;
	const [value, setValueUnwrapped] = useControlled({
		controlled: valueProp,
		default: multiple ? defaultValue ?? EMPTY_ARRAY$1 : defaultValue,
		name: "Select",
		state: "value"
	});
	const [open, setOpenUnwrapped] = useControlled({
		controlled: openProp,
		default: defaultOpen,
		name: "Select",
		state: "open"
	});
	const listRef = import_react.useRef([]);
	const labelsRef = import_react.useRef([]);
	const popupRef = import_react.useRef(null);
	const scrollHandlerRef = import_react.useRef(null);
	const scrollArrowsMountedCountRef = import_react.useRef(0);
	const valueRef = import_react.useRef(null);
	const valuesRef = import_react.useRef([]);
	const typingRef = import_react.useRef(false);
	const firstItemTextRef = import_react.useRef(null);
	const selectedItemTextRef = import_react.useRef(null);
	const selectionRef = import_react.useRef({
		allowSelectedMouseUp: false,
		allowUnselectedMouseUp: false,
		dragY: 0
	});
	const alignItemWithTriggerActiveRef = import_react.useRef(false);
	const { mounted, setMounted, transitionStatus } = useTransitionStatus(open);
	const { openMethod, triggerProps: interactionTypeProps } = useOpenInteractionType(open);
	const store = useRefWithInit(() => new ReactStore({
		id: generatedId,
		labelId: void 0,
		modal,
		multiple,
		itemToStringLabel,
		itemToStringValue,
		isItemEqualToValue,
		value,
		open,
		mounted,
		transitionStatus,
		items,
		forceMount: false,
		openMethod: null,
		activeIndex: null,
		selectedIndex: null,
		popupProps: {},
		triggerProps: {},
		triggerElement: null,
		positionerElement: null,
		listElement: null,
		popupSide: null,
		scrollUpArrowVisible: false,
		scrollDownArrowVisible: false,
		hasScrollArrows: false
	})).current;
	const activeIndex = useStore(store, selectors$1.activeIndex);
	const selectedIndex = useStore(store, selectors$1.selectedIndex);
	const triggerElement = useStore(store, selectors$1.triggerElement);
	const positionerElement = useStore(store, selectors$1.positionerElement);
	const previousOpenMethod = usePreviousValue(openMethod);
	const renderedOpenMethod = openMethod ?? previousOpenMethod;
	const serializedValue = import_react.useMemo(() => {
		if (multiple) return "";
		return stringifyAsValue(value, itemToStringValue);
	}, [
		multiple,
		value,
		itemToStringValue
	]);
	const fieldStringValue = import_react.useMemo(() => {
		if (multiple && Array.isArray(value)) return value.map((currentValue) => stringifyAsValue(currentValue, itemToStringValue));
		return stringifyAsValue(value, itemToStringValue);
	}, [
		multiple,
		value,
		itemToStringValue
	]);
	useRegisterFieldControl(useValueAsRef(triggerElement), generatedId, value, useStableCallback(() => fieldStringValue), !disabled, nameProp);
	const initialValueRef = import_react.useRef(value);
	const hasSelectedValue = multiple ? Array.isArray(value) && value.length > 0 : value != null && serializedValue !== "";
	useIsoLayoutEffect(() => {
		setFilled(hasSelectedValue);
	}, [hasSelectedValue, setFilled]);
	useIsoLayoutEffect(function syncSelectedIndex() {
		let target = value;
		let empty = false;
		if (multiple) {
			const currentValue = Array.isArray(value) ? value : [];
			empty = currentValue.length === 0;
			target = currentValue[currentValue.length - 1];
		}
		const index = empty ? -1 : findItemIndex(valuesRef.current, target, isItemEqualToValue);
		const nextIndex = index === -1 ? null : index;
		if (nextIndex === null) selectedItemTextRef.current = null;
		if (open) return;
		store.set("selectedIndex", nextIndex);
	}, [
		multiple,
		open,
		value,
		isItemEqualToValue,
		store
	]);
	function isSelectedValueDirty(currentValue) {
		const initialValue = validityData.initialValue;
		if (Array.isArray(currentValue) && Array.isArray(initialValue)) return !areArraysEqual(currentValue, initialValue, (itemValue, initialItemValue) => compareItemEquality(itemValue, initialItemValue, isItemEqualToValue));
		return currentValue !== initialValue;
	}
	useValueChanged(value, () => {
		clearErrors(name);
		setDirty(isSelectedValueDirty(value));
		validation.change(value);
	});
	const setOpen = useStableCallback((nextOpen, eventDetails) => {
		onOpenChange?.(nextOpen, eventDetails);
		if (eventDetails.isCanceled) return;
		setOpenUnwrapped(nextOpen);
		if (!nextOpen && (eventDetails.reason === "focus-out" || eventDetails.reason === "outside-press")) {
			setTouched(true);
			setFocused(false);
			if (validationMode === "onBlur") validation.commit(value);
		}
	});
	const handleUnmount = useStableCallback(() => {
		setMounted(false);
		store.update({
			activeIndex: null,
			openMethod: null,
			scrollUpArrowVisible: false,
			scrollDownArrowVisible: false
		});
		onOpenChangeComplete?.(false);
	});
	useOpenChangeComplete({
		enabled: !actionsRef,
		open,
		ref: popupRef,
		onComplete() {
			if (!open) handleUnmount();
		}
	});
	import_react.useImperativeHandle(actionsRef, () => ({ unmount: handleUnmount }), [handleUnmount]);
	const setValue = useStableCallback((nextValue, eventDetails) => {
		onValueChange?.(nextValue, eventDetails);
		if (eventDetails.isCanceled) return;
		setValueUnwrapped(nextValue);
	});
	const handleScrollArrowVisibility = useStableCallback((scroller) => {
		const maxScrollTop = getMaxScrollOffset(scroller.scrollHeight, scroller.clientHeight);
		const scrollTop = normalizeScrollOffset(scroller.scrollTop, maxScrollTop);
		const shouldShowUp = scrollTop > 0;
		const shouldShowDown = scrollTop < maxScrollTop;
		store.set("scrollUpArrowVisible", shouldShowUp);
		store.set("scrollDownArrowVisible", shouldShowDown);
	});
	const floatingContext = useFloatingRootContext({
		open,
		onOpenChange: setOpen,
		elements: {
			reference: triggerElement,
			floating: positionerElement
		}
	});
	const click = useClick(floatingContext, {
		enabled: !readOnly && !disabled,
		event: "mousedown"
	});
	const dismiss = useDismiss(floatingContext);
	const listNavigation = useListNavigation(floatingContext, {
		enabled: !readOnly && !disabled,
		listRef,
		activeIndex,
		selectedIndex,
		disabledIndices: EMPTY_ARRAY$1,
		onNavigate(nextActiveIndex) {
			if (nextActiveIndex === null && !open) return;
			store.set("activeIndex", nextActiveIndex);
		},
		focusItemOnHover: highlightItemOnHover
	});
	const typeahead = useTypeahead(floatingContext, {
		enabled: !readOnly && !disabled && (open || !multiple),
		listRef: labelsRef,
		activeIndex,
		selectedIndex,
		disabledIndices: (index) => isElementDisabled(listRef.current[index]),
		onMatch(index) {
			if (open) store.set("activeIndex", index);
			else setValue(valuesRef.current[index], createChangeEventDetails(none));
		},
		onTyping(typing) {
			typingRef.current = typing;
		}
	});
	const mergedTriggerProps = import_react.useMemo(() => mergeProps(typeahead.reference, listNavigation.reference, dismiss.reference, click.reference, interactionTypeProps), [
		click.reference,
		typeahead.reference,
		listNavigation.reference,
		dismiss.reference,
		interactionTypeProps
	]);
	const popupProps = import_react.useMemo(() => mergeProps(FOCUSABLE_POPUP_PROPS, typeahead.floating, listNavigation.floating, dismiss.floating), [
		typeahead.floating,
		listNavigation.floating,
		dismiss.floating
	]);
	const itemProps = listNavigation.item ?? EMPTY_OBJECT;
	useOnFirstRender(() => {
		store.update({
			popupProps,
			triggerProps: mergedTriggerProps
		});
	});
	store.useSyncedValues({
		id: generatedId,
		modal,
		multiple,
		value,
		open,
		mounted,
		transitionStatus,
		popupProps,
		triggerProps: mergedTriggerProps,
		items,
		itemToStringLabel,
		itemToStringValue,
		isItemEqualToValue,
		openMethod: renderedOpenMethod
	});
	const contextValue = import_react.useMemo(() => ({
		store,
		floatingContext,
		required,
		disabled,
		readOnly,
		multiple,
		highlightItemOnHover,
		setValue,
		setOpen,
		listRef,
		popupRef,
		scrollHandlerRef,
		handleScrollArrowVisibility,
		scrollArrowsMountedCountRef,
		itemProps,
		valueRef,
		valuesRef,
		labelsRef,
		typingRef,
		selectionRef,
		firstItemTextRef,
		selectedItemTextRef,
		validation,
		onOpenChangeComplete,
		alignItemWithTriggerActiveRef,
		initialValueRef
	}), [
		store,
		floatingContext,
		required,
		disabled,
		readOnly,
		multiple,
		highlightItemOnHover,
		setValue,
		setOpen,
		itemProps,
		validation,
		onOpenChangeComplete,
		handleScrollArrowVisibility
	]);
	const ref = useMergedRefs(inputRef, validation.inputRef);
	const hiddenInputName = multiple ? void 0 : name;
	const hiddenInputs = import_react.useMemo(() => {
		if (!multiple || !Array.isArray(value) || !name) return null;
		return value.map((v) => {
			const currentSerializedValue = stringifyAsValue(v, itemToStringValue);
			return /*#__PURE__*/ (0, import_jsx_runtime.jsx)("input", {
				type: "hidden",
				form,
				name,
				value: currentSerializedValue,
				disabled
			}, currentSerializedValue);
		});
	}, [
		multiple,
		value,
		form,
		name,
		itemToStringValue,
		disabled
	]);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsxs)(SelectRootContext.Provider, {
		value: contextValue,
		children: [
			children,
			/*#__PURE__*/ (0, import_jsx_runtime.jsx)("input", {
				...validation.getValidationProps(disabled, {
					onFocus() {
						store.state.triggerElement?.focus({ focusVisible: true });
					},
					onChange(event) {
						if (event.nativeEvent.defaultPrevented || disabled || readOnly) return;
						const nextValue = event.currentTarget.value;
						const details = createChangeEventDetails(none, event.nativeEvent);
						function handleChange() {
							if (multiple) return;
							const nextValueLower = nextValue.toLowerCase();
							let matchingIndex = valuesRef.current.findIndex((candidate) => stringifyAsValue(candidate, itemToStringValue).toLowerCase() === nextValueLower || stringifyAsLabel(candidate, itemToStringLabel).toLowerCase() === nextValueLower);
							if (matchingIndex === -1) matchingIndex = valuesRef.current.findIndex((_, index) => {
								const renderedLabel = labelsRef.current[index];
								return renderedLabel != null && renderedLabel.toLowerCase() === nextValueLower;
							});
							const matchingValue = valuesRef.current[matchingIndex];
							if (matchingValue != null) setValue(matchingValue, details);
						}
						store.set("forceMount", true);
						queueMicrotask(handleChange);
					}
				}),
				id: generatedId && hiddenInputName == null ? `${generatedId}-hidden-input` : void 0,
				form,
				name: hiddenInputName,
				autoComplete,
				value: serializedValue,
				disabled,
				required: required && !(multiple && hasSelectedValue),
				readOnly,
				ref,
				style: name ? visuallyHiddenInput : visuallyHidden,
				tabIndex: -1,
				"aria-hidden": true,
				suppressHydrationWarning: true
			}),
			hiddenInputs
		]
	});
}
//#endregion
//#region node_modules/@base-ui/react/select/label/SelectLabel.mjs
/**
* An accessible label that is automatically associated with the select trigger.
* Renders a `<div>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectLabel = /*#__PURE__*/ import_react.forwardRef(function SelectLabel(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const elementPropsWithoutId = elementProps;
	delete elementPropsWithoutId.id;
	const fieldRootContext = useFieldRootContext();
	const { store } = useSelectRootContext();
	const triggerElement = useStore(store, selectors$1.triggerElement);
	const rootId = useStore(store, selectors$1.id);
	const labelProps = useLabel({
		id: getDefaultLabelId(rootId),
		fallbackControlId: triggerElement?.id ?? rootId,
		setLabelId(nextLabelId) {
			const resolvedLabelId = typeof nextLabelId === "function" ? nextLabelId(store.state.labelId) : nextLabelId;
			store.set("labelId", resolvedLabelId);
		}
	});
	return useRenderElement("div", componentProps, {
		ref: forwardedRef,
		state: fieldRootContext.state,
		props: [labelProps, elementProps],
		stateAttributesMapping: fieldValidityMapping
	});
});
SelectLabel.displayName = "SelectLabel";
//#endregion
//#region node_modules/@base-ui/react/select/trigger/SelectTrigger.mjs
var SELECTED_DELAY = 400;
var stateAttributesMapping$6 = {
	...pressableTriggerOpenStateMapping,
	...fieldValidityMapping,
	popupSide: (side) => side ? { "data-popup-side": side } : null,
	value: () => null
};
/**
* A button that opens the select popup.
* Renders a `<button>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectTrigger = /*#__PURE__*/ import_react.forwardRef(function SelectTrigger(componentProps, forwardedRef) {
	const { render, className, id: idProp, disabled: disabledProp = false, nativeButton = true, style, ...elementProps } = componentProps;
	const { setTouched, setFocused, validationMode, state: fieldState, disabled: fieldDisabled } = useFieldRootContext();
	const { labelId: fieldLabelId } = useLabelableContext();
	const { store, setOpen, selectionRef, validation, readOnly, required, alignItemWithTriggerActiveRef, disabled: selectDisabled } = useSelectRootContext();
	const disabled = fieldDisabled || selectDisabled || disabledProp;
	const open = useStore(store, selectors$1.open);
	const mounted = useStore(store, selectors$1.mounted);
	const value = useStore(store, selectors$1.value);
	const triggerProps = useStore(store, selectors$1.triggerProps);
	const positionerElement = useStore(store, selectors$1.positionerElement);
	const listElement = useStore(store, selectors$1.listElement);
	const popupSideValue = useStore(store, selectors$1.popupSide);
	const rootId = useStore(store, selectors$1.id);
	const selectLabelId = useStore(store, selectors$1.labelId);
	const hasSelectedValue = useStore(store, selectors$1.hasSelectedValue);
	const popupSide = mounted && positionerElement ? popupSideValue : null;
	const id = idProp ?? rootId;
	const ariaLabelledBy = resolveAriaLabelledBy(fieldLabelId, selectLabelId);
	useLabelableId({ id });
	const positionerRef = useValueAsRef(positionerElement);
	const triggerRef = import_react.useRef(null);
	const { getButtonProps, buttonRef } = useButton({
		disabled,
		native: nativeButton
	});
	const setTriggerElement = store.useStateSetter("triggerElement");
	const timeoutFocus = useTimeout();
	const timeoutMouseDown = useTimeout();
	const selectedDelayTimeout = useTimeout();
	import_react.useEffect(() => {
		if (open) {
			selectedDelayTimeout.start(SELECTED_DELAY, () => {
				selectionRef.current.allowUnselectedMouseUp = true;
				selectionRef.current.allowSelectedMouseUp = true;
			});
			return () => {
				selectedDelayTimeout.clear();
			};
		}
		selectionRef.current = {
			allowSelectedMouseUp: false,
			allowUnselectedMouseUp: false,
			dragY: 0
		};
		timeoutMouseDown.clear();
	}, [
		open,
		selectionRef,
		timeoutMouseDown,
		selectedDelayTimeout
	]);
	const mergedProps = mergeProps(triggerProps, {
		id,
		role: "combobox",
		"aria-expanded": open,
		"aria-haspopup": "listbox",
		"aria-controls": open ? listElement?.id ?? getFloatingFocusElement(positionerElement)?.id : void 0,
		"aria-labelledby": ariaLabelledBy,
		"aria-readonly": readOnly || void 0,
		"aria-required": required || void 0,
		tabIndex: disabled ? -1 : 0,
		onFocus(event) {
			setFocused(true);
			if (open && alignItemWithTriggerActiveRef.current) setOpen(false, createChangeEventDetails(none, event.nativeEvent));
			timeoutFocus.start(0, () => {
				store.set("forceMount", true);
			});
		},
		onBlur(event) {
			if (contains(positionerElement, event.relatedTarget)) return;
			setTouched(true);
			setFocused(false);
			if (validationMode === "onBlur") validation.commit(value);
		},
		onMouseDown(event) {
			if (open) return;
			const doc = ownerDocument(event.currentTarget);
			function handleMouseUp(mouseEvent) {
				if (!triggerRef.current) return;
				const mouseUpTarget = mouseEvent.target;
				if (contains(triggerRef.current, mouseUpTarget) || contains(positionerRef.current, mouseUpTarget)) return;
				if (isMouseWithinBounds(mouseEvent, triggerRef.current)) return;
				setOpen(false, createChangeEventDetails(cancelOpen, mouseEvent));
			}
			timeoutMouseDown.start(0, () => {
				doc.addEventListener("mouseup", handleMouseUp, { once: true });
			});
		}
	}, elementProps, getButtonProps);
	const props = validation.getValidationProps(disabled, mergedProps);
	props.role = "combobox";
	const state = {
		...fieldState,
		open,
		disabled,
		value,
		readOnly,
		popupSide,
		placeholder: !hasSelectedValue
	};
	return useRenderElement("button", componentProps, {
		ref: [
			forwardedRef,
			triggerRef,
			buttonRef,
			setTriggerElement
		],
		state,
		stateAttributesMapping: stateAttributesMapping$6,
		props
	});
});
SelectTrigger.displayName = "SelectTrigger";
//#endregion
//#region node_modules/@base-ui/react/select/value/SelectValue.mjs
var stateAttributesMapping$5 = { value: () => null };
/**
* A text label of the currently selected item.
* Renders a `<span>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectValue = /*#__PURE__*/ import_react.forwardRef(function SelectValue(componentProps, forwardedRef) {
	const { className, render, children: childrenProp, placeholder, style, ...elementProps } = componentProps;
	const { store, valueRef } = useSelectRootContext();
	const value = useStore(store, selectors$1.value);
	const items = useStore(store, selectors$1.items);
	const itemToStringLabel = useStore(store, selectors$1.itemToStringLabel);
	const hasSelectedValue = useStore(store, selectors$1.hasSelectedValue);
	const shouldCheckNullItemLabel = !hasSelectedValue && placeholder != null && childrenProp == null;
	const hasNullLabel = useStore(store, selectors$1.hasNullItemLabel, shouldCheckNullItemLabel);
	const state = {
		value,
		placeholder: !hasSelectedValue
	};
	let children = null;
	if (typeof childrenProp === "function") children = childrenProp(value);
	else if (childrenProp != null) children = childrenProp;
	else if (shouldCheckNullItemLabel && !hasNullLabel) children = placeholder;
	else if (Array.isArray(value)) children = resolveMultipleLabels(value, items, itemToStringLabel);
	else children = resolveSelectedLabel(value, items, itemToStringLabel);
	return useRenderElement("span", componentProps, {
		state,
		ref: [forwardedRef, valueRef],
		props: [{ children }, elementProps],
		stateAttributesMapping: stateAttributesMapping$5
	});
});
SelectValue.displayName = "SelectValue";
//#endregion
//#region node_modules/@base-ui/react/select/icon/SelectIcon.mjs
/**
* An icon that indicates that the trigger button opens a select popup.
* Renders a `<span>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectIcon = /*#__PURE__*/ import_react.forwardRef(function SelectIcon(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const { store } = useSelectRootContext();
	return useRenderElement("span", componentProps, {
		state: { open: useStore(store, selectors$1.open) },
		ref: forwardedRef,
		props: [{
			"aria-hidden": true,
			children: "▼"
		}, elementProps],
		stateAttributesMapping: triggerOpenStateMapping$1
	});
});
SelectIcon.displayName = "SelectIcon";
//#endregion
//#region node_modules/@base-ui/react/select/portal/SelectPortal.mjs
/**
* A portal element that moves the popup to a different part of the DOM.
* By default, the portal element is appended to `<body>`.
* Renders a `<div>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectPortal = /*#__PURE__*/ import_react.forwardRef(function SelectPortal(portalProps, forwardedRef) {
	const { store } = useSelectRootContext();
	const mounted = useStore(store, selectors$1.mounted);
	const forceMount = useStore(store, selectors$1.forceMount);
	if (!(mounted || forceMount)) return null;
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(FloatingPortal, {
		ref: forwardedRef,
		...portalProps
	});
});
SelectPortal.displayName = "SelectPortal";
//#endregion
//#region node_modules/@base-ui/react/select/backdrop/SelectBackdrop.mjs
var stateAttributesMapping$4 = {
	...popupStateMapping,
	...transitionStatusMapping
};
/**
* An overlay displayed beneath the select popup.
* Renders a `<div>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectBackdrop = /*#__PURE__*/ import_react.forwardRef(function SelectBackdrop(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const { store } = useSelectRootContext();
	const open = useStore(store, selectors$1.open);
	const mounted = useStore(store, selectors$1.mounted);
	return useRenderElement("div", componentProps, {
		state: {
			open,
			transitionStatus: useStore(store, selectors$1.transitionStatus)
		},
		ref: forwardedRef,
		props: [{
			role: "presentation",
			hidden: !mounted,
			style: {
				userSelect: "none",
				WebkitUserSelect: "none"
			}
		}, elementProps],
		stateAttributesMapping: stateAttributesMapping$4
	});
});
SelectBackdrop.displayName = "SelectBackdrop";
//#endregion
//#region node_modules/@base-ui/react/select/positioner/SelectPositionerContext.mjs
var SelectPositionerContext = /*#__PURE__*/ import_react.createContext(void 0);
SelectPositionerContext.displayName = "SelectPositionerContext";
function useSelectPositionerContext() {
	const context = import_react.useContext(SelectPositionerContext);
	if (!context) throw new Error("Base UI: SelectPositionerContext is missing. SelectPositioner parts must be placed within <Select.Positioner>.");
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/select/popup/utils.mjs
function clearStyles(element, originalStyles) {
	if (element) Object.assign(element.style, originalStyles);
}
var LIST_FUNCTIONAL_STYLES = {
	position: "relative",
	maxHeight: "100%",
	overflowX: "hidden",
	overflowY: "auto"
};
//#endregion
//#region node_modules/@base-ui/react/select/positioner/SelectPositioner.mjs
var FIXED = { position: "fixed" };
/**
* Positions the select popup.
* Renders a `<div>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectPositioner = /*#__PURE__*/ import_react.forwardRef(function SelectPositioner(componentProps, forwardedRef) {
	const { anchor, className, render, positionMethod, side, align, sideOffset, alignOffset, collisionBoundary = "clipping-ancestors", collisionPadding, arrowPadding, sticky, disableAnchorTracking, alignItemWithTrigger = true, collisionAvoidance = DROPDOWN_COLLISION_AVOIDANCE, style, ...elementProps } = componentProps;
	const { store, listRef, labelsRef, alignItemWithTriggerActiveRef, selectedItemTextRef, valuesRef, initialValueRef, popupRef, setValue, floatingContext: floatingRootContext } = useSelectRootContext();
	const open = useStore(store, selectors$1.open);
	const mounted = useStore(store, selectors$1.mounted);
	const modal = useStore(store, selectors$1.modal);
	const value = useStore(store, selectors$1.value);
	const openMethod = useStore(store, selectors$1.openMethod);
	const positionerElement = useStore(store, selectors$1.positionerElement);
	const triggerElement = useStore(store, selectors$1.triggerElement);
	const isItemEqualToValue = useStore(store, selectors$1.isItemEqualToValue);
	const transitionStatus = useStore(store, selectors$1.transitionStatus);
	const scrollUpArrowRef = import_react.useRef(null);
	const scrollDownArrowRef = import_react.useRef(null);
	const [controlledAlignItemWithTrigger, setControlledAlignItemWithTrigger] = import_react.useState(alignItemWithTrigger);
	const alignItemWithTriggerActive = mounted && controlledAlignItemWithTrigger && openMethod !== "touch";
	if (!mounted && controlledAlignItemWithTrigger !== alignItemWithTrigger) setControlledAlignItemWithTrigger(alignItemWithTrigger);
	import_react.useImperativeHandle(alignItemWithTriggerActiveRef, () => alignItemWithTriggerActive);
	useAnchoredPopupScrollLock((alignItemWithTriggerActive || modal) && open, openMethod === "touch", positionerElement, triggerElement);
	const positioning = useAnchorPositioning({
		anchor,
		floatingRootContext,
		positionMethod,
		mounted,
		side,
		sideOffset,
		align,
		alignOffset,
		arrowPadding,
		collisionBoundary,
		collisionPadding,
		sticky,
		disableAnchorTracking: disableAnchorTracking ?? alignItemWithTriggerActive,
		collisionAvoidance,
		keepMounted: true
	});
	const renderedSide = alignItemWithTriggerActive ? "none" : positioning.side;
	const positionerStyles = alignItemWithTriggerActive ? FIXED : positioning.positionerStyles;
	const state = {
		open,
		side: renderedSide,
		align: positioning.align,
		anchorHidden: positioning.anchorHidden
	};
	useIsoLayoutEffect(() => {
		store.set("popupSide", positioning.side);
	}, [store, positioning.side]);
	const element = usePositioner(componentProps, state, {
		styles: positionerStyles,
		transitionStatus,
		props: elementProps,
		refs: [forwardedRef, store.useStateSetter("positionerElement")],
		hidden: !mounted,
		inert: !open
	});
	const prevMapSizeRef = import_react.useRef(0);
	const onMapChange = useStableCallback((map) => {
		if (valuesRef.current.length === 0) return;
		const prevSize = prevMapSizeRef.current;
		prevMapSizeRef.current = map.size;
		if (map.size === prevSize) return;
		const eventDetails = createChangeEventDetails(none);
		if (prevSize !== 0 && !store.state.multiple && value !== null) {
			if (findItemIndex(valuesRef.current, value, isItemEqualToValue) === -1) {
				const initialSelectedValue = initialValueRef.current;
				const nextValue = initialSelectedValue != null && findItemIndex(valuesRef.current, initialSelectedValue, isItemEqualToValue) !== -1 ? initialSelectedValue : null;
				setValue(nextValue, eventDetails);
				if (nextValue === null) {
					store.set("selectedIndex", null);
					selectedItemTextRef.current = null;
				}
			}
		}
		if (prevSize !== 0 && store.state.multiple && Array.isArray(value)) {
			const nextValue = value.filter((selectedItemValue) => findItemIndex(valuesRef.current, selectedItemValue, isItemEqualToValue) !== -1);
			if (nextValue.length !== value.length) {
				setValue(nextValue, eventDetails);
				if (nextValue.length === 0) {
					store.set("selectedIndex", null);
					selectedItemTextRef.current = null;
				}
			}
		}
		if (open && alignItemWithTriggerActive) {
			store.update({
				scrollUpArrowVisible: false,
				scrollDownArrowVisible: false
			});
			const stylesToClear = { height: "" };
			clearStyles(positionerElement, stylesToClear);
			clearStyles(popupRef.current, stylesToClear);
		}
	});
	const contextValue = import_react.useMemo(() => ({
		...positioning,
		side: renderedSide,
		alignItemWithTriggerActive,
		setControlledAlignItemWithTrigger,
		scrollUpArrowRef,
		scrollDownArrowRef
	}), [
		positioning,
		renderedSide,
		alignItemWithTriggerActive,
		setControlledAlignItemWithTrigger
	]);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(CompositeList, {
		elementsRef: listRef,
		labelsRef,
		onMapChange,
		children: /*#__PURE__*/ (0, import_jsx_runtime.jsxs)(SelectPositionerContext.Provider, {
			value: contextValue,
			children: [mounted && modal && /*#__PURE__*/ (0, import_jsx_runtime.jsx)(InternalBackdrop, {
				inert: inertValue(!open),
				cutout: triggerElement
			}), element]
		})
	});
});
SelectPositioner.displayName = "SelectPositioner";
//#endregion
//#region node_modules/@base-ui/react/select/popup/SelectPopup.mjs
var stateAttributesMapping$3 = {
	...popupStateMapping,
	...transitionStatusMapping
};
/**
* A container for the select list.
* Renders a `<div>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectPopup = /*#__PURE__*/ import_react.forwardRef(function SelectPopup(componentProps, forwardedRef) {
	const { render, className, style, finalFocus, ...elementProps } = componentProps;
	const { store, popupRef, onOpenChangeComplete, setOpen, valueRef, firstItemTextRef, selectedItemTextRef, multiple, handleScrollArrowVisibility, scrollHandlerRef, listRef, highlightItemOnHover, floatingContext: floatingRootContext } = useSelectRootContext();
	const { side, align, alignItemWithTriggerActive, isPositioned, setControlledAlignItemWithTrigger } = useSelectPositionerContext();
	const insideToolbar = useToolbarRootContext(true) != null;
	const direction = useDirection();
	const { nonce, disableStyleElements } = useCSPContext();
	const id = useStore(store, selectors$1.id);
	const open = useStore(store, selectors$1.open);
	const openMethod = useStore(store, selectors$1.openMethod);
	const mounted = useStore(store, selectors$1.mounted);
	const popupProps = useStore(store, selectors$1.popupProps);
	const transitionStatus = useStore(store, selectors$1.transitionStatus);
	const triggerElement = useStore(store, selectors$1.triggerElement);
	const positionerElement = useStore(store, selectors$1.positionerElement);
	const listElement = useStore(store, selectors$1.listElement);
	const reachedMaxHeightRef = import_react.useRef(false);
	const initialPlacedRef = import_react.useRef(false);
	const originalPositionerStylesRef = import_react.useRef({});
	const scrollArrowFrame = useAnimationFrame();
	const handleScroll = useStableCallback((scroller) => {
		if (!positionerElement || !popupRef.current || !initialPlacedRef.current) return;
		const isTopPositioned = positionerElement.style.top === "0px";
		const isBottomPositioned = positionerElement.style.bottom === "0px";
		if (reachedMaxHeightRef.current || !alignItemWithTriggerActive || !isTopPositioned && !isBottomPositioned) {
			handleScrollArrowVisibility(scroller);
			return;
		}
		const scale = getScale(positionerElement);
		const currentHeight = normalizeSize(positionerElement.getBoundingClientRect().height, "y", scale);
		const doc = ownerDocument(positionerElement);
		const win = getWindow(positionerElement);
		const positionerStyles = win.getComputedStyle(positionerElement);
		const marginTop = parseFloat(positionerStyles.marginTop);
		const marginBottom = parseFloat(positionerStyles.marginBottom);
		const maxPopupHeight = getMaxPopupHeight(win.getComputedStyle(popupRef.current));
		const maxAvailableHeight = Math.min(doc.documentElement.clientHeight - marginTop - marginBottom, maxPopupHeight);
		const scrollTop = scroller.scrollTop;
		const maxScrollTop = getMaxScrollTop(scroller);
		let nextScrollTop = null;
		const setHeight = (height) => {
			positionerElement.style.height = `${height}px`;
		};
		const diff = isTopPositioned ? maxScrollTop - scrollTop : scrollTop;
		const nextHeight = Math.min(currentHeight + diff, maxAvailableHeight);
		if (diff <= 1) {
			const heightDelta = clamp(diff, 0, maxAvailableHeight - currentHeight);
			if (heightDelta > 0) setHeight(currentHeight + heightDelta);
			scroller.scrollTop = isTopPositioned ? maxScrollTop : 0;
			if (maxAvailableHeight - (currentHeight + heightDelta) <= 1) reachedMaxHeightRef.current = true;
			handleScrollArrowVisibility(scroller);
			return;
		}
		if (maxAvailableHeight - nextHeight > 1) nextScrollTop = isTopPositioned ? Infinity : 0;
		else if (isBottomPositioned && scrollTop < maxScrollTop) nextScrollTop = scrollTop - (diff - (currentHeight + diff - maxAvailableHeight));
		const nextPositionerHeight = Math.ceil(nextHeight);
		if (nextPositionerHeight !== 0) setHeight(nextPositionerHeight);
		if (nextScrollTop != null) {
			const target = clamp(nextScrollTop, 0, getMaxScrollTop(scroller));
			if (Math.abs(scroller.scrollTop - target) > 1) scroller.scrollTop = target;
		}
		if (nextPositionerHeight >= maxAvailableHeight - 1) reachedMaxHeightRef.current = true;
		handleScrollArrowVisibility(scroller);
	});
	import_react.useImperativeHandle(scrollHandlerRef, () => handleScroll, [handleScroll]);
	useOpenChangeComplete({
		open,
		ref: popupRef,
		onComplete() {
			if (open) onOpenChangeComplete?.(true);
		}
	});
	const state = {
		open,
		transitionStatus,
		side,
		align
	};
	useIsoLayoutEffect(() => {
		if (!positionerElement || !popupRef.current || Object.keys(originalPositionerStylesRef.current).length) return;
		originalPositionerStylesRef.current = {
			top: positionerElement.style.top || "0",
			left: positionerElement.style.left || "0",
			right: positionerElement.style.right,
			height: positionerElement.style.height,
			bottom: positionerElement.style.bottom,
			minHeight: positionerElement.style.minHeight,
			maxHeight: positionerElement.style.maxHeight,
			marginTop: positionerElement.style.marginTop,
			marginBottom: positionerElement.style.marginBottom
		};
	}, [popupRef, positionerElement]);
	useIsoLayoutEffect(() => {
		if (open || alignItemWithTriggerActive) return;
		initialPlacedRef.current = false;
		reachedMaxHeightRef.current = false;
		clearStyles(positionerElement, originalPositionerStylesRef.current);
	}, [
		open,
		alignItemWithTriggerActive,
		positionerElement,
		popupRef
	]);
	useIsoLayoutEffect(() => {
		const popupElement = popupRef.current;
		if (!open || !triggerElement || !positionerElement || !popupElement || alignItemWithTriggerActive && !isPositioned || store.state.transitionStatus === "ending") return;
		initialPlacedRef.current = true;
		popupElement.style.removeProperty("--transform-origin");
		if (!alignItemWithTriggerActive) {
			scrollArrowFrame.request(() => handleScrollArrowVisibility(listElement || popupElement));
			return;
		}
		const restoreTransformStyles = unsetTransformStyles(popupElement);
		try {
			let textElement = selectedItemTextRef.current;
			if (!textElement?.isConnected) textElement = !selectors$1.hasSelectedValue(store.state) && firstItemTextRef.current?.isConnected ? firstItemTextRef.current : null;
			const valueElement = valueRef.current;
			const win = getWindow(positionerElement);
			const positionerStyles = win.getComputedStyle(positionerElement);
			const popupStyles = win.getComputedStyle(popupElement);
			const doc = ownerDocument(triggerElement);
			const scale = getScale(triggerElement);
			const triggerRect = normalizeRect(triggerElement.getBoundingClientRect(), scale);
			const positionerRect = normalizeRect(positionerElement.getBoundingClientRect(), scale);
			const triggerHeight = triggerRect.height;
			const scroller = listElement || popupElement;
			const scrollHeight = scroller.scrollHeight;
			const borderBottom = parseFloat(popupStyles.borderBottomWidth);
			const marginTop = parseFloat(positionerStyles.marginTop) || 10;
			const marginBottom = parseFloat(positionerStyles.marginBottom) || 10;
			const minHeight = parseFloat(positionerStyles.minHeight) || 100;
			const maxPopupHeight = getMaxPopupHeight(popupStyles);
			const paddingLeft = 5;
			const paddingRight = 5;
			const triggerCollisionThreshold = 20;
			const viewportHeight = doc.documentElement.clientHeight - marginTop - marginBottom;
			const viewportWidth = doc.documentElement.clientWidth;
			const availableSpaceBeneathTrigger = viewportHeight - triggerRect.bottom + triggerHeight;
			let textRect;
			let alignedLeft = direction === "rtl" ? triggerRect.right - positionerRect.width : triggerRect.left;
			let offsetY = 0;
			if (textElement && valueElement) {
				const valueRect = normalizeRect(valueElement.getBoundingClientRect(), scale);
				textRect = normalizeRect(textElement.getBoundingClientRect(), scale);
				alignedLeft = positionerRect.left + (direction === "rtl" ? valueRect.right - textRect.right : valueRect.left - textRect.left);
				const valueCenterFromTriggerTop = valueRect.top - triggerRect.top + valueRect.height / 2;
				offsetY = textRect.top - positionerRect.top + textRect.height / 2 - valueCenterFromTriggerTop;
			}
			const idealHeight = availableSpaceBeneathTrigger + offsetY + marginBottom + borderBottom;
			let height = Math.min(viewportHeight, idealHeight);
			const maxHeight = viewportHeight - marginTop - marginBottom;
			const scrollTop = idealHeight - height;
			const maxRight = viewportWidth - paddingRight;
			positionerElement.style.left = `${clamp(alignedLeft, paddingLeft, maxRight - positionerRect.width)}px`;
			positionerElement.style.height = `${height}px`;
			positionerElement.style.maxHeight = "none";
			positionerElement.style.marginTop = `${marginTop}px`;
			positionerElement.style.marginBottom = `${marginBottom}px`;
			popupElement.style.height = "100%";
			const maxScrollTop = getMaxScrollTop(scroller);
			const isTopPositioned = scrollTop >= maxScrollTop - 1;
			if (isTopPositioned) height = Math.min(viewportHeight, positionerRect.height) - (scrollTop - maxScrollTop);
			const fallbackToAlignPopupToTrigger = triggerRect.top < triggerCollisionThreshold || triggerRect.bottom > viewportHeight - triggerCollisionThreshold || Math.ceil(height) + 1 < Math.min(scrollHeight, minHeight);
			const isPinchZoomed = (win.visualViewport?.scale ?? 1) !== 1 && webkit;
			if (fallbackToAlignPopupToTrigger || isPinchZoomed) {
				clearStyles(positionerElement, originalPositionerStylesRef.current);
				setControlledAlignItemWithTrigger(false);
				return;
			}
			const initialHeight = Math.max(minHeight, height);
			if (isTopPositioned) {
				const topOffset = Math.max(0, viewportHeight - idealHeight);
				positionerElement.style.top = positionerRect.height >= maxHeight ? "0" : `${topOffset}px`;
				positionerElement.style.height = `${height}px`;
				scroller.scrollTop = getMaxScrollTop(scroller);
			} else {
				positionerElement.style.bottom = "0";
				scroller.scrollTop = scrollTop;
			}
			if (textRect) {
				const popupTop = positionerRect.top;
				const popupHeight = positionerRect.height;
				const textCenterY = textRect.top + textRect.height / 2;
				const clampedY = clamp(popupHeight > 0 ? (textCenterY - popupTop) / popupHeight * 100 : 50, 0, 100);
				popupElement.style.setProperty("--transform-origin", `50% ${clampedY}%`);
			}
			if (initialHeight === viewportHeight || height >= maxPopupHeight) reachedMaxHeightRef.current = true;
			handleScrollArrowVisibility(scroller);
			if (highlightItemOnHover && store.state.selectedIndex === null && store.state.activeIndex === null && listRef.current[0] != null) store.set("activeIndex", 0);
		} finally {
			restoreTransformStyles();
		}
	}, [
		store,
		open,
		positionerElement,
		triggerElement,
		valueRef,
		firstItemTextRef,
		selectedItemTextRef,
		popupRef,
		handleScrollArrowVisibility,
		alignItemWithTriggerActive,
		setControlledAlignItemWithTrigger,
		scrollArrowFrame,
		listElement,
		listRef,
		highlightItemOnHover,
		direction,
		isPositioned
	]);
	import_react.useEffect(() => {
		if (!alignItemWithTriggerActive || !positionerElement || !open) return;
		const win = getWindow(positionerElement);
		function handleResize(event) {
			setOpen(false, createChangeEventDetails(windowResize, event));
		}
		return addEventListener(win, "resize", handleResize);
	}, [
		setOpen,
		alignItemWithTriggerActive,
		positionerElement,
		open
	]);
	const defaultProps = {
		...listElement ? {
			role: "presentation",
			"aria-orientation": void 0
		} : {
			role: "listbox",
			"aria-multiselectable": multiple || void 0,
			id: `${id}-list`
		},
		onKeyDown(event) {
			if (insideToolbar && COMPOSITE_KEYS.has(event.key)) event.stopPropagation();
		},
		onScroll(event) {
			if (listElement) return;
			handleScroll(event.currentTarget);
		},
		...alignItemWithTriggerActive && { style: listElement ? { height: "100%" } : LIST_FUNCTIONAL_STYLES },
		className: !listElement && alignItemWithTriggerActive ? styleDisableScrollbar.className : void 0
	};
	const element = useRenderElement("div", componentProps, {
		ref: [forwardedRef, popupRef],
		state,
		stateAttributesMapping: stateAttributesMapping$3,
		props: [
			popupProps,
			defaultProps,
			getDisabledMountTransitionStyles(transitionStatus),
			elementProps
		]
	});
	return /*#__PURE__*/ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [!disableStyleElements && styleDisableScrollbar.getElement(nonce), /*#__PURE__*/ (0, import_jsx_runtime.jsx)(FloatingFocusManager, {
		context: floatingRootContext,
		modal: false,
		disabled: !mounted,
		openInteractionType: openMethod,
		returnFocus: finalFocus,
		restoreFocus: true,
		children: element
	})] });
});
SelectPopup.displayName = "SelectPopup";
function getMaxPopupHeight(popupStyles) {
	const maxHeightStyle = popupStyles.maxHeight;
	return maxHeightStyle.endsWith("px") ? parseFloat(maxHeightStyle) || Infinity : Infinity;
}
function getMaxScrollTop(scroller) {
	return getMaxScrollOffset(scroller.scrollHeight, scroller.clientHeight);
}
function getScale(element) {
	return platform.getScale(element);
}
function normalizeSize(size, axis, scale) {
	return size / scale[axis];
}
function normalizeRect(rect, scale) {
	return rectToClientRect({
		x: normalizeSize(rect.x, "x", scale),
		y: normalizeSize(rect.y, "y", scale),
		width: normalizeSize(rect.width, "x", scale),
		height: normalizeSize(rect.height, "y", scale)
	});
}
var TRANSFORM_STYLE_RESETS = [
	["transform", "none"],
	["scale", "1"],
	["translate", "0 0"]
];
function unsetTransformStyles(popupElement) {
	const { style } = popupElement;
	const originalStyles = {};
	for (const [property, value] of TRANSFORM_STYLE_RESETS) {
		originalStyles[property] = style.getPropertyValue(property);
		style.setProperty(property, value, "important");
	}
	return () => {
		for (const [property] of TRANSFORM_STYLE_RESETS) {
			const originalValue = originalStyles[property];
			if (originalValue) style.setProperty(property, originalValue);
			else style.removeProperty(property);
		}
	};
}
//#endregion
//#region node_modules/@base-ui/react/select/list/SelectList.mjs
/**
* A container for the select items.
* Renders a `<div>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectList = /*#__PURE__*/ import_react.forwardRef(function SelectList(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const { store, scrollHandlerRef, multiple } = useSelectRootContext();
	const { alignItemWithTriggerActive } = useSelectPositionerContext();
	const hasScrollArrows = useStore(store, selectors$1.hasScrollArrows);
	const openMethod = useStore(store, selectors$1.openMethod);
	const defaultProps = {
		id: `${useStore(store, selectors$1.id)}-list`,
		role: "listbox",
		"aria-multiselectable": multiple || void 0,
		onScroll(event) {
			scrollHandlerRef.current?.(event.currentTarget);
		},
		...alignItemWithTriggerActive && { style: LIST_FUNCTIONAL_STYLES },
		className: hasScrollArrows && openMethod !== "touch" ? styleDisableScrollbar.className : void 0
	};
	return useRenderElement("div", componentProps, {
		ref: [forwardedRef, store.useStateSetter("listElement")],
		props: [defaultProps, elementProps]
	});
});
SelectList.displayName = "SelectList";
//#endregion
//#region node_modules/@base-ui/react/select/item/SelectItemContext.mjs
var SelectItemContext = /*#__PURE__*/ import_react.createContext(void 0);
SelectItemContext.displayName = "SelectItemContext";
function useSelectItemContext() {
	const context = import_react.useContext(SelectItemContext);
	if (!context) throw new Error("Base UI: SelectItemContext is missing. SelectItem parts must be placed within <Select.Item>.");
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/select/item/SelectItem.mjs
/**
* An individual option in the select popup.
* Renders a `<div>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectItem = /*#__PURE__*/ import_react.memo(/*#__PURE__*/ import_react.forwardRef(function SelectItem(componentProps, forwardedRef) {
	const { render, className, style, value: itemValue = null, label, disabled: disabledProp = false, nativeButton = false, ...elementProps } = componentProps;
	const textRef = import_react.useRef(null);
	const listItem = useCompositeListItem({
		guess: true,
		label,
		textRef
	});
	const { store, itemProps, setOpen, setValue, selectionRef, typingRef, valuesRef, multiple, selectedItemTextRef, disabled: selectDisabled, readOnly } = useSelectRootContext();
	const disabled = selectDisabled || disabledProp;
	const highlighted = useStore(store, selectors$1.isActive, listItem.index);
	const open = useStore(store, selectors$1.open);
	const selected = useStore(store, selectors$1.isSelected, itemValue);
	const selectedByFocus = useStore(store, selectors$1.isSelectedByFocus, listItem.index);
	const isItemEqualToValue = useStore(store, selectors$1.isItemEqualToValue);
	const index = listItem.index;
	const itemRef = import_react.useRef(null);
	useIsoLayoutEffect(() => {
		const values = valuesRef.current;
		values[index] = itemValue;
		return () => {
			delete values[index];
		};
	}, [
		index,
		itemValue,
		valuesRef
	]);
	useIsoLayoutEffect(() => {
		const selectedValue = store.state.value;
		let selectedCandidate = selectedValue;
		if (multiple && Array.isArray(selectedValue)) selectedCandidate = selectedValue.length > 0 ? selectedValue[selectedValue.length - 1] : void 0;
		if (selectedCandidate !== void 0 && compareItemEquality(itemValue, selectedCandidate, isItemEqualToValue)) {
			store.set("selectedIndex", index);
			if (textRef.current) selectedItemTextRef.current = textRef.current;
		}
	}, [
		index,
		multiple,
		isItemEqualToValue,
		store,
		itemValue,
		selectedItemTextRef
	]);
	const pointerTypeRef = import_react.useRef("mouse");
	const allowMouseSelectionRef = import_react.useRef(false);
	const { getButtonProps, buttonRef } = useButton({
		disabled,
		focusableWhenDisabled: true,
		native: nativeButton,
		composite: true
	});
	const state = {
		disabled,
		selected,
		highlighted
	};
	function commitSelection(event) {
		if (selectDisabled || readOnly) return;
		const selectedValue = store.state.value;
		if (multiple) {
			const currentValue = Array.isArray(selectedValue) ? selectedValue : [];
			const nextValue = selected ? removeItem(currentValue, itemValue, isItemEqualToValue) : [...currentValue, itemValue];
			setValue(nextValue, createChangeEventDetails(itemPress, event));
		} else {
			setValue(itemValue, createChangeEventDetails(itemPress, event));
			setOpen(false, createChangeEventDetails(itemPress, event));
		}
	}
	function resetDragMovement() {
		selectionRef.current.dragY = 0;
	}
	const defaultProps = {
		role: "option",
		"aria-selected": selected,
		tabIndex: open && highlighted ? 0 : -1,
		onKeyDown(event) {
			store.set("activeIndex", index);
			if (event.key === " " && typingRef.current) event.preventDefault();
		},
		onClick(event) {
			const isMouseClick = pointerTypeRef.current !== "touch";
			const clickPointerType = event.nativeEvent.pointerType;
			const isVirtualMouseClick = isMouseClick && isVirtualClick(event.nativeEvent) && (clickPointerType !== void 0 || highlighted);
			const isInvalidMouseClick = isMouseClick && !isVirtualMouseClick && !allowMouseSelectionRef.current;
			allowMouseSelectionRef.current = false;
			if (disabled || isInvalidMouseClick) return;
			commitSelection(event.nativeEvent);
		},
		onPointerEnter(event) {
			pointerTypeRef.current = event.pointerType;
		},
		onPointerMove(event) {
			if (event.pointerType === "mouse" && event.buttons === 1) {
				const selection = selectionRef.current;
				selection.dragY += event.movementY;
				if (selection.dragY ** 2 >= 64) selection.allowUnselectedMouseUp = true;
			}
		},
		onPointerDown(event) {
			pointerTypeRef.current = event.pointerType;
			allowMouseSelectionRef.current = true;
			resetDragMovement();
		},
		onMouseUp() {
			resetDragMovement();
			if (disabled || pointerTypeRef.current === "touch") return;
			if (allowMouseSelectionRef.current) return;
			const disallowSelectedMouseUp = !selectionRef.current.allowSelectedMouseUp && selected;
			const disallowUnselectedMouseUp = !selectionRef.current.allowUnselectedMouseUp && !selected;
			if (disallowSelectedMouseUp || disallowUnselectedMouseUp) return;
			allowMouseSelectionRef.current = true;
			itemRef.current?.click();
			allowMouseSelectionRef.current = false;
		}
	};
	const element = useRenderElement("div", componentProps, {
		ref: [
			buttonRef,
			forwardedRef,
			listItem.ref,
			itemRef
		],
		state,
		props: [
			itemProps,
			defaultProps,
			elementProps,
			getButtonProps
		]
	});
	const contextValue = import_react.useMemo(() => ({
		selected,
		index,
		textRef,
		selectedByFocus
	}), [
		selected,
		index,
		textRef,
		selectedByFocus
	]);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(SelectItemContext.Provider, {
		value: contextValue,
		children: element
	});
}));
SelectItem.displayName = "SelectItem";
//#endregion
//#region node_modules/@base-ui/react/select/item-indicator/SelectItemIndicator.mjs
/**
* Indicates whether the select item is selected.
* Renders a `<span>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectItemIndicator = /*#__PURE__*/ import_react.forwardRef(function SelectItemIndicator(componentProps, forwardedRef) {
	const { selected } = useSelectItemContext();
	if (!(componentProps.keepMounted || selected)) return null;
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(Inner, {
		...componentProps,
		ref: forwardedRef
	});
});
SelectItemIndicator.displayName = "SelectItemIndicator";
var Inner = /*#__PURE__*/ import_react.memo(/*#__PURE__*/ import_react.forwardRef((componentProps, forwardedRef) => {
	const { render, className, style, keepMounted, ...elementProps } = componentProps;
	const { selected } = useSelectItemContext();
	const indicatorRef = import_react.useRef(null);
	const { transitionStatus, setMounted } = useTransitionStatus(selected);
	const element = useRenderElement("span", componentProps, {
		ref: [forwardedRef, indicatorRef],
		state: {
			selected,
			transitionStatus
		},
		props: [{
			"aria-hidden": true,
			children: "✔️"
		}, elementProps],
		stateAttributesMapping: transitionStatusMapping
	});
	useOpenChangeComplete({
		open: selected,
		ref: indicatorRef,
		onComplete() {
			if (!selected) setMounted(false);
		}
	});
	return element;
}));
Inner.displayName = "Inner";
//#endregion
//#region node_modules/@base-ui/react/select/item-text/SelectItemText.mjs
/**
* A text label of the select item.
* Renders a `<div>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectItemText = /*#__PURE__*/ import_react.memo(/*#__PURE__*/ import_react.forwardRef(function SelectItemText(componentProps, forwardedRef) {
	const { index, textRef, selectedByFocus } = useSelectItemContext();
	const { firstItemTextRef, selectedItemTextRef } = useSelectRootContext();
	const { render, className, style, ...elementProps } = componentProps;
	return useRenderElement("div", componentProps, {
		ref: [
			import_react.useCallback((node) => {
				if (!node) return;
				if (index === 0) firstItemTextRef.current = node;
				if (selectedByFocus) selectedItemTextRef.current = node;
			}, [
				firstItemTextRef,
				selectedItemTextRef,
				index,
				selectedByFocus
			]),
			forwardedRef,
			textRef
		],
		props: elementProps
	});
}));
SelectItemText.displayName = "SelectItemText";
//#endregion
//#region node_modules/@base-ui/react/select/arrow/SelectArrow.mjs
/**
* Displays an element positioned against the select popup anchor.
* Renders a `<div>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectArrow = /*#__PURE__*/ import_react.forwardRef(function SelectArrow(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const { store } = useSelectRootContext();
	const { side, align, arrowRef, arrowStyles, arrowUncentered, alignItemWithTriggerActive } = useSelectPositionerContext();
	const element = useRenderElement("div", componentProps, {
		state: {
			open: useStore(store, selectors$1.open),
			side,
			align,
			uncentered: arrowUncentered
		},
		ref: [arrowRef, forwardedRef],
		props: [{
			style: arrowStyles,
			"aria-hidden": true
		}, elementProps],
		stateAttributesMapping: popupTransitionStateMapping
	});
	if (alignItemWithTriggerActive) return null;
	return element;
});
SelectArrow.displayName = "SelectArrow";
//#endregion
//#region node_modules/@base-ui/react/select/scroll-arrow/SelectScrollArrow.mjs
/**
* @internal
*/
var SelectScrollArrow = /*#__PURE__*/ import_react.forwardRef(function SelectScrollArrow(componentProps, forwardedRef) {
	const { render, className, style, direction, keepMounted, ...elementProps } = componentProps;
	const isUp = direction === "up";
	const { store, popupRef, listRef, handleScrollArrowVisibility, scrollArrowsMountedCountRef } = useSelectRootContext();
	const { side, scrollDownArrowRef, scrollUpArrowRef } = useSelectPositionerContext();
	const stateVisible = useStore(store, isUp ? selectors$1.scrollUpArrowVisible : selectors$1.scrollDownArrowVisible);
	const openMethod = useStore(store, selectors$1.openMethod);
	const visible = stateVisible && openMethod !== "touch";
	const timeout = useTimeout();
	const scrollArrowRef = isUp ? scrollUpArrowRef : scrollDownArrowRef;
	const { mounted, transitionStatus, setMounted } = useTransitionStatus(visible);
	useIsoLayoutEffect(() => {
		scrollArrowsMountedCountRef.current += 1;
		store.set("hasScrollArrows", true);
		return () => {
			scrollArrowsMountedCountRef.current = Math.max(0, scrollArrowsMountedCountRef.current - 1);
			if (scrollArrowsMountedCountRef.current === 0) store.set("hasScrollArrows", false);
		};
	}, [store, scrollArrowsMountedCountRef]);
	useOpenChangeComplete({
		open: visible,
		ref: scrollArrowRef,
		onComplete() {
			if (!visible) setMounted(false);
		}
	});
	const element = useRenderElement("div", componentProps, {
		ref: [forwardedRef, scrollArrowRef],
		state: {
			direction,
			visible,
			side,
			transitionStatus
		},
		props: [{
			"aria-hidden": true,
			children: isUp ? "▲" : "▼",
			style: { position: "absolute" },
			onMouseMove(event) {
				if (event.movementX === 0 && event.movementY === 0 || timeout.isStarted()) return;
				store.set("activeIndex", null);
				function scrollNextItem() {
					const scroller = store.state.listElement ?? popupRef.current;
					if (!scroller) return;
					store.set("activeIndex", null);
					handleScrollArrowVisibility(scroller);
					const maxScrollTop = getMaxScrollOffset(scroller.scrollHeight, scroller.clientHeight);
					const scrollTop = normalizeScrollOffset(scroller.scrollTop, maxScrollTop);
					const isScrolledToEdge = scrollTop === (isUp ? 0 : maxScrollTop);
					const items = listRef.current;
					if (scrollTop !== scroller.scrollTop) scroller.scrollTop = scrollTop;
					if (isScrolledToEdge) {
						timeout.clear();
						return;
					}
					if (items.length > 0) {
						const scrollArrowHeight = scrollArrowRef.current?.offsetHeight || 0;
						scroller.scrollTop = getTargetScrollTop(items, isUp, scrollTop, scroller.clientHeight, scrollArrowHeight, maxScrollTop);
					}
					timeout.start(40, scrollNextItem);
				}
				timeout.start(40, scrollNextItem);
			},
			onMouseLeave() {
				timeout.clear();
			}
		}, elementProps],
		stateAttributesMapping: transitionStatusMapping
	});
	if (!(mounted || keepMounted)) return null;
	return element;
});
SelectScrollArrow.displayName = "SelectScrollArrow";
function getTargetScrollTop(items, isUp, scrollTop, clientHeight, scrollArrowHeight, maxScrollTop) {
	if (isUp) {
		let firstVisibleIndex = 0;
		const visibleTop = scrollTop + scrollArrowHeight - 1;
		for (let i = 0; i < items.length; i += 1) {
			const item = items[i];
			if (item && item.offsetTop >= visibleTop) {
				firstVisibleIndex = i;
				break;
			}
		}
		const targetIndex = Math.max(0, firstVisibleIndex - 1);
		const targetItem = items[targetIndex];
		return targetIndex < firstVisibleIndex && targetItem ? normalizeScrollOffset(targetItem.offsetTop - scrollArrowHeight, maxScrollTop) : 0;
	}
	let lastVisibleIndex = items.length - 1;
	const visibleBottom = scrollTop + clientHeight - scrollArrowHeight + 1;
	for (let i = 0; i < items.length; i += 1) {
		const item = items[i];
		if (item && item.offsetTop + item.offsetHeight > visibleBottom) {
			lastVisibleIndex = Math.max(0, i - 1);
			break;
		}
	}
	const targetIndex = Math.min(items.length - 1, lastVisibleIndex + 1);
	const targetItem = items[targetIndex];
	return targetIndex > lastVisibleIndex && targetItem ? normalizeScrollOffset(targetItem.offsetTop + targetItem.offsetHeight - clientHeight + scrollArrowHeight, maxScrollTop) : maxScrollTop;
}
//#endregion
//#region node_modules/@base-ui/react/select/scroll-down-arrow/SelectScrollDownArrow.mjs
/**
* An element that scrolls the select popup down when hovered. Does not render when using touch input.
* Renders a `<div>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectScrollDownArrow = /*#__PURE__*/ import_react.forwardRef(function SelectScrollDownArrow(props, forwardedRef) {
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(SelectScrollArrow, {
		...props,
		ref: forwardedRef,
		direction: "down"
	});
});
SelectScrollDownArrow.displayName = "SelectScrollDownArrow";
//#endregion
//#region node_modules/@base-ui/react/select/scroll-up-arrow/SelectScrollUpArrow.mjs
/**
* An element that scrolls the select popup up when hovered. Does not render when using touch input.
* Renders a `<div>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectScrollUpArrow = /*#__PURE__*/ import_react.forwardRef(function SelectScrollUpArrow(props, forwardedRef) {
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(SelectScrollArrow, {
		...props,
		ref: forwardedRef,
		direction: "up"
	});
});
SelectScrollUpArrow.displayName = "SelectScrollUpArrow";
//#endregion
//#region node_modules/@base-ui/react/select/group/SelectGroupContext.mjs
var SelectGroupContext = /*#__PURE__*/ import_react.createContext(void 0);
SelectGroupContext.displayName = "SelectGroupContext";
function useSelectGroupContext() {
	const context = import_react.useContext(SelectGroupContext);
	if (context === void 0) throw new Error("Base UI: SelectGroupContext is missing. SelectGroup parts must be placed within <Select.Group>.");
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/select/group/SelectGroup.mjs
/**
* Groups related select items with the corresponding label.
* Renders a `<div>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectGroup = /*#__PURE__*/ import_react.forwardRef(function SelectGroup(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const [labelId, setLabelId] = import_react.useState();
	const contextValue = import_react.useMemo(() => ({
		labelId,
		setLabelId
	}), [labelId, setLabelId]);
	const element = useRenderElement("div", componentProps, {
		ref: forwardedRef,
		props: [{
			role: "group",
			"aria-labelledby": labelId
		}, elementProps]
	});
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(SelectGroupContext.Provider, {
		value: contextValue,
		children: element
	});
});
SelectGroup.displayName = "SelectGroup";
//#endregion
//#region node_modules/@base-ui/react/select/group-label/SelectGroupLabel.mjs
/**
* An accessible label that is automatically associated with its parent group.
* Renders a `<div>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectGroupLabel = /*#__PURE__*/ import_react.forwardRef(function SelectGroupLabel(componentProps, forwardedRef) {
	const { render, className, style, id: idProp, ...elementProps } = componentProps;
	const { setLabelId } = useSelectGroupContext();
	const id = useBaseUiId(idProp);
	useIsoLayoutEffect(() => {
		setLabelId(id);
		return () => {
			setLabelId((currentId) => currentId === id ? void 0 : currentId);
		};
	}, [id, setLabelId]);
	return useRenderElement("div", componentProps, {
		ref: forwardedRef,
		props: [{ id }, elementProps]
	});
});
SelectGroupLabel.displayName = "SelectGroupLabel";
//#endregion
//#region node_modules/@base-ui/react/select/separator/SelectSeparator.mjs
/**
* A visual separator between items or groups.
* Renders a `<div>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectSeparator = ListboxSeparator;
//#endregion
//#region node_modules/@base-ui/react/select/index.parts.mjs
var index_parts_exports$22 = /* @__PURE__ */ __exportAll({
	Arrow: () => SelectArrow,
	Backdrop: () => SelectBackdrop,
	Group: () => SelectGroup,
	GroupLabel: () => SelectGroupLabel,
	Icon: () => SelectIcon,
	Item: () => SelectItem,
	ItemIndicator: () => SelectItemIndicator,
	ItemText: () => SelectItemText,
	Label: () => SelectLabel,
	List: () => SelectList,
	Popup: () => SelectPopup,
	Portal: () => SelectPortal,
	Positioner: () => SelectPositioner,
	Root: () => SelectRoot,
	ScrollDownArrow: () => SelectScrollDownArrow,
	ScrollUpArrow: () => SelectScrollUpArrow,
	Separator: () => SelectSeparator,
	Trigger: () => SelectTrigger,
	Value: () => SelectValue
});
//#endregion
//#region node_modules/@base-ui/react/slider/utils/asc.mjs
function asc(a, b) {
	return a - b;
}
//#endregion
//#region node_modules/@base-ui/react/slider/utils/getSliderValue.mjs
function getSliderValue(valueInput, index, min, max, range, values) {
	const clamped = clamp(valueInput, min, max);
	if (!range) return clamped;
	const output = values.slice();
	output[index] = clamp(clamped, values[index - 1] ?? -Infinity, values[index + 1] ?? Infinity);
	return output.sort(asc);
}
//#endregion
//#region node_modules/@base-ui/react/slider/utils/validateMinimumDistance.mjs
function validateMinimumDistance(values, step, minStepsBetweenValues) {
	if (!Array.isArray(values)) return true;
	const minDistance = step * minStepsBetweenValues;
	for (let i = 0; i < values.length - 1; i += 1) if (!(Math.abs(values[i] - values[i + 1]) >= minDistance)) return false;
	return true;
}
//#endregion
//#region node_modules/@base-ui/react/slider/root/stateAttributesMapping.mjs
var nullMapping = () => null;
var sliderStateAttributesMapping = {
	activeThumbIndex: nullMapping,
	max: nullMapping,
	min: nullMapping,
	minStepsBetweenValues: nullMapping,
	step: nullMapping,
	values: nullMapping,
	...fieldValidityMapping
};
//#endregion
//#region node_modules/@base-ui/react/slider/root/SliderRootContext.mjs
var SliderRootContext = /*#__PURE__*/ import_react.createContext(void 0);
SliderRootContext.displayName = "SliderRootContext";
function useSliderRootContext() {
	const context = import_react.useContext(SliderRootContext);
	if (context === void 0) throw new Error("Base UI: SliderRootContext is missing. Slider parts must be placed within <Slider.Root>.");
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/slider/root/SliderRoot.mjs
function areValuesEqual(newValue, oldValue) {
	return newValue === oldValue || Array.isArray(newValue) && Array.isArray(oldValue) && areArraysEqual(newValue, oldValue);
}
/**
* Groups all parts of the slider.
* Renders a `<div>` element.
*
* Documentation: [Base UI Slider](https://base-ui.com/react/components/slider)
*/
var SliderRoot = /*#__PURE__*/ import_react.forwardRef(function SliderRoot(componentProps, forwardedRef) {
	const { "aria-labelledby": ariaLabelledByProp, className, defaultValue, disabled: disabledProp = false, id: idProp, format, largeStep = 10, locale, render, max = 100, min = 0, minStepsBetweenValues = 0, form, name: nameProp, onValueChange: onValueChangeProp, onValueCommitted: onValueCommittedProp, orientation = "horizontal", step = 1, thumbCollisionBehavior = "push", thumbAlignment = "center", value: valueProp, style, ...elementProps } = componentProps;
	const id = useBaseUiId(idProp);
	const defaultLabelId = getDefaultLabelId(id);
	const onValueChange = useStableCallback(onValueChangeProp);
	const onValueCommitted = useStableCallback(onValueCommittedProp);
	const { clearErrors } = useFormContext();
	const { state: fieldState, disabled: fieldDisabled, name: fieldName, setTouched, setDirty, validityData, validation } = useFieldRootContext();
	const { labelId: fieldLabelId } = useLabelableContext();
	const [labelId, setLabelId] = import_react.useState();
	const ariaLabelledby = ariaLabelledByProp ?? resolveAriaLabelledBy(fieldLabelId, labelId);
	const disabled = fieldDisabled || disabledProp;
	const name = fieldName ?? nameProp;
	const [valueUnwrapped, setValueUnwrapped] = useControlled({
		controlled: valueProp,
		default: defaultValue ?? min,
		name: "Slider"
	});
	const sliderRef = import_react.useRef(null);
	const controlRef = import_react.useRef(null);
	const thumbRefs = import_react.useRef([]);
	const pressedThumbCenterOffsetRef = import_react.useRef(null);
	const pressedThumbIndexRef = import_react.useRef(-1);
	const pressedValuesRef = import_react.useRef(null);
	const lastChangeReasonRef = import_react.useRef(none);
	const [active, setActiveState] = import_react.useState(-1);
	const [lastUsedThumbIndex, setLastUsedThumbIndex] = import_react.useState(-1);
	const [dragging, setDragging] = import_react.useState(false);
	const [thumbMap, setThumbMap] = import_react.useState(() => /* @__PURE__ */ new Map());
	const [indicatorPosition, setIndicatorPosition] = import_react.useState([void 0, void 0]);
	const setActive = useStableCallback((value) => {
		setActiveState(value);
		if (value !== -1) setLastUsedThumbIndex(value);
	});
	const registerFieldControlRef = useStableCallback((element) => {
		if (element) controlRef.current = element;
	});
	const range = Array.isArray(valueUnwrapped);
	const values = import_react.useMemo(() => {
		if (!range) return [clamp(valueUnwrapped, min, max)];
		return valueUnwrapped.map((value) => clamp(value, min, max)).sort(asc);
	}, [
		max,
		min,
		range,
		valueUnwrapped
	]);
	const fieldValue = range ? values : values[0];
	useRegisterFieldControl(validation.inputRef, id, fieldValue, void 0, !disabled, nameProp);
	useValueChanged(fieldValue, () => {
		clearErrors(name);
		validation.change(fieldValue);
		const initialValue = validityData.initialValue;
		let isDirty;
		if (Array.isArray(fieldValue) && Array.isArray(initialValue)) isDirty = !areArraysEqual(fieldValue, initialValue);
		else isDirty = fieldValue !== initialValue;
		setDirty(isDirty);
	});
	const setValue = useStableCallback((newValue, details) => {
		if (Number.isNaN(newValue) || areValuesEqual(newValue, valueUnwrapped)) return false;
		const nativeEvent = details.event;
		const EventConstructor = nativeEvent.constructor;
		const clonedEvent = new EventConstructor(nativeEvent.type, nativeEvent);
		Object.defineProperty(clonedEvent, "target", {
			writable: true,
			value: {
				value: newValue,
				name
			}
		});
		details.event = clonedEvent;
		onValueChange(newValue, details);
		if (details.isCanceled) return false;
		lastChangeReasonRef.current = details.reason;
		setValueUnwrapped(newValue);
		return true;
	});
	const handleInputChange = useStableCallback((valueInput, index, event) => {
		const newValue = getSliderValue(valueInput, index, min, max, range, values);
		if (validateMinimumDistance(newValue, step, minStepsBetweenValues)) {
			const reason = "key" in event ? keyboard : inputChange;
			const applied = setValue(newValue, createChangeEventDetails(reason, event.nativeEvent, void 0, { activeThumbIndex: index }));
			setTouched(true);
			if (applied) onValueCommitted(newValue, createGenericEventDetails(reason, event.nativeEvent));
		}
	});
	if (min >= max) warn("Slider `max` must be greater than `min`.");
	useIsoLayoutEffect(() => {
		if (!disabled) return;
		const activeEl = activeElement(ownerDocument(sliderRef.current));
		if (contains(sliderRef.current, activeEl)) activeEl.blur();
		if (active !== -1) setActive(-1);
	}, [
		active,
		disabled,
		setActive
	]);
	const state = import_react.useMemo(() => ({
		...fieldState,
		activeThumbIndex: active,
		disabled,
		dragging,
		orientation,
		max,
		min,
		minStepsBetweenValues,
		step,
		values
	}), [
		fieldState,
		active,
		disabled,
		dragging,
		max,
		min,
		minStepsBetweenValues,
		orientation,
		step,
		values
	]);
	const contextValue = import_react.useMemo(() => ({
		active,
		controlRef,
		disabled,
		dragging,
		validation,
		format,
		handleInputChange,
		indicatorPosition,
		inset: thumbAlignment !== "center",
		labelId: ariaLabelledby,
		rootLabelId: defaultLabelId,
		largeStep,
		lastUsedThumbIndex,
		lastChangeReasonRef,
		form,
		locale,
		max,
		min,
		minStepsBetweenValues,
		name,
		onValueCommitted,
		orientation,
		pressedThumbCenterOffsetRef,
		pressedThumbIndexRef,
		pressedValuesRef,
		registerFieldControlRef,
		renderBeforeHydration: thumbAlignment === "edge",
		setActive,
		setDragging,
		setIndicatorPosition,
		setLabelId,
		setValue,
		state,
		step,
		thumbCollisionBehavior,
		thumbMap,
		thumbRefs,
		values
	}), [
		active,
		ariaLabelledby,
		defaultLabelId,
		disabled,
		dragging,
		validation,
		format,
		handleInputChange,
		indicatorPosition,
		largeStep,
		lastUsedThumbIndex,
		form,
		locale,
		max,
		min,
		minStepsBetweenValues,
		name,
		onValueCommitted,
		orientation,
		registerFieldControlRef,
		setActive,
		setValue,
		state,
		step,
		thumbCollisionBehavior,
		thumbAlignment,
		thumbMap,
		values
	]);
	const element = useRenderElement("div", componentProps, {
		state,
		ref: [forwardedRef, sliderRef],
		props: [
			{
				"aria-labelledby": ariaLabelledby,
				id,
				role: "group"
			},
			elementProps,
			(props) => validation.getValidationProps(disabled, props)
		],
		stateAttributesMapping: sliderStateAttributesMapping
	});
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(SliderRootContext.Provider, {
		value: contextValue,
		children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(CompositeList, {
			elementsRef: thumbRefs,
			onMapChange: setThumbMap,
			children: element
		})
	});
});
SliderRoot.displayName = "SliderRoot";
//#endregion
//#region node_modules/@base-ui/react/slider/label/SliderLabel.mjs
/**
* An accessible label that is automatically associated with the slider thumbs.
* Renders a `<div>` element.
*
* Documentation: [Base UI Slider](https://base-ui.com/react/components/slider)
*/
var SliderLabel = /*#__PURE__*/ import_react.forwardRef(function SliderLabel(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const elementPropsWithoutId = elementProps;
	delete elementPropsWithoutId.id;
	const { state, setLabelId, controlRef, rootLabelId } = useSliderRootContext();
	function focusControl(event, controlId) {
		if (controlId) {
			const controlElement = ownerDocument(event.currentTarget).getElementById(controlId);
			if (isHTMLElement(controlElement)) {
				focusElementWithVisible(controlElement);
				return;
			}
		}
		const fallbackInputs = controlRef.current?.querySelectorAll("input[type=\"range\"]");
		const fallbackInput = fallbackInputs?.length === 1 ? fallbackInputs[0] : null;
		if (isHTMLElement(fallbackInput)) focusElementWithVisible(fallbackInput);
	}
	return useRenderElement("div", componentProps, {
		ref: forwardedRef,
		state,
		props: [useLabel({
			id: rootLabelId,
			setLabelId,
			focusControl
		}), elementProps],
		stateAttributesMapping: sliderStateAttributesMapping
	});
});
SliderLabel.displayName = "SliderLabel";
//#endregion
//#region node_modules/@base-ui/react/slider/value/SliderValue.mjs
/**
* Displays the current value of the slider as text.
* Renders an `<output>` element.
*
* Documentation: [Base UI Slider](https://base-ui.com/react/components/slider)
*/
var SliderValue = /*#__PURE__*/ import_react.forwardRef(function SliderValue(componentProps, forwardedRef) {
	const { "aria-live": ariaLive = "off", render, className, children, style, ...elementProps } = componentProps;
	const { thumbMap, state, values, format, locale } = useSliderRootContext();
	const outputFor = Array.from(thumbMap.values(), ({ inputId }) => inputId).join(" ").trim() || void 0;
	const formattedValues = import_react.useMemo(() => values.map((v) => formatNumber(v, locale, format)), [
		format,
		locale,
		values
	]);
	const defaultDisplayValue = formattedValues.join(" – ");
	return useRenderElement("output", componentProps, {
		state,
		ref: forwardedRef,
		props: [{
			"aria-live": ariaLive,
			children: typeof children === "function" ? children(formattedValues, values) : defaultDisplayValue,
			htmlFor: outputFor
		}, elementProps],
		stateAttributesMapping: sliderStateAttributesMapping
	});
});
SliderValue.displayName = "SliderValue";
//#endregion
//#region node_modules/@base-ui/react/slider/utils/getMidpoint.mjs
function getMidpoint(element, vertical) {
	const rect = element.getBoundingClientRect();
	return vertical ? (rect.top + rect.bottom) / 2 : (rect.left + rect.right) / 2;
}
//#endregion
//#region node_modules/@base-ui/react/slider/utils/roundValueToStep.mjs
function getDecimalPrecision(num) {
	if (num === 0) return 0;
	if (Math.abs(num) < 1) {
		const parts = num.toExponential().split("e-");
		const matissaDecimalPart = parts[0].split(".")[1];
		return (matissaDecimalPart ? matissaDecimalPart.length : 0) + parseInt(parts[1], 10);
	}
	const decimalPart = num.toString().split(".")[1];
	return decimalPart ? decimalPart.length : 0;
}
function roundValueToStep(value, step, min) {
	const nearest = Math.round((value - min) / step) * step + min;
	return Number(nearest.toFixed(Math.max(getDecimalPrecision(step), getDecimalPrecision(min))));
}
//#endregion
//#region node_modules/@base-ui/react/slider/utils/getPushedThumbValues.mjs
/**
* Returns a new array of slider values where attempting to move the thumb at `index`
* beyond its neighbours "pushes" them while respecting `minStepsBetweenValues`.
*
* Positional arguments are deliberate: property names of an options object don't
* minify, so passing them positionally keeps this internal helper smaller in the bundle.
*/
function getPushedThumbValues(values, index, nextValue, min, max, step, minStepsBetweenValues, initialValues) {
	const nextValues = values.slice();
	const minValueDifference = step * minStepsBetweenValues;
	const lastIndex = nextValues.length - 1;
	const baseInitialValues = initialValues ?? values;
	nextValues[index] = clamp(nextValue, min + index * minValueDifference, max - (lastIndex - index) * minValueDifference);
	for (let i = index + 1; i <= lastIndex; i += 1) {
		const minAllowed = nextValues[i - 1] + minValueDifference;
		const maxAllowed = max - (lastIndex - i) * minValueDifference;
		const initialValue = baseInitialValues[i];
		let candidate = Math.max(nextValues[i], minAllowed);
		if (initialValue < candidate) candidate = Math.max(initialValue, minAllowed);
		nextValues[i] = clamp(candidate, minAllowed, maxAllowed);
	}
	for (let i = index - 1; i >= 0; i -= 1) {
		const maxAllowed = nextValues[i + 1] - minValueDifference;
		const minAllowed = min + i * minValueDifference;
		const initialValue = baseInitialValues[i];
		let candidate = Math.min(nextValues[i], maxAllowed);
		if (initialValue > candidate) candidate = Math.min(initialValue, maxAllowed);
		nextValues[i] = clamp(candidate, minAllowed, maxAllowed);
	}
	for (let i = 0; i <= lastIndex; i += 1) nextValues[i] = Number(nextValues[i].toFixed(12));
	return nextValues;
}
//#endregion
//#region node_modules/@base-ui/react/slider/utils/resolveThumbCollision.mjs
/**
* Positional arguments are deliberate: property names of an options object don't
* minify, so passing them positionally keeps this internal helper smaller in the bundle.
*/
function resolveThumbCollision(behavior, values, currentValues, initialValues, pressedIndex, nextValue, min, max, step, minStepsBetweenValues) {
	const activeValues = currentValues ?? values;
	const baselineValues = initialValues ?? values;
	if (!(activeValues.length > 1)) return {
		value: nextValue,
		thumbIndex: 0,
		didSwap: false
	};
	const minValueDifference = step * minStepsBetweenValues;
	if (behavior === "push") return {
		value: getPushedThumbValues(activeValues, pressedIndex, nextValue, min, max, step, minStepsBetweenValues),
		thumbIndex: pressedIndex,
		didSwap: false
	};
	const candidateValues = activeValues.slice();
	const previousNeighbor = candidateValues[pressedIndex - 1];
	const nextNeighbor = candidateValues[pressedIndex + 1];
	const lowerBound = previousNeighbor != null ? previousNeighbor + minValueDifference : min;
	const upperBound = nextNeighbor != null ? nextNeighbor - minValueDifference : max;
	const pressedValueAfterClamp = Number(clamp(nextValue, lowerBound, upperBound).toFixed(12));
	candidateValues[pressedIndex] = pressedValueAfterClamp;
	switch (behavior) {
		case "swap": {
			const pressedInitialValue = activeValues[pressedIndex];
			const epsilon = 1e-7;
			const movingForward = nextValue > pressedInitialValue;
			const movingBackward = nextValue < pressedInitialValue;
			const shouldSwapForward = movingForward && nextNeighbor != null && nextValue >= nextNeighbor - epsilon;
			const shouldSwapBackward = movingBackward && previousNeighbor != null && nextValue <= previousNeighbor + epsilon;
			if (!shouldSwapForward && !shouldSwapBackward) return {
				value: candidateValues,
				thumbIndex: pressedIndex,
				didSwap: false
			};
			const targetIndex = shouldSwapForward ? pressedIndex + 1 : pressedIndex - 1;
			const initialValuesForPush = candidateValues.map((_, index) => {
				if (index === pressedIndex) return pressedValueAfterClamp;
				const baseline = baselineValues[index];
				if (baseline != null) return baseline;
				return activeValues[index];
			});
			let nextValueForTarget = nextValue;
			if (shouldSwapForward) nextValueForTarget = Math.max(nextValue, candidateValues[targetIndex]);
			else nextValueForTarget = Math.min(nextValue, candidateValues[targetIndex]);
			const adjustedValues = getPushedThumbValues(candidateValues, targetIndex, nextValueForTarget, min, max, step, minStepsBetweenValues, initialValuesForPush);
			const neighborIndex = shouldSwapForward ? targetIndex - 1 : targetIndex + 1;
			const previousValue = adjustedValues[neighborIndex - 1];
			const nextValueAfter = adjustedValues[neighborIndex + 1];
			let neighborLowerBound = previousValue != null ? previousValue + minValueDifference : min;
			neighborLowerBound = Math.max(neighborLowerBound, min + neighborIndex * minValueDifference);
			let neighborUpperBound = nextValueAfter != null ? nextValueAfter - minValueDifference : max;
			neighborUpperBound = Math.min(neighborUpperBound, max - (adjustedValues.length - 1 - neighborIndex) * minValueDifference);
			const restoredValue = clamp(pressedValueAfterClamp, neighborLowerBound, neighborUpperBound);
			adjustedValues[neighborIndex] = Number(restoredValue.toFixed(12));
			return {
				value: adjustedValues,
				thumbIndex: targetIndex,
				didSwap: true
			};
		}
		default: return {
			value: candidateValues,
			thumbIndex: pressedIndex,
			didSwap: false
		};
	}
}
//#endregion
//#region node_modules/@base-ui/react/slider/control/SliderControl.mjs
var INTENTIONAL_DRAG_COUNT_THRESHOLD = 2;
function getControlOffset(styles, vertical) {
	if (!styles) return {
		start: 0,
		end: 0
	};
	function parseSize(value) {
		const parsed = value != null ? parseFloat(value) : 0;
		return Number.isNaN(parsed) ? 0 : parsed;
	}
	const start = !vertical ? "InlineStart" : "Top";
	const end = !vertical ? "InlineEnd" : "Bottom";
	return {
		start: parseSize(styles[`border${start}Width`]) + parseSize(styles[`padding${start}`]),
		end: parseSize(styles[`border${end}Width`]) + parseSize(styles[`padding${end}`])
	};
}
function getFingerCoords(event, touchIdRef) {
	if (touchIdRef.current != null && event.changedTouches) {
		const touchEvent = event;
		for (let i = 0; i < touchEvent.changedTouches.length; i += 1) {
			const touch = touchEvent.changedTouches[i];
			if (touch.identifier === touchIdRef.current) return {
				x: touch.clientX,
				y: touch.clientY
			};
		}
		return null;
	}
	return {
		x: event.clientX,
		y: event.clientY
	};
}
/**
* The clickable, interactive part of the slider.
* Renders a `<div>` element.
*
* Documentation: [Base UI Slider](https://base-ui.com/react/components/slider)
*/
var SliderControl = /*#__PURE__*/ import_react.forwardRef(function SliderControl(componentProps, forwardedRef) {
	const { render: renderProp, className, style, ...elementProps } = componentProps;
	const { disabled, dragging, inset, lastChangeReasonRef, max, min, minStepsBetweenValues, onValueCommitted, orientation, pressedThumbCenterOffsetRef, pressedThumbIndexRef, pressedValuesRef, registerFieldControlRef, renderBeforeHydration, setActive, setDragging, setValue, state, step, thumbCollisionBehavior, thumbRefs, values } = useSliderRootContext();
	const direction = useDirection();
	const range = values.length > 1;
	const vertical = orientation === "vertical";
	const controlRef = import_react.useRef(null);
	const stylesRef = import_react.useRef(null);
	const setStylesRef = useStableCallback((element) => {
		if (element && stylesRef.current == null) stylesRef.current = getWindow(element).getComputedStyle(element);
	});
	const touchIdRef = import_react.useRef(null);
	const moveCountRef = import_react.useRef(0);
	const insetThumbOffsetRef = import_react.useRef(0);
	const currentInteractionValueRef = import_react.useRef(null);
	const latestValuesRef = useValueAsRef(values);
	function getThumbInput(el) {
		return el?.querySelector("input[type=\"range\"]");
	}
	function updatePressedThumb(nextIndex) {
		pressedThumbIndexRef.current = nextIndex;
		if (!thumbRefs.current[nextIndex]) pressedThumbCenterOffsetRef.current = null;
	}
	function resetPressedThumb() {
		pressedThumbIndexRef.current = -1;
		pressedThumbCenterOffsetRef.current = null;
	}
	function isTargetDisabledThumb(target) {
		if (!isElement(target)) return false;
		return thumbRefs.current.some((thumbEl) => {
			if (!isElement(thumbEl) || !contains(thumbEl, target)) return false;
			return getThumbInput(thumbEl)?.disabled === true;
		});
	}
	function getFingerState(fingerCoords) {
		const control = controlRef.current;
		const thumbIndex = pressedThumbIndexRef.current;
		if (!control || thumbIndex < 0 || thumbIndex >= values.length) {
			if (thumbIndex >= values.length) currentInteractionValueRef.current = null;
			return null;
		}
		const { width, height, bottom, left, right } = control.getBoundingClientRect();
		const controlOffset = getControlOffset(stylesRef.current, vertical);
		const insetThumbOffset = insetThumbOffsetRef.current;
		const controlSize = (vertical ? height : width) - controlOffset.start - controlOffset.end - insetThumbOffset * 2;
		const thumbCenterOffset = pressedThumbCenterOffsetRef.current ?? 0;
		const fingerX = fingerCoords.x - thumbCenterOffset;
		const fingerY = fingerCoords.y - thumbCenterOffset;
		const valueRescaled = clamp(((vertical ? bottom - fingerY - controlOffset.end : (direction === "rtl" ? right - fingerX : fingerX - left) - controlOffset.start) - insetThumbOffset) / controlSize, 0, 1);
		let newValue = (max - min) * valueRescaled + min;
		newValue = roundValueToStep(newValue, step, min);
		newValue = clamp(newValue, min, max);
		if (!range) return {
			value: newValue,
			thumbIndex,
			didSwap: false
		};
		return resolveThumbCollision(thumbCollisionBehavior, values, latestValuesRef.current, pressedValuesRef.current, thumbIndex, newValue, min, max, step, minStepsBetweenValues);
	}
	function startPressing(fingerCoords) {
		pressedValuesRef.current = range ? values.slice() : null;
		currentInteractionValueRef.current = null;
		latestValuesRef.current = values;
		const pressedThumbIndex = pressedThumbIndexRef.current;
		let closestThumbIndex = pressedThumbIndex;
		if (pressedThumbIndex > -1 && pressedThumbIndex < values.length) {
			if (values[pressedThumbIndex] === max) {
				let candidateIndex = pressedThumbIndex;
				while (candidateIndex > 0 && values[candidateIndex - 1] === max) candidateIndex -= 1;
				closestThumbIndex = candidateIndex;
			}
		} else {
			const axis = !vertical ? "x" : "y";
			let minDistance;
			closestThumbIndex = -1;
			for (let i = 0; i < thumbRefs.current.length; i += 1) {
				const thumbEl = thumbRefs.current[i];
				if (isElement(thumbEl) && !getThumbInput(thumbEl)?.disabled) {
					const midpoint = getMidpoint(thumbEl, vertical);
					const distance = Math.abs(fingerCoords[axis] - midpoint);
					if (minDistance === void 0 || distance <= minDistance) {
						closestThumbIndex = i;
						minDistance = distance;
					}
				}
			}
		}
		if (closestThumbIndex > -1 && closestThumbIndex !== pressedThumbIndex) updatePressedThumb(closestThumbIndex);
		if (inset) {
			const thumbEl = thumbRefs.current[closestThumbIndex];
			if (isElement(thumbEl)) {
				const thumbRect = thumbEl.getBoundingClientRect();
				insetThumbOffsetRef.current = thumbRect[!vertical ? "width" : "height"] / 2;
			}
		}
	}
	function focusThumb(thumbIndex) {
		const input = getThumbInput(thumbRefs.current?.[thumbIndex]);
		if (!input) return;
		input.focus({
			preventScroll: true,
			focusVisible: false
		});
	}
	function setValueFromPointer(finger, reason, nativeEvent) {
		const applied = setValue(finger.value, createChangeEventDetails(reason, nativeEvent, void 0, { activeThumbIndex: finger.thumbIndex }));
		if (applied) {
			currentInteractionValueRef.current = finger.value;
			latestValuesRef.current = Array.isArray(finger.value) ? finger.value : [finger.value];
			if (finger.didSwap) {
				updatePressedThumb(finger.thumbIndex);
				focusThumb(finger.thumbIndex);
			}
		}
		return applied;
	}
	const handleTouchMove = useStableCallback((nativeEvent) => {
		const fingerCoords = getFingerCoords(nativeEvent, touchIdRef);
		if (fingerCoords == null) return;
		moveCountRef.current += 1;
		if (nativeEvent.type === "pointermove" && nativeEvent.buttons === 0) {
			handleTouchEnd(nativeEvent);
			return;
		}
		const finger = getFingerState(fingerCoords);
		if (finger == null) return;
		if (validateMinimumDistance(finger.value, step, minStepsBetweenValues)) {
			if (!dragging && moveCountRef.current > INTENTIONAL_DRAG_COUNT_THRESHOLD) setDragging(true);
			setValueFromPointer(finger, drag, nativeEvent);
		}
	});
	const handleTouchEnd = useStableCallback((nativeEvent) => {
		setActive(-1);
		setDragging(false);
		pressedThumbCenterOffsetRef.current = null;
		const interactionValue = currentInteractionValueRef.current;
		if (Array.isArray(interactionValue) && interactionValue.length !== values.length) currentInteractionValueRef.current = null;
		if (currentInteractionValueRef.current != null) {
			const commitReason = lastChangeReasonRef.current;
			onValueCommitted(currentInteractionValueRef.current, createGenericEventDetails(commitReason, nativeEvent));
		}
		if ("pointerType" in nativeEvent && controlRef.current?.hasPointerCapture(nativeEvent.pointerId)) controlRef.current?.releasePointerCapture(nativeEvent.pointerId);
		pressedThumbIndexRef.current = -1;
		touchIdRef.current = null;
		stopListening();
	});
	const handleTouchStart = useStableCallback((nativeEvent) => {
		if (disabled) return;
		if (isTargetDisabledThumb(getTarget(nativeEvent))) {
			resetPressedThumb();
			return;
		}
		const touch = nativeEvent.changedTouches[0];
		if (touch == null) return;
		touchIdRef.current = touch.identifier;
		const fingerCoords = {
			x: touch.clientX,
			y: touch.clientY
		};
		startPressing(fingerCoords);
		const finger = getFingerState(fingerCoords);
		if (finger == null) return;
		focusThumb(finger.thumbIndex);
		setValueFromPointer(finger, trackPress, nativeEvent);
		moveCountRef.current = 0;
		const doc = ownerDocument(controlRef.current);
		doc.addEventListener("touchmove", handleTouchMove, { passive: true });
		doc.addEventListener("touchend", handleTouchEnd, { passive: true });
	});
	const stopListening = useStableCallback(() => {
		const doc = ownerDocument(controlRef.current);
		doc.removeEventListener("pointermove", handleTouchMove);
		doc.removeEventListener("pointerup", handleTouchEnd);
		doc.removeEventListener("touchmove", handleTouchMove);
		doc.removeEventListener("touchend", handleTouchEnd);
		pressedValuesRef.current = null;
		currentInteractionValueRef.current = null;
	});
	const focusFrame = useAnimationFrame();
	import_react.useEffect(() => {
		const control = controlRef.current;
		if (!control) return () => stopListening();
		const unsubscribeTouchStart = addEventListener(control, "touchstart", handleTouchStart, { passive: true });
		return () => {
			unsubscribeTouchStart();
			focusFrame.cancel();
			stopListening();
		};
	}, [
		stopListening,
		handleTouchStart,
		controlRef,
		focusFrame
	]);
	import_react.useEffect(() => {
		if (disabled) stopListening();
	}, [disabled, stopListening]);
	return useRenderElement("div", componentProps, {
		state,
		ref: [
			forwardedRef,
			registerFieldControlRef,
			controlRef,
			setStylesRef
		],
		props: [{
			["data-base-ui-slider-control"]: renderBeforeHydration ? "" : void 0,
			onPointerDown(event) {
				const control = controlRef.current;
				const target = getTarget(event.nativeEvent);
				if (!control || disabled || event.defaultPrevented || !isElement(target) || event.button !== 0) return;
				if (isTargetDisabledThumb(target)) {
					resetPressedThumb();
					return;
				}
				const fingerCoords = {
					x: event.clientX,
					y: event.clientY
				};
				startPressing(fingerCoords);
				const finger = getFingerState(fingerCoords);
				if (finger == null) return;
				if (contains(thumbRefs.current[finger.thumbIndex], activeElement(ownerDocument(control)))) event.preventDefault();
				else focusFrame.request(() => {
					focusThumb(finger.thumbIndex);
				});
				setDragging(true);
				if (!(pressedThumbCenterOffsetRef.current != null)) setValueFromPointer(finger, trackPress, event.nativeEvent);
				if (event.nativeEvent.pointerId) control.setPointerCapture(event.nativeEvent.pointerId);
				moveCountRef.current = 0;
				const doc = ownerDocument(control);
				doc.addEventListener("pointermove", handleTouchMove, { passive: true });
				doc.addEventListener("pointerup", handleTouchEnd, { once: true });
			}
		}, elementProps],
		stateAttributesMapping: sliderStateAttributesMapping
	});
});
SliderControl.displayName = "SliderControl";
//#endregion
//#region node_modules/@base-ui/react/slider/track/SliderTrack.mjs
/**
* Contains the slider indicator and represents the entire range of the slider.
* Renders a `<div>` element.
*
* Documentation: [Base UI Slider](https://base-ui.com/react/components/slider)
*/
var SliderTrack = /*#__PURE__*/ import_react.forwardRef(function SliderTrack(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const { state } = useSliderRootContext();
	return useRenderElement("div", componentProps, {
		state,
		ref: forwardedRef,
		props: [{ style: { position: "relative" } }, elementProps],
		stateAttributesMapping: sliderStateAttributesMapping
	});
});
SliderTrack.displayName = "SliderTrack";
//#endregion
//#region node_modules/@base-ui/react/utils/useIsHydrating.mjs
var import_shim = require_shim();
function subscribe() {
	return NOOP;
}
function getSnapshot() {
	return false;
}
function getServerSnapshot() {
	return true;
}
/**
* Returns `true` while React is hydrating server-rendered markup and `false`
* for fresh client-only mounts.
*/
function useIsHydrating() {
	return (0, import_shim.useSyncExternalStore)(subscribe, getSnapshot, getServerSnapshot);
}
//#endregion
//#region node_modules/@base-ui/react/internals/PrehydrationScript.mjs
/**
* Renders an inline script that runs before React hydrates, used by components that need
* to position server-rendered content ahead of hydration (e.g. `Tabs.Indicator`,
* `Slider.Thumb`).
*
* The `script` source is imported by the caller through the package's `#prehydration/*`
* subpath import, whose `browser` condition resolves to a stub module exporting an empty
* string — so the script body is excluded from client bundles. It only ever executes from
* server-rendered HTML.
*
* Render this only when the script should be emitted (i.e. gate `renderBeforeHydration`
* and any structural conditions at the call site). The element is still rendered (with
* empty content) on the client during the hydration pass so the React tree matches the
* server markup; `suppressHydrationWarning` bridges the content difference and React keeps
* the already-executed server script. Once `isHydrating` flips to `false` the element
* unmounts.
*
* The component must stay in client bundles: returning `null` on the client (e.g. by
* stubbing the whole component) would drop an element the server emitted and trigger a
* recoverable hydration error (React #418) in consumers' apps. Only the script body is
* excluded from client bundles, via the `#prehydration/*` `browser` condition.
*
* When adding a new consumer, register a matching `#prehydration/*` entry (with `browser`
* and `default` conditions) in `packages/react/package.json` `imports`; the `browser`
* condition reuses the shared `internals/prehydrationScript.stub.ts`.
*/
function PrehydrationScript(props) {
	const { script } = props;
	const { nonce } = useCSPContext();
	if (!useIsHydrating()) return null;
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)("script", {
		nonce,
		dangerouslySetInnerHTML: { __html: script },
		suppressHydrationWarning: true
	});
}
//#endregion
//#region node_modules/@base-ui/react/slider/thumb/SliderThumb.mjs
var _PrehydrationScript$1;
var ALL_KEYS = /* @__PURE__ */ new Set([
	...COMPOSITE_KEYS,
	PAGE_UP,
	PAGE_DOWN
]);
function getDefaultAriaValueText(values, index, format, locale) {
	if (index < 0) return;
	if (values.length === 2) return `${formatNumber(values[index], locale, format)} ${index === 0 ? "start" : "end"} range`;
	return format ? formatNumber(values[index], locale, format) : void 0;
}
function getNewValue(thumbValue, increment, direction, min, max) {
	const value = thumbValue + increment * direction;
	return clamp(Number(value.toFixed(Math.max(getDecimalPrecision(thumbValue), getDecimalPrecision(increment), getDecimalPrecision(min)))), min, max);
}
/**
* The draggable part of the slider at the tip of the indicator.
* Renders a `<div>` element and a nested `<input type="range">`.
*
* Documentation: [Base UI Slider](https://base-ui.com/react/components/slider)
*/
var SliderThumb = /*#__PURE__*/ import_react.forwardRef(function SliderThumb(componentProps, forwardedRef) {
	const { render, children: childrenProp, className, "aria-describedby": ariaDescribedByProp, "aria-label": ariaLabelProp, "aria-labelledby": ariaLabelledByProp, "aria-valuetext": ariaValueTextProp, disabled: disabledProp = false, getAriaLabel: getAriaLabelProp, getAriaValueText: getAriaValueTextProp, id: idProp, index: indexProp, inputRef: inputRefProp, onBlur: onBlurProp, onFocus: onFocusProp, onKeyDown: onKeyDownProp, tabIndex: tabIndexProp, style, ...elementProps } = componentProps;
	const id = useBaseUiId(idProp);
	const { active: activeIndex, lastUsedThumbIndex, controlRef, disabled: contextDisabled, validation, format, handleInputChange, inset, labelId, largeStep, locale, max, min, minStepsBetweenValues, form, name, orientation, pressedThumbCenterOffsetRef, pressedThumbIndexRef, renderBeforeHydration, setActive, setIndicatorPosition, state, step, thumbRefs, values: sliderValues } = useSliderRootContext();
	const direction = useDirection();
	const disabled = disabledProp || contextDisabled;
	const range = sliderValues.length > 1;
	const vertical = orientation === "vertical";
	const rtl = direction === "rtl";
	const { setTouched, setFocused, validationMode } = useFieldRootContext();
	const thumbRef = import_react.useRef(null);
	const inputRef = import_react.useRef(null);
	const restoringFocusVisibleRef = import_react.useRef(false);
	const handleFocusProp = useStableCallback((event) => {
		if (restoringFocusVisibleRef.current) return;
		onFocusProp?.(event);
	});
	const handleBlurProp = useStableCallback((event) => {
		if (restoringFocusVisibleRef.current) return;
		onBlurProp?.(event);
	});
	const defaultInputId = useBaseUiId();
	const labelableId = useLabelableId();
	const inputId = range ? defaultInputId : labelableId;
	const { ref: listItemRef, index: compositeIndex } = useCompositeListItem({ metadata: import_react.useMemo(() => ({ inputId }), [inputId]) });
	const index = !range ? 0 : indexProp ?? compositeIndex;
	const last = index === sliderValues.length - 1;
	const thumbValue = sliderValues[index];
	const thumbValuePercent = valueToPercent(thumbValue, min, max);
	const [positionPercent, setPositionPercent] = import_react.useState();
	const isHydrating = useIsHydrating();
	const safeLastUsedThumbIndex = lastUsedThumbIndex >= 0 && lastUsedThumbIndex < sliderValues.length ? lastUsedThumbIndex : -1;
	const getInsetPosition = useStableCallback(() => {
		const control = controlRef.current;
		const thumb = thumbRef.current;
		if (!control || !thumb) return;
		const thumbRect = thumb.getBoundingClientRect();
		const controlRect = control.getBoundingClientRect();
		const side = vertical ? "height" : "width";
		const controlSize = controlRect[side] - thumbRect[side];
		const nextPositionPercent = (thumbRect[side] / 2 + controlSize * thumbValuePercent / 100) / controlRect[side] * 100;
		const nextInsetPosition = Number.isFinite(nextPositionPercent) ? nextPositionPercent : void 0;
		setPositionPercent(nextInsetPosition);
		if (index === 0) setIndicatorPosition((prevPosition) => [nextInsetPosition, prevPosition[1]]);
		else if (last) setIndicatorPosition((prevPosition) => [prevPosition[0], nextInsetPosition]);
	});
	useIsoLayoutEffect(() => {
		if (inset) queueMicrotask(getInsetPosition);
	}, [getInsetPosition, inset]);
	useIsoLayoutEffect(() => {
		if (inset) getInsetPosition();
	}, [
		getInsetPosition,
		inset,
		thumbValuePercent
	]);
	useIsoLayoutEffect(() => {
		if (!inset) return;
		const control = controlRef.current;
		const thumb = thumbRef.current;
		if (!control || !thumb) return;
		const ResizeObserverCtor = getWindow(control).ResizeObserver;
		if (typeof ResizeObserverCtor !== "function") return;
		const resizeObserver = new ResizeObserverCtor(getInsetPosition);
		resizeObserver.observe(control);
		resizeObserver.observe(thumb);
		return () => {
			resizeObserver.disconnect();
		};
	}, [
		controlRef,
		getInsetPosition,
		inset
	]);
	const startEdge = vertical ? "bottom" : "insetInlineStart";
	const crossOffsetProperty = vertical ? "left" : "top";
	let zIndex;
	if (range) {
		if (activeIndex === index) zIndex = 2;
		else if (safeLastUsedThumbIndex === index) zIndex = 1;
	} else if (activeIndex === index) zIndex = 1;
	let thumbStyle;
	if (!inset && !Number.isFinite(thumbValuePercent)) thumbStyle = visuallyHidden;
	else thumbStyle = {
		position: "absolute",
		[startEdge]: inset ? "var(--position)" : `${thumbValuePercent}%`,
		[crossOffsetProperty]: "50%",
		translate: `${(vertical || !rtl ? -1 : 1) * 50}% ${(vertical ? 1 : -1) * 50}%`,
		zIndex,
		...inset && {
			["--position"]: `${positionPercent ?? 0}%`,
			visibility: renderBeforeHydration && isHydrating || positionPercent === void 0 ? "hidden" : void 0
		}
	};
	let cssWritingMode;
	if (vertical) cssWritingMode = rtl ? "vertical-rl" : "vertical-lr";
	const ariaLabel = typeof getAriaLabelProp === "function" ? getAriaLabelProp(index) : ariaLabelProp;
	const inputProps = mergeProps({
		"aria-label": ariaLabel,
		"aria-labelledby": ariaLabelledByProp ?? (ariaLabel == null ? labelId : void 0),
		"aria-describedby": ariaDescribedByProp,
		"aria-orientation": orientation,
		"aria-valuenow": thumbValue,
		"aria-valuetext": typeof getAriaValueTextProp === "function" ? getAriaValueTextProp(formatNumber(thumbValue, locale, format), thumbValue, index) : ariaValueTextProp ?? getDefaultAriaValueText(sliderValues, index, format, locale),
		disabled,
		form,
		id: inputId,
		max,
		min,
		name,
		onChange(event) {
			handleInputChange(event.currentTarget.valueAsNumber, index, event);
		},
		onFocus(event) {
			const isRestoringFocusVisible = restoringFocusVisibleRef.current;
			restoringFocusVisibleRef.current = false;
			setActive(index);
			setFocused(true);
			if (isRestoringFocusVisible) event.stopPropagation();
		},
		onBlur(event) {
			if (restoringFocusVisibleRef.current) {
				event.stopPropagation();
				return;
			}
			setActive(-1);
			if (thumbRefs.current.some((thumb) => contains(thumb, event.relatedTarget))) return;
			setTouched(true);
			setFocused(false);
			if (validationMode === "onBlur") validation.commit(getSliderValue(thumbValue, index, min, max, range, sliderValues));
		},
		onKeyDown(event) {
			if (event.defaultPrevented) return;
			if (!ALL_KEYS.has(event.key)) return;
			if (COMPOSITE_KEYS.has(event.key)) event.stopPropagation();
			let newValue = null;
			let direction = 0;
			let increment = event.shiftKey ? largeStep : step;
			const roundedValue = roundValueToStep(thumbValue, step, min);
			switch (event.key) {
				case ARROW_UP:
					direction = 1;
					break;
				case ARROW_RIGHT:
					direction = rtl ? -1 : 1;
					break;
				case ARROW_DOWN:
					direction = -1;
					break;
				case ARROW_LEFT:
					direction = rtl ? 1 : -1;
					break;
				case PAGE_UP:
					increment = largeStep;
					direction = 1;
					break;
				case PAGE_DOWN:
					increment = largeStep;
					direction = -1;
					break;
				case "End":
					newValue = range && Number.isFinite(sliderValues[index + 1]) ? sliderValues[index + 1] - step * minStepsBetweenValues : max;
					break;
				case HOME:
					newValue = range && Number.isFinite(sliderValues[index - 1]) ? sliderValues[index - 1] + step * minStepsBetweenValues : min;
					break;
				default: break;
			}
			if (direction !== 0) newValue = getNewValue(roundedValue, increment, direction, min, max);
			if (newValue !== null) {
				const input = event.currentTarget;
				if (!matchesFocusVisible(input)) {
					restoringFocusVisibleRef.current = true;
					input.blur();
					input.focus({
						preventScroll: true,
						focusVisible: true
					});
				}
				handleInputChange(newValue, index, event);
				event.preventDefault();
			}
		},
		step,
		style: {
			...visuallyHidden,
			width: "100%",
			height: "100%",
			writingMode: cssWritingMode
		},
		tabIndex: tabIndexProp,
		type: "range",
		value: thumbValue ?? ""
	}, (props) => validation.getValidationProps(disabled, props), {
		onFocus: handleFocusProp,
		onBlur: handleBlurProp,
		onKeyDown: onKeyDownProp
	});
	const mergedInputRef = useMergedRefs(inputRef, validation.inputRef, inputRefProp);
	return useRenderElement("div", componentProps, {
		state,
		ref: [
			forwardedRef,
			listItemRef,
			thumbRef
		],
		props: [{
			["data-index"]: index,
			children: /*#__PURE__*/ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [
				childrenProp,
				/*#__PURE__*/ (0, import_jsx_runtime.jsx)("input", {
					ref: mergedInputRef,
					...inputProps,
					suppressHydrationWarning: true
				}),
				inset && last && renderBeforeHydration && (_PrehydrationScript$1 || (_PrehydrationScript$1 = /*#__PURE__*/ (0, import_jsx_runtime.jsx)(PrehydrationScript, { script: "" })))
			] }),
			id,
			onPointerDown(event) {
				if (disabled) return;
				pressedThumbIndexRef.current = index;
				const midpoint = getMidpoint(event.currentTarget, vertical);
				pressedThumbCenterOffsetRef.current = (vertical ? event.clientY : event.clientX) - midpoint;
			},
			style: thumbStyle,
			suppressHydrationWarning: renderBeforeHydration || void 0
		}, elementProps],
		stateAttributesMapping: sliderStateAttributesMapping
	});
});
SliderThumb.displayName = "SliderThumb";
//#endregion
//#region node_modules/@base-ui/react/slider/indicator/SliderIndicator.mjs
function getIndicatorStyles(vertical, range, inset, start, end, forceHidden) {
	const styles = {
		visibility: forceHidden || inset && (start === void 0 || range && end === void 0) ? "hidden" : void 0,
		position: vertical ? "absolute" : "relative",
		[vertical ? "width" : "height"]: "inherit"
	};
	let startValue = `${start ?? 0}%`;
	let sizeValue = `${(end ?? 0) - (start ?? 0)}%`;
	if (inset) {
		styles["--start-position"] = startValue;
		startValue = "var(--start-position)";
		if (range) {
			styles["--relative-size"] = sizeValue;
			sizeValue = "var(--relative-size)";
		}
	}
	styles[vertical ? "bottom" : "insetInlineStart"] = range ? startValue : 0;
	styles[vertical ? "height" : "width"] = range ? sizeValue : startValue;
	return styles;
}
/**
* Visualizes the current value of the slider.
* Renders a `<div>` element.
*
* Documentation: [Base UI Slider](https://base-ui.com/react/components/slider)
*/
var SliderIndicator = /*#__PURE__*/ import_react.forwardRef(function SliderIndicator(componentProps, forwardedRef) {
	const { render, className, style: styleProp, ...elementProps } = componentProps;
	const { indicatorPosition, inset, max, min, orientation, renderBeforeHydration, state, values } = useSliderRootContext();
	const isHydrating = useIsHydrating();
	const style = getIndicatorStyles(orientation === "vertical", values.length > 1, inset, inset ? indicatorPosition[0] : valueToPercent(values[0], min, max), inset ? indicatorPosition[1] : valueToPercent(values[values.length - 1], min, max), inset && renderBeforeHydration && isHydrating);
	return useRenderElement("div", componentProps, {
		state,
		ref: forwardedRef,
		props: [{
			["data-base-ui-slider-indicator"]: renderBeforeHydration ? "" : void 0,
			style,
			suppressHydrationWarning: renderBeforeHydration || void 0
		}, elementProps],
		stateAttributesMapping: sliderStateAttributesMapping
	});
});
SliderIndicator.displayName = "SliderIndicator";
//#endregion
//#region node_modules/@base-ui/react/slider/index.parts.mjs
var index_parts_exports$23 = /* @__PURE__ */ __exportAll({
	Control: () => SliderControl,
	Indicator: () => SliderIndicator,
	Label: () => SliderLabel,
	Root: () => SliderRoot,
	Thumb: () => SliderThumb,
	Track: () => SliderTrack,
	Value: () => SliderValue
});
//#endregion
//#region node_modules/@base-ui/react/switch/root/SwitchRootContext.mjs
var SwitchRootContext = /*#__PURE__*/ import_react.createContext(void 0);
SwitchRootContext.displayName = "SwitchRootContext";
function useSwitchRootContext() {
	const context = import_react.useContext(SwitchRootContext);
	if (context === void 0) throw new Error("Base UI: SwitchRootContext is missing. Switch parts must be placed within <Switch.Root>.");
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/switch/stateAttributesMapping.mjs
var stateAttributesMapping$2 = {
	...fieldValidityMapping,
	checked(value) {
		if (value) return { "data-checked": "" };
		return { "data-unchecked": "" };
	}
};
//#endregion
//#region node_modules/@base-ui/react/switch/root/SwitchRoot.mjs
/**
* Represents the switch itself.
* Renders a `<span>` element and a hidden `<input>` beside.
*
* Documentation: [Base UI Switch](https://base-ui.com/react/components/switch)
*/
var SwitchRoot = /*#__PURE__*/ import_react.forwardRef(function SwitchRoot(componentProps, forwardedRef) {
	const { checked: checkedProp, className, defaultChecked, "aria-labelledby": ariaLabelledByProp, form, id: idProp, inputRef: externalInputRef, name: nameProp, nativeButton = false, onCheckedChange, readOnly = false, required = false, disabled: disabledProp = false, render, uncheckedValue, value, style, ...elementProps } = componentProps;
	const { clearErrors } = useFormContext();
	const { state: fieldState, setTouched, setDirty, validityData, setFilled, setFocused, validationMode, disabled: fieldDisabled, name: fieldName, validation } = useFieldRootContext();
	const { labelId } = useLabelableContext();
	const disabled = fieldDisabled || disabledProp;
	const name = fieldName ?? nameProp;
	const inputRef = import_react.useRef(null);
	const handleInputRef = useMergedRefs(inputRef, externalInputRef, validation.inputRef);
	const switchRef = import_react.useRef(null);
	const id = useBaseUiId();
	const controlId = useLabelableId({
		id: idProp,
		implicit: false,
		controlRef: switchRef
	});
	const hiddenInputId = nativeButton ? void 0 : controlId;
	const [checked, setCheckedState] = useControlled({
		controlled: checkedProp,
		default: Boolean(defaultChecked),
		name: "Switch",
		state: "checked"
	});
	useRegisterFieldControl(switchRef, id, checked, void 0, !disabled, nameProp);
	useIsoLayoutEffect(() => {
		if (inputRef.current) setFilled(inputRef.current.checked);
	}, [setFilled]);
	useValueChanged(checked, () => {
		clearErrors(name);
		setDirty(checked !== validityData.initialValue);
		setFilled(checked);
		validation.change(checked);
	});
	const { getButtonProps, buttonRef } = useButton({
		disabled,
		native: nativeButton
	});
	const ariaLabelledBy = useAriaLabelledBy(ariaLabelledByProp, labelId, inputRef, !nativeButton, hiddenInputId);
	const rootProps = {
		id: nativeButton ? controlId : id,
		role: "switch",
		"aria-checked": checked,
		"aria-readonly": readOnly || void 0,
		"aria-required": required || void 0,
		"aria-labelledby": ariaLabelledBy,
		onFocus() {
			if (!disabled) setFocused(true);
		},
		onBlur() {
			const element = inputRef.current;
			if (!element || disabled) return;
			setTouched(true);
			setFocused(false);
			if (validationMode === "onBlur") validation.commit(element.checked);
		},
		onClick(event) {
			if (readOnly || disabled) return;
			event.preventDefault();
			const input = inputRef.current;
			if (!input) return;
			dispatchClickWithModifiers(input, event);
		}
	};
	const inputProps = {
		...validation.getValidationProps(disabled),
		checked,
		disabled,
		form,
		id: hiddenInputId,
		name,
		required,
		style: name ? visuallyHiddenInput : visuallyHidden,
		tabIndex: -1,
		type: "checkbox",
		"aria-hidden": true,
		ref: handleInputRef,
		onChange(event) {
			if (event.nativeEvent.defaultPrevented) return;
			if (readOnly) {
				event.preventDefault();
				return;
			}
			const nextChecked = event.currentTarget.checked;
			const eventDetails = createChangeEventDetails(none, event.nativeEvent);
			onCheckedChange?.(nextChecked, eventDetails);
			if (eventDetails.isCanceled) return;
			setCheckedState(nextChecked);
		},
		onClick(event) {
			event.stopPropagation();
		},
		onFocus() {
			switchRef.current?.focus();
		},
		...value !== void 0 ? { value } : EMPTY_OBJECT
	};
	const state = import_react.useMemo(() => ({
		...fieldState,
		checked,
		disabled,
		readOnly,
		required
	}), [
		fieldState,
		checked,
		disabled,
		readOnly,
		required
	]);
	const element = useRenderElement("span", componentProps, {
		state,
		ref: [
			forwardedRef,
			switchRef,
			buttonRef
		],
		props: [
			rootProps,
			elementProps,
			getButtonProps,
			(props) => validation.getValidationProps(disabled, props)
		],
		stateAttributesMapping: stateAttributesMapping$2
	});
	return /*#__PURE__*/ (0, import_jsx_runtime.jsxs)(SwitchRootContext.Provider, {
		value: state,
		children: [
			element,
			!checked && name && uncheckedValue !== void 0 && /*#__PURE__*/ (0, import_jsx_runtime.jsx)("input", {
				type: "hidden",
				form,
				name,
				value: uncheckedValue,
				disabled
			}),
			/*#__PURE__*/ (0, import_jsx_runtime.jsx)("input", {
				...inputProps,
				suppressHydrationWarning: true
			})
		]
	});
});
SwitchRoot.displayName = "SwitchRoot";
//#endregion
//#region node_modules/@base-ui/react/switch/thumb/SwitchThumb.mjs
/**
* The movable part of the switch that indicates whether the switch is on or off.
* Renders a `<span>`.
*
* Documentation: [Base UI Switch](https://base-ui.com/react/components/switch)
*/
var SwitchThumb = /*#__PURE__*/ import_react.forwardRef(function SwitchThumb(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	return useRenderElement("span", componentProps, {
		state: useSwitchRootContext(),
		ref: forwardedRef,
		stateAttributesMapping: stateAttributesMapping$2,
		props: elementProps
	});
});
SwitchThumb.displayName = "SwitchThumb";
//#endregion
//#region node_modules/@base-ui/react/switch/index.parts.mjs
var index_parts_exports$24 = /* @__PURE__ */ __exportAll({
	Root: () => SwitchRoot,
	Thumb: () => SwitchThumb
});
//#endregion
//#region node_modules/@base-ui/react/tabs/root/TabsRootContext.mjs
/**
* @internal
*/
var TabsRootContext = /*#__PURE__*/ import_react.createContext(void 0);
TabsRootContext.displayName = "TabsRootContext";
function useTabsRootContext() {
	const context = import_react.useContext(TabsRootContext);
	if (context === void 0) throw new Error("Base UI: TabsRootContext is missing. Tabs parts must be placed within <Tabs.Root>.");
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/tabs/root/stateAttributesMapping.mjs
var tabsStateAttributesMapping = { tabActivationDirection: (dir) => ({ "data-activation-direction": dir }) };
//#endregion
//#region node_modules/@base-ui/react/tabs/root/TabsRoot.mjs
/**
* Groups the tabs and the corresponding panels.
* Renders a `<div>` element.
*
* Documentation: [Base UI Tabs](https://base-ui.com/react/components/tabs)
*/
var TabsRoot = /*#__PURE__*/ import_react.forwardRef(function TabsRoot(componentProps, forwardedRef) {
	const { className, defaultValue: defaultValueProp = 0, onValueChange: onValueChangeProp, orientation = "horizontal", render, value: valueProp, style, ...elementProps } = componentProps;
	const hasExplicitDefaultValueProp = componentProps.defaultValue !== void 0;
	const tabPanelRefs = import_react.useRef([]);
	const [mountedTabPanels, setMountedTabPanels] = import_react.useState(() => /* @__PURE__ */ new Map());
	const [value, setValue] = useControlled({
		controlled: valueProp,
		default: defaultValueProp,
		name: "Tabs",
		state: "value"
	});
	const isControlled = valueProp !== void 0;
	const [tabMap, setTabMap] = import_react.useState(() => /* @__PURE__ */ new Map());
	const lastKnownTabElementRef = import_react.useRef(void 0);
	const getTabElementBySelectedValue = import_react.useCallback((selectedValue) => findTabElement(tabMap, selectedValue), [tabMap]);
	const [activationDirectionState, setActivationDirectionState] = import_react.useState(() => ({
		previousValue: value,
		tabActivationDirection: "none"
	}));
	const { previousValue, tabActivationDirection: committedTabActivationDirection } = activationDirectionState;
	let tabActivationDirection = committedTabActivationDirection;
	let directionComputationIncomplete = false;
	if (previousValue !== value) {
		tabActivationDirection = computeActivationDirection(previousValue, value, orientation, tabMap);
		directionComputationIncomplete = previousValue != null && value != null && getTabElementBySelectedValue(value) == null;
	}
	const nextPreviousValue = directionComputationIncomplete ? previousValue : value;
	const shouldSyncActivationDirectionState = previousValue !== nextPreviousValue || committedTabActivationDirection !== tabActivationDirection;
	useIsoLayoutEffect(() => {
		if (!shouldSyncActivationDirectionState) return;
		setActivationDirectionState({
			previousValue: nextPreviousValue,
			tabActivationDirection
		});
	}, [
		nextPreviousValue,
		shouldSyncActivationDirectionState,
		tabActivationDirection
	]);
	const onValueChange = useStableCallback((newValue, eventDetails) => {
		eventDetails.activationDirection = computeActivationDirection(value, newValue, orientation, tabMap);
		onValueChangeProp?.(newValue, eventDetails);
		if (eventDetails.isCanceled) return;
		setValue(newValue);
	});
	const notifyAutomaticValueChange = useStableCallback((nextValue, reason) => {
		onValueChangeProp?.(nextValue, createChangeEventDetails(reason, void 0, void 0, { activationDirection: "none" }));
	});
	const registerMountedTabPanel = useStableCallback((panelValue, panelId) => {
		setMountedTabPanels((prev) => {
			const next = new Map(prev);
			next.set(panelValue, panelId);
			return next;
		});
		return () => {
			setMountedTabPanels((prev) => {
				if (prev.get(panelValue) !== panelId) return prev;
				const next = new Map(prev);
				next.delete(panelValue);
				return next;
			});
		};
	});
	const getTabPanelIdByValue = import_react.useCallback((tabValue) => {
		return mountedTabPanels.get(tabValue);
	}, [mountedTabPanels]);
	const getTabIdByPanelValue = import_react.useCallback((tabPanelValue) => {
		for (const tabMetadata of tabMap.values()) if (tabPanelValue === tabMetadata.value) return tabMetadata.id;
	}, [tabMap]);
	const tabsContextValue = import_react.useMemo(() => ({
		getTabElementBySelectedValue,
		getTabIdByPanelValue,
		getTabPanelIdByValue,
		onValueChange,
		orientation,
		registerMountedTabPanel,
		setTabMap,
		tabActivationDirection,
		value
	}), [
		getTabElementBySelectedValue,
		getTabIdByPanelValue,
		getTabPanelIdByValue,
		onValueChange,
		orientation,
		registerMountedTabPanel,
		setTabMap,
		tabActivationDirection,
		value
	]);
	const selectedTabMetadata = import_react.useMemo(() => {
		for (const tabMetadata of tabMap.values()) if (tabMetadata.value === value) return tabMetadata;
	}, [tabMap, value]);
	const firstEnabledTabValue = import_react.useMemo(() => {
		for (const tabMetadata of tabMap.values()) if (!tabMetadata.disabled) return tabMetadata.value;
	}, [tabMap]);
	const shouldNotifyInitialValueChangeRef = import_react.useRef(!hasExplicitDefaultValueProp);
	const initialDefaultValueRef = import_react.useRef(defaultValueProp);
	const shouldHonorDisabledDefaultValueRef = import_react.useRef(hasExplicitDefaultValueProp);
	const didRegisterTabsRef = import_react.useRef(false);
	useIsoLayoutEffect(() => {
		if (isControlled) return;
		function commitAutomaticValueChange(fallbackValue, fallbackReason) {
			setValue(fallbackValue);
			setActivationDirectionState({
				previousValue: fallbackValue,
				tabActivationDirection: "none"
			});
			notifyAutomaticValueChange(fallbackValue, fallbackReason);
			shouldNotifyInitialValueChangeRef.current = false;
		}
		if (tabMap.size === 0) {
			if (didRegisterTabsRef.current && value !== null && !lastKnownTabElementRef.current?.isConnected) commitAutomaticValueChange(null, missing);
			return;
		}
		didRegisterTabsRef.current = true;
		lastKnownTabElementRef.current = tabMap.keys().next().value;
		const selectionIsDisabled = selectedTabMetadata?.disabled;
		const selectionIsMissing = selectedTabMetadata == null && value !== null;
		if (!selectionIsDisabled && value === initialDefaultValueRef.current) shouldHonorDisabledDefaultValueRef.current = false;
		if (shouldHonorDisabledDefaultValueRef.current && selectionIsDisabled && value === initialDefaultValueRef.current) return;
		const shouldNotifyInitialValueChange = shouldNotifyInitialValueChangeRef.current;
		if (selectionIsDisabled || selectionIsMissing) {
			const fallbackValue = firstEnabledTabValue ?? null;
			if (value === fallbackValue) {
				shouldNotifyInitialValueChangeRef.current = false;
				return;
			}
			let fallbackReason = missing;
			if (shouldNotifyInitialValueChange) fallbackReason = initial;
			else if (selectionIsDisabled) fallbackReason = disabled;
			commitAutomaticValueChange(fallbackValue, fallbackReason);
			return;
		}
		if (shouldNotifyInitialValueChange && selectedTabMetadata != null) {
			notifyAutomaticValueChange(value, initial);
			shouldNotifyInitialValueChangeRef.current = false;
		}
	}, [
		firstEnabledTabValue,
		isControlled,
		notifyAutomaticValueChange,
		selectedTabMetadata,
		setValue,
		tabMap,
		value
	]);
	const element = useRenderElement("div", componentProps, {
		state: {
			orientation,
			tabActivationDirection
		},
		ref: forwardedRef,
		props: elementProps,
		stateAttributesMapping: tabsStateAttributesMapping
	});
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(TabsRootContext.Provider, {
		value: tabsContextValue,
		children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(CompositeList, {
			elementsRef: tabPanelRefs,
			children: element
		})
	});
});
TabsRoot.displayName = "TabsRoot";
function findTabElement(tabMap, value) {
	for (const [tabElement, tabMetadata] of tabMap.entries()) if (value === tabMetadata.value) return tabElement;
	return null;
}
function computeActivationDirection(oldValue, newValue, orientation, tabMap) {
	if (oldValue == null || newValue == null) return "none";
	const [positionProp, backward, forward] = orientation === "horizontal" ? [
		"left",
		"left",
		"right"
	] : [
		"top",
		"up",
		"down"
	];
	const oldTab = findTabElement(tabMap, oldValue);
	const newTab = findTabElement(tabMap, newValue);
	if (oldTab == null || newTab == null) {
		if (oldTab !== newTab && (typeof oldValue === "number" || typeof oldValue === "string") && typeof oldValue === typeof newValue) return newValue > oldValue ? forward : backward;
		return "none";
	}
	const oldPosition = oldTab.getBoundingClientRect()[positionProp];
	const newPosition = newTab.getBoundingClientRect()[positionProp];
	if (newPosition < oldPosition) return backward;
	if (newPosition > oldPosition) return forward;
	return "none";
}
//#endregion
//#region node_modules/@base-ui/react/tabs/list/TabsListContext.mjs
var TabsListContext = /*#__PURE__*/ import_react.createContext(void 0);
TabsListContext.displayName = "TabsListContext";
function useTabsListContext() {
	const context = import_react.useContext(TabsListContext);
	if (context === void 0) throw new Error("Base UI: TabsListContext is missing. TabsList parts must be placed within <Tabs.List>.");
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/tabs/tab/TabsTab.mjs
/**
* An individual interactive tab button that toggles the corresponding panel.
* Renders a `<button>` element.
*
* Documentation: [Base UI Tabs](https://base-ui.com/react/components/tabs)
*/
var TabsTab = /*#__PURE__*/ import_react.forwardRef(function TabsTab(componentProps, forwardedRef) {
	const { className, disabled = false, render, value, id: idProp, nativeButton = true, style, ...elementProps } = componentProps;
	const { value: activeTabValue, getTabPanelIdByValue, onValueChange, orientation, tabActivationDirection } = useTabsRootContext();
	const { activateOnFocus, registerTabResizeObserverElement, tabsListElement } = useTabsListContext();
	const { highlightedIndex, onHighlightedIndexChange } = useCompositeRootContext();
	const id = useBaseUiId(idProp);
	const { compositeProps, compositeRef, index } = useCompositeItem({ metadata: import_react.useMemo(() => ({
		disabled,
		id,
		value
	}), [
		disabled,
		id,
		value
	]) });
	const active = value === activeTabValue;
	const isNavigatingRef = import_react.useRef(false);
	const unobserveTabElementRef = import_react.useRef(null);
	const observeTabElement = useStableCallback((element) => {
		unobserveTabElementRef.current?.();
		unobserveTabElementRef.current = element ? registerTabResizeObserverElement(element) : null;
	});
	useIsoLayoutEffect(() => {
		if (isNavigatingRef.current) {
			isNavigatingRef.current = false;
			return;
		}
		if (!(active && index > -1 && highlightedIndex !== index)) return;
		const listElement = tabsListElement;
		if (listElement != null) {
			const activeEl = activeElement(ownerDocument(listElement));
			if (activeEl && contains(listElement, activeEl)) return;
		}
		if (!disabled) onHighlightedIndexChange(index);
	}, [
		active,
		index,
		highlightedIndex,
		onHighlightedIndexChange,
		disabled,
		tabsListElement
	]);
	const { getButtonProps, buttonRef } = useButton({
		disabled,
		native: nativeButton,
		focusableWhenDisabled: true
	});
	const tabPanelId = getTabPanelIdByValue(value);
	const isPressingRef = import_react.useRef(false);
	const isMainButtonRef = import_react.useRef(false);
	function activate(event) {
		onValueChange(value, createChangeEventDetails(none, event.nativeEvent, void 0, { activationDirection: "none" }));
	}
	function onClick(event) {
		if (active || disabled) return;
		activate(event);
	}
	function onFocus(event) {
		if (active || disabled) return;
		if (activateOnFocus && (!isPressingRef.current || isMainButtonRef.current)) activate(event);
	}
	function onPointerDown(event) {
		if (active || disabled) return;
		isPressingRef.current = true;
		isMainButtonRef.current = event.button === 0;
		const doc = ownerDocument(event.currentTarget);
		function handlePointerEnd() {
			isPressingRef.current = false;
			isMainButtonRef.current = false;
			doc.removeEventListener("pointerup", handlePointerEnd);
			doc.removeEventListener("pointercancel", handlePointerEnd);
		}
		doc.addEventListener("pointerup", handlePointerEnd);
		doc.addEventListener("pointercancel", handlePointerEnd);
	}
	return useRenderElement("button", componentProps, {
		state: {
			disabled,
			active,
			orientation,
			tabActivationDirection
		},
		ref: [
			forwardedRef,
			buttonRef,
			compositeRef,
			observeTabElement
		],
		props: [
			compositeProps,
			{
				role: "tab",
				"aria-controls": tabPanelId,
				"aria-selected": active,
				id,
				onClick,
				onFocus,
				onPointerDown,
				[ACTIVE_COMPOSITE_ITEM]: active ? "" : void 0,
				onKeyDownCapture() {
					isNavigatingRef.current = true;
				}
			},
			elementProps,
			getButtonProps
		],
		stateAttributesMapping: tabsStateAttributesMapping
	});
});
TabsTab.displayName = "TabsTab";
//#endregion
//#region node_modules/@base-ui/react/tabs/indicator/TabsIndicator.mjs
var _PrehydrationScript;
var stateAttributesMapping$1 = {
	...tabsStateAttributesMapping,
	activeTabPosition: () => null,
	activeTabSize: () => null
};
/**
* A visual indicator that can be styled to match the position of the currently active tab.
* Renders a `<span>` element.
*
* Documentation: [Base UI Tabs](https://base-ui.com/react/components/tabs)
*/
var TabsIndicator = /*#__PURE__*/ import_react.forwardRef(function TabsIndicator(componentProps, forwardedRef) {
	const { className, render, renderBeforeHydration = false, style: styleProp, ...elementProps } = componentProps;
	const { getTabElementBySelectedValue, orientation, tabActivationDirection, value } = useTabsRootContext();
	const { tabsListElement, registerIndicatorUpdateListener } = useTabsListContext();
	const rerender = useForcedRerendering();
	import_react.useEffect(() => {
		return registerIndicatorUpdateListener(rerender);
	}, [registerIndicatorUpdateListener, rerender]);
	let left = 0;
	let right = 0;
	let top = 0;
	let bottom = 0;
	let width = 0;
	let height = 0;
	let isTabSelected = false;
	if (value != null && tabsListElement != null) {
		const activeTab = getTabElementBySelectedValue(value);
		if (activeTab != null) {
			isTabSelected = true;
			const { width: computedWidth, height: computedHeight } = getCssDimensions(activeTab);
			const { width: tabListWidth, height: tabListHeight } = getCssDimensions(tabsListElement);
			const tabRect = activeTab.getBoundingClientRect();
			const tabsListRect = tabsListElement.getBoundingClientRect();
			const scaleX = tabListWidth > 0 ? tabsListRect.width / tabListWidth : 1;
			const scaleY = tabListHeight > 0 ? tabsListRect.height / tabListHeight : 1;
			if (scaleX > Number.EPSILON && scaleY > Number.EPSILON) {
				const tabLeftDelta = tabRect.left - tabsListRect.left;
				const tabTopDelta = tabRect.top - tabsListRect.top;
				left = tabLeftDelta / scaleX + tabsListElement.scrollLeft - tabsListElement.clientLeft;
				top = tabTopDelta / scaleY + tabsListElement.scrollTop - tabsListElement.clientTop;
			} else {
				left = activeTab.offsetLeft;
				top = activeTab.offsetTop;
			}
			width = computedWidth;
			height = computedHeight;
			right = tabsListElement.scrollWidth - left - width;
			bottom = tabsListElement.scrollHeight - top - height;
		}
	}
	const activeTabPosition = isTabSelected ? {
		left,
		right,
		top,
		bottom
	} : null;
	const activeTabSize = isTabSelected ? {
		width,
		height
	} : null;
	const style = isTabSelected ? {
		"--active-tab-left": `${left}px`,
		"--active-tab-right": `${right}px`,
		"--active-tab-top": `${top}px`,
		"--active-tab-bottom": `${bottom}px`,
		"--active-tab-width": `${width}px`,
		"--active-tab-height": `${height}px`
	} : void 0;
	const element = useRenderElement("span", componentProps, {
		state: {
			orientation,
			activeTabPosition,
			activeTabSize,
			tabActivationDirection
		},
		ref: forwardedRef,
		props: [
			{
				role: "presentation",
				style,
				hidden: !(isTabSelected && width > 0 && height > 0)
			},
			elementProps,
			{ suppressHydrationWarning: true }
		],
		stateAttributesMapping: stateAttributesMapping$1
	});
	if (value == null) return null;
	return /*#__PURE__*/ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [element, renderBeforeHydration && (_PrehydrationScript || (_PrehydrationScript = /*#__PURE__*/ (0, import_jsx_runtime.jsx)(PrehydrationScript, { script: "" })))] });
});
TabsIndicator.displayName = "TabsIndicator";
//#endregion
//#region node_modules/@base-ui/react/tabs/panel/TabsPanel.mjs
var stateAttributesMapping = {
	...tabsStateAttributesMapping,
	...transitionStatusMapping
};
/**
* A panel displayed when the corresponding tab is active.
* Renders a `<div>` element.
*
* Documentation: [Base UI Tabs](https://base-ui.com/react/components/tabs)
*/
var TabsPanel = /*#__PURE__*/ import_react.forwardRef(function TabsPanel(componentProps, forwardedRef) {
	const { className, value, render, keepMounted = false, style, ...elementProps } = componentProps;
	const { value: selectedValue, getTabIdByPanelValue, orientation, tabActivationDirection, registerMountedTabPanel } = useTabsRootContext();
	const id = useBaseUiId();
	const { ref: listItemRef, index } = useCompositeListItem();
	const open = value === selectedValue;
	const { mounted, transitionStatus, setMounted } = useTransitionStatus(open);
	const hidden = !mounted;
	const correspondingTabId = getTabIdByPanelValue(value);
	const state = {
		hidden,
		orientation,
		tabActivationDirection,
		transitionStatus
	};
	const panelRef = import_react.useRef(null);
	const element = useRenderElement("div", componentProps, {
		state,
		ref: [
			forwardedRef,
			listItemRef,
			panelRef
		],
		props: [{
			"aria-labelledby": correspondingTabId,
			hidden,
			id,
			role: "tabpanel",
			tabIndex: open ? 0 : -1,
			inert: inertValue(!open),
			["data-index"]: index
		}, elementProps],
		stateAttributesMapping
	});
	useOpenChangeComplete({
		open,
		ref: panelRef,
		onComplete() {
			if (!open) setMounted(false);
		}
	});
	useIsoLayoutEffect(() => {
		if (id == null || hidden && !keepMounted) return;
		return registerMountedTabPanel(value, id);
	}, [
		hidden,
		keepMounted,
		value,
		id,
		registerMountedTabPanel
	]);
	if (!(keepMounted || mounted)) return null;
	return element;
});
TabsPanel.displayName = "TabsPanel";
//#endregion
//#region node_modules/@base-ui/react/tabs/list/TabsList.mjs
/**
* Groups the individual tab buttons.
* Renders a `<div>` element.
*
* Documentation: [Base UI Tabs](https://base-ui.com/react/components/tabs)
*/
var TabsList = /*#__PURE__*/ import_react.forwardRef(function TabsList(componentProps, forwardedRef) {
	const { activateOnFocus = false, className, loopFocus = true, render, style, ...elementProps } = componentProps;
	const { orientation, setTabMap, tabActivationDirection } = useTabsRootContext();
	const [highlightedTabIndex, setHighlightedTabIndex] = import_react.useState(0);
	const [tabsListElement, setTabsListElement] = import_react.useState(null);
	const indicatorUpdateListenersRef = import_react.useRef(/* @__PURE__ */ new Set());
	const tabResizeObserverElementsRef = import_react.useRef(/* @__PURE__ */ new Set());
	const resizeObserverRef = import_react.useRef(null);
	useIsoLayoutEffect(() => {
		if (typeof ResizeObserver === "undefined") return;
		const resizeObserver = new ResizeObserver(() => {
			indicatorUpdateListenersRef.current.forEach((listener) => {
				listener();
			});
		});
		resizeObserverRef.current = resizeObserver;
		if (tabsListElement) resizeObserver.observe(tabsListElement);
		tabResizeObserverElementsRef.current.forEach((element) => {
			resizeObserver.observe(element);
		});
		return () => {
			resizeObserver.disconnect();
			resizeObserverRef.current = null;
		};
	}, [tabsListElement]);
	const registerIndicatorUpdateListener = useStableCallback((listener) => {
		indicatorUpdateListenersRef.current.add(listener);
		return () => {
			indicatorUpdateListenersRef.current.delete(listener);
		};
	});
	const registerTabResizeObserverElement = useStableCallback((element) => {
		tabResizeObserverElementsRef.current.add(element);
		resizeObserverRef.current?.observe(element);
		return () => {
			tabResizeObserverElementsRef.current.delete(element);
			resizeObserverRef.current?.unobserve(element);
		};
	});
	const state = {
		orientation,
		tabActivationDirection
	};
	const defaultProps = {
		"aria-orientation": orientation === "vertical" ? "vertical" : void 0,
		role: "tablist"
	};
	const tabsListContextValue = import_react.useMemo(() => ({
		activateOnFocus,
		registerIndicatorUpdateListener,
		registerTabResizeObserverElement,
		tabsListElement
	}), [
		activateOnFocus,
		registerIndicatorUpdateListener,
		registerTabResizeObserverElement,
		tabsListElement
	]);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(TabsListContext.Provider, {
		value: tabsListContextValue,
		children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(CompositeRoot, {
			render,
			className,
			style,
			state,
			refs: [forwardedRef, setTabsListElement],
			props: [defaultProps, elementProps],
			stateAttributesMapping: tabsStateAttributesMapping,
			highlightedIndex: highlightedTabIndex,
			enableHomeAndEndKeys: true,
			loopFocus,
			orientation,
			onHighlightedIndexChange: setHighlightedTabIndex,
			onMapChange: setTabMap,
			disabledIndices: EMPTY_ARRAY$1
		})
	});
});
TabsList.displayName = "TabsList";
//#endregion
//#region node_modules/@base-ui/react/tabs/index.parts.mjs
var index_parts_exports$25 = /* @__PURE__ */ __exportAll({
	Indicator: () => TabsIndicator,
	List: () => TabsList,
	Panel: () => TabsPanel,
	Root: () => TabsRoot,
	Tab: () => TabsTab
});
//#endregion
//#region node_modules/@base-ui/react/toggle-group/ToggleGroupContext.mjs
var ToggleGroupContext = /*#__PURE__*/ import_react.createContext(void 0);
ToggleGroupContext.displayName = "ToggleGroupContext";
function useToggleGroupContext() {
	return import_react.useContext(ToggleGroupContext);
}
//#endregion
//#region node_modules/@base-ui/react/toggle/Toggle.mjs
/**
* A two-state button that can be on or off.
* Renders a `<button>` element.
*
* Documentation: [Base UI Toggle](https://base-ui.com/react/components/toggle)
*/
var Toggle = /*#__PURE__*/ import_react.forwardRef(function Toggle(componentProps, forwardedRef) {
	const { className, defaultPressed: defaultPressedProp = false, disabled: disabledProp = false, form, onPressedChange, pressed: pressedProp, render, type, value: valueProp, nativeButton = true, style, ...elementProps } = componentProps;
	const value = useBaseUiId(valueProp || void 0);
	const groupContext = useToggleGroupContext();
	const groupValue = groupContext?.value ?? [];
	const defaultPressed = groupContext ? void 0 : defaultPressedProp;
	const disabled = (disabledProp || groupContext?.disabled) ?? false;
	import_react.useEffect(() => {
		if (groupContext && valueProp === void 0 && groupContext.isValueInitialized) error("A `<Toggle>` component rendered in a `<ToggleGroup>` has no explicit `value` prop.", "This will cause issues between the Toggle Group and Toggle values.", "Provide the `<Toggle>` with a `value` prop matching the `<ToggleGroup>` values prop type.");
	}, [
		groupContext,
		valueProp,
		groupContext?.isValueInitialized
	]);
	const [pressed, setPressedState] = useControlled({
		controlled: groupContext ? value !== void 0 && groupValue.indexOf(value) > -1 : pressedProp,
		default: defaultPressed,
		name: "Toggle",
		state: "pressed"
	});
	const { getButtonProps, buttonRef } = useButton({
		disabled,
		native: nativeButton
	});
	const state = {
		disabled,
		pressed
	};
	const refs = [buttonRef, forwardedRef];
	const props = [
		{
			"aria-pressed": pressed,
			onClick(event) {
				const nextPressed = !pressed;
				const details = createChangeEventDetails(none, event.nativeEvent);
				onPressedChange?.(nextPressed, details);
				if (details.isCanceled) return;
				if (value) groupContext?.setGroupValue?.(value, nextPressed, details);
				if (details.isCanceled) return;
				setPressedState(nextPressed);
			}
		},
		elementProps,
		getButtonProps
	];
	const element = useRenderElement("button", componentProps, {
		enabled: !groupContext,
		state,
		ref: refs,
		props
	});
	const itemMetadata = import_react.useMemo(() => ({
		disabled,
		focusableWhenDisabled: false
	}), [disabled]);
	if (groupContext) return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(CompositeItem, {
		tag: "button",
		render,
		className,
		style,
		metadata: itemMetadata,
		state,
		refs,
		props
	});
	return element;
});
Toggle.displayName = "Toggle";
//#endregion
//#region node_modules/@base-ui/react/toolbar/group/ToolbarGroupContext.mjs
var ToolbarGroupContext = /*#__PURE__*/ import_react.createContext(void 0);
ToolbarGroupContext.displayName = "ToolbarGroupContext";
function useToolbarGroupContext() {
	return import_react.useContext(ToolbarGroupContext);
}
//#endregion
//#region node_modules/@base-ui/react/toggle-group/ToggleGroup.mjs
/**
* Provides a shared state to a series of toggle buttons.
*
* Documentation: [Base UI Toggle Group](https://base-ui.com/react/components/toggle-group)
*/
var ToggleGroup = /*#__PURE__*/ import_react.forwardRef(function ToggleGroup(componentProps, forwardedRef) {
	const { defaultValue: defaultValueProp, disabled: disabledProp = false, loopFocus = true, onValueChange, orientation = "horizontal", multiple = false, value: valueProp, className, render, style, ...elementProps } = componentProps;
	const toolbarContext = useToolbarRootContext(true);
	const toolbarGroupContext = useToolbarGroupContext();
	const isValueInitialized = valueProp !== void 0 || defaultValueProp !== void 0;
	const disabled = (toolbarContext?.disabled ?? false) || (toolbarGroupContext?.disabled ?? false) || disabledProp;
	const [groupValue, setValueState] = useControlled({
		controlled: valueProp,
		default: valueProp === void 0 ? defaultValueProp ?? EMPTY_ARRAY$1 : void 0,
		name: "ToggleGroup",
		state: "value"
	});
	const setGroupValue = useStableCallback((newValue, nextPressed, eventDetails) => {
		let newGroupValue;
		if (multiple) {
			newGroupValue = groupValue.slice();
			if (nextPressed) newGroupValue.push(newValue);
			else newGroupValue.splice(groupValue.indexOf(newValue), 1);
		} else newGroupValue = nextPressed ? [newValue] : [];
		onValueChange?.(newGroupValue, eventDetails);
		if (eventDetails.isCanceled) return;
		setValueState(newGroupValue);
	});
	const state = {
		disabled,
		multiple,
		orientation
	};
	const contextValue = import_react.useMemo(() => ({
		disabled,
		setGroupValue,
		value: groupValue,
		isValueInitialized
	}), [
		disabled,
		setGroupValue,
		groupValue,
		isValueInitialized
	]);
	const defaultProps = { role: "group" };
	const element = useRenderElement("div", componentProps, {
		enabled: Boolean(toolbarContext),
		state,
		ref: forwardedRef,
		props: [defaultProps, elementProps]
	});
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ToggleGroupContext.Provider, {
		value: contextValue,
		children: toolbarContext ? element : /*#__PURE__*/ (0, import_jsx_runtime.jsx)(CompositeRoot, {
			render,
			className,
			style,
			state,
			refs: [forwardedRef],
			props: [defaultProps, elementProps],
			loopFocus,
			enableHomeAndEndKeys: true,
			orientation
		})
	});
});
ToggleGroup.displayName = "ToggleGroup";
//#endregion
//#region node_modules/@base-ui/react/toolbar/separator/ToolbarSeparator.mjs
/**
* A separator element accessible to screen readers.
* Renders a `<div>` element.
*
* Documentation: [Base UI Toolbar](https://base-ui.com/react/components/toolbar)
*/
var ToolbarSeparator = /*#__PURE__*/ import_react.forwardRef(function ToolbarSeparator(props, forwardedRef) {
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(Separator, {
		orientation: useToolbarRootContext().orientation === "vertical" ? "horizontal" : "vertical",
		...props,
		ref: forwardedRef
	});
});
ToolbarSeparator.displayName = "ToolbarSeparator";
//#endregion
//#region node_modules/@base-ui/react/toolbar/root/ToolbarRoot.mjs
/**
* A container for grouping a set of controls, such as buttons, toggle groups, or menus.
* Renders a `<div>` element.
*
* Documentation: [Base UI Toolbar](https://base-ui.com/react/components/toolbar)
*/
var ToolbarRoot = /*#__PURE__*/ import_react.forwardRef(function ToolbarRoot(componentProps, forwardedRef) {
	const { disabled = false, loopFocus, orientation = "horizontal", className, render, style, ...elementProps } = componentProps;
	const [itemMap, setItemMap] = import_react.useState(() => /* @__PURE__ */ new Map());
	const disabledIndices = import_react.useMemo(() => {
		const output = [];
		for (const itemMetadata of itemMap.values()) if (itemMetadata.disabled && !itemMetadata.focusableWhenDisabled) output.push(itemMetadata.index);
		return output;
	}, [itemMap]);
	const toolbarRootContext = import_react.useMemo(() => ({
		disabled,
		orientation
	}), [disabled, orientation]);
	const state = {
		disabled,
		orientation
	};
	const defaultProps = {
		"aria-orientation": orientation,
		role: "toolbar"
	};
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ToolbarRootContext.Provider, {
		value: toolbarRootContext,
		children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(CompositeRoot, {
			render,
			className,
			style,
			state,
			refs: [forwardedRef],
			props: [defaultProps, elementProps],
			disabledIndices,
			loopFocus,
			onMapChange: setItemMap,
			orientation
		})
	});
});
ToolbarRoot.displayName = "ToolbarRoot";
//#endregion
//#region node_modules/@base-ui/react/toolbar/group/ToolbarGroup.mjs
/**
* Groups several toolbar items or toggles.
* Renders a `<div>` element.
*
* Documentation: [Base UI Toolbar](https://base-ui.com/react/components/toolbar)
*/
var ToolbarGroup = /*#__PURE__*/ import_react.forwardRef(function ToolbarGroup(componentProps, forwardedRef) {
	const { className, disabled: disabledProp = false, render, style, ...elementProps } = componentProps;
	const { orientation, disabled: toolbarDisabled } = useToolbarRootContext();
	const disabled = toolbarDisabled || disabledProp;
	const contextValue = import_react.useMemo(() => ({ disabled }), [disabled]);
	const element = useRenderElement("div", componentProps, {
		state: {
			disabled,
			orientation
		},
		ref: forwardedRef,
		props: [{ role: "group" }, elementProps]
	});
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ToolbarGroupContext.Provider, {
		value: contextValue,
		children: element
	});
});
ToolbarGroup.displayName = "ToolbarGroup";
//#endregion
//#region node_modules/@base-ui/react/toolbar/button/ToolbarButton.mjs
/**
* A button that can be used as-is or as a trigger for other components.
* Renders a `<button>` element.
*
* Documentation: [Base UI Toolbar](https://base-ui.com/react/components/toolbar)
*/
var ToolbarButton = /*#__PURE__*/ import_react.forwardRef(function ToolbarButton(componentProps, forwardedRef) {
	const { className, disabled: disabledProp = false, focusableWhenDisabled = true, render, nativeButton, style, ...elementProps } = componentProps;
	const { disabled: toolbarDisabled, orientation } = useToolbarRootContext();
	const groupContext = useToolbarGroupContext();
	const disabled = toolbarDisabled || (groupContext?.disabled ?? false) || disabledProp;
	const itemMetadata = import_react.useMemo(() => ({
		disabled,
		focusableWhenDisabled
	}), [disabled, focusableWhenDisabled]);
	const { getButtonProps, buttonRef } = useButton({
		disabled,
		focusableWhenDisabled,
		native: nativeButton
	});
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(CompositeItem, {
		tag: "button",
		render,
		className,
		style,
		metadata: itemMetadata,
		state: {
			disabled,
			orientation,
			focusable: focusableWhenDisabled
		},
		refs: [forwardedRef, buttonRef],
		props: [
			elementProps,
			render ? { disabled } : EMPTY_OBJECT,
			getButtonProps
		]
	});
});
ToolbarButton.displayName = "ToolbarButton";
//#endregion
//#region node_modules/@base-ui/react/toolbar/link/ToolbarLink.mjs
var TOOLBAR_LINK_METADATA = {
	disabled: false,
	focusableWhenDisabled: true
};
/**
* A link component.
* Renders an `<a>` element.
*
* Documentation: [Base UI Toolbar](https://base-ui.com/react/components/toolbar)
*/
var ToolbarLink = /*#__PURE__*/ import_react.forwardRef(function ToolbarLink(componentProps, forwardedRef) {
	const { className, render, style, ...elementProps } = componentProps;
	const { orientation } = useToolbarRootContext();
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(CompositeItem, {
		tag: "a",
		render,
		className,
		style,
		metadata: TOOLBAR_LINK_METADATA,
		state: { orientation },
		refs: [forwardedRef],
		props: [elementProps]
	});
});
ToolbarLink.displayName = "ToolbarLink";
//#endregion
//#region node_modules/@base-ui/react/toolbar/input/ToolbarInput.mjs
/**
* A native input element that integrates with Toolbar keyboard navigation.
* Renders an `<input>` element.
*
* Documentation: [Base UI Toolbar](https://base-ui.com/react/components/toolbar)
*/
var ToolbarInput = /*#__PURE__*/ import_react.forwardRef(function ToolbarInput(componentProps, forwardedRef) {
	const { className, focusableWhenDisabled = true, render, disabled: disabledProp = false, style, ...elementProps } = componentProps;
	const { disabled: toolbarDisabled, orientation } = useToolbarRootContext();
	const groupContext = useToolbarGroupContext();
	const disabled = toolbarDisabled || (groupContext?.disabled ?? false) || disabledProp;
	const itemMetadata = import_react.useMemo(() => ({
		disabled,
		focusableWhenDisabled
	}), [disabled, focusableWhenDisabled]);
	const { props: focusableWhenDisabledProps } = useFocusableWhenDisabled({
		composite: true,
		disabled,
		focusableWhenDisabled,
		isNativeButton: false
	});
	const state = {
		disabled,
		orientation,
		focusable: focusableWhenDisabled
	};
	const preventWhenDisabled = (event) => {
		if (disabled) event.preventDefault();
	};
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(CompositeItem, {
		tag: "input",
		render,
		className,
		style,
		metadata: itemMetadata,
		state,
		refs: [forwardedRef],
		props: [
			{
				onClick: preventWhenDisabled,
				onPointerDown: preventWhenDisabled
			},
			elementProps,
			focusableWhenDisabledProps
		]
	});
});
ToolbarInput.displayName = "ToolbarInput";
//#endregion
//#region node_modules/@base-ui/react/toolbar/index.parts.mjs
var index_parts_exports$27 = /* @__PURE__ */ __exportAll({
	Button: () => ToolbarButton,
	Group: () => ToolbarGroup,
	Input: () => ToolbarInput,
	Link: () => ToolbarLink,
	Root: () => ToolbarRoot,
	Separator: () => ToolbarSeparator
});
//#endregion
//#region node_modules/@base-ui/react/tooltip/root/TooltipRootContext.mjs
var TooltipRootContext = /*#__PURE__*/ import_react.createContext(void 0);
TooltipRootContext.displayName = "TooltipRootContext";
function useTooltipRootContext(optional) {
	const context = import_react.useContext(TooltipRootContext);
	if (context === void 0 && !optional) throw new Error("Base UI: TooltipRootContext is missing. Tooltip parts must be placed within <Tooltip.Root>.");
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/tooltip/store/TooltipStore.mjs
var selectors = {
	...popupStoreSelectors,
	disabled: (state) => state.disabled,
	instantType: (state) => state.instantType,
	isInstantPhase: (state) => state.isInstantPhase,
	trackCursorAxis: (state) => state.trackCursorAxis,
	disableHoverablePopup: (state) => state.disableHoverablePopup,
	lastOpenChangeReason: (state) => state.openChangeReason,
	closeOnClick: (state) => state.closeOnClick,
	closeDelay: (state) => state.closeDelay,
	adaptiveOrigin: (state) => state.adaptiveOrigin
};
/**
* The store view that detached handle-backed triggers read from. Both the real `TooltipStore` and
* the inert fallback store satisfy it, so a trigger can read from whichever store the handle
* currently exposes. Narrowed to the members a trigger actually uses — the trigger-data members plus
* `setOpen`/`cancelPendingOpen` (called directly by the trigger) and `useSyncedValue` — so the
* exposed surface can't bypass the open-change pipeline; on the detached fallback store every one of
* these mutations is a no-op.
*/
var TooltipStore = class extends ReactStore {
	constructor(initialState, floatingId, nested) {
		const triggerElements = new PopupTriggerMap();
		super(createInitialState(initialState, triggerElements, floatingId, nested), createInitialContext(triggerElements), selectors);
	}
	setOpen = (nextOpen, eventDetails) => {
		applyPopupOpenChange(this, nextOpen, eventDetails, { extraState: { openChangeReason: eventDetails.reason } });
	};
	cancelPendingOpen(event) {
		this.state.floatingRootContext.dispatchOpenChange(false, createChangeEventDetails(triggerPress, event));
	}
};
/**
* Creates the inert fallback store used by detached handle-backed triggers while no `Tooltip.Root`
* is attached. It preserves a tooltip-specific trigger registry in context so detached triggers can
* register before migrating to the live root store. `setOpen`/`cancelPendingOpen` are no-ops
* (matching the inert reads/writes of `NullStore`), so a trigger can call them from hover/click
* handlers while detached without any effect.
*/
function createNullTooltipStore() {
	const triggerElements = new PopupTriggerMap();
	const store = new NullStore(Object.freeze(createInitialState(void 0, triggerElements)), Object.freeze(createInitialContext(triggerElements)), selectors);
	return Object.assign(store, {
		setOpen: NOOP,
		cancelPendingOpen: NOOP
	});
}
function createInitialState(initialState, triggerElements, floatingId, nested = false) {
	const state = {
		...createInitialPopupStoreState(),
		disabled: false,
		instantType: void 0,
		isInstantPhase: false,
		trackCursorAxis: "none",
		disableHoverablePopup: false,
		openChangeReason: null,
		closeOnClick: true,
		closeDelay: 0,
		adaptiveOrigin: void 0,
		...initialState
	};
	state.floatingRootContext = createPopupFloatingRootContext(triggerElements, floatingId, nested);
	return state;
}
function createInitialContext(triggerElements) {
	return {
		popupRef: /*#__PURE__*/ import_react.createRef(),
		onOpenChange: void 0,
		onOpenChangeComplete: void 0,
		triggerElements
	};
}
//#endregion
//#region node_modules/@base-ui/react/tooltip/root/TooltipRoot.mjs
/**
* Groups all parts of the tooltip.
* Doesn't render its own HTML element.
*
* Documentation: [Base UI Tooltip](https://base-ui.com/react/components/tooltip)
*/
var TooltipRoot = fastComponent(function TooltipRoot(props) {
	const { disabled: disabled$1 = false, defaultOpen = false, open: openProp, disableHoverablePopup = false, trackCursorAxis = "none", actionsRef, onOpenChange, onOpenChangeComplete, handle, triggerId: triggerIdProp, defaultTriggerId: defaultTriggerIdProp = null, children } = props;
	const store = usePopupRootStore((floatingId, nested) => new TooltipStore({
		open: defaultOpen,
		openProp,
		activeTriggerId: defaultTriggerIdProp,
		triggerIdProp
	}, floatingId, nested));
	store.useControlledProp("openProp", openProp);
	store.useControlledProp("triggerIdProp", triggerIdProp);
	store.useContextCallback("onOpenChange", onOpenChange);
	store.useContextCallback("onOpenChangeComplete", onOpenChangeComplete);
	const openState = store.useState("open");
	const open = !disabled$1 && openState;
	const activeTriggerId = store.useState("activeTriggerId");
	const mounted = store.useState("mounted");
	const payload = store.useState("payload");
	store.useSyncedValues({
		trackCursorAxis,
		disableHoverablePopup,
		disabled: disabled$1
	});
	useImplicitActiveTrigger(store, { closeOnActiveTriggerUnmount: true });
	const { forceUnmount, transitionStatus } = useOpenStateTransitions(open, store);
	const isInstantPhase = store.useState("isInstantPhase");
	const instantType = store.useState("instantType");
	const lastOpenChangeReason = store.useState("lastOpenChangeReason");
	const previousInstantTypeRef = import_react.useRef(null);
	useIsoLayoutEffect(() => {
		if (openState && disabled$1) store.setOpen(false, createChangeEventDetails(disabled));
	}, [
		openState,
		disabled$1,
		store
	]);
	useIsoLayoutEffect(() => {
		if (transitionStatus === "ending" && lastOpenChangeReason === "none" || transitionStatus !== "ending" && isInstantPhase) {
			if (instantType !== "delay") previousInstantTypeRef.current = instantType;
			store.set("instantType", "delay");
		} else if (previousInstantTypeRef.current !== null) {
			store.set("instantType", previousInstantTypeRef.current);
			previousInstantTypeRef.current = null;
		}
	}, [
		transitionStatus,
		isInstantPhase,
		lastOpenChangeReason,
		instantType,
		store
	]);
	useIsoLayoutEffect(() => {
		if (open) {
			if (activeTriggerId == null) store.set("payload", void 0);
		}
	}, [
		store,
		activeTriggerId,
		open
	]);
	import_react.useImperativeHandle(actionsRef, () => ({
		unmount: forceUnmount,
		close: () => store.setOpen(false, createChangeEventDetails(imperativeAction))
	}), [forceUnmount, store]);
	const shouldRenderInteractions = open || mounted || !disabled$1 && trackCursorAxis !== "none";
	return /*#__PURE__*/ (0, import_jsx_runtime.jsxs)(TooltipRootContext.Provider, {
		value: store,
		children: [
			handle && /*#__PURE__*/ (0, import_jsx_runtime.jsx)(PopupHandleAttachment, {
				handle,
				store
			}),
			shouldRenderInteractions && /*#__PURE__*/ (0, import_jsx_runtime.jsx)(TooltipInteractions, {
				store,
				disabled: disabled$1,
				trackCursorAxis
			}),
			typeof children === "function" ? children({ payload }) : children
		]
	});
});
TooltipRoot.displayName = "TooltipRoot";
function TooltipInteractions({ store, disabled, trackCursorAxis }) {
	const floatingRootContext = store.useState("floatingRootContext");
	const dismiss = useDismiss(floatingRootContext, {
		enabled: !disabled,
		referencePress: () => store.select("closeOnClick")
	});
	const clientPoint = useClientPoint(floatingRootContext, {
		enabled: !disabled && trackCursorAxis !== "none",
		axis: trackCursorAxis === "none" ? void 0 : trackCursorAxis
	});
	const triggerProps = import_react.useMemo(() => mergeProps(clientPoint.reference, dismiss.reference), [clientPoint.reference, dismiss.reference]);
	usePopupInteractionProps(store, {
		activeTriggerProps: triggerProps,
		inactiveTriggerProps: triggerProps,
		popupProps: dismiss.floating ?? EMPTY_OBJECT
	});
	return null;
}
//#endregion
//#region node_modules/@base-ui/react/tooltip/provider/TooltipProviderContext.mjs
/**
* Holds the provider's `delay` value. `closeDelay` is handled by the delay group.
*/
var TooltipProviderContext = /*#__PURE__*/ import_react.createContext(void 0);
TooltipProviderContext.displayName = "TooltipProviderContext";
function useTooltipProviderContext() {
	return import_react.useContext(TooltipProviderContext);
}
//#endregion
//#region node_modules/@base-ui/react/tooltip/trigger/TooltipTrigger.mjs
var TOOLTIP_TRIGGER_IDENTIFIER = "data-base-ui-tooltip-trigger";
function getTargetElement(event) {
	if ("composedPath" in event) {
		const path = event.composedPath();
		for (let i = 0; i < path.length; i += 1) {
			const element = path[i];
			if (isElement(element)) return element;
		}
	}
	const target = event.target;
	if (isElement(target)) return target;
	return null;
}
function closestEnabledTooltipTrigger(element) {
	let current = element;
	while (current) {
		const trigger = current.closest(`[${TOOLTIP_TRIGGER_IDENTIFIER}]`);
		if (trigger) return trigger;
		const root = current.getRootNode();
		current = "host" in root && isElement(root.host) ? root.host : null;
	}
	return null;
}
/**
* An element to attach the tooltip to.
* Renders a `<button>` element.
*
* Documentation: [Base UI Tooltip](https://base-ui.com/react/components/tooltip)
*/
var TooltipTrigger = fastComponentRef(function TooltipTrigger(componentProps, forwardedRef) {
	const { render, className, style, handle, payload, disabled: disabledProp, delay, closeOnClick = true, closeDelay, id: idProp, ...elementProps } = componentProps;
	const rootContext = useTooltipRootContext(true);
	const store = usePopupHandleStore(handle) ?? rootContext;
	if (!store) throw new Error("Base UI: <Tooltip.Trigger> must be either used within a <Tooltip.Root> component or provided with a handle.");
	const thisTriggerId = useBaseUiId(idProp);
	const isTriggerActive = store.useState("isTriggerActive", thisTriggerId);
	const isOpenedByThisTrigger = store.useState("isOpenedByTrigger", thisTriggerId);
	const floatingRootContext = store.useState("floatingRootContext");
	const triggerElementRef = import_react.useRef(null);
	const delayWithDefault = delay ?? 600;
	const closeDelayWithDefault = closeDelay ?? 0;
	const { registerTrigger, isMountedByThisTrigger } = useTriggerDataForwarding(thisTriggerId, triggerElementRef, store, {
		payload,
		closeOnClick,
		closeDelay: closeDelayWithDefault
	});
	const providerDelay = useTooltipProviderContext();
	const { delayRef, isInstantPhase, hasProvider } = useDelayGroup(floatingRootContext, { open: isOpenedByThisTrigger });
	const hoverInteraction = useHoverInteractionSharedState(floatingRootContext);
	store.useSyncedValue("isInstantPhase", isInstantPhase);
	const rootDisabled = store.useState("disabled");
	const disabled = disabledProp ?? rootDisabled;
	const disabledRef = useValueAsRef(disabled);
	const trackCursorAxis = store.useState("trackCursorAxis");
	const disableHoverablePopup = store.useState("disableHoverablePopup");
	const isNestedTriggerHoveredRef = import_react.useRef(false);
	const nestedTriggerOpenTimeout = useTimeout();
	const pointerTypeRef = import_react.useRef(void 0);
	function getOpenDelay() {
		if (!hasProvider) return delayWithDefault;
		return getDelay(delayRef.current, "open") === 0 ? 0 : delay ?? providerDelay ?? 600;
	}
	function isEnabledNestedTriggerTarget(target) {
		const triggerEl = triggerElementRef.current;
		if (!triggerEl || !target) return false;
		const nearestTrigger = closestEnabledTooltipTrigger(target);
		return nearestTrigger !== null && nearestTrigger !== triggerEl && contains(triggerEl, nearestTrigger);
	}
	function detectNestedTriggerHover(target) {
		const nestedTriggerHovered = isEnabledNestedTriggerTarget(target);
		isNestedTriggerHoveredRef.current = nestedTriggerHovered;
		if (nestedTriggerHovered) {
			hoverInteraction.openChangeTimeout.clear();
			hoverInteraction.restTimeout.clear();
			hoverInteraction.restTimeoutPending = false;
			nestedTriggerOpenTimeout.clear();
		}
		return nestedTriggerHovered;
	}
	const hoverProps = useHoverReferenceInteraction(floatingRootContext, {
		enabled: !disabled,
		mouseOnly: true,
		move: false,
		handleClose: !disableHoverablePopup && trackCursorAxis !== "both" ? safePolygon() : null,
		restMs: getOpenDelay,
		delay() {
			if (closeDelay == null && hasProvider) return { close: getDelay(delayRef.current, "close") };
			return { close: closeDelayWithDefault };
		},
		triggerElementRef,
		isActiveTrigger: isTriggerActive,
		isClosing: () => store.select("transitionStatus") === "ending",
		shouldOpen() {
			return !isNestedTriggerHoveredRef.current;
		}
	});
	const focusProps = useFocus(floatingRootContext, { enabled: !disabled }).reference;
	const handleNestedTriggerHover = (event) => {
		const wasNestedTriggerHovered = isNestedTriggerHoveredRef.current;
		const target = getTargetElement(event);
		const nestedTriggerHovered = detectNestedTriggerHover(target);
		const triggerEl = triggerElementRef.current;
		const targetInsideTrigger = triggerEl && target && contains(triggerEl, target);
		if (nestedTriggerHovered && store.select("open") && store.select("lastOpenChangeReason") === "trigger-hover") {
			store.setOpen(false, createChangeEventDetails(triggerHover, event));
			return;
		}
		if (wasNestedTriggerHovered && !nestedTriggerHovered && targetInsideTrigger && !disabledRef.current && !store.select("open") && triggerEl && isMouseLikePointerType(pointerTypeRef.current)) {
			const open = () => {
				if (!isNestedTriggerHoveredRef.current && !disabledRef.current && !store.select("open")) store.setOpen(true, createChangeEventDetails(triggerHover, event, triggerEl));
			};
			const openDelay = getOpenDelay();
			if (openDelay === 0) {
				nestedTriggerOpenTimeout.clear();
				open();
			} else nestedTriggerOpenTimeout.start(openDelay, open);
		}
	};
	const rootTriggerProps = store.useState("triggerProps", isMountedByThisTrigger);
	return useRenderElement("button", componentProps, {
		state: { open: isOpenedByThisTrigger },
		ref: [
			forwardedRef,
			registerTrigger,
			triggerElementRef
		],
		props: [
			hoverProps,
			focusProps,
			isMountedByThisTrigger || trackCursorAxis !== "none" ? rootTriggerProps : void 0,
			{
				onMouseOver(event) {
					handleNestedTriggerHover(event.nativeEvent);
				},
				onFocus(event) {
					if (isEnabledNestedTriggerTarget(getTargetElement(event.nativeEvent))) event.preventBaseUIHandler();
				},
				onMouseLeave() {
					isNestedTriggerHoveredRef.current = false;
					nestedTriggerOpenTimeout.clear();
					pointerTypeRef.current = void 0;
				},
				onPointerEnter(event) {
					pointerTypeRef.current = event.pointerType;
				},
				onPointerDown(event) {
					pointerTypeRef.current = event.pointerType;
					store.set("closeOnClick", closeOnClick);
					if (closeOnClick && !store.select("open")) store.cancelPendingOpen(event.nativeEvent);
				},
				onClick(event) {
					if (closeOnClick && !store.select("open")) store.cancelPendingOpen(event.nativeEvent);
				},
				id: thisTriggerId,
				"data-trigger-disabled": disabled ? "" : void 0,
				[TOOLTIP_TRIGGER_IDENTIFIER]: disabled ? void 0 : ""
			},
			elementProps
		],
		stateAttributesMapping: triggerOpenStateMapping$1
	});
});
TooltipTrigger.displayName = "TooltipTrigger";
//#endregion
//#region node_modules/@base-ui/react/tooltip/portal/TooltipPortalContext.mjs
var TooltipPortalContext = /*#__PURE__*/ import_react.createContext(void 0);
TooltipPortalContext.displayName = "TooltipPortalContext";
function useTooltipPortalContext() {
	const value = import_react.useContext(TooltipPortalContext);
	if (value === void 0) throw new Error("Base UI: <Tooltip.Portal> is missing.");
	return value;
}
//#endregion
//#region node_modules/@base-ui/react/tooltip/portal/TooltipPortal.mjs
/**
* A portal element that moves the popup to a different part of the DOM.
* By default, the portal element is appended to `<body>`.
* Renders a `<div>` element.
*
* Documentation: [Base UI Tooltip](https://base-ui.com/react/components/tooltip)
*/
var TooltipPortal = /*#__PURE__*/ import_react.forwardRef(function TooltipPortal(props, forwardedRef) {
	const { keepMounted = false, ...portalProps } = props;
	if (!(useTooltipRootContext().useState("mounted") || keepMounted)) return null;
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(TooltipPortalContext.Provider, {
		value: keepMounted,
		children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(FloatingPortalLite, {
			ref: forwardedRef,
			...portalProps
		})
	});
});
TooltipPortal.displayName = "TooltipPortal";
//#endregion
//#region node_modules/@base-ui/react/tooltip/positioner/TooltipPositionerContext.mjs
var TooltipPositionerContext = /*#__PURE__*/ import_react.createContext(void 0);
TooltipPositionerContext.displayName = "TooltipPositionerContext";
function useTooltipPositionerContext() {
	const context = import_react.useContext(TooltipPositionerContext);
	if (context === void 0) throw new Error("Base UI: TooltipPositionerContext is missing. TooltipPositioner parts must be placed within <Tooltip.Positioner>.");
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/tooltip/positioner/TooltipPositioner.mjs
/**
* Positions the tooltip against the trigger.
* Renders a `<div>` element.
*
* Documentation: [Base UI Tooltip](https://base-ui.com/react/components/tooltip)
*/
var TooltipPositioner = /*#__PURE__*/ import_react.forwardRef(function TooltipPositioner(componentProps, forwardedRef) {
	const { render, className, anchor, positionMethod = "absolute", side = "top", align = "center", sideOffset = 0, alignOffset = 0, collisionBoundary = "clipping-ancestors", collisionPadding = 5, arrowPadding = 5, sticky = false, disableAnchorTracking = false, collisionAvoidance = POPUP_COLLISION_AVOIDANCE, style, ...elementProps } = componentProps;
	const store = useTooltipRootContext();
	const keepMounted = useTooltipPortalContext();
	const open = store.useState("open");
	const mounted = store.useState("mounted");
	const trackCursorAxis = store.useState("trackCursorAxis");
	const disableHoverablePopup = store.useState("disableHoverablePopup");
	const floatingRootContext = store.useState("floatingRootContext");
	const instantType = store.useState("instantType");
	const transitionStatus = store.useState("transitionStatus");
	const positioning = useAnchorPositioning({
		anchor,
		positionMethod,
		floatingRootContext,
		mounted,
		side,
		sideOffset,
		align,
		alignOffset,
		collisionBoundary,
		collisionPadding,
		sticky,
		arrowPadding,
		disableAnchorTracking,
		keepMounted,
		collisionAvoidance,
		adaptiveOrigin: store.useState("adaptiveOrigin")
	});
	const element = usePositioner(componentProps, import_react.useMemo(() => ({
		open,
		side: positioning.side,
		align: positioning.align,
		anchorHidden: positioning.anchorHidden,
		instant: trackCursorAxis !== "none" ? "tracking-cursor" : instantType
	}), [
		open,
		positioning.side,
		positioning.align,
		positioning.anchorHidden,
		trackCursorAxis,
		instantType
	]), {
		styles: positioning.positionerStyles,
		transitionStatus,
		props: elementProps,
		refs: [forwardedRef, store.useStateSetter("positionerElement")],
		hidden: !mounted,
		inert: !open || trackCursorAxis === "both" || disableHoverablePopup
	});
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(TooltipPositionerContext.Provider, {
		value: positioning,
		children: element
	});
});
TooltipPositioner.displayName = "TooltipPositioner";
//#endregion
//#region node_modules/@base-ui/react/tooltip/popup/TooltipPopup.mjs
/**
* A container for the tooltip contents.
* Renders a `<div>` element.
*
* Documentation: [Base UI Tooltip](https://base-ui.com/react/components/tooltip)
*/
var TooltipPopup = /*#__PURE__*/ import_react.forwardRef(function TooltipPopup(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const store = useTooltipRootContext();
	const { side, align } = useTooltipPositionerContext();
	const open = store.useState("open");
	const instantType = store.useState("instantType");
	const transitionStatus = store.useState("transitionStatus");
	const popupProps = store.useState("popupProps");
	const floatingContext = store.useState("floatingRootContext");
	const disabled = store.useState("disabled");
	const closeDelay = store.useState("closeDelay");
	useOpenChangeComplete({
		open,
		ref: store.context.popupRef,
		onComplete() {
			if (open) store.context.onOpenChangeComplete?.(true);
		}
	});
	useHoverFloatingInteraction(floatingContext, {
		enabled: !disabled,
		closeDelay
	});
	const setPopupElement = store.useStateSetter("popupElement");
	return useRenderElement("div", componentProps, {
		state: {
			open,
			side,
			align,
			instant: instantType,
			transitionStatus
		},
		ref: [
			forwardedRef,
			store.context.popupRef,
			setPopupElement
		],
		props: [
			FOCUSABLE_POPUP_PROPS,
			popupProps,
			getDisabledMountTransitionStyles(transitionStatus),
			elementProps
		],
		stateAttributesMapping: popupTransitionStateMapping
	});
});
TooltipPopup.displayName = "TooltipPopup";
//#endregion
//#region node_modules/@base-ui/react/tooltip/arrow/TooltipArrow.mjs
/**
* Displays an element positioned against the tooltip anchor.
* Renders a `<div>` element.
*
* Documentation: [Base UI Tooltip](https://base-ui.com/react/components/tooltip)
*/
var TooltipArrow = /*#__PURE__*/ import_react.forwardRef(function TooltipArrow(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const store = useTooltipRootContext();
	const { arrowRef, side, align, arrowUncentered, arrowStyles } = useTooltipPositionerContext();
	return useRenderElement("div", componentProps, {
		state: {
			open: store.useState("open"),
			side,
			align,
			uncentered: arrowUncentered,
			instant: store.useState("instantType")
		},
		ref: [forwardedRef, arrowRef],
		props: [{
			style: arrowStyles,
			"aria-hidden": true
		}, elementProps],
		stateAttributesMapping: popupStateMapping
	});
});
TooltipArrow.displayName = "TooltipArrow";
//#endregion
//#region node_modules/@base-ui/react/tooltip/provider/TooltipProvider.mjs
/**
* Provides a shared delay for multiple tooltips. The grouping logic ensures that
* once a tooltip becomes visible, the adjacent tooltips will be shown instantly.
*
* Documentation: [Base UI Tooltip](https://base-ui.com/react/components/tooltip)
*/
var TooltipProvider = function TooltipProvider(props) {
	const { delay, closeDelay, timeout = 400 } = props;
	const delayValue = import_react.useMemo(() => ({
		open: delay,
		close: closeDelay
	}), [delay, closeDelay]);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(TooltipProviderContext.Provider, {
		value: delay,
		children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(FloatingDelayGroup, {
			delay: delayValue,
			timeoutMs: timeout,
			children: props.children
		})
	});
};
TooltipProvider.displayName = "TooltipProvider";
//#endregion
//#region node_modules/@base-ui/react/tooltip/viewport/TooltipViewport.mjs
/**
* A viewport for displaying content transitions.
* This component is only required if one popup can be opened by multiple triggers, its content
* changes based on the trigger, and switching between them is animated.
* Renders a `<div>` element.
*
* Documentation: [Base UI Tooltip](https://base-ui.com/react/components/tooltip)
*/
var TooltipViewport = /*#__PURE__*/ import_react.forwardRef(function TooltipViewport(componentProps, forwardedRef) {
	const { render, className, style, children, ...elementProps } = componentProps;
	const store = useTooltipRootContext();
	const positioner = useTooltipPositionerContext();
	const instantType = store.useState("instantType");
	const { children: childrenToRender, state: viewportState } = usePopupViewport({
		store,
		side: positioner.side,
		children
	});
	return useRenderElement("div", componentProps, {
		state: {
			activationDirection: viewportState.activationDirection,
			transitioning: viewportState.transitioning,
			instant: instantType
		},
		ref: forwardedRef,
		props: [elementProps, { children: childrenToRender }],
		stateAttributesMapping: popupViewportStateMapping
	});
});
TooltipViewport.displayName = "TooltipViewport";
//#endregion
//#region node_modules/@base-ui/react/tooltip/store/TooltipHandle.mjs
/**
* Controls a Tooltip imperatively and associates detached `Tooltip.Trigger` components with a
* `Tooltip.Root`. Create one with `Tooltip.createHandle()` and pass it to the `handle` prop of the
* root and of any triggers rendered outside of it.
*
* The imperative methods take effect only while a root using this handle is mounted; calls made
* before a root attaches (or after it unmounts) are ignored.
*/
var TooltipHandle = class extends BasePopupHandle {
	constructor() {
		super(createNullTooltipStore(), "Tooltip");
	}
	/**
	* Opens the tooltip and associates it with the trigger with the given id.
	*
	* This method should only be called in an event handler or an effect (not during rendering).
	*
	* @param triggerId ID of the trigger to associate with the tooltip. The trigger must be a matching
	* `Tooltip.Trigger` with this handle passed as a prop.
	*/
	open(triggerId) {
		this.openByTrigger(triggerId);
	}
	/**
	* Closes the tooltip.
	*
	* This method should only be called in an event handler or an effect (not during rendering).
	*/
	close() {
		this.closePopup();
	}
	/**
	* Whether the tooltip is currently open. Returns `false` while no root is attached to the handle.
	*/
	get isOpen() {
		return this.attachedStore?.select("open") ?? false;
	}
};
/**
* Creates a new handle to connect a Tooltip.Root with detached Tooltip.Trigger components.
*/
function createTooltipHandle() {
	return new TooltipHandle();
}
//#endregion
//#region node_modules/@base-ui/react/tooltip/index.parts.mjs
var index_parts_exports$28 = /* @__PURE__ */ __exportAll({
	Arrow: () => TooltipArrow,
	Handle: () => TooltipHandle,
	Popup: () => TooltipPopup,
	Portal: () => TooltipPortal,
	Positioner: () => TooltipPositioner,
	Provider: () => TooltipProvider,
	Root: () => TooltipRoot,
	Trigger: () => TooltipTrigger,
	Viewport: () => TooltipViewport,
	createHandle: () => createTooltipHandle
});
//#endregion
//#region node_modules/@base-ui/react/use-render/useRender.mjs
/**
* Renders a Base UI element.
*
* @public
*/
function useRender(params) {
	return useRenderElement(params.defaultTagName ?? "div", params, params);
}
//#endregion
//#region node_modules/@base-ui/react/index.mjs
/**
* @base-ui/react v1.7.0
*
* @license MIT
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
//#endregion
export { index_parts_exports as Accordion, index_parts_exports$1 as AlertDialog, index_parts_exports$2 as Autocomplete, index_parts_exports$3 as Avatar, Button, CSPProvider, index_parts_exports$4 as Checkbox, CheckboxGroup, index_parts_exports$5 as Collapsible, index_parts_exports$6 as Combobox, index_parts_exports$7 as ContextMenu, index_parts_exports$8 as Dialog, DirectionProvider, index_parts_exports$9 as Drawer, index_parts_exports$10 as Field, index_parts_exports$11 as Fieldset, Form, Input, index_parts_exports$12 as Menu, Menubar, index_parts_exports$13 as Meter, index_parts_exports$14 as NavigationMenu, index_parts_exports$15 as NumberField, index_parts_exports$16 as OTPField, index_parts_exports$17 as Popover, index_parts_exports$18 as PreviewCard, index_parts_exports$19 as Progress, index_parts_exports$20 as Radio, RadioGroup, index_parts_exports$21 as ScrollArea, index_parts_exports$22 as Select, Separator, index_parts_exports$23 as Slider, index_parts_exports$24 as Switch, index_parts_exports$25 as Tabs, index_parts_exports$26 as Toast, Toggle, ToggleGroup, index_parts_exports$27 as Toolbar, index_parts_exports$28 as Tooltip, makeEventPreventable, mergeClassNames, mergeProps, mergePropsN, useDirection, useRender };
