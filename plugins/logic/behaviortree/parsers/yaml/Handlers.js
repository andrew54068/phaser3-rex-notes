// Composites
import CreateSelectorNode from './composites/Selector.js';
import CreateSequenceNode from './composites/Sequence.js';
import CreateSwitchSelectorNode from './composites/SwitchSelector.js';
import CreateIfSelectorNode from './composites/IfSelector.js';
import CreateRandomSelectorNode from './composites/RandomSelector.js';
import CreateShuffleNode from './composites/ShuffleSelector.js';
import CreateWeightSelectorNode from './composites/WeightSelector.js';
// Actions
import CreateWaitNode from './actions/Wait.js';
// Decorators
import CreateRepeatNode from './decorators/Repeat.js';
import CreateIfNode from './decorators/If.js';
import CreateCooldownNode from './decorators/Cooldown.js';
import CreateTimeLimitNode from './decorators/TimeLimit.js';
import CreateInvertNode from './decorators/Invert.js';
import CreateForceSuccessNode from './decorators/ForceSuccess.js';

const CreateCompositeHandlers = {
    'selector': CreateSelectorNode,
    'sequence': CreateSequenceNode,
    'switch-selector': CreateSwitchSelectorNode,
    'if-selector': CreateIfSelectorNode,
    'random-selector': CreateRandomSelectorNode,
    'shuffle-selector': CreateShuffleNode,
    'weight-selector': CreateWeightSelectorNode,
}

const CreateActionHandlers = {
    'wait': CreateWaitNode
}

const CreateDecoratorHandles = {
    'repeat': CreateRepeatNode,
    'if': CreateIfNode,
    'cooldown': CreateCooldownNode,
    'time-limit': CreateTimeLimitNode,
    'invert': CreateInvertNode,
    'force-true': CreateForceSuccessNode,
    'force-success': CreateForceSuccessNode
};

export {
    CreateCompositeHandlers,
    CreateActionHandlers,
    CreateDecoratorHandles
}